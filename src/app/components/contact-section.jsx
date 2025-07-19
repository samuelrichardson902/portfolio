"use client";

import { useState } from "react";
// Import Heroicons for social icons
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

// EmailJS is only used client-side
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [loading, setLoading] = useState(false);

  // EmailJS config from environment variables
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    console.log("EmailJS config:", {
      serviceId,
      templateId,
      publicKey,
      formData,
    });

    let formErrors = {};
    let valid = true;
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email";
      valid = false;
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
      valid = false;
    }
    setErrors(formErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setErrors({});
    setToast({ show: false, message: "", type: "success" });
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setToast({
        show: true,
        message: "Message sent successfully!",
        type: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setToast({
        show: true,
        message: "Failed to send the message, please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
      setTimeout(
        () => setToast({ show: false, message: "", type: "success" }),
        2000
      );
    }
  };

  return (
    <section id="contact" className="w-full py-16">
      <div className="w-[80%] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center heading-effect">
          Contact Me
        </h2>
        <p className="mb-6 text-left">Don't hesitate to get in touch.</p>
        <div className="flex flex-col gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="card bg-base-200 shadow-xl p-6 space-y-4"
          >
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.name ? "input-error" : ""
                }`}
              />
              {errors.name && (
                <p className="text-error text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input input-bordered w-full ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`textarea textarea-bordered w-full ${
                  errors.message ? "textarea-error" : ""
                }`}
                rows={5}
              />
              {errors.message && (
                <p className="text-error text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Send"
              )}
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-left gap-8 mt-2">
            <a
              href="https://github.com/samuelrichardson902"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samrichardson902/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@samrichardson7188"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle text-4xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* DaisyUI Toast */}
        {toast.show && (
          <div className={`toast toast-center z-50`}>
            <div
              className={`alert ${
                toast.type === "success" ? "alert-success" : "alert-error"
              }`}
            >
              <span>{toast.message}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
