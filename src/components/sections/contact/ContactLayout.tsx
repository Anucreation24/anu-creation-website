"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";

/* ── Input field subcomponent ─────────────────────────────────────────────── */
function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
  textarea,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-transparent border border-[#2A2A2A] text-[#F5F2EA] placeholder-[#4A4540] font-[family-name:var(--font-inter)] text-sm px-4 py-3.5 outline-none focus:border-[#C9A64B] transition-colors duration-300 resize-none";
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#6B6560]"
      >
        {label} {required && <span className="text-[#C9A64B]">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      )}
    </div>
  );
}

/* ── Contact info item ────────────────────────────────────────────────────── */
function InfoItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 py-5 border-b border-[#1A1A1A] last:border-0 transition-colors duration-300 hover:text-[#C9A64B]"
    >
      <div className="w-9 h-9 border border-[#2A2A2A] group-hover:border-[#C9A64B]/40 flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
        <Icon size={15} className="text-[#C9A64B]" />
      </div>
      <div>
        <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.3em] uppercase text-[#6B6560] block mb-1">
          {label}
        </span>
        <span className="font-[family-name:var(--font-inter)] text-sm text-[#F5F2EA] group-hover:text-[#C9A64B] transition-colors duration-300">
          {value}
        </span>
      </div>
    </a>
  );
}

export default function ContactLayout({ data, settings }: { data: any; settings: any }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inquiryTitle = data?.inquiryTitle || "Start a Conversation";
  const inquiryText = data?.inquiryText || "Inquiry Form";
  const successTitle = data?.successTitle || "Message Received";
  const successDesc = data?.successMessage || "Thank you for reaching out. We'll respond within 24 hours.";

  const email = settings?.email || "24anucreation@gmail.com";
  const phone = settings?.phone || "+94 75 310 3536";
  const whatsappNumber = settings?.whatsappNumber || "94753103536";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  const studioHours = settings?.studioHours || [
    { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "By Appointment" },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
      budget: formData.get("budget"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Handle non-JSON responses (like 404/500 HTML pages)
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Server Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section-padding bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">

          {/* ── Inquiry form ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A64B] block mb-3">
                {inquiryText}
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#F5F2EA]">
                {inquiryTitle}
              </h2>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-[#C9A64B]/30 bg-[#C9A64B]/5 p-10 text-center space-y-4"
              >
                <div className="w-12 h-12 border border-[#C9A64B]/40 flex items-center justify-center mx-auto">
                  <span className="text-[#C9A64B] text-xl">✓</span>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#F5F2EA]">
                  {successTitle}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B1A3]">
                  {successDesc}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field id="name" label="Full Name" placeholder="Your name" required />
                  <Field id="email" label="Email" type="email" placeholder="your@email.com" required />
                </div>
                <Field id="company" label="Company / Brand" placeholder="Your brand or studio name" />
                <Field
                  id="service"
                  label="Service Interested In"
                  placeholder="e.g. Graphic Design, Video Editing…"
                />
                <Field
                  id="message"
                  label="Your Message"
                  placeholder="Tell us about your project, vision, and goals…"
                  required
                  textarea
                />

                {/* Budget selector */}
                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#6B6560]"
                  >
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full bg-[#0F0F0F] border border-[#2A2A2A] text-[#B7B1A3] font-[family-name:var(--font-inter)] text-sm px-4 py-3.5 outline-none focus:border-[#C9A64B] transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">Under LKR 5,000</option>
                    <option value="5k-20k">LKR 5,000 – 20,000</option>
                    <option value="20k-50k">LKR 20,000 – 50,000</option>
                    <option value="50k-plus">LKR 50,000+</option>
                    <option value="custom">Custom / Discuss</option>
                  </select>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-[family-name:var(--font-inter)] tracking-wide text-center rounded-lg"
                  >
                    {error}
                  </motion.div>
                )}

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={sending}
                  className="group w-full py-4 bg-[#C9A64B] text-[#0A0A0A] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#D8BA67] disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0A0A0A]/40 border-t-[#0A0A0A] rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Contact info ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-10"
          >
            <div>
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A64B] block mb-3">
                Direct Contact
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#F5F2EA] mb-8">
                Reach Us Directly
              </h2>

              <div className="space-y-0">
                <InfoItem
                  icon={Mail}
                  label="Email"
                  value={email}
                  href={`mailto:${email}`}
                />
                <InfoItem
                  icon={Phone}
                  label="Phone / WhatsApp"
                  value={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                />
                <InfoItem
                  icon={MessageCircle}
                  label="WhatsApp Direct"
                  value="Chat on WhatsApp"
                  href={whatsappUrl}
                />
              </div>
            </div>

            {/* WhatsApp CTA card */}
            <a
              href={whatsappUrl}
              id="whatsapp-cta-card"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#C9A64B]/30 p-6 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A64B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* WhatsApp icon */}
              <div className="w-12 h-12 bg-[#1a1a1a] border border-[#2A2A2A] group-hover:border-[#C9A64B]/30 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#C9A64B" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.844L.073 23.27a.75.75 0 0 0 .917.91l5.355-1.643A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.691-.517-5.222-1.416L3 21.944l1.373-4.701A9.96 9.96 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </div>

              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#F5F2EA] group-hover:text-[#C9A64B] transition-colors duration-300 block">
                  Chat on WhatsApp
                </span>
                <span className="font-[family-name:var(--font-inter)] text-xs text-[#6B6560]">
                  Fastest response — usually within the hour
                </span>
              </div>
            </a>

            {/* Studio hours */}
            <div className="bg-[#080808] border border-[#1A1A1A] p-6 space-y-4">
              <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.3em] uppercase text-[#C9A64B] block">
                Studio Hours
              </span>
              {studioHours.map(({ day, hours }: { day: string; hours: string }) => (
                <div key={day} className="flex justify-between items-center border-b border-[#141414] pb-3 last:border-0 last:pb-0">
                  <span className="font-[family-name:var(--font-inter)] text-xs text-[#B7B1A3]">{day}</span>
                  <span className="font-[family-name:var(--font-inter)] text-xs text-[#6B6560]">{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
