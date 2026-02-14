"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  BookOpen,
  Heart,
  Users,
  Building2,
  GraduationCap,
  Target,
  Eye,
  Lightbulb,
  Award,
  Quote,
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
   DATA
   ============================================= */

const valores = [
  {
    title: "Misión",
    icon: Target,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    borderColor: "border-emerald-200",
    description:
      "Promover la educación financiera aplicada desde una mirada pedagógica, humana y realista, para que jóvenes y adultos desarrollen criterio, hábitos y conciencia financiera que les permitan tomar mejores decisiones a lo largo de su vida.",
  },
  {
    title: "Visión",
    icon: Eye,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    borderColor: "border-blue-200",
    description:
      "Contribuir a la transformación del sistema educativo en Latinoamérica, integrando la educación financiera como una competencia básica para la vida, con impacto social, institucional y comunitario.",
  },
  {
    title: "Objetivos",
    icon: Lightbulb,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
    borderColor: "border-amber-200",
    description:
      "Nos enfocamos en capacitar docentes en educación financiera y empoderar a jóvenes emprendedores. Ofrecemos conferencias, talleres, programas específicos, recursos innovadores y apoyo continuo para mejorar sus competencias. Colaboramos con instituciones educativas para integrar esta formación en los planes escolares.",
  },
  {
    title: "Valores",
    icon: Heart,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
    borderColor: "border-rose-200",
    description:
      "Creemos firmemente en el poder del conocimiento para transformar vidas y generar libertad financiera. Nuestra innovación constante nos permite adoptar nuevas ideas y tecnologías que impulsan el crecimiento personal y profesional. Actuamos con integridad, manteniendo la honestidad y transparencia en todas nuestras acciones.",
  },
];

const pilares = [
  {
    icon: BookOpen,
    title: "+19 años",
    description: "de experiencia docente",
  },
  {
    icon: Users,
    title: "Familias",
    description: "y jóvenes acompañados",
  },
  {
    icon: Building2,
    title: "Instituciones",
    description: "educativas asesoradas",
  },
  {
    icon: GraduationCap,
    title: "Pedagogía",
    description: "como fundamento",
  },
];

/* =============================================
   PAGE COMPONENT
   ============================================= */

const NosotrosPage = () => {
  return (
    <div className="-mt-25 md:mt-0">
      {/* =========================================
          HERO
          ========================================= */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/NuevasImagenes/ClasesEstudiantes.jpg"
            className="h-full w-full object-cover"
            alt="Clases con estudiantes"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-white/90 font-medium">
              Quién está detrás de LEFTAP
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Educación financiera con{" "}
            <span className="text-emerald-400">criterio pedagógico</span>.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Más de 19 años formando personas para que tomen mejores decisiones
            financieras con responsabilidad y conciencia.
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
          QUIÉN SOY — MIRTA LÓPEZ
          ========================================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {/* Image */}
              <motion.div className="lg:col-span-5" variants={fadeInLeft}>
                <div className="relative">
                  {/* Decorative background */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="/NuevasImagenes/Perfil4.jpg"
                      alt="Mirta López — Fundadora de LEFTAP"
                      width={600}
                      height={750}
                      className="w-full h-auto object-cover aspect-[4/5] object-top"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-gray-900">+19</p>
                        <p className="text-xs text-gray-500 font-medium">
                          Años de experiencia
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Bio content */}
              <motion.div
                className="lg:col-span-7 space-y-6"
                variants={staggerSlow}
              >
                <motion.div variants={fadeInUp}>
                  <span className="text-sm font-semibold text-emerald-600 tracking-widest uppercase block mb-3">
                    Fundadora de LEFTAP
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Mirta{" "}
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                      López
                    </span>
                  </h2>
                  <p className="text-lg text-gray-500 mt-2">
                    Profesora de Economía
                  </p>
                </motion.div>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 leading-relaxed text-base sm:text-lg"
                >
                  Desde el aula y el trabajo directo con estudiantes, familias y
                  docentes, comprendí que la mayoría de las personas llegan a la
                  vida adulta sin haber recibido herramientas reales para tomar
                  decisiones financieras con criterio, responsabilidad y
                  conciencia.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 leading-relaxed text-base sm:text-lg"
                >
                  Por eso trabajo para que los jóvenes aprendan a decidir antes
                  de equivocarse, y para que las familias puedan mirar el futuro
                  con mayor tranquilidad, sabiendo que sus hijos cuentan con una
                  base sólida para enfrentar el mundo económico real.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-600 leading-relaxed text-base sm:text-lg"
                >
                  Acompaño a instituciones educativas y organismos públicos a
                  integrar la educación financiera como parte de una formación
                  integral, alineada con los desafíos sociales y económicos
                  actuales, y orientada a desarrollar autonomía, pensamiento
                  crítico y responsabilidad ciudadana.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-700 font-medium leading-relaxed text-base sm:text-lg"
                >
                  LEFTAP surge de la experiencia real en el aula y de una
                  convicción profunda:
                </motion.p>

                {/* Key quote */}
                <motion.div
                  variants={fadeInUp}
                  className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-2xl px-6 py-5"
                >
                  <p className="text-emerald-800 font-bold text-lg sm:text-xl leading-relaxed italic flex gap-3">
                    <Quote className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    La educación financiera no debe enseñarse desde la urgencia
                    ni la promesa fácil, sino con profundidad pedagógica, ética
                    y sentido humano.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          PILARES / NÚMEROS
          ========================================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {pilares.map((pilar, i) => {
              const Icon = pilar.icon;
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
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {pilar.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{pilar.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          MISIÓN, VISIÓN, OBJETIVOS, VALORES
          ========================================= */}
      <section className="py-20 md:py-32 bg-white">
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
              Nuestros Pilares
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Lo que nos{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                guía y define
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {valores.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className={`p-6 sm:p-8 space-y-4 border ${item.borderColor} rounded-2xl shadow-sm hover:shadow-lg bg-white transition-all duration-300`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
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
              Conocé cómo LEFTAP puede{" "}
              <span className="text-emerald-400">acompañarte</span>.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/70 mb-10"
            >
              Educación financiera para tu familia, tu institución o tu
              comunidad.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/Servicios">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-full group shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
                >
                  Ver nuestros servicios
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/Contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                >
                  Contactar
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;
