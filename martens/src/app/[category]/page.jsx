"use client";
import ProductsCard from "@/components/ProductsCard";

function page() {
  // Extrae la propiedad 'id' del objeto 'query' del enrutador para acceder al valor de 'id' en la ruta actual

  const category = window.location.pathname.replace("/", "");
  return <ProductsCard category={category} />;
}

export default page;
