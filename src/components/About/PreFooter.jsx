import img1 from "../../assets/About-section-img/86e751_9a8c3150678d4cc7b7ed900ed12c5d66~mv2.avif"
import img2 from "../../assets/About-section-img/86e751_06d92a0eddc1402bb9b137b8940c7ef2~mv2.avif"
import img3 from "../../assets/About-section-img/86e751_bd8add4902ef4ecc87b3cb1b563944c3~mv2.avif"

function PreFooter() {
  return (
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full h-[800px] container mx-[auto] px-[20px] flex flex-col gap-[75px] items-center justify-center relative">
        <div className="w-full flex items-center justify-between">
          <img className="w-[33%] h-[420px]" src={img1} alt="" />
          <img className="w-[33%] h-[420px]" src={img2} alt="" />
          <img className="w-[33%] h-[420px]" src={img3} alt="" />
        </div>
        <h3 className="text-[24px] font-bold">The Far Lands Team</h3>
        <div className="w-full flex items-center justify-around">
          <div className="text-center flex flex-col gap-[35px] items-center justify-center">
            <h3 className="text-[25px]">Kevin</h3>
            <p className="text-[12px]">
              Leader, explorer, Geologist, father, husband, <br /> photographer,
              creative.
            </p>
          </div>
          <div className="text-center flex flex-col gap-[35px] items-center justify-center">
            <h3 className="text-[25px]">Kevin</h3>
            <p className="text-[12px]">
              Leader, explorer, Geologist, father, husband, <br /> photographer,
              creative.
            </p>
          </div>
          <div className="text-center flex flex-col gap-[35px] items-center justify-center">
            <h3 className="text-[25px]">Kevin</h3>
            <p className="text-[12px]">
              Leader, explorer, Geologist, father, husband, <br /> photographer,
              creative.
            </p>
          </div>
          <div className="text-center flex flex-col gap-[35px] items-center justify-center">
            <h3 className="text-[25px]">Kevin</h3>
            <p className="text-[12px]">
              Leader, explorer, Geologist, father, husband, <br /> photographer,
              creative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreFooter;
