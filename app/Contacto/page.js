"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Clock,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

/* =============================================
   ANIMATION VARIANTS
   ============================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: i * 0.1 },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =============================================
   DATA
   ============================================= */

const contactInfo = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "informes@leftap.org",
    href: "mailto:informes@leftap.org",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+549 381 4678623",
    href: "https://wa.me/5493814678623",
    isWhatsApp: true,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Rondeau 526 - 6to E, San Miguel de Tucumán, Argentina",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    value: "LEFTAP",
    href: "https://www.facebook.com/LEFTAP",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@leftap.ok",
    href: "https://www.instagram.com/leftap.ok/",
  },
];

const reasons = [
  {
    icon: MessageCircle,
    title: "Respuesta rápida",
    description: "Te respondemos en menos de 24 horas hábiles.",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    icon: Clock,
    title: "Sin compromiso",
    description: "Consulta sin costo y sin obligación.",
    accent: "from-teal-500 to-cyan-400",
  },
  {
    icon: CheckCircle2,
    title: "Asesoramiento personalizado",
    description: "Adaptamos nuestra propuesta a tu necesidad.",
    accent: "from-cyan-500 to-emerald-400",
  },
];

/* =============================================
   WHATSAPP SVG ICON
   ============================================= */

const WhatsAppIcon = ({ className }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

/* =============================================
   NOISE TEXTURE OVERLAY
   ============================================= */

const NoiseOverlay = ({ opacity = 0.03 }) => (
  <div
    className="absolute inset-0 pointer-events-none z-[1]"
    style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "128px 128px",
    }}
  />
);

/* =============================================
   PAGE COMPONENT
   ============================================= */

