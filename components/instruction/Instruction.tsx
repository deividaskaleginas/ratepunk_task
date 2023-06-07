import React from "react";

import "./instruction.scss";

import invite from "../../public/assets/svg/invite.svg";
import collect from "../../public/assets/svg/collect-coins.svg";
import voucher from "../../public/assets/svg/voucher.svg";
import { InstructionData } from "@/types/dataTypes";
import { describe } from "node:test";
import Image from "next/image";

const INSTRUCTIONS: InstructionData[] = [
  {
    icon: invite,
    step: "Step 1",
    title: "Invite friends",
    description: "Refer friends with your unique referral link.",
    imgAlt: "envelope icon",
  },
  {
    icon: collect,
    step: "Step 2",
    title: "Collect coins",
    description:
      "Get 1 coin for each friend that installs our extension using your referral link.",
    imgAlt: "hand with Ratepunk icon",
  },
  {
    icon: voucher,
    step: "Step 3",
    title: "Get voucher",
    description:
      "Redeem a $20 hotel booking voucher once you collect 20 coins.",
    imgAlt: "envelope icon",
  },
];

export const Instruction: React.FC = () => {
  return (
    <div className="instructions">
      {INSTRUCTIONS.map(({ icon, step, title, description, imgAlt }, index) => {
        return (
          <div key={index} className="instructions__instruction">
            <div className="imgWrapper">
              <Image src={icon} alt={imgAlt} />
            </div>
            <div className="instructions__instruction__textBlock">
              <div>
                <span className="instructions__instruction__textBlock__step">
                  {step.toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="instructions__instruction__textBlock__title">
                  {title.toUpperCase()}
                </h2>
              </div>
              <div>
                <p className="instructions__instruction__textBlock__description">
                  {description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
