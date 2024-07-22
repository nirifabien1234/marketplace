"use client";

import Image from "next/image";
import { NavBar } from "../components/navBar";
import { SearchBar1 } from "../components/searchBar1";
import { ProductCard } from "@/components/productCard";
import { StoreListItem } from "@/components/storeListItem";
import { Button } from "@/components/ui/button";
import {
  ArrangeByLettersAZIcon,
  ArrowDown01Icon,
  ArrowRight02Icon,
  DeliveryBox01Icon,
  FilterIcon,
  LinkSquare02Icon,
  Store02Icon,
} from "hugeicons-react";
import Link from "next/link";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import loginIcon from "@/public/login-03.svg";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { OpenStore } from "@/components/openStore";
import { WelcomeSection } from "@/components/welcomeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between lg:px-20">
      <div className="flex flex-col gap-4 w-full py-10 items-center">
        <WelcomeSection
          title={
            <>
              Welcome to <span className="text-primary">Mark8</span>
            </>
          }
          subtitle="Products"
          itemsCount={12932}
          searchBarProps={{
            searchIconClassName: "text-primary",
            inputClassName:
              "pl-10 bg-white font-normal text-white bg-opacity-[0.04] w-full border-none placeholder:text-loginSubHeadingColor placeholder:opacity-[0.56] focus-visible:outline-none focus-visible:ring-none focus-visible:ring-none focus-visible:border-none focus-visible:ring-offset-none",
            filterIconClassName: "text-white",
            placeholder: "What are you looking for?",
          }}
          categories={["All", "Vectors", "Icons", "Backgrounds"]}
          bgColor="bg-primaryBtnColor"
          buttonTextColor="text-categoryBtnColor"
          buttonBorderColor="border-categoryBtnColor"
          titleColor="text-white"
          subtitleColor="text-separatorColor"
        />
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center py-4">
            <div className="flex gap-4">
              <DeliveryBox01Icon
                strokeWidth={2}
                size={23}
                className="text-primary"
              />
              <p className="text-headingColor text-base font-bold">
                Recent Products (100)
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="size-12 border-[1.5px] border-separatorColor "
              >
                <FilterIcon
                  strokeWidth={2}
                  size={20}
                  className="text-headingColor"
                />
              </Button>
              <Button
                variant="outline"
                className="size-12 border-[1.5px] border-separatorColor"
              >
                <ArrangeByLettersAZIcon
                  strokeWidth={2}
                  size={20}
                  className="text-headingColor"
                />
              </Button>
            </div>
          </div>
          <div className="flex  gap-4 w-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 lg:w-3/4 w-full">
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
            <div className=" w-[24.8125rem] rounded-2xl border border-separatorColor">
              <div className="flex justify-between items-center p-3 md:p-5">
                <div className="flex gap-4 justify-center items-center">
                  <Store02Icon
                    strokeWidth={2}
                    size={23}
                    className="text-primary"
                  />
                  <p className="text-headingColor text-sm md:text-base font-bold">
                    Top 10 stores
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" className="size-12 ">
                    <LinkSquare02Icon
                      strokeWidth={2}
                      size={20}
                      className="text-headingColor"
                    />
                  </Button>
                </div>
              </div>
              <div className="p-5 bg-searchOuterBg">
                <SearchBar1
                  searchIconClassName={"text-registerBtnColor"}
                  inputClassName={
                    " pl-10 py-6 bg-white font-normal rounded-lg text-registerBtnColor w-full border-none placeholder:text-defaultIconColor   focus-visible:outline-none focus-visible:ring-none focus-visible:ring-none focus-visible:border-none focus-visible:ring-offset-none"
                  }
                  filterIconClassName={"text-defaultIconColor"}
                  placeholder={"Search a store"}
                />
              </div>
              <div className=" flex flex-col gap-5 p-5 w-full">
                <Link href={"/store"}>
                  <StoreListItem
                    imageSrc={""}
                    storeName={"Awsome Shop 1"}
                    productCount={100}
                  />
                </Link>
                <Link href={"/store"}>
                  <StoreListItem
                    imageSrc={""}
                    storeName={"Awsome Shop 2"}
                    productCount={100}
                  />
                </Link>
                <Link href={"/store"}>
                  <StoreListItem
                    imageSrc={""}
                    storeName={"Awsome Shop 2"}
                    productCount={100}
                  />
                </Link>
                <Link href={"/store"}>
                  <StoreListItem
                    imageSrc={""}
                    storeName={"Awsome Shop 2"}
                    productCount={100}
                  />
                </Link>
                <Link href={"/store"}>
                  <StoreListItem
                    imageSrc={""}
                    storeName={"Awsome Shop 2"}
                    productCount={100}
                  />
                </Link>
                <Link href={"/store"}>
                  <StoreListItem
                    imageSrc={""}
                    storeName={"Awsome Shop 2"}
                    productCount={100}
                  />
                </Link>
                <Link href={"/store"}>
                  <StoreListItem
                    imageSrc={""}
                    storeName={"Awsome Shop 2"}
                    productCount={100}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-fit flex gap-2 px-8 py-6 border-[1.5px] border-separatorColor rounded-lg "
        >
          <ArrowDown01Icon strokeWidth={2} size={20} className="text-primary" />
          <span className="font-extrabold text-sm text-registerBtnColor	">
            Load More
          </span>
        </Button>
        <OpenStore />
      </div>
    </main>
  );
}
