// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { useNavigate, useLocation } from "react-router-dom";

// const LanguageSwitcher = () => {
//   const { i18n, t } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Standart tilni "uz" deb belgilash
//   const defaultLanguage = localStorage.getItem("appLanguage") || "uz";

//   const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

//   useEffect(() => {
//     // Agar birinchi marta kirgan bo'lsa, tilni "uz" ga o'rnatish
//     if (!localStorage.getItem("appLanguage")) {
//       i18n.changeLanguage("uz");
//       localStorage.setItem("appLanguage", "uz");
//     }
//   }, [i18n]);

//   const handleLanguageChange = (language) => {
//     i18n.changeLanguage(language);
//     localStorage.setItem("appLanguage", language);
//     setSelectedLanguage(language);

//     // URLni yangi til parametri bilan yangilash
//     const url = new URLSearchParams(location.search);
//     url.set("lang", language);
//     navigate(`${location.pathname}?${url.toString()}`, { replace: true });
//   };

//   const languages = [
//     { code: "en", label: "English" },
//     { code: "ru", label: "Русский" },
//     { code: "uz", label: "O‘zbekcha" },
//   ];

//   // Tanlangan tilni menyudan chiqarib tashlash
//   const filteredLanguages = languages.filter(
//     (lang) => lang.code !== selectedLanguage
//   );

//   return (
//     <div className="relative group">
//       {/* Hozirgi tanlangan tilni ko'rsatadigan tugma */}
//       <button className="language-btn bg-blue-500 text-white px-4 py-2 rounded">
//         {languages.find((lang) => lang.code === selectedLanguage)?.label || ""}
//       </button>

//       {/* Til menyusi */}
//       <div className="language-menu absolute top-full bg-white shadow-lg w-[200px] p-2 rounded hidden group-hover:block">
//         <div className="language-options flex flex-col gap-2">
//           {filteredLanguages.map((lang) => (
//             <button
//               key={lang.code}
//               className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
//               onClick={() => handleLanguageChange(lang.code)}
//             >
//               {lang.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LanguageSwitcher;








import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const defaultLanguage = localStorage.getItem("appLanguage") || "uz";
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang");

    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
      localStorage.setItem("appLanguage", lang);
      setSelectedLanguage(lang);
    }
  }, [location.search, i18n]);

  const handleLanguageChange = (language) => {
    if (language !== i18n.language) {
      i18n.changeLanguage(language);
      localStorage.setItem("appLanguage", language);
      setSelectedLanguage(language);

      // URL'ni yangilash
      const url = new URLSearchParams(location.search);
      url.set("lang", language);
      navigate(`${location.pathname}?${url.toString()}`, { replace: true });
    }
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "uz", label: "O‘zbekcha" },
  ];

  const filteredLanguages = languages.filter(
    (lang) => lang.code !== selectedLanguage
  );

  return (
    <div className="relative group">
      <button className="language-btn bg-[#BA972B] text-white px-4 py-2 rounded">
        {languages.find((lang) => lang.code === selectedLanguage)?.label || ""}
      </button>

      <div className="language-menu absolute top-full bg-white shadow-lg w-[200px] p-2 rounded hidden group-hover:block">
        <div className="language-options flex flex-col gap-2">
          {filteredLanguages.map((lang) => (
            <button
              key={lang.code}
              className="bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
