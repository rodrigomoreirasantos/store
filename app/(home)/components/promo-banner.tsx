import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      height={0}
      width={0}
      className="h-auto w-full px-5 py-8 "
      sizes="100vw"
      alt={alt}
    />
  );
};

export default PromoBanner;
