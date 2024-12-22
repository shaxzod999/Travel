import React from "react";
import FirstSection from "../components/About/FirstSection";
import SecondSection from "../components/About/SecondSection";
import PreFooter from "../components/About/PreFooter";

function About() {
  return (
    <div className="pt-[110px] pb-[20px]">
      <FirstSection />
      <SecondSection />
      <PreFooter />
    </div>
  );
}

export default About;
