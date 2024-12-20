import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Ensure you import useTranslation
import LanguageSwitcher from "../components/LanguageSwitcher";

function Navbar() {

  const { t, i18n } = useTranslation(); // Access i18n from useTranslation
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang") || "en";
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [location.search, i18n.language, i18n]);
  return (
    <div className="w-full h-[110px] fixed bg-[#fff] mt-[-110px] z-[9999]">
      <div className="w-full h-[80%] navbar-small-container flex items-center gap-[50px] justify-between mt-[20px]">
        <Link to={'/'}>Logo</Link>
        <ul className="flex gap-[50px] text-[14px] font-extralight">
          <li>
            <Link to={'/'}>{t("Home")}</Link>
          </li>
          <li>
            <Link to={'/The-Silk-Roads/'}>{t("The Silk Roads")}</Link>
          </li>
          <li>
            <Link to={'/'}>{t("The Highlands")}</Link>
          </li>
          <li>
            <Link to={'/Stories/'}>{t("Stories")}</Link>
          </li>
          <li>
            <Link to={'/'}>{t("The Bazaar")}</Link>
          </li>
          <li>
            <Link to={'/About/'}>{t("About")}</Link>
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
      </div>
    </div>
  );
}

export default Navbar;
