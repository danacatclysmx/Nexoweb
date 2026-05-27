import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexoweb | Diseño Web Profesional en Bucaramanga",
  description:
    "Conectamos tu negocio con el mundo digital. Diseño web profesional, páginas institucionales, tiendas online y más. Bucaramanga, Colombia.",
  keywords: [
    "diseño web",
    "páginas web",
    "Bucaramanga",
    "Colombia",
    "tienda online",
    "diseño profesional",
  ],
  authors: [{ name: "Nexoweb" }],
  openGraph: {
    title: "Nexoweb | Diseño Web Profesional en Bucaramanga",
    description:
      "Conectamos tu negocio con el mundo digital. Diseño web profesional, páginas institucionales, tiendas online y más.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
