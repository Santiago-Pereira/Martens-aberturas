"use client";
import AboutUsSection from "@/components/AboutUsSection";
import { NavBar } from "../components/NavBar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Banner />
        <AboutUsSection />
        <footer>
          <WhatsAppBtn />
          <Footer />
        </footer>
      </main>
    </>
  );
}
