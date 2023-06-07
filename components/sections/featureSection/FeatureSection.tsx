import { Form } from "@/components/form/Form";
import { Instruction } from "@/components/instruction/Instruction";
import React from "react";

import "./featureSection.scss";

export const FeatureSection: React.FC = () => {
  return (
    <section className="featureSection">
      <div className="featureSection__container">
        <div className="featureSection__container__formBlock">
          <Form />
        </div>
        <div className="featureSection__container__instructionBlock">
          <Instruction />
        </div>
      </div>
    </section>
  );
};
