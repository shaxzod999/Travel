import React from "react";
import img1 from "../../assets/The-Silk-Roads-img/Image-empty-state.avif";
import img2 from "../../assets/The-Silk-Roads-img/1-1Z420155K1412.png";

function FirstSection() {
  return (
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full h-[700px] container mx-[auto] px-[20px] flex flex-col gap-[40px] items-center justify-center">
        <h1 className="text-[#BA972B] text-[36px] font-bold">
          Silk Road Outposts
        </h1>
        <div>
          <div className="w-[600px] h-[430px] flex items-center justify-start relative">
            <img className="w-[500px] h-[400px]" src={img1} alt="" />
            <div className="w-[350px] h-[300px] bg-[#fff] p-[39px] flex flex-col items-start justify-between text-start absolute right-[0] z-[2]">
              <h2 className="text-[22px] font-semibold">Agra</h2>
              <p className="text-[11px] text-start font-thin leading-[22px]">
                The city and capitol of the Mughals, a vast empire <br />{" "}
                stretching across South Asia at the end of the <br /> Middle
                Ages. Architectural masterpieces of Agra <br /> still bring
                travelers from near and far, particularly <br /> the India’s
                most famous building - the Taj Mahal.
              </p>
              <button className="w-[116px] bg-[#fff] border border-[#BA972B] hover:border-none hover:bg-[blue] hover:text-[#fff] duration-700 text-[#BA972B] h-[39px] flex justify-center items-center">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[700px] container mx-[auto] px-[20px] flex flex-col gap-[40px] items-center justify-center">
        <div className="w-[360px] h-[450px] bg-[#F4F4F4] font-sans">
          <div className="w-full h-[230px] relative">
            <img className="w-full h-[100%]" src={img2} alt="" />
            <h4 className="absolute p-[5px] bottom-[0] right-[0] bg-[#D35A33CC] text-[14px] font-bold text-[#fff]">from $1680</h4>
          </div>
          <div className="w-full py-[10px] px-[10px] text-[#555] leading-[25px] flex flex-col items-center justify-center">
            <h4 className="text-[16px] font-bold text-start w-full">Silk Road Luxurious Travel-11Days</h4>
            <p className="text-[14px] leading-[22px]">
              Kashgar-Urumqi-Turpan-Dunhuang-Jiayuguan- <br /> Xi'an <br />
              <br />
              Visit famous sunday bazaar in Kashgar, drive along the Karakom
              highway to Experience the Tajik folklore and Pamir
              landscape.Turpan as ...
            </p>
            <button className="px-[20px] text-[#fff] leading-[34px] text-[16px] rounded-[4px] bg-[#d75e2f] hover:bg-[#d67954] mt-[8px]">View Details</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
