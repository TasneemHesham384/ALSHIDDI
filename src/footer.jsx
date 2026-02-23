import { useTranslation } from "react-i18next";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer
      className="main-footer"
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="footer-logo">
              <img src="/no-background logo.png" alt="Logo" />
            </div>
            <p className="footer-description">{t("footer_desc")}</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/">
                <FacebookIcon />
              </a>
              <a href="https://www.twitter.com/">
                <XIcon />
              </a>
              <a href="https://www.youtube.com/">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h2 className="footer-title">{t("site_sections")}</h2>
            <ul className="footer-links">
              <li>
                <a href="#">{t("home")}</a>
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
          </div>

          <div className="col-lg-4 col-md-6">
            <h2 className="footer-title">{t("connect_with_us")}</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon-box">
                  <PhoneIcon />
                </span>
                <a href="tel:0535345738" dir="ltr">
                  0535345738
                </a>
              </div>
              <div className="contact-item">
                <span className="icon-box">
                  <EmailIcon />
                </span>
                <a href="mailto:info@alshiddilawfirm.com">
                  info@alshiddilawfirm.com
                </a>{" "}
              </div>
              <div className="contact-item">
                <span className="icon-box">
                  <LocationPinIcon />
                </span>
                <a href="https://maps.app.goo.gl/QfCWzMJzBXcGNCQb7">
                  {t("location")}
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom text-center">
          <p>
            © {new Date().getFullYear()} {t("rights")}
          </p>{" "}
        </div>
      </div>
    </footer>
  );
}
