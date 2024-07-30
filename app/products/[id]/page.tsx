"use client";
import { OpenStore } from "@/components/openStore";
import { ProductCard } from "@/components/productCard";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Add01Icon,
  ArrowLeft02Icon,
  CallIcon,
  FavouriteIcon,
  LinerIcon,
  MoreVerticalCircle01Icon,
  Remove01Icon,
  ShoppingCartCheckIn02Icon,
  StarIcon,
} from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  updateQuantity,
} from "@/app/redux/features/cart/cartSlice";
import { useParams } from "next/navigation";
import { useProductById } from "@/hooks/useProductById";

interface ProductDetailsProps {}

interface SelectedThumbnail {
  index: number;
  url: string;
}

const ProductDetails: FC<ProductDetailsProps> = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { id } = params;
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<SelectedThumbnail>({
    index: 0,
    url: selectedProduct?.thumbnail[0],
  });
  const product = useProductById(id as string);

  useEffect(() => {
    if (product !== null) {
      setSelectedProduct(product);
    }
  }, [id, product]);

  const items = useAppSelector((state) => state.cart.items);
  const products = useAppSelector((state) => state.products.products);
  // Filter out the selected product
  const filteredProducts = products?.filter(
    (product) => product.id !== selectedProduct?.id
  );

  // Get the first 4 products from the filtered list
  const recommendations = filteredProducts.slice(0, 4);

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const handleChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };
  const handleToggleThumbnail = (index: number, thumbnail: string) => {
    setSelectedThumbnail({ index, url: thumbnail });
  };

  return (
    <div className="flex min-h-screen items-center justify-between lg:px-20">
      <div className="flex flex-col gap-10 w-full h-auto py-10 items-center">
        <div className="flex items-center justify-start gap-5 w-full">
          <ArrowLeft02Icon strokeWidth={2} size={24} className="text-primary" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-sm font-medium text-registerBtnColor hover:text-defaultIconColor"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <LinerIcon
                  strokeWidth={2}
                  size={16}
                  className="text-registerBtnColor -rotate-30"
                />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-sm font-medium text-registerBtnColor hover:text-defaultIconColor"
                >
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <LinerIcon
                  strokeWidth={2}
                  size={16}
                  className="text-registerBtnColor -rotate-30"
                />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm font-medium text-defaultIconColor">
                  {selectedProduct?.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex gap-5 flex-wrap lg:flex-nowrap w-full lg:h-[42rem]">
          <div className="w-[42.625rem] flex flex-col justify-between h-full border rounded-2xl">
            <div
              className="relative w-full h-full"
              style={{ paddingTop: `${(574 / 682) * 100}%` }}
            >
              <Image
                src={selectedThumbnail.url || selectedProduct?.thumbnail[0]}
                alt="product"
                layout="fill"
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="w-full flex gap-2 p-5 rounded-b-2xl">
              {selectedProduct?.thumbnail.map((thumbnail: string, index: number) => (
                <Image
                  key={index}
                  src={thumbnail}
                  alt="thumbnail"
                  onClick={() => handleToggleThumbnail(index, thumbnail)}
                  width={60}
                  height={60}
                  className={`object-cover rounded-lg h-[60px] w-[60px] ${selectedThumbnail.index === index ? "border-4 border-primary" : ""}`}
                />
              ))}
            </div>
          </div>
          <div className="w-[54.125rem] flex flex-col justify-between items-center  border h-full rounded-2xl">
            <div className="w-full flex justify-between items-center p-5 border-b rounded-t-2xl">
              <div className="flex justify-start gap-6 items-center">
                <h1 className=" font-bold text-base text-primaryBtnColor">
                  Product Details
                </h1>
                <Badge className="p-[10px] text-[10px] font-extrabold bg-loginSectionBg rounded-lg">
                  IN STOCK
                </Badge>
              </div>
              <div className="flex justify-start gap-5 items-center">
                <Button
                  variant="outline"
                  className=" font-extrabold flex h-[48px] gap-2 py-2 px-8 text-sm"
                >
                  <FavouriteIcon
                    size={16}
                    strokeWidth={2}
                    className=" text-primary ml-2"
                  />
                  <span>Save</span>
                </Button>
                <MoreVerticalCircle01Icon
                  strokeWidth={2}
                  size={24}
                  className="text-defaultIconColor"
                />
              </div>
            </div>
            <div className="w-full p-10 flex flex-col gap-10 ">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-black">{selectedProduct?.name}</h1>
                <div className="flex gap-2 justify-start items-center md:mr">
                  <p className="text-primary text-base font-bold w-fit">
                   {selectedProduct?.unitPrice} Rwf
                  </p>
                  {true && (
                    <p className="text-separatorColor text-sm  font-bold">
                      <del>12,000 Rwf</del>
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-base font-bold text-primaryBtnColor">
                  Description
                </h1>
                <p className="text-sm text-defaultIconColor font-light">
                 {selectedProduct?.description}
                </p>
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
              <div className="flex gap-3">
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDecrement(items[0].id)}
                  >
                    <Remove01Icon
                      size={16}
                      strokeWidth={2}
                      className="text-headingColor"
                    />
                  </Button>
                  <Input
                    type="number"
                    value={items[0].quantity}
                    onChange={(e) =>
                      handleChange(items[0].id, parseInt(e.target.value))
                    }
                    className=" text-center border mx-2 bg-headingColor bg-opacity-[0.04] border-none w-[6.25rem] text-sm font-semibold "
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleIncrement(items[0].id)}
                  >
                    <Add01Icon
                      size={16}
                      strokeWidth={2}
                      className="text-headingColor"
                    />
                  </Button>
                </div>
                <Button
                  variant="default"
                  className="w-fit flex gap-2 rounded-lg px-8 py-2 text-sm font-extrabold"
                >
                  <ShoppingCartCheckIn02Icon
                    size={16}
                    strokeWidth={2}
                    className="text-primaryBtnColor"
                  />
                  <p>Add To Cart</p>
                </Button>
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-5 border-t rounded-b-2xl flex-wrap">
              <div className="flex justify-start gap-3 items-center">
                <h1 className=" font-bold text-base text-primaryBtnColor">
                  Store Info:
                </h1>
                <div className="flex text-sm justify-between items-center text-primaryBtnColor font-medium gap-2">
                  <Image
                    width={30}
                    height={30}
                    src={"/defaultIcon.png"}
                    alt={""}
                    className="rounded-full"
                  />
                  <p>Awesome Shop 1</p>
                </div>
              </div>
              <div className="flex justify-start gap-5 items-center">
                <Button
                  variant="outline"
                  className=" font-extrabold flex h-[48px] gap-2 py-2 px-8 text-sm"
                >
                  <CallIcon
                    size={16}
                    strokeWidth={2}
                    className=" text-primary ml-2"
                  />
                  <span>Contact Store</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
         {recommendations?.length > 0 && <p className="text-2xl font-black text-primaryBtnColor flex justify-start items-center w-full">You may also like</p>} 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full  gap-4">
          {recommendations?.map((product, index) => (
            <ProductCard
              key={index}
              title={product.name}
              id={product.id}
              price={`${product.unitPrice} Rwf`}
              originalPrice="10,000 Rwf"
              imageUrl={product.thumbnail[0]}
              showCartButton={true}
              showFavouriteButton={true}
            />
          ))}
        </div>

        <OpenStore />
      </div>
    </div>
  );
};

export default ProductDetails;
