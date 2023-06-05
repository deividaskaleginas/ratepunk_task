import { NavLinksData } from "@/types/dataTypes";
import Link from "next/link";
import React from "react";

import "./navigation.scss";

const NAV_LINKS: NavLinksData[] = [
  { name: "Price Comparison", link: "/" },
  { name: "Blog", link: "/" },
];

interface NavigationProps {
  open: boolean;
  browser: string;
}

export const Navigation: React.FC<NavigationProps> = ({ open, browser }) => {
  return (
    <nav className={open ? "navigation --active" : "navigation"}>
      <Link href={"/"} className="navigation__link">
        {browser} Extension
      </Link>
      {NAV_LINKS.map(({ name, link }, index) => {
        return (
          <Link key={index} href={link} className="navigation__link">
            {name}
          </Link>
        );
      })}
    </nav>
  );
};
