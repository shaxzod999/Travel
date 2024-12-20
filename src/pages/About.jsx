import React from "react";
import FirstSection from "../components/About/FirstSection";
import SecondSection from "../components/About/SecondSection";
import PreFooter from "../components/About/PreFooter";

function About() {
  return (
    <div className="mt-[100px]">
      <FirstSection />
      <SecondSection />
      <PreFooter/>
    </div>
  );
}

export default About;
