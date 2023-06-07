"use client";

import React, { useEffect, useState } from "react";
import { BurgerMenu } from "./burgerMenu/BurgerMenu";

import "./header.scss";
import { Logo } from "./logo/Logo";
import { Navigation } from "./navigation/Navigation";

interface HeaderProps {
  browser: string;
}

export const Header: React.FC<HeaderProps> = ({ browser }) => {
  const [open, setOpen] = useState<boolean>(false);

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
