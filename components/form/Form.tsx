import React from "react";
import { FormButton } from "../buttons/formButton/FormButton";

import "./form.scss";

import emailIcon from "../../public/assets/svg/email.svg";
import Image from "next/image";

const TITLE = "Refer friends and get rewards";

export const Form: React.FC = () => {
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
        <form className="formContainer__block__form">
          <div className="formContainer__block__form__messageBlock"></div>
          <div className="formContainer__block__form__inputBlock">
            <Image
              priority
              src={emailIcon}
              alt="Letter icon"
              className="formContainer__block__form__inputBlock__emailIcon"
            />
            <input
              id="emailInput"
              // required
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="formContainer__block__form__inputBlock__input"
            />
          </div>
          <FormButton />
        </form>
      </div>
      <div className="formContainer_infoBlock">
        <p>Limits on max rewards apply.</p>
      </div>
    </div>
  );
};
