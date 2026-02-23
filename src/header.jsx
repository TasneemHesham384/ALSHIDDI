import LanguageIcon from "@mui/icons-material/Language";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("ar");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const position =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      setScrolled(position > 80);
    };
    window.addEventListener("scroll", handleScroll, true);

    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  function handleLang() {
    if (lang == "ar") {
      i18n.changeLanguage("en");
      setLang("en");
    } else {
      i18n.changeLanguage("ar");
      setLang("ar");
    }
  }
  return (
    <>
      <header
        className={scrolled ? "scrolled main-header" : "main-header"}
        dir={lang == "ar" ? "rtl" : "ltr"}
      >
        <div className="container header-wrapper">
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </div>
          <div className="logo">
            <a href="#">
              <img src="/no-background logo2.png" alt="logo" />
            </a>
          </div>
          <nav className={`navLinks ${isMenuOpen ? "active" : ""}`}>
            {" "}
            <ul>
              <li>
                <a href="#" className="active">
                  {t("home")}
                </a>
              </li>
              <li>
                <a href="#about">{t("who")}</a>
              </li>
              <li>
                <a href="#services">{t("services")}</a>
              </li>
              <li>
                <a href="#contact">{t("call")}</a>
              </li>
            </ul>
          </nav>
          <div className="language" onClick={handleLang}>
            <span>{lang == "ar" ? "EN" : "AR"}</span>
            <LanguageIcon />
          </div>
        </div>
      </header>
    </>
  );
}
