"use client";
import AboutUsSection from "@/components/AboutUsSection";
import Banner from "@/components/Banner";
import Form from "@/components/Form";
import Map from "@/components/Map";
import AbstractSection from "@/components/AbstractSection";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductsCard from "@/components/ProductsCard";
AOS.init();

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <AboutUsSection />
        <AbstractSection />
        <Form />
        <Map />
        <ProductsCard />
      </main>
    </>
  );
}
