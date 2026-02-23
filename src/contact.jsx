import React, { useState, useEffect } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import GavelIcon from "@mui/icons-material/Gavel";
import VerifiedIcon from "@mui/icons-material/Verified";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useFormLogic } from "./formLogic";

export default function Contact() {
  const [t, i18n] = useTranslation();
  const isArabic = i18n.language === "ar";

  const { form, handleChange, error, status, successMessage, handleSubmit } =
    useFormLogic();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (status === "success") setOpenSnackbar(true);
  }, [status]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };
  return (
    <>
      <section
        id="contact"
        className="contact-section"
        style={{ direction: isArabic ? "rtl" : "ltr" }}
      >
        <div className="container">
          <div className="counter-area">
            <div className="row counter-bg justify-content-center">
              <div className="col-6 col-md-3">
                <div className="counter-item">
                  <GroupsIcon className="mui-icon-style" />
                  <div className="counter-inner">
                    <h3>
                      <span className="target">+</span>

                      <CountUp
                        end={18}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h3>
                    <p>{t("Attorneys")}</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="counter-item">
                  <GavelIcon className="mui-icon-style" />
                  <div className="counter-inner">
                    <h3>
                      <span className="target">%</span>
                      <CountUp
                        end={99}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h3>
                    <p>{t("case won")}</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="counter-item">
                  <VerifiedIcon className="mui-icon-style" />
                  <div className="counter-inner">
                    <h3>
                      <span className="target"> %</span>

                      <CountUp
                        end={100}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h3>
                    <p>{t("Legal Way")}</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="counter-item">
                  <SentimentSatisfiedAltIcon className="mui-icon-style" />
                  <div className="counter-inner">
                    <h3>
                      <span className="target"> K</span>
                      <CountUp
                        end={10}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </h3>
                    <p>{t("Happy Clients")} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-wrapper-centered">
            <div className="contact-header text-center">
              <span className="gold-dot-title">{t("contact")}</span>
              <h2>{t("contact-p")}</h2>
            </div>

            <div className="contact-form-box">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={form.name}
                      placeholder={t("name")}
                      aria-label="name"
                    />
                    {error.name && <p className="text-danger">{error.name}</p>}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={form.email}
                      placeholder={t("email")}
                      aria-label="email"
                    />
                    {error.email && (
                      <p className="text-danger">{error.email}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      aria-label="phone"
                      value={form.phone}
                      placeholder={t("number")}
                      onChange={handleChange}
                    />
                    {error.phone && (
                      <p className="text-danger">{error.phone}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder={t("topic")}
                      name="message"
                      aria-label="message"
                      value={form.message}
                      onChange={handleChange}
                    />
                    {error.message && (
                      <p className="text-danger">{error.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="spinner"></span>
                  ) : (
                    t("send")
                  )}
                </button>
              </form>
            </div>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                {successMessage}
              </Alert>
            </Snackbar>
            <div className="direct-contact-footer row">
              <a href="tel:+966114000050" className="contact-link col-6  pt-3 ">
                <span>
                  <LocalPhoneIcon />
                </span>{" "}
                +966 114000050
              </a>
              <a
                href="mailto:info@alshiddi.com"
                className="contact-link col-6 pt-3 "
              >
                <span>
                  <EmailIcon />
                </span>{" "}
                info@alshiddi.com
              </a>
              <div className="container">
                <div className="map-container ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14490.432924192586!2d46.68378792869623!3d24.77461815258269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee366005bb42f%3A0x5c9cddf8f74f61ef!2zQUxTSElEREkgTGF3IEZpcm0gLSDYtNix2YPYqSDYp9mE2LTYr9mKINmE2YTZhdit2KfZhdin2Kkg2YjYp9mE2KfYs9iq2LTYp9ix2KfYqiDYp9mE2YLYp9mG2YjZhtmK2Kkg2YjYp9mE2KrYrdmD2YrZhSDZiNin2YTYqtmI2KvZitmC!5e0!3m2!1sar!2seg!4v1771715620745!5m2!1sar!2seg"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
