import React from "react";

import "./availableAppSection.scss";

import chrome from "../../../public/assets/svg/chrome.svg";
import apple from "../../../public/assets/svg/apple.svg";
import { AvailableData } from "@/types/dataTypes";
import Image from "next/image";
import { StoresLink } from "@/types/contacts";

const AVAILABLE: AvailableData[] = [
  {
    icon: chrome,
    text: "chrome web store",
    imgAlt: "Google chrome logo",
    linkToStore: StoresLink.CHROME_STORE,
  },
  {
    icon: apple,
    text: "apple app store",
    imgAlt: "APP store logo",
    linkToStore: StoresLink.APP_STORE,
  },
];

export const AvailableAppSection: React.FC = () => {
  return (
    <section className="available">
      <div className="available__container">
        {AVAILABLE.map(({ icon, text, imgAlt, linkToStore }, index) => {
          return (
            <a
              key={index}
              className="available__container__app"
              href={linkToStore}
              target="_blank"
            >
              <div className="imgWrapper">
                <Image src={icon} alt={imgAlt} />
              </div>
              <div className="available__container__app__textBlock">
                <p className="available__container__app__textBlock__paragraph">
                  available in the
                </p>
                <span className="available__container__app__textBlock__span">
                  {text}
                </span>
              </div>
            </a>
          );
        })}
        <div className="available__container__rating">
          <span className="available__container__rating__stars">★★★★★</span>
          <p className="available__container__rating__text">
            Chrome Store reviews
          </p>
        </div>
      </div>
    </section>
  );
};
