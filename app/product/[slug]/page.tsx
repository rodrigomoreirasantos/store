import { prismaClient } from "@/lib/prisma";
import ProductImages from "../components/product-image";
import ProductInfo from "../components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductDetailPageProp {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailPageProp) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
