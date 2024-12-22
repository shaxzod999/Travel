import img1 from "../../assets/main-section-img/IMG_6523_JPG.avif";
import img2 from "../../assets/main-section-img/IMG_6529_edited.avif";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FirstSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
    });
  }, []);
  return (
    <section className="w-full h-[auto] text-[#414141] mt-[20px]">
      <div className="w-full container mx-[auto] flex flex-col items-center justify-center">
        <div className="w-full h-[auto] lg:h-[765px] flex flex-col gap-[50px] items-center justify-center bg-[#E4EAEE]">
          <h2 className="text-center">
            <span className="underline text-[40px] italic font-bold">1</span>{" "}
            <br /> <span className="text-[30px]">Symbol of the West</span>
          </h2>
          <div className="relative p-[20px]">
            <img
              className="relative w-full lg:w-[700px] h-[auto] lg:h-[450px] rigth-[40px] lg:right-[60px]"
              src={img1}
              alt=""
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            />
            <img
              className="absolute max-w-[160px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[280px] h-[auto] lg:h-[385px] top-[50%] lg:bottom-[-163px] right-[0] lg:right-[-75px] "
              src={img2}
              alt=""
              data-aos-delay="100"
              data-aos="fade-right"
            />
          </div>
        </div>
        <div className="w-full lg:w-[84%] h-[auto] lg:h-[535px] flex lg:flex-row flex-col items-center justify-start">
          <div className="w-full lg:w-[29.5%] h-[auto] lg:h-[50%] flex flex-col items-center lg:items-start justify-start gap-[10px] lg:gap-[40px] text-center lg:text-start">
            <h2 className="w-full lg:text-start text-center text-[32px] sm:text-[50px] font-semibold mt-[100px] sm:mt-[50px] lg:mt-[0]">
              The Hagia <br /> Sophia
            </h2>
            <h4 className="text-[25px] font-medium">Istanbul, Turkey</h4>
          </div>
          <div className="w-full lg:w-[70.5%] h-[auto] lg:h-[50%] flex flex-col gap-[10px] lg:gap-[40px] items-center lg:items-start justify-start text-[14px] text-center lg:text-start">
            <p className="w-full text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-thin lg:leading-5">
              Rising splendidly from the city of Constantinople, the magnificent
              Hagia Sophia was constructed <br /> in 537 AD as a symbol of the
              Roman Empire's power; wealth, and religion. This architectural{" "}
              <br /> wonder served as the heart of Constantinople, a crucial
              starting point along the legendary Silk <br /> Road routes that
              connected China to the Mediterranean. It’s not far fetched to
              imagine <br /> arriving in Constantinople and gawking in awe at
              the unparalleled beauty of the Hagia Sophia. <br /> <br /> Upon
              entering the soaring golden interior, filled with shimmering
              mosaics and intricate details, <br />
              many contemplated "whether they were in Heaven or on earth," as
              one 10th century quote <br /> describes. As the largest cathedral
              in the eastern Christian world for nearly a millennium, the <br />{" "}
              Hagia Sophia has borne witness to and shaped much of the history
              of the Silk Road and the <br /> intertwined cultures of East and
              West. Its enduring magnificence is a testament to this crossroads{" "}
              <br /> of civilizations, as much as any building in the world can
              lay claim.
            </p>
            <h4 className="w-[70%] font-semibold text-center">
              Step into <span className="underline">Constantinople,</span> home
              of the Hagia Sophia
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
