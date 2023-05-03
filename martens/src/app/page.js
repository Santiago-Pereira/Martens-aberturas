"use client";
import AboutUsSection from "@/components/AboutUsSection";
import { NavBar } from "../components/NavBar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Form from "@/components/Form";
import Map from "@/components/Map";
import Copyright from "@/components/Copyright";
import AbstractSection from "@/components/AbstractSection";


export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Banner />
        <AboutUsSection />
        <AbstractSection />

        <Form />
        <Map />

        <footer>
          <WhatsAppBtn />
          <Footer />
        </footer>
        <Copyright />

      </main>
    </>
  );
}
