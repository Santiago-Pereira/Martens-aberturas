"use client";
import AboutUsSection from "@/components/AboutUsSection";
import Banner from "@/components/Banner";
import Form from "@/components/Form";
import Map from "@/components/Map";
import AbstractSection from "@/components/AbstractSection";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUsSection />
      <AbstractSection />
      <Form />
      <Map />
    </>
  );
}
