import React from "react";
import img1 from "../../assets/About-section-img/86e751_76c47b4de43342c79efa04244fdd675a~mv2.avif";

function SecondSection() {
  return (
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full h-[auto] lg:h-[700px] container mx-[auto] px-[20px] flex lg:flex-row flex-col-reverse items-center justify-center relative">
        <div className="w-full lg:w-[760px] h-[auto] lg:h-[520px] bg-[#fff] lg:absolute top-[0] lg:left-[20px] z-[2] flex flex-col gap-[20px] items-center justify-center text-center lg:text-start py-[30px]">
          <h1 className="text-[13px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold mb-[10px]">
            We Came as Strangers. We Left As Family.
          </h1>
          <p className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] lg:leading-[26px] font-extralight">
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
          <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold lg:mr-[30px]">
            Being happy and content is possible and may not be far <br /> away. All it
            may entail is stepping out your door to go on <br /> an  <span className="underline">adventure.</span>
          </p>
        </div>
        <img
          className="w-full h-[auto] lg:w-[1030px] lg:h-[600px] lg:absolute z-[1] bottom-[0] lg:right-[20px]"
          src={img1}
          alt=""
        />
      </div>
    </section>
  );
}

export default SecondSection;
