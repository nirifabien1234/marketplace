"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Home04Icon,
  Store02Icon,
  ShoppingCart02Icon,
  FavouriteIcon,
  UserIcon,
  ArrowDown01Icon,
  Search01Icon,
  Menu01Icon,
  CustomerService01Icon,
  InformationCircleIcon,
  Settings02Icon,
  Logout03Icon,
} from "hugeicons-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
export function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home04Icon },
    { href: "/stores", label: "Stores", icon: Store02Icon },
  ];
  const rightLinks = [
    { href: "/cart", label: "My Cart", icon: ShoppingCart02Icon },
    { href: "/favorites", label: "Saved", icon: FavouriteIcon },
  ];
  const dropdownLinks = [
    { href: "/account", label: "My Account", icon: UserIcon },
    { href: "/orders", label: "My Orders", icon: ShoppingCart02Icon },
    { href: "/help", label: "Help", icon: CustomerService01Icon },
    { href: "/about", label: "About", icon: InformationCircleIcon },
    { href: "/settings", label: "Settings", icon: Settings02Icon },
  ];

  return (
    <header className="sticky w-full left-0 top-0 right-0 flex h-16 justify-between items-center  border-b bg-background px-4 py-8 md:px-20">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold md:text-base"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/mark8.png"
              alt="Mark8 logo"
              width={40}
              height={40}
              priority
            />
            <div className="flex flex-col w-[10rem]">
              <h1 className="text-start text-md font-bold text-headingColor">
                Mark8
              </h1>
              <p className="text-authSubHeadingColor text-xs font-normal">
                By Awesomity Lab
              </p>
            </div>
          </div>
        </Link>
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              href={link.href}
              key={link.href}
              className={`flex justify-center items-center transition-colors ${
                isActive
                  ? "text-primaryBtnColor font-bold"
                  : "text-defaultIconColor"
              }`}
            >
              <link.icon
                size={18}
                strokeWidth={2}
                className={`mr-2 transition-colors ${
                  isActive ? "text-primary" : "text-defaultIconColor"
                }`}
              />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden text-defaultIconColor"
          >
            <Menu01Icon strokeWidth={2} className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold md:text-base"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/mark8.png"
                  alt="Mark8 logo"
                  width={56}
                  height={56}
                  priority
                />
                <div className="flex flex-col w-[10rem]">
                  <h1 className="text-start text-md font-bold text-headingColor">
                    Mark8
                  </h1>
                  <p className="text-authSubHeadingColor text-xs font-normal">
                    By Awesomity Lab
                  </p>
                </div>
              </div>
            </Link>
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`flex justify-start items-center transition-colors ${
                    isActive
                      ? "text-primaryBtnColor font-bold"
                      : "text-defaultIconColor"
                  }`}
                >
                  <link.icon
                    size={18}
                    strokeWidth={2}
                    className={`mr-2 transition-colors ${
                      isActive ? "text-primary" : "text-defaultIconColor"
                    }`}
                  />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-fit items-center justify-center gap-4 md:ml-auto md:gap-6">
        <div className="relative flex h-8 w-fit items-center justify-center rounded-md bg-muted ">
          <Search01Icon
            strokeWidth={2}
            className="absolute h-4 w-4 text-muted-foreground"
          />
        </div>
        {rightLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              href={link.href}
              key={link.href}
              className={`flex justify-center items-center transition-colors text-xs ${
                isActive
                  ? "text-primaryBtnColor font-bold"
                  : "text-defaultIconColor"
              }`}
            >
              <link.icon
                size={16}
                strokeWidth={2}
                className={`mr-2 transition-colors ${
                  isActive ? "text-primary" : "text-defaultIconColor"
                }`}
              />
              {link.label}
            </Link>
          );
        })}
        <Button variant="outline" className="shrink-0 font-bold">
          Open A Store
          <span>
            <Store02Icon
              size={16}
              strokeWidth={2}
              className=" text-primary ml-2"
            />
          </span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className=" p-0 ">
              <span className=" flex justify-center items-center  border-r h-full  p-3">
                <UserIcon
                  size={18}
                  strokeWidth={2}
                  className=" text-defaultIconColor opacity-50"
                />
              </span>
              <span className=" flex justify-center items-center  border-r h-full p-2">
                <ArrowDown01Icon
                  size={18}
                  strokeWidth={2}
                  className=" text-primaryBtnColor"
                />
              </span>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="px-8 py-7 w-[19.125rem]">
            <DropdownMenuLabel className="flex items-center ">
              <Image src={"/defaultIcon.png"} width={40} height={40} alt={""} />
              <div className="ml-4">
                <p className=" font-semibold text-sm">John Doe</p>
                <p className=" text-xs text-authSubHeadingColor font-normal opacity-70">
                  email@john.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="ml-2 bg-separatorColor opacity-50 my-4" />
            {dropdownLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <DropdownMenuItem key={link.href}>
                  <Link
                    href={link.href}
                    key={link.href}
                    className={`flex justify-center items-center text-primaryBtnColor transition-colors py-1 text-sm ${
                      isActive
                        ? "text-primaryBtnColor font-bold"
                        : "text-defaultIconColor"
                    }`}
                  >
                    <link.icon
                      size={18}
                      strokeWidth={2}
                      className={`mr-4 transition-colors text-authSubHeadingColor`}
                    />
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator className="ml-2 bg-separatorColor opacity-50 my-4" />
            <DropdownMenuItem className="text-authSubHeadingColor">
              <Logout03Icon size={18} strokeWidth={2} className="mr-4"/>
              <span className="flex justify-center items-center transition-colors py-1 text-sm">Logout </span></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
