"use client";
import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Copyright from "@/components/Copyright";

const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params }) {
//   return {  title: "Martens todo en aberturas",
//   description: "Generated by create next app",
// };
// }

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
        <WhatsAppBtn />
        <footer>
          <Footer />
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
