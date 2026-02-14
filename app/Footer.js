"use client";
import { Facebook, Mail, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-600" />

      {/* CTA Banner */}
      <div className="relative border-b border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-emerald-950/30" />
        <div className="relative container mx-auto px-4 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
              ¿Querés integrar educación financiera en tu comunidad?
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Contanos tu proyecto y te respondemos con una propuesta
              personalizada.
            </p>
          </div>
          <Link href="/Contacto" className="shrink-0">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base rounded-full group">
              Escribinos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

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
              Educación financiera aplicada para formar personas que tomen
              buenas decisiones económicas.
            </p>
            {/* Social icons under brand on mobile */}
            <div className="flex gap-3 pt-1 lg:hidden">
              {[
                {
                  href: "https://www.facebook.com/LEFTAP",
                  icon: <Facebook className="w-4 h-4" />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/leftap.ok/",
                  icon: <BsInstagram className="w-4 h-4" />,
                  label: "Instagram",
                },
                {
                  href: "https://wa.link/leftapdigital",
                  icon: <BsWhatsapp className="w-4 h-4" />,
                  label: "WhatsApp",
                },
                {
                  href: "https://www.tiktok.com/@leftap",
                  icon: <BsTiktok className="w-4 h-4" />,
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
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-emerald-600 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
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
                    className="hover:text-emerald-400 hover:pl-1 transition-all duration-200"
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
                  className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  (+54) 381-521-0268
                </a>
              </li>
              <li>
                <a
                  href="tel:+543814678623"
                  className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  (+54) 381-467-8623
                </a>
              </li>
              <li>
                <a
                  href="mailto:informes@leftap.org"
                  className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  informes@leftap.org
                </a>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div className="hidden lg:block">
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
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-600 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} LEFTAP. Todos los derechos
            reservados.
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
