import React from "react";
import img1 from "../../assets/About-section-img/86e751_03ca10e424af4fd1bc6bfb155508ab8c~mv2.avif";

function FirstSection() {
  return (
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full h-[700px] container mx-[auto] px-[20px] flex items-center justify-center relative">
        <img
          className="w-[1030px] h-[600px] absolute z-[1] left-[20px]"
          src={img1}
          alt=""
        />
        <div className="w-[760px] h-[520px] bg-[#fff] absolute bottom-[0] right-[20px] z-[2] flex flex-col gap-[20px] items-center justify-center">
          <h1 className="text-[24px] font-bold mb-[10px]">Step Into Far Lands</h1>
          <p className="text-[14px] leading-[26px] font-extralight">
            whether it be into the highest peaks or on the ancient highways, and{" "}
            <br />
            experience stories of simplicity and kindness that the people who
            live here <br /> breathe life into. Get lost in a remote corner of
            the Tibetan Plateau, an <br /> ancient kingdom in Northern Armenia,
            or the wild edge of Kazakhstan and <br /> China, and find your way
            back home with a newfound treasure. <br />
            <br />​ Into Far Lands aims to magnify the beauty and simplicity of
            planet Earth. <br /> To accomplish this, we hope to share the unique
            regions and roads <br /> discovered through our overland journeys
            and treks. We hope to inspire <br /> future explorers or those who
            are not able to reach the remote places, and <br /> bring awareness
            to the beautiful people who live there.
          </p>
          <p className="text-[16px] font-semibold">
            "It's a dangerous business going out your door. You step onto the{" "}
            <br />
            road, and if you don't keep your feet, there's no knowing where{" "}
            <br /> you might be swept off to." JRR TOLKIEN
          </p>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
