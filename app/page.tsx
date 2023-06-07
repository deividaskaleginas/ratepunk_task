"use client";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { AvailableAppSection } from "@/components/sections/availableAppSection/AvailableAppSection";
import { FeatureSection } from "@/components/sections/featureSection/FeatureSection";
import { useEffect, useState } from "react";

export default function Home() {
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
    <>
      <Header browser={browser} />
      <main>
        <FeatureSection />
        <AvailableAppSection />
      </main>
      <Footer browser={browser} />
    </>
  );
}
