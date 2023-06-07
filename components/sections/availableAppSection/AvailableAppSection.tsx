import React from "react";

import "./availableAppSection.scss";

import chrome from "../../../public/assets/svg/chrome.svg";
import apple from "../../../public/assets/svg/apple.svg";
import { AvailableData } from "@/types/dataTypes";
import Image from "next/image";

const AVAILABLE: AvailableData[] = [
  { icon: chrome, text: "chrome web store", imgAlt: "Google chrome logo" },
  { icon: apple, text: "apple web store", imgAlt: "APP store logo" },
];

export const AvailableAppSection: React.FC = () => {
  return (
    <section className="available">
      <div className="available__container">
        {AVAILABLE.map(({ icon, text, imgAlt }, index) => {
          return (
            <div key={index} className="available__container__app">
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
            </div>
          );
        })}
        <div className="available__container__raeting">
          <span className="available__container__raeting__stars">★★★★★</span>
          <p className="available__container__raeting__text">
            Chrome Store reviews
          </p>
        </div>
      </div>
    </section>
  );
};
