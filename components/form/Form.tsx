"use client";

import React, { useState } from "react";

import "./form.scss";

import emailIcon from "../../public/assets/svg/email.svg";
import succsessIcon from "../../public/assets/svg/success.svg";
import Image from "next/image";
import { SubmitStatus, useGetEmails } from "@/hooks/useGetEmails";
import { useMediaQuery } from "react-responsive";
import { Breakpoints } from "@/styles/utils/breakpoints";

const TITLE = "Refer friends and get rewards";

export const Form: React.FC = () => {
  const isDesktop = useMediaQuery({ query: Breakpoints.desktop });
  const { status, message, setMessage, checkSubscribers } = useGetEmails();
  const isSuccess = status === SubmitStatus.SUCCESS;
  const [email, setEmail] = useState<string>("");
  const refLink = "https://reatepunk/referral";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const buttonText: { [key in SubmitStatus]: string } = {
    [SubmitStatus.LOADING]: "Loading...",
    [SubmitStatus.SUCCESS]: isDesktop ? "Copy" : "Copy URL",
    [SubmitStatus.ERROR]: "Get Referral link",
    [SubmitStatus.DEFAULT]: "Get Referral link",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSuccess) {
      navigator.clipboard.writeText(refLink);
    } else if (email.length > 0) {
      checkSubscribers(email);
      setEmail("");
    } else {
      setMessage("Please, provide correct email.");
    }
  };

  return (
    <div className="formContainer">
      <div className="formContainer__block">
        <div className="formContainer__block__textBlock">
          <h1 className="formContainer__block__textBlock__featureTitle">
            {TITLE.toUpperCase()}
          </h1>
          <p>
            Refer your friends to us and earn hotel booking vounchers.
            We&apos;ll give you 1 coin for each friend that installs our
            extension. Minimum cash-out 20 coins.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="formContainer__block__form">
          <div className="formContainer__block__form__messageBlock">
            {isSuccess && (
              <div className="imgWrapper">
                <Image src={succsessIcon} alt="Succses icon" />
              </div>
            )}
            <p
              className={`formContainer__block__form__messageBlock__message --${status}`}
            >
              {message}
            </p>
          </div>
          <div className={`formContainer__block__form__inputBlock --${status}`}>
            {!isSuccess && (
              <Image
                priority
                src={emailIcon}
                alt="Letter icon"
                className="formContainer__block__form__inputBlock__emailIcon"
              />
            )}
            <input
              id="emailInput"
              name="email"
              type="email"
              placeholder={isSuccess ? refLink : "Enter your email address"}
              className={`formContainer__block__form__inputBlock__input --${status}`}
              value={email}
              disabled={isSuccess}
              onChange={onChange}
            />
            <button
              className={`formContainer__block__form__button --${status}`}
            >
              {buttonText[status]}
            </button>
          </div>
        </form>
      </div>
      <div className="formContainer_infoBlock">
        <p>Limits on max rewards apply.</p>
      </div>
    </div>
  );
};
