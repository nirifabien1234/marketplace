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

export default function Home() {
  const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
  });

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <main className="flex min-h-screen items-center justify-between lg:px-20">
      <div className="flex flex-col gap-4 w-full py-10 items-center">
        <div className=" flex flex-col justify-center gap-6 items-center w-full bg-primaryBtnColor p-10 rounded-2xl">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl font-black text-white">
              Welcome to <span className="text-primary">Mark8</span>
            </h1>{" "}
            <p className="text-separatorColor text-sm">12,932 Products</p>
          </div>
          <div className="md:w-[37.5rem] w-full">
            <SearchBar1
              searchIconClassName={"text-primary"}
              inputClassName={
                " pl-10 bg-white font-normal text-white bg-opacity-[0.04] w-full border-none placeholder:text-loginSubHeadingColor placeholder:opacity-[0.56]  focus-visible:outline-none focus-visible:ring-none focus-visible:ring-none focus-visible:border-none focus-visible:ring-offset-none"
              }
              filterIconClassName={"text-white"}
              placeholder={"What are you looking for?"}
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              className="rounded-full h-7 bg-transparent border-solid border-categoryBtnColor text-categoryBtnColor "
            >
              All
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-7 bg-transparent border-solid border-categoryBtnColor text-categoryBtnColor "
            >
              Vectors
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-7 bg-transparent border-solid border-categoryBtnColor text-categoryBtnColor "
            >
              Icons
            </Button>
            <Button
              variant="outline"
              className="rounded-full h-7 bg-transparent border-solid border-categoryBtnColor text-categoryBtnColor "
            >
              Backgrounds
            </Button>
          </div>
        </div>
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
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
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
        <div className="flex justify-between items-center p-10 bg-searchOuterBg w-full flex-wrap md:flex-nowrap">
          <h1 className="flex font-black text-2xl text-registerBtnColor w-full md:w-fit mb-4 md:mb-0 justify-center items-center">
            <span className="text-primary">Open</span> Your Store
          </h1>
          <div className="flex items-center w-full md:w-[30rem] lg:w-[37.5rem]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex space-x-2 w-full"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Image
                              src={"/mail.svg"}
                              width={16}
                              height={16}
                              alt={"mail"}
                              className="mr-3"
                            />
                          </span>
                          <Input
                            type="email"
                            placeholder="Enter your Email"
                            {...field}
                            className="px-10 py-6 bg-headingColor bg-opacity-[0.04] w-full text-sm rounded-lg border-none"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="flex items-center justify-center h-12 gap-2 rounded-lg text-[0.875rem] w-fit px-8 py-2 font-bold text-primaryBtnColor shadow-none">
                  Submit{" "}
                  <ArrowRight02Icon
                    strokeWidth={2}
                    size={18}
                    className="text-primaryBtnColor"
                  />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
