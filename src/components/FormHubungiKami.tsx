"use client";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import * as Yup from "yup";

const FormHubungiKami = () => {
  // !captcha state & ref
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<ReCAPTCHA>(null);

  // !handle captcha-nya
  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token || "");
  };

  // !Formik setup
  const formik = useFormik({
    initialValues: {
      namaLengkap: "",
      email: "",
      phone: "",
      pesan: "",
    },
    validationSchema: Yup.object({
      namaLengkap: Yup.string().required("Nama lengkap wajib diisi"),
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email wajib diisi"),
      phone: Yup.string()
        .matches(/^(?:\+62|62|0)[2-9][0-9]{7,11}$/, "No HP tidak valid")
        .required("No HP wajib diisi"),
      pesan: Yup.string().required("Pesan wajib diisi"),
    }),
    onSubmit: (values) => {
      // !disini console.log(value) aja, bisa sih pake nodemailer/emailjs kalo setup pake email pribadi dulu
      if (!captchaToken) {
        toast.error("Silakan verifikasi captcha terlebih dahulu");
        return;
      }

      console.log("Form data:", values);
      console.log("Captcha token:", captchaToken);

      formik.resetForm();
      setCaptchaToken("");
      captchaRef.current?.reset();

      toast.success("Pesan berhasil dikirim!");
    },
  });

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-10 h-full">
      <p className="font-inter text-left font-semibold text-(--color-primary) mb-6">
        Isi formulir di bawah ini dan kami akan menghubungi Anda segera
      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Nama Lengkap */}
        <div>
          <label className="block font-urbanist font-semibold text-(--color-secondary) mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="namaLengkap"
            value={formik.values.namaLengkap}
            onChange={formik.handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[--color-primary]"
          />
          {formik.touched.namaLengkap && formik.errors.namaLengkap && (
            <p className="text-red-500 text-sm">{formik.errors.namaLengkap}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-urbanist font-semibold text-(--color-secondary) mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[--color-primary]"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-urbanist font-semibold text-(--color-secondary) mb-2">
            No HP / WhatsApp
          </label>
          <input
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[--color-primary]"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm">{formik.errors.phone}</p>
          )}
        </div>

        {/* Pesan */}
        <div>
          <label className="block font-urbanist font-semibold text-(--color-secondary) mb-2">
            Pesan / Pertanyaan
          </label>
          <textarea
            rows={5}
            name="pesan"
            value={formik.values.pesan}
            onChange={formik.handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[--color-primary]"
          />
          {formik.touched.pesan && formik.errors.pesan && (
            <p className="text-red-500 text-sm">{formik.errors.pesan}</p>
          )}
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* CAPTCHA */}
          <div className="origin-left scale-[0.8] sm:scale-100">
            <ReCAPTCHA
              ref={captchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={handleCaptcha}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-(--color-button) hover:bg-button/90 text-white cursor-pointer font-urbanist font-bold text-lg py-3.5 px-8 rounded-md shadow-lg hover:shadow-xl transition-all"
          >
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormHubungiKami;
