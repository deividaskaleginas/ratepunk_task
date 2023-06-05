import React from "react";
import Image from "next/image";

import rpLogo from "../../../public/assets/svg/logo.svg";

export const Logo: React.FC = () => {
  return (
    <div className="imgWrapper">
      <Image src={rpLogo} alt="Ratepunk logo" />
    </div>
  );
};
