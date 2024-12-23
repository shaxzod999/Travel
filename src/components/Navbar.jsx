// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../components/LanguageSwitcher";

// function Navbar() {
//   const { t, i18n } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const menuRef = useRef(null);
//   const buttonRef = useRef(null);

//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const lang = searchParams.get("lang") || "en";
//     if (i18n.language !== lang) {
//       i18n.changeLanguage(lang);
//     }
//   }, [location.search, i18n.language, i18n]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (
//       menuRef.current &&
//       !menuRef.current.contains(event.target) &&
//       buttonRef.current &&
//       !buttonRef.current.contains(event.target)
//     ) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (menuOpen) {
//       document.addEventListener("click", handleClickOutside);
//     } else {
//       document.removeEventListener("click", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [menuOpen]);

//   return (
//     <div className="w-full h-[110px] fixed bg-[#fff] z-[9999]">
//       <div className="w-full h-[80%] navbar-small-container flex items-center gap-[50px] justify-between mt-[20px] px-[20px]">
//         <Link to={"/"}>Logo</Link>
//         <ul className="hidden md:flex gap-[20px] lg:gap-[50px] text-[14px] font-extralight">
//           <li>
//             <Link to={"/"}>{t("Home")}</Link>
//           </li>
//           <li>
//             <Link to={"/The-Silk-Roads/"}>{t("The Silk Roads")}</Link>
//           </li>
//           <li>
//             <Link to={"/"}>{t("The Highlands")}</Link>
//           </li>
//           <li>
//             <Link to={"/Stories/"}>{t("Stories")}</Link>
//           </li>
//           <li>
//             <Link to={"/"}>{t("The Bazaar")}</Link>
//           </li>
//           <li>
//             <Link to={"/About/"}>{t("About")}</Link>
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
//         <button
//           ref={buttonRef}
//           className="block md:hidden p-2 bg-blue-500 text-white rounded"
//           onClick={toggleMenu}
//         >
//           ☰
//         </button>
//       </div>
//       <div
//         ref={menuRef}
//         className={`md:hidden fixed left-0 right-0 bottom-0 bg-white transition-transform duration-300 ${
//           menuOpen ? "translate-y-0" : "translate-y-full"
//         }`}
//       >
//         <ul className="p-5 text-center">
//           <li className="py-2">
//             <Link to={"/"} onClick={() => setMenuOpen(false)}>
//               {t("Home")}
//             </Link>
//           </li>
//           <li className="py-2">
//             <Link to={"/The-Silk-Roads/"} onClick={() => setMenuOpen(false)}>
//               {t("The Silk Roads")}
//             </Link>
//           </li>
//           <li className="py-2">
//             <Link to={"/"} onClick={() => setMenuOpen(false)}>
//               {t("The Highlands")}
//             </Link>
//           </li>
//           <li className="py-2">
//             <Link to={"/Stories/"} onClick={() => setMenuOpen(false)}>
//               {t("Stories")}
//             </Link>
//           </li>
//           <li className="py-2">
//             <Link to={"/"} onClick={() => setMenuOpen(false)}>
//               {t("The Bazaar")}
//             </Link>
//           </li>
//           <li className="py-2">
//             <Link to={"/About/"} onClick={() => setMenuOpen(false)}>
//               {t("About")}
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // URL'dan tilni olish
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang") || "uz";

    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [location.search, i18n]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="nav w-full h-[110px] fixed bg-[#fff] z-[9999]">
      <div className="w-full h-[80%] navbar-small-container flex items-center gap-[50px] justify-between mt-[20px] px-[20px]">
        <Link to={"/"}>Logo</Link>
        <ul className="hidden md:flex gap-[20px] lg:gap-[50px] text-[14px] font-extralight">
          <li>
            <Link to={"/"}>{t("Home")}</Link>
          </li>
          <li>
            <Link to={"/About/"}>{t("About")}</Link>
          </li>
          <li>
            <Link to={"/Services/"}>{t("Services")}</Link>
          </li>
          <li>
            <Link to={"/Contact/"}>{t("Contact")}</Link>
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
        <button
          ref={buttonRef}
          className="block md:hidden p-2 bg-[#BA972B] text-white rounded"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden fixed left-0 right-0 bottom-0 bg-white transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <ul className="p-5 text-center">
          <li className="py-2">
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              {t("Home")}
            </Link>
          </li>
          <li className="py-2">
            <Link to={"/About/"} onClick={() => setMenuOpen(false)}>
              {t("About")}
            </Link>
          </li>
          <li className="py-2">
            <Link to={"/Services/"} onClick={() => setMenuOpen(false)}>
              {t("Services")}
            </Link>
          </li>
          <li className="py-2">
            <Link to={"/Contact/"} onClick={() => setMenuOpen(false)}>
              {t("Contact")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
