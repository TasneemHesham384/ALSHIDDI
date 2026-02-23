import { useState } from "react";

export function useFormLogic() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success"
  const [successMessage, setSuccessMessage] = useState(""); // رسالة نجاح

  // تحديث الفورم عند الكتابة
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation كامل
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!form.message.trim()) newErrors.message = "الموضوع مطلوب";

    const cleanPhone = form.phone.trim().replace(/\s/g, "");
    const phoneRegex = /^((\+966)|0)(1|5)\d{7,8}$/;

    if (!form.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "رقم الهاتف غير صحيح (جوال أو أرضي)";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    return newErrors;
  };

  // Submit الفورم
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus("loading");

      // محاكاة إرسال البيانات
      setTimeout(() => {
        console.log("Form Data:", form); // بدلها ممكن API call أو localStorage
        setStatus("success");
        setSuccessMessage(
          "✅ شكرًا لتواصلك مع مكتبنا، سيتواصل معك أحد محامينا المختصين في أقرب وقت.",
        );
        // إعادة ضبط الفورم
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        // Optionally: ارجع الحالة idle بعد 3 ثواني
        setTimeout(() => {
          setStatus("idle");
          setSuccessMessage("");
        }, 3000);
      }, 1500);
    }
  };

  return {
    form,
    handleChange,
    error,
    status,
    successMessage,
    handleSubmit,
  };
}
