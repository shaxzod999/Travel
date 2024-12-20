import React from "react";
import img1 from "../../assets/About-section-img/86e751_76c47b4de43342c79efa04244fdd675a~mv2.avif";

function SecondSection() {
  return (
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full h-[700px] container mx-[auto] px-[20px] flex items-center justify-center relative">
        <div className="w-[760px] h-[520px] bg-[#fff] absolute top-[0] left-[20px] z-[2] flex flex-col gap-[20px] items-center justify-center">
          <h1 className="text-[24px] font-bold mb-[10px]">
            We Came as Strangers. We Left As Family.
          </h1>
          <p className="text-[14px] leading-[26px] font-extralight">
            Throughout the years exploring faraway lands, our most joyous <br />
            experiences on our journeys have come through investment in <br />
            relationships and respect for everyone we meet and interact with.{" "}
            <br />
            Our intent with Into Far Lands is to reflect the universal
            fellowship <br /> and kindness that awaits travelers in new
            destinations from people <br /> who were once strangers. <br />
            <br /> We have found absolute peace in empty grasslands, contentment
            over <br /> tea in a nomad’s yurt, an immense sense of satisfaction
            and <br />
            achievement from days of Himalayan trekking and complete surprise{" "}
            <br />
            when strangers welcomed us into their home and shared all they{" "}
            <br /> had.
          </p>
          <p className="text-[16px] font-semibold mr-[30px]">
            Being happy and content is possible and may not be far <br /> away. All it
            may entail is stepping out your door to go on <br /> an  <span className="underline">adventure.</span>
          </p>
        </div>
        <img
          className="w-[1030px] h-[600px] absolute z-[1] bottom-[0] right-[20px]"
          src={img1}
          alt=""
        />
      </div>
    </section>
  );
}

export default SecondSection;
