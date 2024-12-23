import React from "react";
import img1 from "../../assets/The-Silk-Roads-img/image copy.png";
import img2 from "../../assets/The-Silk-Roads-img/image copy 2.png";
import img3 from "../../assets/The-Silk-Roads-img/image copy 3.png";
import img4 from "../../assets/The-Silk-Roads-img/image copy 4.png";
import img5 from "../../assets/The-Silk-Roads-img/image copy 5.png";
import img6 from "../../assets/The-Silk-Roads-img/image copy 6.png";
import img7 from "../../assets/The-Silk-Roads-img/image copy 7.png";
import img8 from "../../assets/The-Silk-Roads-img/image copy 8.png";
import img9 from "../../assets/The-Silk-Roads-img/image copy 9.png";
import img10 from "../../assets/The-Silk-Roads-img/image copy 10.png";
import img11 from "../../assets/The-Silk-Roads-img/image copy 11.png";
import img12 from "../../assets/The-Silk-Roads-img/image copy 12.png";
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
              $700
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
            <h4 className="text-[10px] sm:text-[14px] text-[#555]">7 Day</h4>
          </div>
          {/* <div className="flex flex-col gap-[0] items-start justify-center text-start">
            <h4 className="text-[10px] sm:text-[14px] text-[#555] font-black">
              Tour Code
            </h4>
            <h4 className="text-[10px] sm:text-[14px] text-[#555]">
              CITA-SD-22
            </h4>
          </div> */}
        </div>
        <h4 className="w-full text-start text-[12px] text-[#A62F11] font-black">
          Комфорт:
        </h4>
        <p className="w-full text-start text-[10px] sm;text-[14px] text-[#555] leading-[24px] mt-[-30px]">
          <span className="font-bold underline">Проживание.</span> В нескольких
          местах, размещение 2-местное: <br /> В Хиве в Reikartz Khiva Residence
          3 * или аналогичном (1 ночь). <br /> В Бухаре в Dera Hotel 3 * или
          аналогичном (2 ночи). <br /> В Самарканде в Reikartz Amar Samarkand 3
          * или аналогичном (2 ночи). <br /> В Ташкенте в Hotel Velara 3 * или
          аналогичном (1 ночь).
        </p>
        <p className="w-full text-start text-[10px] sm:text-[14px] text-[#555] leading-[24px] mt-[-40px]">
          <span className="font-bold underline">Питание.</span>В стоимость
          включены 7 завтраков. Остальное питание оплачивается отдельно.
        </p>
        <p className="w-full text-start text-[10px] sm:text-[14px] text-[#555] leading-[24px] mt-[-40px]">
          <span className="font-bold underline">Транспорт.</span>33-местный
          автобус King long или аналогичный.
        </p>
        <p className="w-full text-start text-[10px] sm:text-[14px] text-[#555] leading-[24px] mt-[-40px]">
          <span className="font-bold underline">Дети.</span>Возможно участие с
          детьми от 10 лет.
        </p>
        <p className="w-full text-start text-[10px] sm:text-[14px] text-[#555] leading-[24px] mt-[-40px]">
          <span className="font-bold underline">Виза.</span> Не нужна.
        </p>
        <h2 className="w-full text-start text-[20px] text-[#555] leading-[24px] mt-[-40px] font-bold">
          Программа
        </h2>
        <p className="w-full text-start text-[10px] sm:text-[14px] text-[#555] leading-[24px] mt-[-40px]">
          <span className="font-bold underline">Начало тура:</span>
          Ургенч, аэропорт, утро
        </p>
        <p className="w-full text-start text-[10px] sm:text-[14px] text-[#555] leading-[24px] mt-[-40px]">
          <span className="font-bold underline">Финиш:</span>
          Ташкент, аэропорт, утро
        </p>
        <div className="w-full h-[auto] sm:h-[470px] flex gap-[20px] items-center justify-center mt-[-30px]">
          <div className="w-[50%] h-full flex flex-col items-center justify-center">
            <img className="w-full h-full" src={img1} alt="" />
          </div>
          <div className="w-[50%] h-full flex flex-col items-center justify-center">
            <img className="w-full h-full" src={img2} alt="" />
          </div>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[10px] sm:text-[14px]">
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
        <div className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px] mb-[30px]">
          <h4 className="font-bold">
            Переезд в Хиву, экскурсия по историческому центру
          </h4>
          <p>
            Встречаемся и отправляемся в Хиву. После размещения в гостинице (с
            14:00) и завтрака вас ждёт экскурсия в сопровождении гида по
            древнему комплексу Ичан-Кала. Вы исследуете исторический центр за
            высокими мощными стенами, увидите крепость Куня-Арк и мавзолей
            Пахлаван-Махмуда, минареты и медресе, башню Калта-Минор и дворец
            Таш-Ховли. Посмотрите на мечети и общественные бани.
          </p>
          <p className="mt-[5px]">
            После — свободное время и отдых в гостинице.
          </p>
        </div>
        <div className="w-full h-[auto] sm:h-[500px] flex gap-[20px] items-center justify-center mt-[-60px]">
          <div className="w-[50%] h-full flex flex-col items-center justify-center">
            <img className="w-full h-full" src={img3} alt="" />
          </div>
          <div className="w-[50%] h-full flex flex-col items-center justify-center">
            <img className="w-full h-full" src={img4} alt="" />
          </div>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[10px] sm:text-[14px]">
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
        <div className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px] mb-[30px]">
          <h4 className="font-bold">Переезд в Бухару</h4>
          <p>
            Утром после завтрака отправляемся в Бухару. Путь предстоит долгий —
            450 км, 7-8 часов, но по дороге вы сможете полюбоваться просторами
            пустыни Кызылкум, которую мы будем проезжать. По прибытии
            разместимся в отеле, а затем у вас будет свободное время: можно
            прогуляться по узким улочкам старого города, включённого в список
            всемирного наследия ЮНЕСКО.
          </p>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[10px] sm:text-[14px]">
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
        <div className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px] mb-[30px]">
          <h4 className="font-bold">Достопримечательности Бухары</h4>
          <p>
            В этот день вы познакомитесь с главными достопримечательностями
            Бухары. Пройдёмся по парадной площади Регистан в центральной части
            города. Посмотрим на архитектурный ансамбль Пои-Калян, цитадель Арк
            с 20-метровыми стенами и башнями-укреплениями, где жили бухарские
            эмиры и бывали Тамерлан, Авиценна, Омар Хайям. Увидим мечеть
            Боло-Хауз.
          </p>
          <p className="mt-[10px]">
            Прогуляемся по парку, где расположены мавзолей Исмаила Самани
            и мавзолей Чашма-Айюб — одно из самых загадочных зданий Бухары.
            Посетим медресе Абдулазиз-хана и Улугбека, мечеть Магоки-Аттор
            и комплекс Ляби-Хауз. Побываем в торговых куполах, сохранившихся
            со времён Средневековья.
          </p>
          <div className="w-full h-[auto] sm:h-[500px] flex gap-[20px] items-center justify-center mt-[20px]">
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <img className="w-full h-full" src={img5} alt="" />
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <img className="w-full h-full" src={img6} alt="" />
            </div>
          </div>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[10px] sm:text-[14px]">
          <h4>Day 4</h4>
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
        <div className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px] mb-[30px]">
          <h4 className="font-bold">
            Переезд в Самарканд, экскурсия по городу
          </h4>
          <p>
            Позавтракав, выезжаем в Самарканд. В пути — около 3-4 часов, 280 км.
            По прибытии побываем на знаменитой площади Регистан, посетим медресе
            Улугбека, самое позднее строение площади — медресе Тилля-Кари
            17 века — и медресе Шердор. Заглянем в усыпальницу Тимура Гур-Эмир.
          </p>
          <div className="w-full h-[auto] sm:h-[500px] flex gap-[20px] items-center justify-center mt-[20px]">
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <img className="w-full h-full" src={img7} alt="" />
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <img className="w-full h-full" src={img8} alt="" />
            </div>
          </div>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[10px] sm:text-[14px]">
          <h4>Day 5</h4>
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
        <div className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px] mb-[30px]">
          <h4 className="font-bold">Продолжение знакомства с Самаркандом</h4>
          <p>
            Сегодня продолжим исследовать шедевры архитектуры Самарканда.
            Посетим некрополь Шахи-Зинда и обсерваторию Улугбека. Заглянем
            в Музей Археологии «Афросиаб» и мечеть Биби-Ханым и пройдёмся
            по самому оживлённому в городе рынку «Сиаб». Побываем на бумажной
            фабрике «Мерос», где ремесленники вручную изготавливают знаменитую
            самаркандскую бумагу по старинным технологиям.
          </p>
          <div className="w-full h-[auto] sm:h-[500px] flex gap-[20px] items-center justify-center mt-[20px]">
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <img className="w-full h-full" src={img9} alt="" />
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <img className="w-full h-full" src={img10} alt="" />
            </div>
          </div>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[10px] sm:text-[14px]">
          <h4>Day 6</h4>
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
        <div className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px] mb-[30px]">
          <h4 className="font-bold">Переезд в Ташкент, экскурсия по городу</h4>
          <p>
            В этот день отправляемся в столицу Узбекистана. В пути — 4-5 часов,
            280 км. Ташкент очень динамичный и современный город с богатой
            историей. Мы побываем на площади Хаст-Имам и посмотрим
            на расположенные на ней медресе Барак-хана, ставшее символом
            культурного и религиозного наследия Средней Азии, мечеть Тилла-Шейх
            и мавзолей Каффаля Шаши, построенный в 1542 году.
          </p>
          <p className="mt-[10px]">
            Прогуляемся по самому большому рынку Узбекистана «Чорсу», известному
            с древних времён. Посетим самые красивые станции метро.
          </p>
          <div className="w-full h-[auto] sm:h-[500px] flex gap-[20px] items-center justify-center mt-[20px]">
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <img className="w-full h-full" src={img11} alt="" />
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center">
              <img className="w-full h-full" src={img12} alt="" />
            </div>
          </div>
        </div>
        <div className="my-[-20px] w-full rounded-[6px] bg-[#F4F4F4] text-[#545454] font-bold p-[15px] flex gap-[10px] items-center justify-start text-[10px] sm:text-[14px]">
          <h4>Day 7</h4>
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
        <div className="w-full text-[#545454] text-[10px] sm:text-[14px] leading-[25px] mb-[30px]">
          <h4 className="font-bold">Отъезд</h4>
          <p>После завтрака — трансферт в аэропорт Ташкента.</p>
        </div>
        <div className="w-full mt-[-50px]">
          <ul className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px]">
            <li className="font-bold">Что включено в цену</li>
            <li>Проживание</li>
            <li>Завтраки</li>
            <li>Трансферы по маршруту</li>
            <li>Трансфер из/в аэропорт (групповой)</li>
            <li>Экскурсии по программе</li>
          </ul>
          <h4 className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px] font-bold">Оплачивается отдельно</h4>
          <ul className="text-[#545454] text-[10px] sm:text-[14px] leading-[25px]">
            <li>Обеды и ужины</li>
            <li>Входные билеты на объекты экскурсий</li>
            <li>Доплата за индивидуальный трансфер (на седане — $25 за машину в одну сторону; на минивэне — $35 за машину в одну сторону)</li>
            <li>Доплата за 1-местное размещение — $100</li>
            <li>Дополнительная ночь в отеле: $55 (1-местный номер), $70 (2-местный)</li>
            <li>Сборы за фото- и видеосъёмку в музеях, где это необходимо</li>
            <li>Медицинская страховка</li>
          </ul>
          <h3 className="font-bold text-[#545454] tex-[25px] sm:text-[32px]">Стоимость тура в даты с ноября по декабрь — $700</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
