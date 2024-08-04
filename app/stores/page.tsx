'use client';
import { FC } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { WelcomeSection } from "@/components/welcomeSection";
import { DeliveryBox01Icon, FavouriteIcon, StarIcon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/productCard";
import { OpenStore } from "@/components/openStore";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Category } from "@/types/types";

interface SroresProps {}

const Srores: FC<SroresProps> = () => {
  const dispatch = useAppDispatch();
  const {products} = useAppSelector((state) => state.products);
  const {categories} = useAppSelector((state) => state.categories);
  const { stores } = useAppSelector((state) => state.stores);

  const storesWithProducts = stores.map((store: any) => {
    const storeProducts = products.filter((product: any) => product.createdBy.id === store.manager.id);
    const categories = Array.from(new Set(storeProducts.map((product: any) => product.category.name)));
  
    return {
      ...store,
      products: storeProducts,
      categories,
    };
  });

  return (
    <div className="flex min-h-screen items-center justify-between lg:px-20">
      <div className="flex flex-col gap-10 w-full py-10 items-center">
        <WelcomeSection
          title={
            <>
              <span className="text-primary">Mark8</span> Stores
            </>
          }
          subtitle="Stores"
          itemsCount={54}
          searchBarProps={{
            searchIconClassName: "text-primary",
            inputClassName:
              "pl-10 bg-headingColor font-normal text-headingColor bg-opacity-[0.04] w-full border-none placeholder:text-loginSubHeadingColor placeholder:opacity-[0.7] focus-visible:outline-none focus-visible:ring-none focus-visible:ring-none focus-visible:border-none focus-visible:ring-offset-none",
            filterIconClassName: "text-headingColor",
            placeholder: "Search Store",
          }}
          categories={categories}
          bgColor="bg-searchOuterBg"
          buttonTextColor="text-defaultIconColor text-xs focus:text-primaryBtnColor focus:border-primaryBtnColor"
          buttonBorderColor="border-separatorColor"
          titleColor="text-primaryBtnColor"
          subtitleColor="text-defaultIconColor"
          usedWhere="stores"
        />
        {storesWithProducts.length !== 0 ? (
          <div className="flex flex-col gap-10 w-full">
          {storesWithProducts.map((store, index: number) =>(
          <Card key={index} className="shadow-none">
            <CardHeader className="border-b border-separatorColor px-10 py-5">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5">
                  <Image
                    src={store.image}
                    width={60}
                    height={60}
                    alt={store.name}
                    className="rounded-2xl"
                    />
                  <div className=" flex flex-col gap-3">
                    <p className="font-medium text-sm">{store.name}</p>
                    <p className="text-xs text-authSubHeadingColor font-light ">
                      {store.products.length} Products
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="size-12 border-[1.5px] border-separatorColor"
                >
                  <FavouriteIcon
                    strokeWidth={2}
                    size={16}
                    className="text-headingColor"
                  />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex py-5 md:p-10 flex-wrap md:flex-nowrap ">
              <div className="w-[42.375rem] h-[21.5rem] flex flex-col justify-between">
                <div className=" flex flex-col gap-5 ">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold text-primaryBtnColor">
                      About
                    </h1>
                    <p className="text-sm text-defaultIconColor font-light">
                      {store.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="text-base font-bold text-primaryBtnColor">
                      Categories
                    </h1>
                    <div className="flex gap-2 w-full flex-wrap">
                      {store.categories.map((category: string, index: number) => (
                      <Button
                      key={index}
                        variant="outline"
                        className={`rounded-full h-7 bg-transparent border-solid border-separatorColor text-defaultIconColor px-5 py-[10px] text-[10px]`}
                      >
                        {category}
                      </Button>

                      ))}
                      
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold text-primaryBtnColor">
                      Reviews
                    </h1>
                    <div className="flex gap-4 items-center">
                      <p className="flex justify-center items-center gap-1">
                        <StarIcon
                          strokeWidth={2}
                          size={16}
                          className="text-primary"
                        />
                        <span className="font-bold  text-base text-defaultIconColor">
                          4.9
                        </span>
                      </p>
                      <p className="font-light text-defaultIconColor text-sm">
                        (14 Reviews)
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-fit flex gap-2 px-8 py-6 border-[1.5px] mt-4 border-separatorColor rounded-lg "
                >
                  <DeliveryBox01Icon
                    strokeWidth={2}
                    size={20}
                    className="text-primary"
                  />
                  <span className="font-extrabold text-sm text-registerBtnColor	">
                    Explore Products
                  </span>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-0 mt-5  gap-4 w-full">
                {store.products.slice(0, 3).map((product: any, index: number) => (
                  <ProductCard
                    key={index}
                    id={product.id}
                    title={product.name}
                    price={product.unitPrice}
                    imageUrl={product.thumbnail[0]}
                    showCartButton={true}
                    showFavouriteButton={false}
                    imageHeight={256}
                    imageWidth={250}
                    cardHeight={"21.5rem"}
                    />
                ))}
              </div>
            </CardContent>
          </Card>

          ))}
        </div>

        ) : (<h1 className="font-bold text-2xl text-primaryBtnColor ">Stores will appear here!</h1>)}
        <OpenStore />
      </div>
    </div>
  );
};

export default Srores;
