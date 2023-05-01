"use client";
import AboutUsSection from "@/components/AboutUsSection";
import { NavBar } from "../components/NavBar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Banner />
        <AboutUsSection />
        <footer>
          <Footer />
        </footer>
      </main>     
      </>
  );
}
