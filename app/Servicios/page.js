"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  BarChart3,
  Puzzle,
  Hammer,
  Users,
  GraduationCap,
  Building2,
  Sparkles,
  Target,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  LineChart,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
   DATA — SISTEMA P.A.S.O.
   ============================================= */

const pasoSteps = [
  {
    letter: "P",
    title: "PENSÁ",
    emoji: "🧠",
    tagline: "Antes de hablar de dinero, hablamos de vida.",
    subtitle:
      "Definir objetivos, prioridades y metas personales.",
    bullets: [
      "Definir qué quieren lograr",
      "Entender para qué sirve el dinero",
      "Conectar decisiones financieras con proyectos personales",
    ],
    quote: "Sin objetivos, el dinero se pierde.",
    icon: Brain,
    gradient: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    accentColor: "text-emerald-600",
    bulletIcon: Target,
  },
  {
    letter: "A",
    title: "ANALIZÁ",
    emoji: "📊",
    tagline: "No todo lo que brilla es oportunidad.",
    subtitle:
      "Comprender cómo se mueve el dinero, los riesgos y las opciones disponibles.",
    bullets: [
      "Entender cómo se mueve el dinero",
      "Identificar riesgos reales",
      "Diferenciar información de moda de información útil",
    ],
    quote: "No se invierte en lo que no se entiende.",
    icon: BarChart3,
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    accentColor: "text-blue-600",
    bulletIcon: LineChart,
  },
  {
    letter: "S",
    title: "SIMULÁ",
    emoji: "🧩",
    tagline: "Antes de arriesgar, se piensa.",
    subtitle:
      "Evaluar escenarios posibles antes de tomar decisiones reales.",
    bullets: [
      "Simulan escenarios reales",
      "Evalúan qué pasaría si empiezan hoy o si no empiezan",
      "Comprenden el impacto del tiempo y las decisiones",
    ],
    quote: "Simular es evitar errores costosos.",
    icon: Puzzle,
    gradient: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200",
    iconColor: "text-violet-600",
    accentColor: "text-violet-600",
    bulletIcon: Clock,
  },
  {
    letter: "O",
    title: "OPERÁ",
    emoji: "🧱",
    tagline: "Dar el primer paso, pero con criterio.",
    subtitle:
      "Dar pasos concretos con criterio, conciencia y responsabilidad.",
    bullets: [
      "Dónde empezar según su perfil",
      "Cómo construir un portafolio simple",
      "Cómo hacer seguimiento sin ansiedad",
    ],
    quote: "Operar no es apostar. Es decidir con información.",
    icon: Hammer,
    gradient: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    accentColor: "text-amber-600",
    bulletIcon: Briefcase,
  },
];

/* =============================================
   DATA — SEGMENTOS
   ============================================= */

const segmentos = [
  {
    title: "Familias y Jóvenes",
    icon: Users,
    gradient: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    description:
      "LEFTAP acompaña a familias que quieren que sus hijos aprendan a manejar el dinero con criterio, responsabilidad y visión de futuro, antes de enfrentarse solos al mundo adulto.",
    detail:
      "A través del Sistema P.A.S.O., los jóvenes aprenden a pensar objetivos, analizar decisiones, simular escenarios reales y dar sus primeros pasos en inversión de forma consciente, sin promesas mágicas ni riesgos innecesarios.",
    cta: "Ver propuesta para familias",
    href: "/Contacto",
  },
  {
    title: "Instituciones Educativas",
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    description:
      "LEFTAP acompaña a instituciones educativas a integrar educación financiera aplicada en su propuesta formativa, a través de un programa estructurado que desarrolla en los estudiantes criterio, hábitos y conciencia financiera, alineado con los desafíos reales del mundo actual.",
    detail: null,
    highlights: [
      "No promete resultados financieros",
      "Promete formación, prevención y preparación",
    ],
    cta: "Ver propuesta institucional",
    href: "/Contacto",
  },
  {
    title: "Sector Público",
    icon: Building2,
    gradient: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    description:
      "Para implementar educación financiera como política pública preventiva y formativa. LEFTAP propone implementar programas de educación financiera aplicada, articulando con organismos públicos como socio técnico-pedagógico.",
    detail: null,
    highlights: [
      "Pensamiento económico crítico",
      "Hábitos financieros saludables",
      "Toma de decisiones responsables y conscientes",
    ],
    cta: "Ver propuesta B2G",
    href: "/Contacto",
  },
];

/* =============================================
   PASO STEP CARD COMPONENT
   ============================================= */

