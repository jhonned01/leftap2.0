"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Lightbulb,
  BarChart3,
  Target,
  CheckCircle,
  Users,
  GraduationCap,
  Building2,
  Sparkles,
  Heart,
  Layers,
  BookOpen,
  Brain,
  Mail,
  Pen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* =============================================
   ANIMATION VARIANTS
   ============================================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* =============================================
   DATA
   ============================================= */

const pasoSteps = [
  {
    letter: "P",
    title: "Pensá",
    description: "Objetivos, propósito, conexión con proyectos.",
    icon: Lightbulb,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    letter: "A",
    title: "Analizá",
    description: "Riesgos, información útil, comprensión financiera.",
    icon: BarChart3,
    gradient: "from-green-500 to-teal-600",
  },
  {
    letter: "S",
    title: "Simulá",
    description: "Escenarios, impacto del tiempo, evaluación.",
    icon: Target,
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    letter: "O",
    title: "Operá",
    description: "Acción responsable, portafolio, seguimiento.",
    icon: CheckCircle,
    gradient: "from-cyan-500 to-blue-600",
  },
];

const diferenciales = [
  {
    title: "Programas estructurados",
    description: "Contenidos secuenciales con objetivos claros y medibles.",
    icon: Layers,
  },
  {
    title: "Acompañamiento docente",
    description: "Formación y soporte continuo para educadores.",
    icon: Users,
  },
  {
    title: "Impacto familiar",
    description: "La educación financiera trasciende el aula y llega al hogar.",
    icon: Heart,
  },
  {
    title: "Cambio cultural",
    description:
      "Transformamos la relación de comunidades enteras con el dinero.",
    icon: Sparkles,
  },
];

const secciones = [
  {
    title: "Nuestros Servicios",
    description:
      "Conocé el Sistema P.A.S.O., nuestra metodología educativa que ordena el aprendizaje financiero paso a paso.",
    icon: Target,
    href: "/Servicios",
    cta: "Ver servicios",
    gradient: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    title: "Sobre Nosotros",
    description:
      "Más de 19 años formando personas con criterio pedagógico, humano y realista. Conocé quién está detrás de LEFTAP.",
    icon: Heart,
    href: "/Nosotros",
    cta: "Conocer más",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    title: "Desarrollo Personal",
    description:
      "Entrenamiento de 30 y 60 días para reprogramar tu mente, superar creencias limitantes y transformar tus finanzas.",
    icon: Brain,
    href: "/DesarrolloPersonal",
    cta: "Ver entrenamiento",
    gradient: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200",
    iconColor: "text-violet-600",
  },
  {
    title: "Blog LEFTAP",
    description:
      "Artículos, reflexiones y recursos sobre educación financiera, hábitos y toma de decisiones conscientes.",
    icon: Pen,
    href: "https://leftapdigital.blogspot.com/",
    cta: "Leer artículos",
    gradient: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    external: true,
  },
  {
    title: "Contacto",
    description:
      "Contanos tu consulta, tu proyecto o tu idea. Respondemos con una propuesta adaptada a tu realidad.",
    icon: Mail,
    href: "/Contacto",
    cta: "Escribinos",
    gradient: "from-teal-500 to-cyan-600",
    bgLight: "bg-teal-50",
    borderColor: "border-teal-200",
    iconColor: "text-teal-600",
  },
];

const segmentos = [
  {
    title: "Familias y Jóvenes",
    description:
      "LEFTAP acompaña a familias que quieren que sus hijos aprendan a manejar el dinero con criterio, responsabilidad y visión de futuro, antes de enfrentarse solos al mundo adulto.",
    detail:
      "A través del Sistema P.A.S.O., los jóvenes aprenden a pensar objetivos, analizar decisiones, simular escenarios reales y dar sus primeros pasos en inversión de forma consciente, sin promesas mágicas ni riesgos innecesarios.",
    cta: "Ver propuesta para familias",
    icon: Users,
    iconColor: "text-emerald-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    title: "Instituciones Educativas",
    description:
      "LEFTAP acompaña a instituciones educativas a integrar educación financiera aplicada en su propuesta formativa, a través de un programa estructurado que desarrolla en los estudiantes criterio, hábitos y conciencia financiera.",
    detail:
      "Esta propuesta no promete resultados financieros. Promete formación, prevención y preparación.",
    cta: "Ver propuesta institucional",
    icon: GraduationCap,
    iconColor: "text-blue-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Sector Público",
    description:
      "LEFTAP propone implementar programas de educación financiera aplicada, articulando con organismos públicos como socio técnico-pedagógico.",
    detail:
      "Promueve pensamiento económico crítico, hábitos financieros saludables y toma de decisiones responsables y conscientes.",
    cta: "Ver propuesta pública",
    icon: Building2,
    iconColor: "text-amber-600",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    gradient: "from-amber-500 to-orange-600",
  },
];

/* =============================================
   PAGE COMPONENT
   ============================================= */

const HomePage = () => {
  const heroTitle =
    "Educación financiera para aprender a decidir mejor hoy y construir un próspero futuro";
  const heroWords = heroTitle.split(" ");
  const highlightWords = ["decidir", "mejor", "próspero", "futuro"];

  return (
    <div className="-mt-[72px] md:-mt-[98.55px]">
      {/* =========================================
          HERO
          ========================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <img
            src="/NuevasImagenes/GrupoEstudiantes.jpg"
            className="h-full w-full object-cover"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-emerald-900/40" />
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-white/90 font-medium">
              Centro de Formación Financiera
            </span>
          </motion.div>

          {/* Title — word-by-word reveal */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            variants={wordContainer}
            initial="hidden"
            animate="visible"
          >
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className={`inline-block mr-[0.3em] ${
                  highlightWords.includes(word.toLowerCase())
                    ? "text-emerald-400"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            LEFTAP es un centro de formación que acompaña a jóvenes, familias,
            instituciones educativas y organismos públicos a integrar educación
            financiera real, consciente y responsable.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Link href="/Servicios">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full group"
              >
                Conocer cómo trabaja LEFTAP
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/Contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 hover:text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm text"
              >
                Contactanos
              </Button>
            </Link>
          </motion.div>
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
          PROPÓSITO
          ========================================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="mb-12"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-4"
              >
                Nuestro Propósito
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                El problema no es el dinero.{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  El problema es no haber aprendido a manejarlo
                </span>{" "}
                a temprana edad.
              </motion.h2>
            </motion.div>

            <motion.div
              className="space-y-6 text-lg text-gray-600 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerSlow}
            >
              <motion.p variants={fadeInUp}>
                La mayoría de los adultos en Latinoamérica aprendimos sobre
                dinero a los golpes: deudas, errores, frustración y malas
                decisiones.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="font-semibold text-gray-900 text-xl"
              >
                LEFTAP nace para cortar esa repetición.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Promovemos educación financiera realista, ética y aplicable para
                contextos de inflación e incertidumbre.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-emerald-700 font-medium border-l-4 border-emerald-500 pl-6 py-2"
              >
                No enseñamos recetas mágicas. Enseñamos criterio, hábitos y
                conciencia.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          DIFERENCIAL
          ========================================= */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-4"
            >
              Qué nos diferencia
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto"
            >
              LEFTAP no ofrece talleres aislados.{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Diseña procesos educativos.
              </span>
            </motion.h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {diferenciales.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-center text-xl md:text-2xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            LEFTAP es un{" "}
            <span className="text-emerald-600">aliado estratégico</span>, no un
            proveedor ocasional.
          </motion.p>
        </div>
      </section>

      {/* =========================================
          METODOLOGÍA P.A.S.O.
          ========================================= */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-4"
            >
              Nuestra Metodología
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
            >
              Sistema{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
                P.A.S.O.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Todos nuestros programas utilizan este sistema metodológico para
              garantizar un aprendizaje profundo y aplicable.
            </motion.p>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerSlow}
          >
            {pasoSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* Connecting line (desktop) */}
                {i < pasoSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-300 to-transparent z-0" />
                )}

                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-emerald-200 transition-colors duration-300">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6`}
                  >
                    <span className="text-3xl font-black text-white">
                      {step.letter}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key message */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl px-10 py-6">
              <p className="text-xl md:text-2xl font-bold text-gray-800">
                No formamos inversores.{" "}
                <span className="text-emerald-600">
                  Formamos personas con criterio.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SEGMENTOS
          ========================================= */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-4"
            >
              A quién acompañamos
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              ¿Por qué la educación financiera ya no puede esperar?
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-center text-lg md:text-xl text-gray-500 italic mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &ldquo;La educación financiera no empieza con el dinero, empieza con
            las decisiones.&rdquo;
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {segmentos.map((seg, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative overflow-hidden bg-white rounded-2xl border ${seg.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div className={`h-2 bg-gradient-to-r ${seg.gradient}`} />

                <div className="p-8 flex flex-col flex-1">
                  <div
                    className={`w-16 h-16 ${seg.bgLight} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <seg.icon className={`w-8 h-8 ${seg.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {seg.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {seg.description}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                    {seg.detail}
                  </p>

                  <Link href="/Contacto">
                    <Button
                      variant="outline"
                      className="group rounded-full border-gray-300 hover:border-emerald-500 hover:text-emerald-600"
                    >
                      {seg.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cierre de sección */}
          <motion.p
            className="text-center text-lg md:text-xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            LEFTAP no forma inversores especulativos.{" "}
            <span className="text-emerald-600">
              Forma ciudadanos con criterio económico.
            </span>
          </motion.p>
        </div>
      </section>

      {/* =========================================
          EXPLORÁ LEFTAP
          ========================================= */}
      {/* <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-4"
            >
              Explorá todo lo que ofrecemos
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto"
            >
              Cada sección, un paso hacia tu{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                transformación financiera
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {secciones.map((sec, i) => {
              const Icon = sec.icon;
              const CardContent = (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative overflow-hidden bg-white rounded-2xl border ${sec.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${sec.gradient}`} />
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div
                      className={`w-14 h-14 ${sec.bgLight} rounded-2xl flex items-center justify-center mb-5`}
                    >
                      <Icon className={`w-7 h-7 ${sec.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {sec.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                      {sec.description}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm group/link">
                      {sec.cta}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );

              return sec.external ? (
                <a
                  key={i}
                  href={sec.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CardContent}
                </a>
              ) : (
                <Link key={i} href={sec.href}>
                  {CardContent}
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section> */}

      {/* =========================================
          CTA FINAL
          ========================================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* BG */}
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
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 1,
          }}
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
              Empezá hoy a formar decisiones que{" "}
              <span className="text-emerald-400">duren toda la vida</span>.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/70 mb-10"
            >
              Sumá educación financiera a tu comunidad, tu institución o tu
              hogar.
            </motion.p>

            <motion.div variants={fadeInUp} className="relative inline-block">
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-500/20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              />
              <Link href="/Contacto">
                <Button
                  size="lg"
                  className="relative bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 text-lg rounded-full group shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                >
                  Contactar con LEFTAP
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
