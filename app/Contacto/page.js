"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

/* =============================================
   ANIMATION VARIANTS
   ============================================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
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
  },
  {
    icon: Clock,
    title: "Sin compromiso",
    description: "Consulta sin costo y sin obligación.",
  },
  {
    icon: CheckCircle2,
    title: "Asesoramiento personalizado",
    description: "Adaptamos nuestra propuesta a tu necesidad.",
  },
];

/* =============================================
   PAGE COMPONENT
   ============================================= */

const Contacto = () => {
  const [InputValues, setInputValues] = useState({});
  const [IsLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

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
          HERO
          ========================================= */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/Banners/BannerContacto.webp"
            className="h-full w-full object-cover"
            alt="Contacto LEFTAP"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-emerald-900/40" />
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-white/90 font-medium">
              Estamos para ayudarte
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hablemos sobre{" "}
            <span className="text-emerald-400">educación financiera</span>.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Contanos tu consulta, tu proyecto o tu idea. Te respondemos con una
            propuesta adaptada a tu realidad.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* =========================================
          FORMULARIO + CONTACTO
          ========================================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {/* Información de contacto */}
              <motion.div
                className="lg:col-span-5 space-y-8"
                variants={staggerSlow}
              >
                <motion.div variants={fadeInLeft}>
                  <span className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-3">
                    Información de contacto
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                    Conectá con{" "}
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                      LEFTAP
                    </span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Si tenés una consulta, una propuesta o querés saber cómo
                    integrar educación financiera en tu comunidad, escribinos.
                  </p>
                </motion.div>

                {/* Contact details */}
                <motion.div className="space-y-4" variants={stagger}>
                  {contactInfo.map((item, i) => {
                    const Icon = item.icon;
                    const content = (
                      <motion.div
                        key={i}
                        variants={fadeInLeft}
                        className={`flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300 ${
                          item.href ? "cursor-pointer" : ""
                        }`}
                      >
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          {item.isWhatsApp ? (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-emerald-600"
                            >
                              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                          ) : (
                            <Icon className="w-5 h-5 text-emerald-600" />
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          <p className="text-gray-800 font-medium text-sm sm:text-base">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    );

                    return item.href ? (
                      <a
                        key={i}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={i}>{content}</div>
                    );
                  })}
                </motion.div>

                {/* Social links */}
                <motion.div variants={fadeInLeft}>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Redes sociales
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300"
                        >
                          <Icon className="w-5 h-5 text-emerald-600" />
                          <span className="text-gray-700 font-medium text-sm">
                            {social.value}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>

              {/* Formulario */}
              <motion.div
                className="lg:col-span-7"
                variants={fadeInRight}
              >
                <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-8 lg:p-10">
                  {sent ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Mensaje enviado
                      </h3>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Gracias por contactarnos. Te responderemos a la brevedad
                        posible.
                      </p>
                      <Button
                        onClick={() => setSent(false)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8"
                      >
                        Enviar otro mensaje
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Envianos tu consulta
                        </h3>
                        <p className="text-gray-500">
                          Completá el formulario y nos pondremos en contacto.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="NombreCompleto" className="text-gray-700 font-medium">
                              Nombre Completo
                            </Label>
                            <Input
                              id="NombreCompleto"
                              placeholder="Ingrese su nombre"
                              type="text"
                              autoComplete="off"
                              required
                              className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                              onChange={(e) => {
                                setInputValues({
                                  ...InputValues,
                                  NombreCompleto: e.target.value,
                                });
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700 font-medium">
                              Correo Electrónico
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              placeholder="ejemplo@correo.com"
                              autoComplete="off"
                              className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                              onChange={(e) => {
                                setInputValues({
                                  ...InputValues,
                                  Correo: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-700 font-medium">
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
                              className="[&_input]:h-12 [&_input]:rounded-xl [&_input]:border-gray-200"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject" className="text-gray-700 font-medium">
                              Asunto
                            </Label>
                            <Input
                              id="subject"
                              placeholder="Motivo de la consulta"
                              type="text"
                              required
                              autoComplete="off"
                              className="h-12 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                              onChange={(e) => {
                                setInputValues({
                                  ...InputValues,
                                  Asunto: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-gray-700 font-medium">
                            Descripción del mensaje
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Contanos en qué podemos ayudarte..."
                            required
                            rows={5}
                            autoComplete="off"
                            className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                            onChange={(e) => {
                              setInputValues({
                                ...InputValues,
                                Descripcion: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-base font-semibold group"
                          disabled={IsLoading}
                        >
                          <Send
                            className={`w-4 h-4 mr-2 ${IsLoading ? "" : "group-hover:translate-x-1"} transition-transform`}
                          />
                          {IsLoading ? "Enviando..." : "Enviar mensaje"}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          POR QUÉ CONTACTARNOS
          ========================================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-4"
            >
              Por qué contactarnos
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
            >
              Tu consulta es{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                importante
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {reasons.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CTA FINAL
          ========================================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              También podés escribirnos por{" "}
              <span className="text-emerald-400">WhatsApp</span>.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/70 mb-10"
            >
              Si preferís una conversación más directa, mandanos un mensaje
              y te respondemos al instante.
            </motion.p>

            <motion.div variants={fadeInUp} className="relative inline-block">
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-500/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              />
              <a
                href="https://wa.me/5493814678623"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="relative bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 text-lg rounded-full group shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                >
                  Escribir por WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
