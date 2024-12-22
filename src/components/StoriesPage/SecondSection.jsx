import React from "react";

function SecondSection() {
  return (
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full h-[500px] container mx-[auto] px-[20px] flex items-center justify-start">
        <div className="w-[50%] h-[auto] flex flex-col gap-[30px] justify-center items-start">
          <div className="flex flex-col gap-[10px]">
            Name Surname Surname
            <input className="w-[300px] border" type="text" />
          </div>
          <div className="flex flex-col gap-[10px]">
            How Many People 
            <input className="w-[300px] border" type="text" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection