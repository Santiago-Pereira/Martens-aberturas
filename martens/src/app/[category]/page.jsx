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

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  // // When this is true (in preview environments) don't
  // // prerender any static pages
  // // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   };
  // }

  // // Get the paths we want to prerender based on posts
  // // In production environments, prerender all pages
  // // (slower builds, but faster initial page load)
  // const paths = categoriesData.map((cat) => ({
  //   params: { id: cat.code },
  // }));

  // // { fallback: false } means other routes should 404
  // return { paths, fallback: false };

  return { paths: [], fallback: true };
}
