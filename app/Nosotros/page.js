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
        "Aspiramos a un mundo donde la educación financiera sea accesible para todos, formando docentes como agentes de cambio y jóvenes como emprendedores conscientes. Buscamos ser referentes globales, promoviendo una cultura financiera que fomente el bienestar colectivo, la sostenibilidad y las oportunidades equitativas.",
    },
    {
      id: 3,
      title: "OBJETIVOS",
      icon: "/Nosotros/Objetivos.png",
      description:
        "Nos enfocamos en capacitar docentes en educación financiera y empoderar a jóvenes emprendedores. Ofrecemos conferencias, talleres, programas específicos, recursos innovadores y apoyo continuo para mejorar sus competencias. Colaboramos con instituciones educativas para integrar esta formación en los planos escolares. Para jóvenes, brindamos programas de finanzas personales, mentoría, recursos financieros y eventos empresariales, ayudándolos a desarrollar habilidades sólidas que impulsan su éxito.",
    },
    {
      id: 4,
      title: "VALORES",
      icon: "/Nosotros/Valores.png",
      description:
        "Creemos firmemente en el poder del conocimiento para transformar vidas y generar libertad financiera. Nuestra innovación constante nos permite adoptar nuevas ideas y tecnologías que impulsan el crecimiento personal y profesional. Nos comprometemos a acompañar a nuestros clientes en cada etapa de su emprendimiento, ofreciendo apoyo constante y personalizado. Valoramos profundamente la educación financiera como base para el desarrollo económico sostenible. Actuamos con integridad, manteniendo la honestidad y transparencia en todas nuestras acciones, construyendo relaciones de confianza con nuestros clientes y socios.",
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
              <h1 className="text-xl font-extrabold leading-9 lg:text-2xl text-black uppercase">
                LEFTAP
              </h1>

              <p>
                s un centro de capacitación y formación digital que busca
                transformar la educación financiera en la sociedad, enfocándose
                en la capacitación de docentes, el empoderamiento de jóvenes
                emprendedores y la promoción de un cambio positivo en el sistema
                educativo.
              </p>
              <p>
                Surgimos ante la necesidad de abordar la brecha en educación
                financiera y el alto índice de fracaso en emprendimientos. Nos
                preguntamos: ¿Por qué no aprendimos a generar más dinero desde
                edades tempranas? ¿Cómo puedo como docente ayudar a jóvenes para
                cambiar la historia de sus vidas incorporando educación
                financiera? ¿Por qué el 80% de los emprendedores fracasan en los
                primeros 5 años? Estas preguntas fueron el motor que impulsó la
                creación de LEFTAP.
              </p>
              <p>
                Nuestra misión es capacitar a docentes, jóvenes y emprendedores
                en educación financiera para que tomen decisiones informadas y
                alcancen su máximo potencial económico. Buscamos convertirnos en
                un referente global en educación financiera, transformando
                vidas, comunidades y sociedades a través de la enseñanza de
                habilidades financieras.
              </p>

              <p>
                Para lograr nuestra misión, hemos establecido dos objetivos
                principales: la capacitación integral de docentes en educación
                financiera y el empoderamiento de jóvenes emprendedores.
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