function PasoCard({ step, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = step.icon;
  const BulletIcon = step.bulletIcon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      className="relative"
    >
      {/* Timeline connector (desktop) */}
      {index < pasoSteps.length - 1 && (
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent z-0" />
      )}

      <motion.div
        whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        className={`relative overflow-hidden bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border ${step.borderColor}`}
      >
        {/* Top gradient bar */}
        <div className={`h-1.5 bg-gradient-to-r ${step.gradient}`} />

        <div className={`p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start`}>
          {/* Letter + Icon block */}
          <div className={`lg:col-span-3 flex flex-col items-center text-center ${isEven ? "" : "lg:order-last"}`}>
            <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-lg`}>
              <span className="text-4xl sm:text-5xl font-black text-white">
                {step.letter}
              </span>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                <Icon className={`w-5 h-5 ${step.iconColor}`} />
              </div>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-black ${step.accentColor} tracking-wide`}>
              {step.title}
            </h3>
            <p className="text-2xl mt-1">{step.emoji}</p>
          </div>

          {/* Content block */}
          <div className={`lg:col-span-9 ${isEven ? "" : "lg:order-first"}`}>
            <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              {step.tagline}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {step.subtitle}
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Los jóvenes aprenden a:
              </p>
              {step.bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className={`flex-shrink-0 w-8 h-8 ${step.bgLight} rounded-lg flex items-center justify-center mt-0.5`}>
                    <CheckCircle2 className={`w-4 h-4 ${step.iconColor}`} />
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg">{bullet}</p>
                </motion.div>
              ))}
            </div>

            {/* Key quote */}
            <div className={`border-l-4 ${step.borderColor} ${step.bgLight} rounded-r-xl px-5 py-4`}>
              <p className={`font-bold text-base sm:text-lg ${step.accentColor} flex items-center gap-2`}>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                {step.quote}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =============================================
   SEGMENT CARD COMPONENT
   ============================================= */

function SegmentCard({ seg, index }) {
  const Icon = seg.icon;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`relative overflow-hidden bg-white rounded-3xl border ${seg.borderColor} shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col`}
    >
      {/* Top gradient */}
      <div className={`h-2 bg-gradient-to-r ${seg.gradient}`} />

      <div className="p-6 sm:p-8 flex flex-col flex-1">
        {/* Icon */}
        <div className={`w-16 h-16 ${seg.bgLight} rounded-2xl flex items-center justify-center mb-6`}>
          <Icon className={`w-8 h-8 ${seg.iconColor}`} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {seg.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          {seg.description}
        </p>

        {/* Detail or highlights */}
        {seg.detail && (
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {seg.detail}
          </p>
        )}

        {seg.highlights && (
          <div className="space-y-2 mb-6">
            {seg.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 ${seg.iconColor} mt-1 flex-shrink-0`} />
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <Link href={seg.href}>
          <Button
            variant="outline"
            className={`group rounded-full border-gray-300 hover:${seg.borderColor} hover:${seg.iconColor} w-full sm:w-auto`}
          >
            {seg.cta}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

/* =============================================
   PAGE COMPONENT
   ============================================= */

const ServiciosPage = () => {
  return (
    <div className="-mt-[72px] md:-mt-[98.55px]">
      {/* =========================================
          HERO
          ========================================= */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/NuevasImagenes/ClasesEstudiantes.jpg"
            className="h-full w-full object-cover"
            alt="Estudiantes en clase"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-emerald-900/40" />
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
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
              Nuestro Método Educativo
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Un método claro para aprender a{" "}
            <span className="text-emerald-400">decidir con dinero</span>.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Todos los programas de LEFTAP se basan en el Sistema P.A.S.O., una
            metodología educativa que ordena el aprendizaje financiero y evita la
            improvisación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link href="#sistema-paso">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full group"
              >
                Conocer el Sistema P.A.S.O.
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
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
          SECCIÓN 4 — SISTEMA P.A.S.O.
          ========================================= */}
      <section id="sistema-paso" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-4"
            >
              ¿Cómo lo hacemos?
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
            >
              Nuestro Sistema{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
                P.A.S.O.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Una metodología educativa propia que ordena el aprendizaje
              financiero paso a paso, con fundamento pedagógico y aplicación real.
            </motion.p>
          </motion.div>

          {/* P.A.S.O. Steps */}
          <motion.div
            className="space-y-10 lg:space-y-16 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerSlow}
          >
            {pasoSteps.map((step, index) => (
              <PasoCard key={step.letter} step={step} index={index} />
            ))}
          </motion.div>

          {/* Key message */}
          <motion.div
            className="text-center mt-16 md:mt-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl px-8 sm:px-12 py-8">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                No preparamos a inversores.
                <br />
                <span className="text-emerald-600">
                  Preparamos a personas para que tomen buenas decisiones
                  financieras.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECCIÓN 5 — A QUIÉN ACOMPAÑA LEFTAP
          ========================================= */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section header */}
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
              ¿Por qué la educación financiera{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                ya no puede esperar
              </span>
              ?
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

          {/* Segment cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {segmentos.map((seg, i) => (
              <SegmentCard key={i} seg={seg} index={i} />
            ))}
          </motion.div>

          {/* Closing message */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl font-semibold text-gray-800">
              LEFTAP no forma inversores especulativos.{" "}
              <span className="text-emerald-600">
                Forma ciudadanos con criterio económico.
              </span>
            </p>
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
              Empezá hoy a formar decisiones que{" "}
              <span className="text-emerald-400">duren toda la vida</span>.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/70 mb-10"
            >
              Sumá educación financiera a tu comunidad, tu institución o tu hogar.
            </motion.p>

            <motion.div variants={fadeInUp} className="relative inline-block">
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-500/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
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

export default ServiciosPage;
