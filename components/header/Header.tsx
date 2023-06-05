"use client";

import React, { useEffect, useState } from "react";
import { BurgerMenu } from "./burgerMenu/BurgerMenu";

import "./header.scss";
import { Logo } from "./logo/Logo";
import { Navigation } from "./navigation/Navigation";

export const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [browser, setBrowser] = useState<string>("");

  const getBrowserName = (userAgent: string) => {
    if (userAgent.includes("Firefox")) {
      return "Mozilla";
    } else if (userAgent.includes("Chrome")) {
      return "Chrome";
    } else if (userAgent.includes("Safari")) {
      return "Safari";
    } else {
      return "unknow";
    }
  };

  useEffect(() => {
    setBrowser(getBrowserName(navigator.userAgent));
  }, [setBrowser]);
  return (
    <header className="header">
      <div className="header__block">
        <Logo />
        <Navigation open={open} browser={browser} />
        <BurgerMenu open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};
