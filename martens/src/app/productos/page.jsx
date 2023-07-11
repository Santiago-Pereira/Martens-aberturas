"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

function Page() {
  const Prods = dynamic(() => import("@/components/ProductsCard"), {
    ssr: false,
  });

  const [category, setCategory] = useState();
  const searchParams = useSearchParams();

  useEffect(() => {
    setCategory(searchParams.get('categoria'));
  }, [searchParams]);

  return <Prods category={category} />;
}

export default Page;
