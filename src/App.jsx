import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Services from "./services";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  const { i18n } = useTranslation(); // استخدام الـ Object مباشرة لجلب i18n
  const isArabic = i18n.language === "ar";

  const seo = {
    title: isArabic
      ? "مكتب الشدي للمحاماة | استشارات قانونية بالرياض"
      : "Alshiddi Law Firm | Legal Consultancy in Riyadh",
    description: isArabic
      ? "مكتب الشدي للمحاماة بالرياض - حي الغدير. استشارات قانونية متكاملة وقضايا الشركات والأفراد بأعلى معايير المهنية."
      : "Alshiddi Law Firm in Riyadh - Al Ghadir. Integrated legal services for corporations and individuals with high professional standards.",
    ogImage: "/Logo.jpg", // المسار المباشر بدون كلمة public
    url: window.location.origin, // يأخذ رابط الموقع الحالي تلقائياً
  };

  // كود الـ Schema لتعريف جوجل بنوع النشاط التجاري
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: isArabic ? "مكتب الشدي للمحاماة" : "Alshiddi Law Firm",
    description: seo.description,
    image: `${seo.url}${seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "حي الغدير",
      addressLocality: "الرياض",
      addressRegion: "منطقة الرياض",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.774265,
      longitude: 46.66123,
    },
    url: seo.url,
    telephone: "+966123456789", // ضعي الرقم الحقيقي هنا
    openingHours: "Su-Th 08:00-17:00",
  };

  return (
    <>
      <Helmet>
        {/* ضبط اللغة والاتجاه ضروري جداً لتنسيق CSS */}
        <html lang={isArabic ? "ar" : "en"} dir={isArabic ? "rtl" : "ltr"} />

        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.ogImage} />

        {/* إضافة الـ Schema كـ Script */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
