"use client";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import Copyright from "@/components/Copyright";
function page({ params }) {
  const Navigation = dynamic(() => import("@/components/ProductsCard"), {
    ssr: false,
  });
  return (
    <>
      <Navigation category={params.category} />;
      <WhatsAppBtn />
      <footer>
        <Footer />
        <Copyright />
      </footer>
    </>
  );
}

export default page;
