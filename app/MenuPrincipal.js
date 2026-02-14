"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ItemMenu from "./ItemMenu";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Smartphone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MenuPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHeroPage = pathname === "/";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav background:
  // - Hero page, not scrolled, menu closed → transparent with white text
  // - Everything else → solid white with dark text
  const isTransparent = isHeroPage && !scrolled && !isOpen;
  const navBg = isTransparent
    ? "text-white"
    : "bg-white/95 backdrop-blur-xl shadow-md text-gray-900";

  return (
    <nav
      className={`sticky z-50 top-0 px-4 py-2 md:px-10 md:flex md:items-center md:justify-between transition-all duration-300 ${navBg}`}
    >
      <div className="flex justify-between items-center">
        <Link className="flex" href="/" title="Ir a inicio">
          <Image
            src="/Logos/Logo.webp"
            width={130}
            height={60}
            alt="Logotype"
            className="object-contain"
          />
        </Link>
        <button
          name="Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop menu */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden md:flex pl-14"
      >
        <div className="flex items-center justify-start gap-2">
          <ItemMenu ruta="/" setIsOpen={setIsOpen} border={pathname === "/"}>
            Inicio
          </ItemMenu>
          <ItemMenu
            ruta="/Servicios"
            setIsOpen={setIsOpen}
            border={pathname === "/Servicios"}
          >
            Servicios
          </ItemMenu>
          <ItemMenu
            ruta="/Nosotros"
            setIsOpen={setIsOpen}
            border={pathname === "/Nosotros"}
          >
            Nosotros
          </ItemMenu>
          <ItemMenu
            ruta="https://leftapdigital.blogspot.com/"
            setIsOpen={setIsOpen}
            border={pathname === "/Blog"}
            external={true}
          >
            Blog
          </ItemMenu>
        </div>
      </motion.div>

      {/* Desktop contact */}
      <div className="hidden lg:flex justify-center items-center gap-x-4">
        <Link href="/Contacto">
          <Button className="uppercase bg-emerald-600 hover:bg-emerald-700 text-white">
            Contacto
          </Button>
        </Link>
        <a href="tel:+54381-521-0268">
          <div className="uppercase lg:flex">
            <div>
              <Smartphone className="w-14 h-full" />
            </div>
            <div>
              <h1>LLamanos</h1>
              <p className="text-2xl">381-521-0268</p>
            </div>
          </div>
        </a>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-4 border-t border-gray-200 mt-2">
              <MobileLink
                href="/"
                active={pathname === "/"}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </MobileLink>
              <MobileLink
                href="/Servicios"
                active={pathname === "/Servicios"}
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </MobileLink>
              <MobileLink
                href="/Nosotros"
                active={pathname === "/Nosotros"}
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </MobileLink>
              <MobileLink
                href="https://leftapdigital.blogspot.com/"
                external
                active={false}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </MobileLink>

              <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3 px-2">
                <Link href="/Contacto" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white uppercase">
                    Contacto
                  </Button>
                </Link>
                <a
                  href="tel:+54381-521-0268"
                  className="flex items-center gap-3 text-gray-600 px-3 py-2"
                >
                  <Smartphone className="w-5 h-5" />
                  <span className="text-sm font-medium">381-521-0268</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileLink = ({ href, children, active, external, onClick }) => {
  const content = (
    <div
      className={`px-4 py-3 rounded-lg text-base font-medium uppercase transition-colors ${
        active
          ? "bg-emerald-50 text-emerald-700 font-semibold"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {children}
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick}>
      {content}
    </Link>
  );
};

export default MenuPrincipal;
