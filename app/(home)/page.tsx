import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner src="/banner-home-01.png" alt="55% sales this month" />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      {/* <div className="flex flex-col gap-3 lg:gap-5"> */}
      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Deals</p>
        <ProductList products={deals} />
      </div>

      <PromoBanner src="/banner-home-02.png" alt="55% sales in mouses" />

      <div className="mt-8">
        <SectionTitle>Keyboards</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
