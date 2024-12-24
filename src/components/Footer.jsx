import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const { t } = useTranslation();

  const options = ["Sayohat", "Tadbir", "Ish safari", "Dam olish"];

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setSelectedValue("");
  };

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
    <footer className="h-[280px] pt-[10px] bg-gray-100">
      <div className="w-full container mx-auto flex flex-col gap-[30px] items-center justify-center">
        <div className="w-full flex gap-[15px] items-center justify-center">
          {[
            { path: "/", label: "Home" },
            { path: "/About/", label: "About" },
            { path: "/Services/", label: "Services" },
            { path: "/Contact/", label: "Contact" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center justify-center footer-btn"
            >
              <button className="font-thin text-gray-700 hover:text-gray-900">
                {link.label}
              </button>
            </Link>
          ))}
        </div>
        <div className="text-xl font-bold">Logo</div>
      </div>

      {/* Book Now Button */}
      {!isOpen && (
        <button
          onClick={openModal}
          className="w-[150px] py-[10px] px-[20px] text-[16px] cursor-pointer rounded-[5px] bg-[#BA972B] fixed bottom-[150px] right-[0] md:right-[100px] z-[999] text-[#fff] hover:bg-[#a37e20]"
        >
          {t("Book Now")}
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t("Sayohat ma'lumotlarini kiriting")}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {/* Tur Selection */}
              <div className="relative">
                <label htmlFor="tur" className="font-medium text-gray-600">
                  {t("Tur")}
                </label>
                <input
                  id="tur"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  value={selectedValue}
                  placeholder={t("Tur tanlang")}
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
                  {t("Ism va familiya")}
                </label>
                <input
                  id="name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  placeholder={t("Ismingizni kiriting")}
                />
              </div>

              {/* People Input */}
              <div>
                <label htmlFor="people" className="font-medium text-gray-600">
                  {t("Necha kishi ketadi?")}
                </label>
                <input
                  id="people"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="number"
                  min="1"
                  placeholder="5"
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="font-medium text-gray-600">
                  {t("Telefon raqami")}
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

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  className="w-full bg-[#BA972B] text-white py-3 rounded-md font-medium text-lg transition hover:bg-[#a37e20]"
                  onClick={closeModal}
                >
                  {t("Yuborish")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
