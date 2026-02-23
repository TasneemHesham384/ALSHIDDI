import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const sequence = isArabic
    ? [t("Protect your interests"), 2500, t("safeguard your rights"), 2500]
    : ["Protecting Interests", 2500, "Securing Rights", 2500];

  return (
    <section className="hero" style={{ direction: isArabic ? "rtl" : "ltr" }}>
      <div className="container">
        <div
          className="hero-content"
          style={{ textAlign: isArabic ? "right" : "left" }}
        >
          <span className="hero-subtitle">{t("company")}</span>

          <h1
            style={{
             
              display: "flex",
              flexDirection: "column",
              alignItems: isArabic ? "flex-start" : "flex-start",
              gap: "10px",
            }}
          >
            <span className="ex">{t("experience")}</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                
              }}
            >
              <span
                style={{
                  color: "var(--main-color) !important",
                  whiteSpace: "nowrap",
                  borderLeft: isArabic ? "none" : "3px solid var(--main-color)",
                  paddingLeft: isArabic ? "0" : "10px",
                }}
              >
                <TypeAnimation
                  key={i18n.language}
                  sequence={sequence}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={60}
                  repeat={Infinity}
                />
              </span>
              <span>{t("confidence")}</span>
            </div>
          </h1>

          <p style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
            {t("provide")}
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              {t("book")}
            </a>
            <a href="#services" className="btn secondary">
              {t("know")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
