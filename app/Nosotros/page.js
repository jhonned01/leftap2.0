"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import TitleSection from "../TitleSection";

const Nosotros = () => {
  const Data = [
    {
      id: 1,
      title: "MISIÓN",
      icon: "/Nosotros/Mision.png",
      description:
        "Nuestra misión en LEFTAP es empoderar a jóvenes y emprendedores para que alcancen su libertad financiera a través de la educación financiera y el emprendedorismo. Nos dedicamos a acompañar a cada persona en su camino hacia el éxito, proporcionando las herramientas y el apoyo necesario para superar barreras, desarrollar sus habilidades y construir un futuro próspero.",
    },
    {
      id: 2,
      title: "VISIÓN",
      icon: "/Nosotros/Vision.png",
      description:
        "Aspiramos a ser un referente en la educación financiera y el desarrollo personal, creando una sociedad donde cada individuo tenga la capacidad de alcanzar su máximo potencial económico. Queremos fomentar una nueva generación de emprendedores seguros y capacitados, que contribuyan al crecimiento sostenible de sus comunidades.",
    },
    {
      id: 3,
      title: "OBJETIVOS",
      icon: "/Nosotros/Objetivos.png",
      description:
        "Proporcionar educación financiera de calidad que permita a los emprendedores tomar decisiones informadas y estratégicas, ofreciendo apoyo continuo en el desarrollo y expansión de emprendimientos, desde la planificación hasta la implementación de estrategias digitales. Inculcamos la importancia del emprendedorismo y la educación financiera en las nuevas generaciones a través de charlas y capacitaciones en escuelas. Además, ayudamos a nuestros clientes a transformar sus hábitos financieros y desarrollar una relación sana y efectiva con el dinero, facilitando el acceso a herramientas digitales y estrategias de negocio que impulsen el crecimiento y éxito de los emprendimientos.",
    },
    {
      id: 4,
      title: "VALORES",
      icon: "/Nosotros/Valores.png",
      description:
        "En LEFTAP, creemos firmemente en el poder del conocimiento para transformar vidas y generar libertad financiera. Nuestra innovación constante nos permite adoptar nuevas ideas y tecnologías que impulsan el crecimiento personal y profesional. Nos comprometemos a acompañar a nuestros clientes en cada etapa de su emprendimiento, ofreciendo apoyo constante y personalizado. Valoramos profundamente la educación financiera como base para el desarrollo económico sostenible. Actuamos con integridad, manteniendo la honestidad y transparencia en todas nuestras acciones, construyendo relaciones de confianza con nuestros clientes y socios.",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="-mt-[72px] md:-mt-[98.55px] lg:-mt-[98.55px] bg-gray-50">
      <TitleSection title={`Nosotros`} image="/Banners/NosotrosLeftap.jpg" />

      <div className="py-7 w-full h-full container shadow-md  space-y-5 -mt-24">
        <Card className="border-black border-2">
          <CardContent className="grid w-full grid-cols-1 my-auto mt-6 mb-8 lg:grid-cols-2 gap-6">
            <motion.div
              className="flex flex-col justify-center items-center text-base font-normal leading-7 w-full px-2 lg:px-4 text-gray-700 text-justify space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <h1 className="text-xl font-extrabold leading-tight lg:text-2xl text-gray-900 uppercase">
                LEFTAP
              </h1>
              <p>
                Somos una empresa digital dedicada a guiar a quienes buscan su
                libertad financiera a través del emprendedorismo y la educación
                financiera. Acompañamos a jóvenes y emprendedores en su
                crecimiento personal y financiero, ayudándoles a superar
                barreras y avanzar con confianza hacia sus metas.
              </p>
              <p>
                Ofrecemos apoyo continuo en cada etapa de tu emprendimiento,
                desde la organización de tu empresa hasta la implementación de
                estrategias de ventas y marketing digital. Además, realizamos
                charlas gratuitas en escuelas secundarias para sembrar las
                semillas del cambio en futuras generaciones.
              </p>
              <p>
                Creemos que el crecimiento de una sociedad depende de la
                educación financiera y el desarrollo personal. A través de
                cursos y capacitaciones prácticas, proporcionamos el
                conocimiento necesario para que avances en tu proyecto y logres
                la seguridad financiera que deseas. En LEFTAP, te ayudamos a
                desaprender viejos hábitos y adquirir nuevas habilidades para
                construir un futuro próspero.
              </p>
            </motion.div>
            <motion.div
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <Image
                className="w-full rounded-md aspect-square object-cover"
                src="/NuevaLeft.webp"
                alt="header image"
                layout="responsive" // Usa la opción de diseño adecuado
                width={1200} // Establece el ancho según sea necesario
                height={600} // Establece la altura según sea necesario
              />
            </motion.div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {Data.map((item, index) => {
            return (
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
                <div className="flex justify-start gap-x-2 items-center">
                  {/* <div className="inline-block text-blue-500">
                    <Image
                      src={item.icon}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                  </div> */}
                  <h1 className="text-2xl font-semibold text-gray-800 capitalize">
                    {item.title}
                  </h1>
                </div>
                <p className="text-gray-700 text-justify">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
