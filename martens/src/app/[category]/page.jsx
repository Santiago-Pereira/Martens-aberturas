"use client";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();

  const Prods = dynamic(() => import("@/components/ProductsCard"), {
    ssr: false,
  });

  const pathname = usePathname();

  if (router.isFallback) {
    return <h2>Cargando...</h2>;
  }

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
