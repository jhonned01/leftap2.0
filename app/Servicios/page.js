"use client";
import React from "react";
import TitleSection from "../TitleSection";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const Servicios = () => {
  const ListServices = [
    {
      name: "Cursos Digitales",
      description:
        "Accede a una amplia variedad de cursos digitales que fomentan tu crecimiento personal y profesional. Con una suscripción anual, podrás aprender a tu propio ritmo y aprovechar todos los cursos disponibles con una mínima suscripción. ¡Últimas plazas disponibles! No te pierdas la oportunidad de cambiar tu vida financiera. Incluye un manual, una agenda financiera, una guía para criptomonedas y una guía para invertir en la bolsa.",
    },
    {
      name: "Capacitación y Formación Profesional",
      description:
        "Ofrecemos capacitaciones integrales que incluyen desarrollo personal y formación profesional. Con una mínima suscripción, tendrás acceso a todos los cursos y herramientas necesarias para potenciar tu negocio. ¡Imagina la sensación de libertad financiera! Disfruta de la vida sin el peso de las deudas. Accede a testimonios de personas que han logrado resultados increíbles con nuestro curso.",
    },
    {
      name: "Talleres Presenciales",
      description:
        "Participa en talleres presenciales diseñados para emprendedores que buscan mejorar sus habilidades prácticas. Estos talleres incluyen temas esenciales como sistemas operativos, administración y contabilidad, así como técnicas y estrategias para el crecimiento empresarial. ¡Toma control de tus finanzas y domina tus deudas! Aprovecha el respaldo de expertos que han ayudado a miles a alcanzar el éxito.",
    },
    {
      name: "Ofertas Presenciales para Jóvenes e Instituciones",
      description:
        "Disponemos de una oferta especial de cursos y capacitaciones presenciales dirigidas a jóvenes e instituciones educativas. Estas sesiones proporcionan conocimientos prácticos y relevantes, adaptados a las necesidades de las nuevas generaciones y las organizaciones educativas. ¡No esperes más para cambiar tu situación financiera! Inscríbete ahora y comienza a ver resultados en poco tiempo.",
    },
  ];

  return (
    <div className="-mt-[72px] md:-mt-[98.55px] lg:-mt-[98.55px] bg-gray-50">
      <TitleSection
        title={`Servicios`}
        image="/Banners/EstudiantesBanner.jpg"
      />

      <div className="container -mt-[5rem]">
        <Card className=" border-2 border-black bg-white grid w-full grid-cols-1 my-auto mt-6 mb-8 shadow-md gap-6 ">
          <CardContent className="pt-5">
            <div className="flex flex-col justify-center items-center text-base font-normal leading-7    w-full px-2 lg:px-4 text-grey-900 text-justify  space-y-4">
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 pb-2   ">
                <div className=" flex flex-col justify-center items-center  gap-4  text-justify">
                  <h1 className=" text-xl font-semibold leading-tight lg:text-2xl text-grey-900 uppercase">
                    Bienvenido a LEFTAP
                  </h1>
                  <p>
                    En LEFTAP, nos dedicamos a proporcionar herramientas y
                    conocimientos que impulsan tu crecimiento personal y
                    profesional. Nuestra misión es ayudarte a lograr la libertad
                    financiera y el éxito en el emprendimiento a través de
                    educación de calidad y apoyo continuo.
                  </p>
                  <p>
                    Explora nuestras diversas áreas de servicio diseñadas para
                    transformar tu vida y tus finanzas. Desde cursos digitales
                    que te permiten aprender a tu ritmo, hasta capacitaciones y
                    talleres presenciales que brindan habilidades prácticas y
                    conocimientos especializados. También ofrecemos ofertas
                    únicas dirigidas a jóvenes e instituciones para fomentar una
                    educación financiera sólida desde una edad temprana.
                  </p>
                  <p>
                    En LEFTAP, estamos aquí para acompañarte en cada paso de tu
                    camino hacia el éxito, brindándote los recursos y el soporte
                    necesario para alcanzar tus metas. Descubre más sobre
                    nuestros servicios y cómo podemos ayudarte a avanzar hacia
                    un futuro más brillante.
                  </p>
                </div>
                <section className=" w-full h-full">
                  <figure className="relative w-full h-[200px] md:h-[300px] lg:h-[500px] ">
                    <Image
                      src={"/Marina2.webp"}
                      alt="Foto"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      className="rounded-md aspect-auto"
                    />
                  </figure>
                </section>
              </section>
              <section className="space-y-4">
                <ul className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2    ">
                  {ListServices?.map((item, index) => (
                    <motion.div
                      key={index}
                      className="p-8 space-y-3 border-2 border-black rounded-xl shadow-lg bg-white"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9, y: 50 },
                        visible: { opacity: 1, scale: 1, y: 0 },
                      }}
                    >
                      <h1 className="text-xl font-semibold  capitalize  text-center ">
                        {item.name}
                      </h1>
                      <p className="  text-justify">{item.description}</p>
                    </motion.div>
                  ))}
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Servicios;
