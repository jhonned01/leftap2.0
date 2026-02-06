"use client";
import { Facebook, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + posicionamiento */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/">
              <Image
                title="Logo"
                src="/Logos/Logo.webp"
                width={160}
                height={60}
                alt="LEFTAP Logo"
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {/* <span className="font-semibold text-white">LEFTAP</span> · */}
              Educación financiera aplicada para formar personas que tomen
              buenas decisiones económicas.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/Servicios" },
                { label: "Nosotros", href: "/Nosotros" },
                { label: "Desarrollo Personal", href: "/DesarrolloPersonal" },
                { label: "Contacto", href: "/Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+543815210268"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  (+54) 381-521-0268
                </a>
              </li>
              <li>
                <a
                  href="tel:+543814678623"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  (+54) 381-467-8623
                </a>
              </li>
              <li>
                <a
                  href="mailto:informes@leftap.org"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  informes@leftap.org
                </a>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Seguinos
            </h3>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/LEFTAP",
                  icon: <Facebook className="w-5 h-5" />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/leftap.ok/",
                  icon: <BsInstagram className="w-5 h-5" />,
                  label: "Instagram",
                },
                {
                  href: "https://wa.link/leftapdigital",
                  icon: <BsWhatsapp className="w-5 h-5" />,
                  label: "WhatsApp",
                },
                {
                  href: "https://www.tiktok.com/@leftap",
                  icon: <BsTiktok className="w-5 h-5" />,
                  label: "TikTok",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} LEFTAP. Todos los derechos reservados.
          </p>
          <p className="text-center sm:text-right italic">
            Formando criterio hoy para un futuro con decisiones conscientes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
