import { useState } from "react";

interface SubscribersResponse {
  record: {
    subscribers: Subscriber[];
  };
  metadata: {
    id: string;
    private: boolean;
    createdAt: string;
  };
}

interface Subscriber {
  email: string;
}

export const useGetEmails = () => {
  const [message, setMessage] = useState<string>("");
  console.log(message);

  //TODO: Add to .env
  const headers = {
    "X-Master-Key":
      "$2b$10$52P8ZN8u1ZqxLEVw0qZC/OCQeGGhWh1qgRm3zpfztN6VPGBJV44/2",
    "Content-Type": "application/json",
  };
  const checkSubscribers = async (email: string) => {
    console.log("iskviecia");
    try {
      const response: SubscribersResponse = await fetch(
        "https://api.jsonbin.io/v3/b/647d80459d312622a36aa0b5/",
        { headers }
      ).then((resp) => resp.json());

      const findEmail = Boolean(
        response.record.subscribers.find((item) => item.email === email)
      );

      if (findEmail) {
        setMessage("Email already exist");
      } else {
        postSubscriber(email);
        setMessage("You email successfully submitted");
      }
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  };
  return { checkSubscribers, message, setMessage };
};
