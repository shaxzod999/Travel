import React from "react";
import FirstSection from "../components/MainSections/FirstSection";
import SecondSection from "../components/MainSections/SecondSection";
import Hero from "../components/MainSections/Hero";

function Main() {
  return (
    <div className="pt-[110px] pb-[20px]">
      <Hero/>
      <FirstSection/>
      <SecondSection/>
    </div>
  );
}

export default Main;
