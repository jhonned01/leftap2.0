"use client";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="border-t   py-6 px-4 lg:px-0 bg-gray-50   text-black">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 items-center sm:items-start">
          <Link href={"/"}>
            <div className="flex flex-col justify-center items-center">
              <div className="space-y-4 pt-4">
                <Image
                  title="Logo"
                  src="/Logos/Logo.webp"
                  width={200}
                  height={80}
                  alt="Logo"
                  style={{
                    objectFit: "cover",
                  }}
                  className="-mt-6 "
                />
              </div>
            </div>
          </Link>
          <div className="max-w-[290px] mx-auto  ">
            <h1 className="font-semibold mb-4 text-xl">Contacto</h1>
            <div className="space-y-2">
              <div className="flex space-x-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>
                  <a
                    href="tel:+543815210268"
                    className="text-xl  hover:text-[#00a6b6] transition-colors duration-300"
                  >
                    (+54) 381-521-0268
                  </a>
                </div>
              </div>

              <div className="flex space-x-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>
                  <a
                    href="tel:+543814678623"
                    className="text-xl  hover:text-[#00a6b6] transition-colors duration-300"
                  >
                    (+54) 381-467-8623
                  </a>
                </div>
              </div>

              <div className="flex space-x-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                <a
                  className=" text-xl hover:text-[#00a6b6] transition-colors duration-300"
                  href="mailto:informes@leftap.org"
                >
                  informes@leftap.org{" "}
                </a>
              </div>
              {/* 
              <div className="flex space-x-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="  hover:text-[#00a6b6] transition-colors duration-300">
                  Av. Circunvalación Club Golf 206 <br /> Urb. Urbanización Club
                  Golf Los Incas Int. 803
                </p>
              </div> */}
            </div>
          </div>

          <div className="sm:max-w-[290px] sm:mx-auto sm:col-span-2 lg:col-span-1  mx-auto">
            <h1 className="font-bold mb-4 text-xl">Nuestras Redes</h1>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/LEFTAP"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:animate-bounce hover:text-green-800 "
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className=" w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/leftap.ok/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:animate-bounce hover:text-green-800"
                title="Instagram"
                aria-label="Instagram"
              >
                <BsInstagram className=" w-7 h-7" />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=51914125509&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:animate-bounce hover:text-green-800"
                title="Whatsapp"
                aria-label="Whatsappp"
              >
                <BsWhatsapp className=" w-7 h-7" />
              </a>

              <a
                href="https://www.tiktok.com/@leftap"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:animate-bounce hover:text-green-800"
                title="Youtube"
                aria-label="Youtube"
              >
                <BsTiktok className=" w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="  sm:col-span-2 lg:col-span-3 ">
            <div className="">
              <hr className=" py-2 border-gray-300" />
              <div className="flex  flex-wrap items-center md:justify-between justify-center">
                <div className="w-full  px-4 mx-auto text-center">
                  <div className="text-sm font-semibold  ">
                    Copyright ©{" "}
                    <span id="get-current-year">
                      {new Date().getFullYear()}
                    </span>{" "}
                    LEFTAP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
