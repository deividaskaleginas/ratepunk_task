import { Form } from "@/components/form/Form";
import React from "react";

import "./featureSection.scss";

export const FeatureSection: React.FC = () => {
  return (
    <section className="featureSection">
      <div className="featureSection__container">
        <div className="featureSection__container__formBlock">
          <Form />
        </div>
      </div>
    </section>
  );
};
