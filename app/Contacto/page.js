"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Contacto = () => {
  const [InputValues, setInputValues] = useState({});
  const [IsLoading, setIsLoading] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* <TitleSection title={"Contacto"} image="/Banner/BannerContacto.webp" /> */}

      <section>
        <div className="relative w-full h-96 z-10 -mt-[72px] md:-mt-[98.55px] lg:-mt-[98.55px]">
          <img
            className="absolute h-full w-full object-cover object-center"
            src="/Banners/BannerContacto.webp"
            alt="nature image"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50" />
          <div className="relative pt-28 text-center">
            <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl uppercase">
              Información de contacto
            </h2>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
          className="-mt-32 container mx-auto py-12 px-4 relative z-40"
        >
          <>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                {/* Contact Information */}
                <div className="md:w-1/3 bg-gray-100 p-8">
                  <h2 className="text-2xl font-semibold mb-6">Contáctenos</h2>
                  <div className="space-y-4">
                    <>
                      <a
                        className="flex items-center"
                        href="mailto:informes@leftap.org"
                      >
                        <Mail className="w-5 h-5 text-[#00973e] mr-2" />
                        <span>informes@leftap.org</span>
                      </a>
                    </>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-[#00973e] mr-2" />
                      <span>
                        Rondeau 526- 6to E- San Miguel de Tucumán, Argentina
                      </span>
                    </div>

                    {/* Agregar wechat y whatsapp  y facebook e iinstagram */}
                    <div className="">
                      <a
                        href="tel:+5493814678623"
                        className="flex items-center"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-[#00973e] mr-2"
                        >
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>

                        <span>+549 381 4678623</span>
                      </a>
                    </div>

                    <>
                      <a
                        className="flex items-center"
                        href="hhttps://www.facebook.com/LEFTAP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="w-5 h-5 text-[#00973e] mr-2" />
                        <span>LEFTAP</span>
                      </a>
                    </>
                    <>
                      <a
                        className="flex items-center"
                        href="https://www.instagram.com/leftap.ok/"
                      >
                        <Instagram className="w-5 h-5 text-[#00973e] mr-2" />
                        <span>leftap.ok</span>
                      </a>
                    </>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="md:w-2/3 p-8">
                  <form
                    onSubmit={async (e) => {
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

                        alert("Mensaje enviado con éxito");
                        setInputValues({});
                        e.target.reset();
                      } catch (err) {
                        console.log("Error: ", err);
                        alert("Error al enviar el mensaje");
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="NombreCompleto">Nombre Completo</Label>
                        <Input
                          id="NombreCompleto"
                          placeholder="Ingrese su nombre"
                          type="text"
                          autoComplete="off"
                          autoFocus
                          required
                          onChange={(e) => {
                            setInputValues({
                              ...InputValues,
                              NombreCompleto: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="Por favor ingrese su correo"
                          autoComplete="off"
                          onChange={(e) => {
                            setInputValues({
                              ...InputValues,
                              Correo: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Celular</Label>
                      {/* <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Por favor ingresa tu número de teléfono"
                        autoComplete="off"
                        onChange={(e) => {
                          setInputValues({
                            ...InputValues,
                            NumeroCelular: e.target.value,
                          });
                        }}
                      /> */}

                      <PhoneInput
                        country="US"
                        onChange={(e) => {
                          setInputValues({
                            ...InputValues,
                            NumeroCelular: e,
                          });
                        }}
                        placeholder="Ingrese su número de celular"
                        value={InputValues?.NumeroCelular}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Asunto</Label>
                      <Input
                        id="subject"
                        placeholder="Motivo de la consulta"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={(e) => {
                          setInputValues({
                            ...InputValues,
                            Asunto: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Descripción del mensaje</Label>
                      <Textarea
                        id="message"
                        placeholder="Escribe tu mensaje ..."
                        required
                        rows={4}
                        autoComplete="off"
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
                      className="w-full"
                      disabled={IsLoading}
                    >
                      <Send
                        cursor={IsLoading ? "wait" : "pointer"}
                        className="w-4 h-4 mr-2"
                      />
                      {IsLoading ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </>
        </motion.div>
      </section>
    </div>
  );
};

export default Contacto;
