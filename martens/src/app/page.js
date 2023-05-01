"use client";
import AboutUsSection from "@/components/AboutUsSection";
import { NavBar } from "../components/NavBar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Banner />
      <AboutUsSection />

    </main>
  );
}
