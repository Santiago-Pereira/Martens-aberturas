"use client";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

function Page() {
  const Prods = dynamic(() => import("@/components/ProductsCard"), {
    ssr: false,
  });

  const pathname = usePathname();

  return <Prods category={pathname.replace("/", "")} />;
}

export default Page;

import categoriesData from "../categoriesData.js";

export function getStaticPaths() {
  const paths = categoriesData.map((cat) => ({
    params: { id: cat.code },
  }));
  
  return { paths, fallback: true };
}
