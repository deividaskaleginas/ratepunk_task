import { NavLinksData } from "@/types/dataTypes";
import Link from "next/link";
import React, { useState } from "react";

import "./navigation.scss";

interface NavigationProps {
  open: boolean;
  browser: string;
}

export const Navigation: React.FC<NavigationProps> = ({ open, browser }) => {
  const NAV_LINKS: NavLinksData[] = [
    { name: `${browser} Extension`, link: "/" },
    { name: "Price Comparison", link: "/" },
    { name: "Blog", link: "/" },
  ];
  const [selectedLink, setSelectedLink] = useState<string>(
    `${browser} Extension`
  );

  return (
    <nav className={open ? "navigation --active" : "navigation"}>
      {NAV_LINKS.map(({ name, link }, index) => (
        <Link
          key={index}
          href={link}
          onClick={() => setSelectedLink(name)}
          className={
            selectedLink === name
              ? "navigation__link --active"
              : "navigation__link"
          }
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};
