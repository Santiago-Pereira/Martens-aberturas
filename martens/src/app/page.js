"use client";
import AboutUsSection from "@/components/AboutUsSection";
import Banner from "@/components/Banner";
import Form from "@/components/Form";
import Map from "@/components/Map";
import AbstractSection from "@/components/AbstractSection";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Copyright from "@/components/Copyright";

export default function Home() {
  AOS.init();
  return (
    <>
      <main>
        <Banner />
        <AboutUsSection />
        <AbstractSection />
        <Form />
        <Map />
        <WhatsAppBtn />
      </main>
      <footer>
        <Footer />
        <Copyright />
      </footer>
    </>
  );
}
