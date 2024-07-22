"use client";
import { OpenStore } from "@/components/openStore";
import { ProductCard } from "@/components/productCard";
import { FC } from "react";

interface FavoritesProps {}

const Favorites: FC<FavoritesProps> = () => {
  return (
    <div className="flex min-h-screen items-center justify-between lg:px-20">
      <div className="flex flex-col gap-10 w-full py-10 items-center">
        <div
          className={`flex flex-col justify-center gap-6 items-center w-full p-10 rounded-2xl bg-searchOuterBg`}
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className={`text-2xl font-black  text-primaryBtnColor`}>
              Saved Products
            </h1>
            <p className={`text-sm font-light text-defaultIconColor`}>
              12 Saved
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full  gap-4">
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
          <ProductCard
            title="Product 2"
            price="9,000 Rwf"
            originalPrice="10,000 Rwf"
            imageUrl="/product_placeholder_image.png"
            showCartButton={true}
            showFavouriteButton={true}
          />
        </div>
        <OpenStore />
      </div>
    </div>
  );
};

export default Favorites;
