import { Dispatch, SetStateAction, useState } from "react";

interface SubscribersResponse {
  record: Subscriber;
  metadata: {
    id: string;
    private: boolean;
    createdAt: string;
  };
}

interface Subscriber {
  email: string;
}

export enum SubmitStatus {
  SUCCESS = "success",
  ERROR = "error",
  DEFAULT = "default",
  LOADING = "loading",
}

interface UseGetEmails {
  checkSubscribers: (email: string) => Promise<void>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  status: SubmitStatus;
}

export const useGetEmails = (): UseGetEmails => {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<SubmitStatus>(SubmitStatus.DEFAULT);

  //TODO: Add to .env
  const headers = {
    "X-Master-Key":
      "$2b$10$52P8ZN8u1ZqxLEVw0qZC/OCQeGGhWh1qgRm3zpfztN6VPGBJV44/2",
    "Content-Type": "application/json",
  };
  const checkSubscribers = async (email: string) => {
    setStatus(SubmitStatus.LOADING);
    setMessage("");
    try {
      const response: SubscribersResponse = await fetch(
        "https://api.jsonbin.io/v3/b/647d80459d312622a36aa0b5/",
        { headers }
      ).then((resp) => resp.json());

      const findEmail = Boolean(response.record.email === email);

      postSubscriber(email);

      if (findEmail) {
        setMessage("Email already registered");
        setStatus(SubmitStatus.ERROR);
      } else {
        postSubscriber(email);
        setMessage("Your email is confirmed!");
        setStatus(SubmitStatus.SUCCESS);
      }
    } catch (error) {
      setStatus(SubmitStatus.ERROR);
    }
  };

  const postSubscriber = async (email: string) => {
    try {
      await fetch("https://api.jsonbin.io/v3/b/647d80459d312622a36aa0b5/", {
        headers,
        method: "PUT",
        body: JSON.stringify({ email: email }),
      });
    } catch (error) {
      setStatus(SubmitStatus.ERROR);
      setMessage("Something went wrong");
    }
  };

  return { checkSubscribers, message, setMessage, status };
};
