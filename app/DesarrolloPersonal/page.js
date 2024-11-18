"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Book,
  Monitor,
  MessageCircle,
  Sunrise,
  Target,
  ArrowRight,
  HandHeart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const DesarrolloPersonal = () => {
  const BannerInicio = [
    {
      imagen: "/DesarrolloPerosonal.jpg",
      texto: "Personal de 60 días para mejorar tus finanzas personales.",
    },
    {
      imagen: "/DesarrolloPerosonal2.jpg",
      texto: "Entrenamiento personal de 30 días para el reto financiero",
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="-mt-[72px] md:-mt-[98.55px] lg:-mt-[98.55px] bg-gray-50">
      <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
        {BannerInicio?.map((banner, index) => (
          <div key={index} className="relative w-full h-[21rem] sm:h-screen">
            <img
              src={banner.imagen}
              className="h-full w-full object-cover overflow-hidden"
              alt={`slider ${index}`}
            />

            <motion.div
              className="absolute top-0 left-0 w-full h-full text-white bg-black/40"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-start items-center max-w-[883px] h-full pl-2 sm:text-3xl sm:pl-20">
                <div className="max-w-[40rem] space-y-1 sm:space-y-4">
                  <motion.section
                    className="sm:p-2 font-bold bg-white text-black border border-Secundario text-xl uppercase rounded-3xl rounded-br-none rounded-tl-none outline-none shadow-lg hover:shadow-xl hover:opacity-90 duration-200 w-[12.5rem]"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    ENTRENAMIENTO
                  </motion.section>
                  <motion.p
                    className="text-start text-base sm:text-4xl font-extrabold"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {banner.texto}
                  </motion.p>

                  <Link href={"/Contacto"} className="flex justify-start">
                    <motion.div
                      className="group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-start cursor-pointer sm:h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-transparent text-white border-Secundario hover:text-black hover:bg-Tercieario"
                      initial="hidden"
                      animate="visible"
                      variants={fadeInVariants}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <strong className="font-bold uppercase">Contacto </strong>
                      <span className="absolute bg-Secundario bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>

      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter">
              Libera Tu Potencial Financiero, Reprograma tu Mente y Transforma
              tu Futuro.{" "}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Reprograma tu mente, supera creencias limitantes y toma el control
              de tus finanzas personales. Construye hábitos sólidos para lograr
              estabilidad económica y alcanzar tus metas con confianza
            </p>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                NUESTRA MENTE FUE PROGRAMADA EN LIMITACIONES Y FRUSTRACIONES
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Si estas frustrado en tus sueños y no puedes avanzar con tu
                  proyecto de vida.
                </p>
                <p>Te sientes bloqueado y no puedes avanzar.</p>
                <p>
                  Quieres conquistar ese proyecto que te cambiará la vida pero
                  tienes miedo a dar el siguiente paso.
                </p>
                <p>
                  Todo esos bloqueos están en tu mente, en tus creencias y
                  patrones limitantes.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                LO QUE BUSCAMOS ES REPROGRAMAR TU MENTE MEDIANTE TÉCNICAS,
                SEGUIMIENTO CONTINUO Y ACOMPAÑAMIENTO
              </h3>
              <p className="text-muted-foreground">
                En treinta días de entrenamiento y seguimiento continuo,
                buscamos modificar un patrón o creencia que te limita para ser
                ese engranaje en tu vida que te permita avanzar por el puente de
                del éxito.
              </p>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-6 w-6 text-primary" />
                  MATERIAL DESCARGABLE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tendrás material descargable para trabajar diariamente en tu
                  formación utilizando herramientas y técnicas para tu
                  crecimiento. Semanalmente una sesión en vivo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-primary" />
                  TUTORIAL Y VIDEOS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contarás con videos y tutoriales como realizar cada clase y
                  como realizar las meditaciones para que puedas realizarlas en
                  el tiempo que tu dispongas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  ASISTENCIA 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un proceso de transformación interna es luchar con tu yo
                  interno y externo, lo que te puede hacerte perder el control
                  si no te sientes acompañado. Por ese motivo no tan solo
                  encontrarás una entrenadora sino también una amiga para
                  apoyarte en tu proceso y no te sientas solo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-primary">
              Libérate de deudas y conviértete en inversor{" "}
            </h2>
            <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              60 Días de Transformación
            </h3>
            <p className="max-w-[42rem] mx-auto text-muted-foreground leading-normal sm:text-lg sm:leading-7">
              Un paso a la vez, como cuando un niño comienza a caminar, así
              debemos comenzar a reprogramar nuestra mente. Transformar un
              hábito a la vez hará que te enfoques y no abandones, evitando las
              frustraciones.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src="/Motivacion.jpg"
                    alt="Meditación"
                    // width={600}
                    // style={{
                    //   objectFit: "cover",
                    //   objectPosition: "bottom",
                    // }}
                    // height={200}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Sunrise className="h-5 w-5 text-primary" />
                  Motivación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Necesitamos motivación para no abandonar y sentirnos solo, con
                  tutoriales y apoyo puedes encontrar ayuda para seguir con tu
                  enfoque.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src="/Apollo.jpg"
                    alt="Meditación"
                    // width={600}
                    // height={400}
                    fill
                    // style={{
                    //   objectFit: "cover",
                    // }}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <HandHeart className="h-5 w-5 text-primary" />
                  Apoyo y Guía
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Con nuestra guía, no estarás solo en el camino hacia la
                  libertad financiera. Juntos construiremos un futuro más
                  próspero, consciente y lleno de oportunidades. ¡Hagamos equipo
                  para transformar vidas!
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src="/Proyeccion.jpg"
                    alt="Proyección"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    className=" group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Proyección
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fijar una meta es el primer paso para tu transformación, pero
                  debemos ponerla en acción, una vez cumplida debemos proyectar
                  y planificar la próxima. Encontrarás un apoyo para no sentir
                  miedo en esta nueva etapa.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href="https://hotmart.com/es/marketplace/productos/curso-tomando-el-control-de-mis-finanzas/F94967119T"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <Button size="lg" className="group">
                Quiero el entrenamiento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Este entrenamiento cuenta con 4 secciones en vivo, más un
              acompañamiento continuo de 30 días para profundizar en tu ser y no
              te sientas solo en el proceso.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesarrolloPersonal;
