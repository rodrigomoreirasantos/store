import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="55% sales this month"
      />

      <div className="mt-8">
        <Categories />
      </div>

      <div className="flex flex-col gap-3 lg:gap-5">
        <p className="pl-5">Deals</p>
        <ProductList products={deals} />
      </div>
    </div>
  );
}
