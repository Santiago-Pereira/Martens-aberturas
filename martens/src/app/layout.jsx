"use client";
import "./globals.css";
// import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Copyright from "@/components/Copyright";

// const inter = Inter({ subsets: ["latin"] });

// TODO meta https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/components/meta.js

const metadata = {
  title: "Martens Aberturas",
  description:
    "Martens Aberturas: Fabricamos aberturas de alta calidad desde 1957. Con un enfoque en la excelencia y la satisfacción del cliente, ofrecemos modelos únicos y duraderos. Descubre nuestra historia de adaptación, calidad y relaciones sólidas con clientes satisfechos. ¡Confía en nosotros para satisfacer tus necesidades actuales y futuras en aberturas de calidad",
  keywords:
    "Martens Aberturas, Aberturas de calidad, Trabajos en hierro, Aberturas de alta calidad, Fábrica de aberturas, Modelos únicos de aberturas, puertas, portones, escaleras , pergolas , tandil , soluciones generales Tandil",
  author: "Lis Medina y Santiago Pereira",
  // icons: {
  //   icon: DoorBackIcon,
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <WhatsAppBtn />
        <footer>
          <Footer />
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
