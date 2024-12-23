import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SecondSection() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const options = ["Sayohat", "Tadbir", "Ish safari", "Dam olish"];

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    setShowOptions(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
    });
  }, []);

  return (
    <section className="w-full py-16 from-blue-50 to-blue-100 text-gray-700">
      <div className="max-w-4xl mx-auto px-6">
        <div
          data-aos="zoom-in-up"
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Sayohat ma'lumotlarini kiriting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tur Selection */}
            <div className="relative">
              <label htmlFor="tur" className="font-medium text-gray-600">
                Tur
              </label>
              <input
                id="tur"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                value={selectedValue}
                placeholder="Tur tanlang"
                onFocus={() => setShowOptions(true)}
                readOnly
              />
              {showOptions && (
                <div className="absolute w-full bg-white border border-gray-200 rounded-md shadow-md mt-1 z-10">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="font-medium text-gray-600">
                Ism va familiya
              </label>
              <input
                id="name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Ismingizni kiriting"
              />
            </div>

            {/* People Input */}
            <div>
              <label htmlFor="people" className="font-medium text-gray-600">
                Necha kishi ketadi?
              </label>
              <input
                id="people"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="number"
                min="1"
                placeholder="Masalan: 5"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="w-full">
              <label htmlFor="phone" className="font-medium text-gray-600">
                Telefon raqami
              </label>
              <div className="w-full flex">
                <span className="px-3 py-2 border border-r-0 border-gray-300 bg-gray-100 rounded-l-md">
                  +998
                </span>
                <input
                  id="phone"
                  className="w-full flex-1 border border-gray-300 px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="tel"
                  placeholder="(XX) XXX-XX-XX"
                  pattern="\([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
                  title="Raqam formati: (XX) XXX-XX-XX"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="w-full bg-[#BA972B] text-white py-3 rounded-md font-medium text-lg transition">
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
