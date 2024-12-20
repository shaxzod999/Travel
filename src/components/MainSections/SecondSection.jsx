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
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full container mx-[auto] flex flex-col items-center justify-center">
        <div className="w-full h-[765px] flex flex-col gap-[50px] items-center justify-center bg-[#EDE6E0]">
          <h2 className="text-center">
            <span className="underline text-[40px] italic font-bold">2</span>{" "}
            <br />{" "}
            <span className="text-[40px] font-bold">Grandeur in Stone</span>
          </h2>
          <div className="relative">
            <img
              className="relative w-[700px] h-[450px] right-[-60px]"
              src={img1}
              alt=""
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            />
            <img
              className="absolute w-[280px] h-[385px] bottom-[-163px] left-[-75px]"
              src={img2}
              alt=""
              data-aos-delay="100"
              data-aos="fade-right"
            />
          </div>
        </div>
        <div className="w-[92.8%] h-[535px] flex items-center justify-between">
          <div className="w-[77%] h-[50%] flex flex-col gap-[40px] items-start justify-start text-[14px]">
            <p className="text-[14px] font-thin leading-5">
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
            <h4 className="w-[55.5%] font-semibold text-center">
              Visit <span className="underline">Petra</span> on the King's
              Highway
            </h4>
          </div>
          <div className="w-[23%] h-[50%] flex flex-col items-start justify-start gap-[8px]">
            <h2 className="text-[50px] font-semibold">Petra</h2>
            <h4 className="text-[25px] font-medium">Jordan</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
