import React from "react";
import FirstSection from "../components/MainSections/FirstSection";
import SecondSection from "../components/MainSections/SecondSection";
import Hero from "../components/MainSections/Hero";

function Main() {
  return (
    <div className="mt-[100px]">
      <Hero/>
      <FirstSection/>
      <SecondSection/>
    </div>
  );
}

export default Main;
