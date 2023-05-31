"use client";
import "../app/globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Copyright from "@/components/Copyright";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <WhatsAppBtn />
      <footer>
        <Footer />
        <Copyright />
      </footer>
    </>
  );
}
