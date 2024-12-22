// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Ensure you import useTranslation
// import LanguageSwitcher from "../components/LanguageSwitcher";

// function Navbar() {

//   const { t, i18n } = useTranslation(); // Access i18n from useTranslation
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const lang = searchParams.get("lang") || "en";
//     if (i18n.language !== lang) {
//       i18n.changeLanguage(lang);
//     }
//   }, [location.search, i18n.language, i18n]);
//   return (
//     <div className="w-full h-[110px] fixed bg-[#fff] z-[9999]">
//       <div className="w-full h-[80%] navbar-small-container flex items-center gap-[50px] justify-between mt-[20px]">
//         <Link to={'/'}>Logo</Link>
//         <ul className="flex gap-[50px] text-[14px] font-extralight">
//           <li>
//             <Link to={'/'}>{t("Home")}</Link>
//           </li>
//           <li>
//             <Link to={'/The-Silk-Roads/'}>{t("The Silk Roads")}</Link>
//           </li>
//           <li>
//             <Link to={'/'}>{t("The Highlands")}</Link>
//           </li>
//           <li>
//             <Link to={'/Stories/'}>{t("Stories")}</Link>
//           </li>
//           <li>
//             <Link to={'/'}>{t("The Bazaar")}</Link>
//           </li>
//           <li>
//             <Link to={'/About/'}>{t("About")}</Link>
//           </li>
//         </ul>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "10px",
//             margin: "10px",
//           }}
//         >
//           <LanguageSwitcher />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;






import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false); // Holat: menyu ochiq yoki yopiq

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang") || "en";
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [location.search, i18n.language, i18n]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Menyuni ochish yoki yopish
  };

  return (
    <div className="w-full h-[110px] fixed bg-[#fff] z-[9999]">
      <div className="w-full h-[80%] navbar-small-container flex items-center gap-[50px] justify-between mt-[20px] px-[20px]">
        <Link to={"/"}>Logo</Link>
        <ul className="hidden md:flex gap-[20px] lg:gap-[50px] text-[14px] font-extralight">
          <li>
            <Link to={"/"}>{t("Home")}</Link>
          </li>
          <li>
            <Link to={"/The-Silk-Roads/"}>{t("The Silk Roads")}</Link>
          </li>
          <li>
            <Link to={"/"}>{t("The Highlands")}</Link>
          </li>
          <li>
            <Link to={"/Stories/"}>{t("Stories")}</Link>
          </li>
          <li>
            <Link to={"/"}>{t("The Bazaar")}</Link>
          </li>
          <li>
            <Link to={"/About/"}>{t("About")}</Link>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            margin: "10px",
          }}
        >
          <LanguageSwitcher />
        </div>
        {/* Mobil menyu tugmasi */}
        <button
          className="block md:hidden p-2 bg-blue-500 text-white rounded"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      {/* Mobil menyu */}
      <div
        className={`md:hidden fixed left-0 right-0 bottom-0 bg-white transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="p-5 text-center">
          <li className="py-2">
            <Link to={"/"}>{t("Home")}</Link>
          </li>
          <li className="py-2">
            <Link to={"/The-Silk-Roads/"}>{t("The Silk Roads")}</Link>
          </li>
          <li className="py-2">
            <Link to={"/"}>{t("The Highlands")}</Link>
          </li>
          <li className="py-2">
            <Link to={"/Stories/"}>{t("Stories")}</Link>
          </li>
          <li className="py-2">
            <Link to={"/"}>{t("The Bazaar")}</Link>
          </li>
          <li className="py-2">
            <Link to={"/About/"}>{t("About")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
