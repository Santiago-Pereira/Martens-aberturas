"use client";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import Layout from '../components/layout';

function Page() {
  const Prods = dynamic(() => import("@/components/ProductsCard"), {
    ssr: false,
  });

  const router = useRouter();
  
  return (
    <Layout>
      <Prods category={router.query.category} />;
    </Layout>
  );
}

export default Page;

import categoriesData from "../app/categoriesData";

export async function getStaticProps() {
  return {
    props: {},
  }
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

  return { paths: [], fallback: false };
}