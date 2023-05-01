"use client";
import { NavBar } from "../components/NavBar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Banner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
