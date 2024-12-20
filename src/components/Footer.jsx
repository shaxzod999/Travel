import { useState } from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const { t, i18n } = useTranslation(); // Access i18n from useTranslation

  return (
    <footer className="h-[280px] pt-[1px]">
      <div className="w-full container mx-[auto] flex flex-col items-center justify-center">
        <div className="w-full flex gap-[15px] items-center justify-center">
          <a href="#" className="flex items-center justify-center footer-btn">
            <button className="font-thin">About</button>
          </a>
          <a href="#" className="flex items-center justify-center footer-btn">
            <button className="font-thin">Stories</button>
          </a>
          <a href="#" className="flex items-center justify-center footer-btn">
            <button className="font-thin">Explore</button>
          </a>
        </div>
        <div>Logo</div>
      </div>
      <button
        onClick={openModal}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "#fff",
          position: "fixed",
          bottom: "150px",
          right: "100px",
          zIndex: "999",
        }}
      >
        {t("Book Now")}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2>Bu Modal</h2>
            <p>Bu ekran o'rtasida ochiladigan modal oynadir.</p>
            <button
              onClick={closeModal}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                cursor: "pointer",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#FF4D4D",
                color: "#fff",
                marginTop: "10px",
              }}
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
