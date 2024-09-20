"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const HomePage = () => {
  const BannerInicio = [
    {
      imagen: "/Slider/banneer1.jpg",
    },
  ];

  // Variantes de animación para fade-in
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const Servicios = [
    {
      id: 1,
      titulo: "¡Atención jóvenes!",
      descripcion:
        "Aprende a manejar tu dinero de manera inteligente con nuestras charlas-taller de educación financiera",
      imagen: "/CardsImages/joventud.webp",
    },
    {
      id: 2,
      titulo: "¡Mejora tus habilidades!",
      descripcion:
        "Aumenta tu valor en el mercado laboral con nuestras capacitaciones",
      imagen: "/CardsImages/habilidad.webp",
    },
    {
      id: 3,
      titulo: "¡Transforma tu vida!",
      descripcion: "Con nuestras capacitaciones de desarrollo personal",
      imagen: "/CardsImages/mejoraVida.webp",
    },
    {
      id: 4,
      titulo: "Charlas Institucionales",
      descripcion:
        "Divulgar la educación financiera entre los jóvenes en el sistema educativo es crucial para empoderarlos con habilidades financieras y prepararlos para un futuro económico sólido.",
      imagen: "/CardsImages/Charlas.webp",
    },
    {
      id: 5,
      titulo: "Conferencias (Virtual/Presencial)",
      descripcion:
        "Empodera a tus estudiantes con educación financiera. Ofrecemos charlas para que adquieran las herramientas clave para un futuro financiero exitoso. ¡Contáctanos para llevar esta experiencia a tu institución!",
      imagen: "/CardsImages/VirtualPresencial.webp",
    },
  ];

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
                    className="sm:p-2 font-bold bg-white text-black border border-Secundario text-xl uppercase rounded-3xl rounded-br-none rounded-tl-none outline-none shadow-lg hover:shadow-xl hover:opacity-90 duration-200 w-[10.5rem]"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Aprender
                  </motion.section>
                  <motion.p
                    className="text-start text-base sm:text-4xl font-extrabold"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    A manejar tu{" "}
                    <span className="text-Secundario uppercase"> Dinero </span>
                  </motion.p>

                  <Link href={"/QuienesSomos"} className="flex justify-start">
                    <motion.div
                      className="group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-start cursor-pointer sm:h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-transparent text-white border-Secundario hover:text-black hover:bg-Tercieario"
                      initial="hidden"
                      animate="visible"
                      variants={fadeInVariants}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <strong className="font-bold uppercase">
                        Quienes Somos
                      </strong>
                      <span className="absolute bg-Secundario bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>

      <div className="container  ">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 mt-4 px-4 py-8 md:gap-8 rounded-md">
          {Servicios.map((servicio) => (
            <div key={servicio?.id}>
              <Card className="mt-7 w-full mx-auto h-[92%] hover:-translate-y-2 shadow-lg border-2 ">
                <CardHeader className="h-72 -mt-12 rounded-md overflow-hidden  ">
                  <img
                    src={servicio.imagen}
                    className="h-full w-full object-cover aspect-square rounded-md shadow-md bg-white overflow-hidden"
                    alt={servicio?.titulo}
                  />
                </CardHeader>
                <CardContent>
                  <h1 className="mb-2 font-semibold">{servicio?.titulo}</h1>
                  <p className="text-gray-700">{servicio?.descripcion}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
