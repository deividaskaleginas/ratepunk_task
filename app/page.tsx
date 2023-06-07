import { Header } from "@/components/header/Header";
import { AvailableAppSection } from "@/components/sections/availableAppSection/AvailableAppSection";
import { FeatureSection } from "@/components/sections/featureSection/FeatureSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FeatureSection />
        <AvailableAppSection />
      </main>
    </>
  );
}
