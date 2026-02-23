import { useTranslation } from "react-i18next";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function About() {
  const [t, i18] = useTranslation();
  const isArabic = i18.language == "ar";
  return (
    <>
      <div
        className="about"
        id="about"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <div className="container">
          <div className="about-raw">
            <div className="info">
              <h2>{t("about")}</h2>
              <p>{t("about-p")}</p>
              <div className="pros">
                <div className="raw">
                  <div className="col">
                    <TaskAltIcon className="done" />
                    {t("solusions")}
                  </div>
                  <div className="col">
                    <TaskAltIcon className="done" />
                    {t("Standards")}
                  </div>
                </div>
                <div className="raw">
                  <div className="col">
                    <TaskAltIcon className="done" />
                    {t("Quick")}
                  </div>
                  <div className="col">
                    <TaskAltIcon className="done" />
                    {t("Digital")}
                  </div>
                </div>
              </div>
              <div className="help-shape">
                <img src="/about1.png" loading="lazy" alt="" />
              </div>
            </div>
            <div className="image-container">
              <div className="image">
                <img src="/about.jpg" loading="lazy" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
