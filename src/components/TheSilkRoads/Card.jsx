import React from "react";
import img1 from "../../assets/The-Silk-Roads-img/1-1Q20QUJ9E2.jpg";
import img2 from "../../assets/The-Silk-Roads-img/1-1Q220132304U1.jpg";
import img3 from "../../assets/The-Silk-Roads-img/1-1Q220132315503.jpg";
import img4 from "../../assets/The-Silk-Roads-img/1-1Q220132911551.jpg";
import img5 from "../../assets/The-Silk-Roads-img/1-1Q22013292R34.jpg";
import air from "../../assets/The-Silk-Roads-img/air.jpg";
import bus from "../../assets/The-Silk-Roads-img/bus.jpg";
function Card() {
  return (
    <div className="pt-[110px] pb-[20px]">
      <div className="w-full min-h-[700px] container mx-[auto] px-[20px] flex flex-col gap-[40px] items-center justify-center font-sans">
        <div className="w-full h-[65px] bg-[#F7F5F2] border border-[#ddd] flex items-center justify-between p-[10px]">
          <div className="flex flex-col gap-[0] items-start justify-center text-start">
            <h4 className="text-[10px] sm:text-[14px] text-[#555] font-black">
              Pirce From
            </h4>
            <h4 className="text-[14px] sm:text-[24px] text-[#A62F11] font-black">
              $1980
            </h4>
          </div>
          <div className="flex flex-col gap-[0] items-start justify-center text-start">
            <h4 className="text-[10px] sm:text-[14px] text-[#555] font-black">
              Trip Rating
            </h4>
            <div className="sm:mt-[0] mt-[-5px]">
              <i class="fa-solid fa-star text-[10px] sm:text-[15px] text-[#f5a81d]"></i>
              <i class="fa-solid fa-star text-[10px] sm:text-[15px] text-[#f5a81d]"></i>
              <i class="fa-solid fa-star text-[10px] sm:text-[15px] text-[#f5a81d]"></i>
              <i class="fa-solid fa-star text-[10px] sm:text-[15px] text-[#f5a81d]"></i>
              <i class="fa-solid fa-star text-[10px] sm:text-[15px] text-[#f5a81d]"></i>
            </div>
          </div>
          <div className="flex flex-col gap-[0] items-start justify-center text-start">
            <h4 className="text-[10px] sm:text-[14px] text-[#555] font-black">
              Duration
            </h4>
            <h4 className="text-[10px] sm:text-[14px] text-[#555]">11 Day</h4>
          </div>
          <div className="flex flex-col gap-[0] items-start justify-center text-start">
            <h4 className="text-[10px] sm:text-[14px] text-[#555] font-black">
              Tour Code
            </h4>
            <h4 className="text-[10px] sm:text-[14px] text-[#555]">
              CITA-SD-22
            </h4>
          </div>
        </div>
        <p className="text-[14px] text-[#555] leading-[24px]">
          <span className="text-[12px] text-[#A62F11] font-black">
            Summary:
          </span>{" "}
          Silk Road Luxurious Travel is to visit famous Sunday bazaar in
          Kashgar, drive along the Karakom highway to Experience the Tajik
          folklore and Pamir landscape. Turpan as the trade center of the
          ancient silk road, many historical sites preserved well because of the
          dry weather,Jiaohe Ruins,visit the local Uighur family. Highlights of
          Dunhuang is the UNESCO Mogao Caves where you will know about the
          Buddism art.camel riding in the crescent lake and sand dune,
          experience the Chinese traditional culture.We also arrange the Tang
          show and Dumpling banquet for you.Terra-cotta warriors is must see
          when you visit China.
        </p>
        <div className="w-full h-[auto] border-b-2 border-[#A62F11]">
          <img className="w-full h-[auto]" src={img1} alt="" />
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[14px]">
          <h4>Day 1</h4>
          <h4 className="flex gap-[5px]">
            Kashgar{" "}
            <img
              className="w-[36px] h-[19px] items-center justify-center"
              src={air}
              alt=""
            />
          </h4>
        </div>
        <div className="text-[#545454] text-[14px] leading-[25px] mb-[30px]">
          <p>
            Our guide and driver will meet you at the airport or train station.
            Welcome to Kashgar, the first city on our Silk Road trip, it is also
            the westernmost city in China. Be transferred to the hotel and the
            rest of the day is for you to relax and prepare for our Natural
            wonder and Culture Adventure.
          </p>
          <p>
            <span className="font-bold">Accommodation:</span> In Kashgar Qiniwak
            Hotel
          </p>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[14px]">
          <h4>Day 2</h4>
          <h4 className="flex gap-[5px]">
            Kashgar
            <img
              className="w-[36px] h-[19px] items-center justify-center"
              src={bus}
              alt=""
            />
            Karakul Lake
          </h4>
        </div>
        <div className="text-[#545454] text-[14px] leading-[25px] mb-[30px]">
          <p>
            In the morning, enjoy your nice buffet breakfast. At 09:00 your
            guide and driver will meet you at hotel lobby to start the
            adventure. Driving on the China and Pakistan highway about 4hrs to
            enjoy the{" "}
            <span className="font-bold underline">
              landscape of Pamirs Plateau
            </span>
            .40mins driving. we stop in the Opal village to visit the
            traditional bustling bazaar. The following day will be spent
            exploring the stunning landscape surrounding the
            <span className="font-bold underline">Karakul Lake,</span> where the
            herds of livestock around the lakeside are reflected in lake and is
            extraordinarily graceful,where Kirghiz herdsmen usually settle down
            and graze their herds. You will have ample opportunity for leisure
            walking and enjoy the Magnificant Muztagh Peak. It is highly
            recommended to visit the local Kirgiz family in their yurt. We take
            the Karakom highway back to Kashgar in the late afternoon.
          </p>
          <p className="mt-[10px]">
            Night market suggested today for the food and experience the real
            life of the locals.
          </p>
          <p>
            <span className="font-bold">Accommodation:</span> In Kashgar
          </p>
          <div className="w-full flex gap-[20px] items-center justify-center">
            <div className="w-[50%] flex flex-col items-center justify-center">
              <img className="w-full h-[auto]" src={img2} alt="" />
              <h4>Karakul Lake </h4>
            </div>
            <div className="w-[50%] flex flex-col items-center justify-center">
              <img className="w-full h-[auto]" src={img3} alt="" />
              <h4>Karakul Lake</h4>
            </div>
          </div>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[14px]">
          <h4>Day 3</h4>
          <h4 className="flex gap-[5px]">
            Kashgar
            <img
              className="w-[36px] h-[19px] items-center justify-center"
              src={air}
              alt=""
            />
            Urumqi
          </h4>
        </div>
        <div className="text-[#545454] text-[14px] leading-[25px] mb-[30px]">
          <p>
            Today is Sunday and we will do full day Kashgar city excursion.
            around 09:00 we will visit the{" "}
            <span className="font-bold underline">Idigar Mosque</span> , the
            largest Mosque in China and the most sacred mosque for the locals to
            practise their Islamic activities. around 10:30 we have to visit the{" "}
            <span className="font-bold underline">Old Town</span> when the open
            ceremony ready to greeting all the tourists with the culture show,
            further exploration to the special culture and experience the
            lifestyle with the arrangements of the visiting to the local Uighur
            Family. Lunch arranged in the local Restaurant. Today's highlights
            is the <span className="font-bold underline">Sunday bazaar </span>{" "}
            that is combined two section. The covered bazaar sells the clothing,
            nuts, household goods and many things out of your imagination.The
            outdoor Animal Bazar is the first bazaar we visit, where the farmers
            and buyers arriving by donkey cart, truck, bicycle, horseback,
            motorbike or on foot, with their animals. It's loud, lively and
            cheerful as they arrive. It is quite interesting to witness their
            typical methods of bargin. After the visiting to Cenral Asia Market,
            continue to the
            <span className="font-bold underline">Apak Hoja Tomb, </span> which
            is the holiest place in Xinjiang and an architectural treasure.
            Kashgar city tour ends with the wandering to the bustling{" "}
            <span className="font-bold underline">Handicraft street, </span>{" "}
            dazzling jewelry, primitive pottery,unique musical instrument, daily
            resources of the locals. The spare time in the teahouse is our
            special arrangement for you to relax and get a feel for the local
            culture and traditions.
          </p>
          <p className="mt-[10px]">
            Say goodbye to Kashgar where you must have amazing experience and
            catch your flight to Urumqi, the capital city of Xinjiang.
          </p>
          <p>
            <span className="font-bold">Accommodation:</span> In Urumqi
          </p>
          <div className="w-full flex gap-[20px] items-center justify-center">
            <div className="w-[50%] flex flex-col items-center justify-center">
              <img className="w-full h-[auto]" src={img4} alt="" />
              <h4>Idigar Mosque </h4>
            </div>
            <div className="w-[50%] flex flex-col items-center justify-center">
              <img className="w-full h-[auto]" src={img5} alt="" />
              <h4>Sunday Bazaar</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