const Contacto = () => {
  const [InputValues, setInputValues] = useState({});
  const [IsLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const formRef = useRef(null);
  const reasonsRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.1 });
  const reasonsInView = useInView(reasonsRef, { once: true, amount: 0.2 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (Object.keys(InputValues).length === 0) {
        alert("Por favor, rellene todos los campos");
        return;
      }

      if (!InputValues?.NumeroCelular) {
        alert("Por favor, ingrese su número de celular");
        return;
      }
      const response = await fetch("/api/SendMailContacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(InputValues),
      });

      const responseData = await response.json();

      if (!response.ok) {
        alert("Error al enviar el mensaje");
        return;
      }

      setSent(true);
      setInputValues({});
      e.target.reset();
    } catch (err) {
      console.log("Error: ", err);
      alert("Error al enviar el mensaje");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="-mt-[72px] md:-mt-[98.55px]">
      {/* =========================================
          HERO — Cinematic split with diagonal clip
          ========================================= */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden bg-gray-950">
        {/* Background image with clip */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 md:clip-diagonal">
            <img
              src="/Banners/BannerContacto.webp"
              className="h-full w-full object-cover scale-105"
              alt="Contacto LEFTAP"
            />
          </div>
          {/* Layered overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />
          <NoiseOverlay opacity={0.04} />
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />
          <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
          <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
          <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />
        </div>

        {/* Floating accent shapes */}
        <motion.div
          className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[30%] w-48 h-48 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.4) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-300 font-medium tracking-wider uppercase">
                Estamos para ayudarte
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Hablemos
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  sobre vos.
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Contanos tu consulta, tu proyecto o tu idea. Te respondemos
              con una propuesta adaptada a tu realidad.
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Scroll
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="w-1 h-1.5 rounded-full bg-emerald-400"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          FORMULARIO + CONTACTO — Editorial split
          ========================================= */}
      <section className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
        <NoiseOverlay opacity={0.02} />

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto" ref={formRef}>
            {/* Section header */}
            <motion.div
              className="mb-16 md:mb-20"
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-xs font-semibold text-emerald-600 tracking-[0.2em] uppercase">
                  Contacto
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                Conectá con{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  LEFTAP
                </span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16">
              {/* Left column — Contact info */}
              <motion.div
                className="lg:col-span-4 xl:col-span-5"
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
              >
                <div className="lg:sticky lg:top-32 space-y-6">
                  <motion.p
                    variants={slideInLeft}
                    className="text-gray-500 leading-relaxed text-sm md:text-base"
                  >
                    Si tenés una consulta, una propuesta o querés saber cómo
                    integrar educación financiera en tu comunidad, escribinos.
                  </motion.p>

                  {/* Contact cards */}
                  <div className="space-y-3">
                    {contactInfo.map((item, i) => {
                      const Icon = item.icon;
                      const card = (
                        <motion.div
                          key={i}
                          variants={slideInLeft}
                          custom={i + 1}
                          whileHover={{
                            x: 4,
                            transition: { duration: 0.2 },
                          }}
                          className={`group flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 ${
                            item.href ? "cursor-pointer" : ""
                          }`}
                        >
                          <div className="w-11 h-11 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-emerald-100 group-hover:to-teal-100 transition-colors duration-300">
                            {item.isWhatsApp ? (
                              <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                            ) : (
                              <Icon className="w-5 h-5 text-emerald-600" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                              {item.label}
                            </p>
                            <p className="text-gray-800 font-medium text-sm leading-snug">
                              {item.value}
                            </p>
                          </div>
                          {item.href && (
                            <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 ml-auto mt-1 flex-shrink-0 transition-colors duration-300" />
                          )}
                        </motion.div>
                      );

                      return item.href ? (
                        <a
                          key={i}
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {card}
                        </a>
                      ) : (
                        <div key={i}>{card}</div>
                      );
                    })}
                  </div>

                  {/* Social links */}
                  <motion.div variants={slideInLeft} custom={5}>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Redes sociales
                    </p>
                    <div className="flex gap-2">
                      {socialLinks.map((social, i) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
                          >
                            <Icon className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors duration-300" />
                            <span className="text-gray-600 group-hover:text-gray-900 font-medium text-sm transition-colors duration-300">
                              {social.value}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Decorative quote */}
                  <motion.div
                    variants={slideInLeft}
                    custom={6}
                    className="relative p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
                  >
                    <NoiseOverlay opacity={0.06} />
                    <div className="relative z-10">
                      <div className="text-emerald-400 text-3xl font-serif leading-none mb-2">
                        &ldquo;
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed italic">
                        La educación financiera no es un lujo, es una necesidad
                        para construir un futuro con decisiones conscientes.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-6 h-px bg-emerald-500" />
                        <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                          LEFTAP
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right column — Form */}
              <motion.div
                className="lg:col-span-8 xl:col-span-7"
                variants={slideInRight}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
              >
                <div className="relative bg-white rounded-3xl border border-gray-200/80 shadow-xl shadow-gray-200/40 overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

                  <div className="p-6 sm:p-8 lg:p-10">
                    {sent ? (
                      <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <motion.div
                          className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-50 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6"
                          initial={{ rotate: -10 }}
                          animate={{ rotate: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          Mensaje enviado
                        </h3>
                        <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
                          Gracias por contactarnos. Te responderemos a la
                          brevedad posible.
                        </p>
                        <Button
                          onClick={() => setSent(false)}
                          className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-5 text-sm font-medium group"
                        >
                          Enviar otro mensaje
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    ) : (
                      <>
                        <div className="mb-8">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">
                            Envianos tu consulta
                          </h3>
                          <p className="text-gray-400 text-sm">
                            Completá el formulario y nos pondremos en contacto.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label
                                htmlFor="NombreCompleto"
                                className="text-gray-600 font-medium text-sm"
                              >
                                Nombre Completo
                              </Label>
                              <div
                                className={`relative rounded-xl transition-shadow duration-300 ${
                                  focusedField === "nombre"
                                    ? "shadow-[0_0_0_3px_rgba(16,185,129,0.1)]"
                                    : ""
                                }`}
                              >
                                <Input
                                  id="NombreCompleto"
                                  placeholder="Ingrese su nombre"
                                  type="text"
                                  autoComplete="off"
                                  required
                                  className="h-12 rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-emerald-400 focus:ring-0 transition-all duration-300 placeholder:text-gray-300"
                                  onFocus={() => setFocusedField("nombre")}
                                  onBlur={() => setFocusedField(null)}
                                  onChange={(e) => {
                                    setInputValues({
                                      ...InputValues,
                                      NombreCompleto: e.target.value,
                                    });
                                  }}
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="email"
                                className="text-gray-600 font-medium text-sm"
                              >
                                Correo Electrónico
                              </Label>
                              <div
                                className={`relative rounded-xl transition-shadow duration-300 ${
                                  focusedField === "email"
                                    ? "shadow-[0_0_0_3px_rgba(16,185,129,0.1)]"
                                    : ""
                                }`}
                              >
                                <Input
                                  id="email"
                                  type="email"
                                  required
                                  placeholder="ejemplo@correo.com"
                                  autoComplete="off"
                                  className="h-12 rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-emerald-400 focus:ring-0 transition-all duration-300 placeholder:text-gray-300"
                                  onFocus={() => setFocusedField("email")}
                                  onBlur={() => setFocusedField(null)}
                                  onChange={(e) => {
                                    setInputValues({
                                      ...InputValues,
                                      Correo: e.target.value,
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label
                                htmlFor="phone"
                                className="text-gray-600 font-medium text-sm"
                              >
                                Celular
                              </Label>
                              <PhoneInput
                                country="US"
                                onChange={(e) => {
                                  setInputValues({
                                    ...InputValues,
                                    NumeroCelular: e,
                                  });
                                }}
                                placeholder="Ingrese su número"
                                value={InputValues?.NumeroCelular}
                                className="[&_input]:h-12 [&_input]:rounded-xl [&_input]:border-gray-200 [&_input]:bg-gray-50/50 [&_input]:focus:bg-white [&_input]:focus:border-emerald-400 [&_input]:placeholder:text-gray-300"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="subject"
                                className="text-gray-600 font-medium text-sm"
                              >
                                Asunto
                              </Label>
                              <div
                                className={`relative rounded-xl transition-shadow duration-300 ${
                                  focusedField === "asunto"
                                    ? "shadow-[0_0_0_3px_rgba(16,185,129,0.1)]"
                                    : ""
                                }`}
                              >
                                <Input
                                  id="subject"
                                  placeholder="Motivo de la consulta"
                                  type="text"
                                  required
                                  autoComplete="off"
                                  className="h-12 rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-emerald-400 focus:ring-0 transition-all duration-300 placeholder:text-gray-300"
                                  onFocus={() => setFocusedField("asunto")}
                                  onBlur={() => setFocusedField(null)}
                                  onChange={(e) => {
                                    setInputValues({
                                      ...InputValues,
                                      Asunto: e.target.value,
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="message"
                              className="text-gray-600 font-medium text-sm"
                            >
                              Descripción del mensaje
                            </Label>
                            <div
                              className={`relative rounded-xl transition-shadow duration-300 ${
                                focusedField === "mensaje"
                                  ? "shadow-[0_0_0_3px_rgba(16,185,129,0.1)]"
                                  : ""
                              }`}
                            >
                              <Textarea
                                id="message"
                                placeholder="Contanos en qué podemos ayudarte..."
                                required
                                rows={5}
                                autoComplete="off"
                                className="rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-emerald-400 focus:ring-0 resize-none transition-all duration-300 placeholder:text-gray-300"
                                onFocus={() => setFocusedField("mensaje")}
                                onBlur={() => setFocusedField(null)}
                                onChange={(e) => {
                                  setInputValues({
                                    ...InputValues,
                                    Descripcion: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>

                          <div className="pt-2">
                            <Button
                              type="submit"
                              className="w-full h-13 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold group relative overflow-hidden transition-all duration-300"
                              disabled={IsLoading}
                            >
                              <span className="relative z-10 flex items-center justify-center gap-2">
                                {IsLoading ? (
                                  <>
                                    <motion.div
                                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                      animate={{ rotate: 360 }}
                                      transition={{
                                        repeat: Infinity,
                                        duration: 0.8,
                                        ease: "linear",
                                      }}
                                    />
                                    Enviando...
                                  </>
                                ) : (
                                  <>
                                    Enviar mensaje
                                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                  </>
                                )}
                              </span>
                            </Button>
                          </div>

                          <p className="text-center text-[11px] text-gray-400 pt-1">
                            Te responderemos en menos de 24 horas hábiles
                          </p>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          POR QUÉ CONTACTARNOS — Editorial cards
          ========================================= */}
      <section ref={reasonsRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14 md:mb-16"
            initial="hidden"
            animate={reasonsInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-emerald-500" />
              <span className="text-xs font-semibold text-emerald-600 tracking-[0.2em] uppercase">
                Por qué elegirnos
              </span>
              <div className="h-px w-8 bg-emerald-500" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Tu consulta es{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                importante
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto"
            initial="hidden"
            animate={reasonsInView ? "visible" : "hidden"}
          >
            {reasons.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={scaleUp}
                  custom={i}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-white rounded-2xl p-7 sm:p-8 text-center border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Number watermark */}
                  <span className="absolute top-4 right-5 text-[80px] font-bold text-gray-50 leading-none select-none group-hover:text-emerald-50 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${item.accent} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CTA FINAL — Cinematic WhatsApp
          ========================================= */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glow effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        />

        <NoiseOverlay opacity={0.04} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs text-emerald-300 font-medium tracking-wider uppercase">
                Chat directo
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight"
            >
              También podés
              <br />
              escribirnos por{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                WhatsApp
              </span>
              .
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed"
            >
              Si preferís una conversación más directa, mandanos un mensaje
              y te respondemos al instante.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="relative inline-block">
              {/* Animated ring pulse */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <a
                href="https://wa.me/5493814678623"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="relative bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-7 text-base rounded-full group shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-500"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Escribir por WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
