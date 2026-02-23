import { useTranslation } from "react-i18next";
import BusinessIcon from "@mui/icons-material/Business";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GavelIcon from "@mui/icons-material/Gavel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShieldIcon from "@mui/icons-material/Shield";
import DescriptionIcon from "@mui/icons-material/Description";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LockIcon from "@mui/icons-material/Lock";

export default function Services() {
  const [t, i18] = useTranslation();
  const isArabic = i18.language === "ar";

  const servicesData = [
    { key: "corporate", icon: <BusinessIcon className="i" /> },
    { key: "investment", icon: <TrendingUpIcon className="i" /> },
    { key: "saudi", icon: <GavelIcon className="i" /> },
    { key: "consulting", icon: <SupportAgentIcon className="i" /> },
    { key: "risk", icon: <ShieldIcon className="i" /> },
    { key: "contracts", icon: <DescriptionIcon className="i" /> },
    { key: "ai", icon: <PsychologyIcon className="i" /> },
    { key: "cyber", icon: <LockIcon className="i" /> },
  ];

  return (
    <>
      <div
        id="services"
        className="services text-center"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <div className="container">
          <div className="title">
            <h3>{t("services-sub")}</h3>
            <h2>{t("services-title")}</h2>
          </div>
          <div className="services-container">
            <div className="row g-4">
              {servicesData.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item h-100">
                    <div className="icon">{item.icon}</div>
                    <h3>{t(`${item.key}`)}</h3>
                    <p>{t(`${item.key}-p`)}</p>
                    <div className="icon-logo">
                      <img src="/logo.png" alt="logo" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
