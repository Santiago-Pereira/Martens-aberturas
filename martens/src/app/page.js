"use client";
import AboutUsSection from "@/components/AboutUsSection";
import { NavBar } from "../components/NavBar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Banner />
        <AboutUsSection />
        <Form />

        <footer>
          <Footer />
        </footer>
      </main>     
      </>
  );
}
