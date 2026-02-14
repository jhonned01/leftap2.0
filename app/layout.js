import { Inter } from "next/font/google";
import "./globals.css";
import MenuPrincipal from "./MenuPrincipal";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.leftap.org"),
  title: {
    default: "LEFTAP | Centro de Formación en Educación Financiera",
    template: "%s | LEFTAP",
  },
  description:
    "LEFTAP acompaña a jóvenes, familias, instituciones educativas y organismos públicos a integrar educación financiera real, consciente y responsable. Más de 19 años formando criterio financiero.",
  keywords: [
    "educación financiera",
    "formación financiera",
    "finanzas personales",
    "LEFTAP",
    "educación financiera Argentina",
    "finanzas para jóvenes",
    "talleres financieros",
    "sistema PASO",
    "educación financiera Tucumán",
  ],
  authors: [{ name: "LEFTAP", url: "https://www.leftap.org" }],
  creator: "LEFTAP",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.leftap.org",
    siteName: "LEFTAP",
    title: "LEFTAP | Centro de Formación en Educación Financiera",
    description:
      "Educación financiera aplicada para formar personas que tomen buenas decisiones económicas. Programas para jóvenes, familias e instituciones.",
    images: [
      {
        url: "/NuevasImagenes/GrupoEstudiantes.jpg",
        width: 1200,
        height: 630,
        alt: "LEFTAP - Centro de Formación Financiera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEFTAP | Centro de Formación en Educación Financiera",
    description:
      "Educación financiera aplicada para formar personas que tomen buenas decisiones económicas.",
    images: ["/NuevasImagenes/GrupoEstudiantes.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.leftap.org",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <MenuPrincipal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
