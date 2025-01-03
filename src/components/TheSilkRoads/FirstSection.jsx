import React from "react";
import img1 from "../../assets/The-Silk-Roads-img/Image-empty-state.avif";
// import img2 from "../../assets/The-Silk-Roads-img/1-1Z420155K1412.png";
import { Link } from "react-router-dom";
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
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full h-[auto] sm:min-h-[100px] container mx-[auto] px-[20px] flex flex-col gap-[40px] items-center justify-center">
        <h1 className="text-[#BA972B] text-[32px] sm:text-[36px] font-bold">
          Silk Road Outposts
        </h1>
        <div>
          <Link to={"/Services/Card/"}>
            <div className="w-full h-[auto] sm:w-[600px] sm:h-[430px] flex flex-col sm:flex-row items-center justify-start relative">
              <img
                data-aos="fade-right"
                className="w-full h-[auto] sm:w-[500px] sm:h-[400px]"
                src={img1}
                alt=""
              />
              <div
                data-aos="fade-left"
                className="w-full sm:w-[350px] h-[300px] bg-[#fff] p-[5px] sm:p-[39px] flex flex-col items-start justify-between text-start sm:absolute right-[0] z-[2]"
              >
                <div className="w-full flex items-start justify-between">
                  <h2 className="text-[22px] font-semibold">Khiva</h2>
                  <h4 className="p-[5px] bottom-[0] right-[0] bg-[#BA972B] text-[14px] font-bold text-[#fff]">
                    from $700
                  </h4>
                </div>
                <p className="text-[11px] text-start font-thin leading-[22px]">
                  Встречаемся и отправляемся в Хиву. После размещения
                  в гостинице (с 14:00) и завтрака вас ждёт экскурсия
                  в сопровождении гида по древнему комплексу Ичан-Кала.
                  Вы исследуете исторический центр за высокими мощными стенами,
                  увидите крепость Куня-Арк и мавзолей Пахлаван-Махмуда,
                  минареты и медресе, башню Калта-Минор и дворец Таш-Ховли.
                </p>
                <button className="w-[116px] bg-[#fff] border border-[#BA972B] hover:border-none hover:bg-[blue] hover:text-[#fff] duration-700 text-[#BA972B] h-[39px] flex justify-center items-center">
                  Explore
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="w-full min-h-[100px] container mx-[auto] px-[20px] flex flex-col gap-[40px] items-center justify-center">
        <Link to={"/Services/Card/"}>
          <div className="w-full h-[auto] sm:w-[360px] sm:h-[450px] bg-[#F4F4F4] font-sans">
            <div className="w-full h-[230px] relative">
              <img className="w-full h-[100%]" src={img2} alt="" />
              <h4 className="absolute p-[5px] bottom-[0] right-[0] bg-[#D35A33CC] text-[14px] font-bold text-[#fff]">
                from $1680
              </h4>
            </div>
            <div className="w-full py-[10px] px-[10px] text-[#555] leading-[25px] flex flex-col items-center justify-center">
              <h4 className="text-[16px] font-bold text-start w-full">
                Silk Road Luxurious Travel-11Days
              </h4>
              <p className="text-[14px] leading-[22px]">
                Kashgar-Urumqi-Turpan-Dunhuang-Jiayuguan-Xi'an <br />
                <br />
                Visit famous sunday bazaar in Kashgar, drive along the Karakom
                highway to Experience the Tajik folklore and Pamir
                landscape.Turpan as ...
              </p>
              <button className="px-[20px] text-[#fff] leading-[34px] text-[16px] rounded-[4px] bg-[#d75e2f] hover:bg-[#d67954] mt-[8px]">
                View Details
              </button>
            </div>
          </div>
        </Link>
      </div> */}
    </section>
  );
}

export default FirstSection;
