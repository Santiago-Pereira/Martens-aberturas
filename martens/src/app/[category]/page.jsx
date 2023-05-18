"use client";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
function page({ params }) {
  const Navigation = dynamic(() => import("@/components/ProductsCard"), {
    ssr: false,
  });
  return (
    <>
      <Navigation category={params.category} />;
    </>
  );
}

export default page;
