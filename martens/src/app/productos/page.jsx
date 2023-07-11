"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

function Page() {
  const Prods = dynamic(() => import("@/components/ProductsCard"), {
    ssr: false,
  });

  const [category, setCategory] = useState();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    setCategory(searchParams.get('categoria'));
  }, [pathname, searchParams])

  return <Prods category={category} />;
}

export default Page;
