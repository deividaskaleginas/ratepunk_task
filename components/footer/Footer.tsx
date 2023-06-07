import React, { useState } from "react";

import "./footer.scss";

import ratepunk from "../../public/assets/svg/logo.svg";
import Image from "next/image";
import { NavLinksData, SocialLinkData } from "@/types/dataTypes";
import Link from "next/link";

import email from "../../public/assets/svg/email-footer.svg";
import instagram from "../../public/assets/svg/instagram.svg";
import facebook from "../../public/assets/svg/facebook.svg";
import linkedin from "../../public/assets/svg/linkedin.svg";
import twitter from "../../public/assets/svg/twitter.svg";
import tiktok from "../../public/assets/svg/tiktok.svg";
import { Contact } from "@/types/contacts";

const SOCIAL_LINKS: SocialLinkData[] = [
  {
    icon: instagram,
    link: "/",
  },
  { icon: facebook, link: "/" },
  { icon: linkedin, link: "/" },
  { icon: twitter, link: "/" },
  { icon: tiktok, link: "/" },
];

interface FooterProps {
  browser: string;
}

export const Footer: React.FC<FooterProps> = ({ browser }) => {
  const LINKS: NavLinksData[] = [
    { name: "Price Comparison", link: "/" },
    { name: `${browser} Extension`, link: "/" },
    { name: "How It Works", link: "/" },
    { name: "Ratepunk Blog", link: "/" },
    { name: "Privacy Policy", link: "/" },
  ];
  const [selectedLink, setSelectedLink] = useState<string>("");

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__ratepunk">
          <div className="imgWrapper">
            <Image src={ratepunk} alt="Ratepunk logo" />
          </div>
          <p>
            Ratepunk compares hotelcroom prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you&apos;re getting the best deal!
          </p>
          <div className="footer__container__ratepunk__allRightsReserved">
            <p>@ 2021 Ratepunk. All Rights Reserved.</p>
          </div>
        </div>
        <div className="footer__container__linksBlock">
          <h3>QUICK LINKS</h3>
          <div className="footer__container__linksBlock__links">
            {LINKS.map(({ name, link }, index) => (
              <Link
                key={index}
                href={link}
                onClick={() => setSelectedLink(name)}
                className={
                  selectedLink === name
                    ? "footer__container__linksBlock__links__link --active"
                    : "footer__container__linksBlock__links__link"
                }
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__container__contactSocial">
          <div className="footer__container__contactSocial__contact">
            <h3>CONTACT</h3>
            <div className="footer__container__contactSocial__contact__email">
              <div className="imgWrapper">
                <Image src={email} alt="envelope" />
              </div>
              <Link href={`mailto: ${Contact.EMAIL}`}>{Contact.EMAIL}</Link>
            </div>
          </div>
          <div className="footer__container__contactSocial__social">
            <h3>SOCIAL</h3>
            <div className="footer__container__contactSocial__social__links">
              {SOCIAL_LINKS.map(({ icon, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  className="footer__container__contactSocial__social__links__link"
                >
                  <div className="imgWrapper">
                    <Image src={icon} alt="icon" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__container__allRightsReserved">
          <p>@ 2021 Ratepunk. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
