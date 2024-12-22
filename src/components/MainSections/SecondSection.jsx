import img1 from "../../assets/main-section-img/6A74347A-D57C-4861-A7DC-F379BF50A55D.avif";
import img2 from "../../assets/main-section-img/CB297BF8-6011-47B9-8B2E-45772C2E4590.avif";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function SecondSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
    });
  }, []);
  return (
    <section className="w-full h-[auto] text-[#414141] mt-[20px]">
      <div className="w-full container mx-[auto] flex flex-col items-center justify-center">
        <div className="w-full h-[auto] lg:h-[765px] flex flex-col gap-[50px] items-center justify-center bg-[#EDE6E0]">
          <h2 className="text-center">
            <span className="underline text-[40px] italic font-bold">2</span>{" "}
            <br />{" "}
            <span className="text-[40px] font-bold">Grandeur in Stone</span>
          </h2>
          <div className="relative p-[20px]">
            <img
              className="relative w-full lg:w-[700px] h-[auto] lg:h-[450px] lg:right-[-60px]"
              src={img1}
              alt=""
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            />
            <img
              className="absolute max-w-[160px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[280px] h-[auto] lg:h-[385px] top-[50%] lg:bottom-[-163px] left-[0] lg:left-[-75px]"
              src={img2}
              alt=""
              data-aos-delay="100"
              data-aos="fade-right"
            />
          </div>
        </div>
        <div className="w-full lg:w-[92.8%] h-[auto] lg:h-[535px] flex lg:flex-row flex-col-reverse gap-[28px] items-center justify-center lg:justify-between">
          <div className=" w-full lg:w-[77%] h-[auto] lg:h-[50%] flex flex-col gap-[10px] lg;gap-[40px] items-center lg:items-start justify-start text-[14px]">
            <p className="w-full text-center lg:text-start text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-thin lg:leading-5">
              Nestled deep in the sandstone canyons of modern-day Jordan lies
              the majestic ancient city of <br /> Petra, once a thriving
              metropolis along the fabled Silk Road. Though not often recognized
              as such, <br />
              Petra was in fact a vital trading outpost linking China to the
              West. <br />
              <br /> Emerging as the capital of the skilled Nabatean traders in
              the 4th century BC, Petra's ingenious <br /> location granted it
              both security and opportunity. Surrounded by sheer sandstone
              cliffs, the city <br /> was easily defensible, yet also situated
              along the well-traveled King's Highway at the crossroads <br /> of
              Arabia, Asia and Europe. This strategic positioning enabled the
              Nabateans to grow rich by <br /> taxing the precious silk, spices
              and other goods from the Far East as they made their way across{" "}
              <br /> Petra towards Rome and beyond. The Nabateans channeled
              their wealth into carving a stunning <br /> city of temples, tombs
              and monumental buildings into the rose-colored cliffs, rightfully
              earning <br /> Petra the moniker “City of Rock.” The splendor
              developed over centuries of Silk Road trade still <br /> amazes
              visitors exploring the site today.
            </p>
            <h4 className="w-full lg:w-[55.5%] font-semibold text-center">
              Visit <span className="underline">Petra</span> on the King's
              Highway
            </h4>
          </div>
          <div className="w-full lg:w-[23%] h-[auto] lg:h-[50%] flex flex-col items-center sm:items-center md:items-center lg:items-start justify-start gap-[8px] mt-[100px] sm:mt-[50px] lg:mt-[0]">
            <h2 className="text-[32px] lg:text-[50px] font-semibold">Petra</h2>
            <h4 className="text-[20px] lg:text-[25px] font-medium">Jordan</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
