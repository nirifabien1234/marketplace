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

interface SroresProps {}

const Srores: FC<SroresProps> = () => {
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
          categories={["All", "Vectors", "Icons", "Backgrounds"]}
          bgColor="bg-searchOuterBg"
          buttonTextColor="text-defaultIconColor text-xs focus:text-primaryBtnColor focus:border-primaryBtnColor"
          buttonBorderColor="border-separatorColor"
          titleColor="text-primaryBtnColor"
          subtitleColor="text-defaultIconColor"
        />
        <div className="flex flex-col gap-10 w-full">
          <Card className="shadow-none">
            <CardHeader className="border-b border-separatorColor px-10 py-5">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5">
                  <Image
                    src={"/defaultIcon.png"}
                    width={60}
                    height={60}
                    alt={"Awsome Shop 2"}
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                  <div className=" flex flex-col gap-3">
                    <p className="font-medium text-sm">Awsome Shop 2</p>
                    <p className="text-xs text-authSubHeadingColor font-light ">
                      {134} Products
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
                      A cozy boutique offering a curated selection of unique,
                      high-quality clothing and accessories for fashion-forward
                      individuals.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="text-base font-bold text-primaryBtnColor">
                      Categories
                    </h1>
                    <div className="flex gap-2 w-full flex-wrap">
                      <Button
                        variant="outline"
                        className={`rounded-full h-7 bg-transparent border-solid border-separatorColor text-defaultIconColor px-5 py-[10px] text-[10px]`}
                      >
                        Vectors
                      </Button>
                      <Button
                        variant="outline"
                        className={`rounded-full h-7 bg-transparent border-solid border-separatorColor text-defaultIconColor px-5 py-[10px] text-[10px]`}
                      >
                        Icons
                      </Button>
                      <Button
                        variant="outline"
                        className={`rounded-full h-7 bg-transparent border-solid border-separatorColor text-defaultIconColor px-5 py-[10px] text-[10px]`}
                      >
                        Backgrounds
                      </Button>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-0 mt-5  gap-4 w-[49.375rem]">
                <ProductCard
                id="1"
                  title="Product 1"
                  price="9,000 Rwf"
                  imageUrl="/product_placeholder_image.png"
                  showCartButton={true}
                  showFavouriteButton={false}
                  imageHeight={256} // custom image height for longer card
                  imageWidth={250}
                  cardHeight={"21.5rem"}
                />
                <ProductCard
                id="1"
                  title="Product 2"
                  price="9,000 Rwf"
                  imageUrl="/product_placeholder_image.png"
                  showCartButton={false}
                  showFavouriteButton={true}
                  imageHeight={256} // custom image height for longer card
                  imageWidth={250}
                  cardHeight={"21.5rem"}
                />
                <ProductCard
                id="1"
                  title="Product 3"
                  price="9,000 Rwf"
                  imageUrl="/product_placeholder_image.png"
                  showCartButton={false}
                  showFavouriteButton={true}
                  imageHeight={256} // custom image height for longer card
                  imageWidth={250}
                  cardHeight={"auto"}
                />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="border-b border-separatorColor px-10 py-5">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-5">
                  <Image
                    src={"/defaultIcon.png"}
                    width={60}
                    height={60}
                    alt={"Awsome Shop 2"}
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                  <div className=" flex flex-col gap-3">
                    <p className="font-medium text-sm">Awsome Shop 2</p>
                    <p className="text-xs text-authSubHeadingColor font-light ">
                      {134} Products
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
                      A cozy boutique offering a curated selection of unique,
                      high-quality clothing and accessories for fashion-forward
                      individuals.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="text-base font-bold text-primaryBtnColor">
                      Categories
                    </h1>
                    <div className="flex gap-2 w-full flex-wrap">
                      <Button
                        variant="outline"
                        className={`rounded-full h-7 bg-transparent border-solid border-separatorColor text-defaultIconColor px-5 py-[10px] text-[10px]`}
                      >
                        Vectors
                      </Button>
                      <Button
                        variant="outline"
                        className={`rounded-full h-7 bg-transparent border-solid border-separatorColor text-defaultIconColor px-5 py-[10px] text-[10px]`}
                      >
                        Icons
                      </Button>
                      <Button
                        variant="outline"
                        className={`rounded-full h-7 bg-transparent border-solid border-separatorColor text-defaultIconColor px-5 py-[10px] text-[10px]`}
                      >
                        Backgrounds
                      </Button>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mt-0 mt-5  gap-4 w-[49.375rem]">
                <ProductCard
                id="1"
                  title="Product 1"
                  price="9,000 Rwf"
                  imageUrl="/product_placeholder_image.png"
                  showCartButton={true}
                  showFavouriteButton={false}
                  imageHeight={256} // custom image height for longer card
                  imageWidth={250}
                  cardHeight={"21.5rem"}
                />
                <ProductCard
                id="1"
                  title="Product 2"
                  price="9,000 Rwf"
                  imageUrl="/product_placeholder_image.png"
                  showCartButton={false}
                  showFavouriteButton={true}
                  imageHeight={256} // custom image height for longer card
                  imageWidth={250}
                  cardHeight={"21.5rem"}
                />
                <ProductCard
                id="1"
                  title="Product 3"
                  price="9,000 Rwf"
                  imageUrl="/product_placeholder_image.png"
                  showCartButton={false}
                  showFavouriteButton={true}
                  imageHeight={256} // custom image height for longer card
                  imageWidth={250}
                  cardHeight={"auto"}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <OpenStore />
      </div>
    </div>
  );
};

export default Srores;
