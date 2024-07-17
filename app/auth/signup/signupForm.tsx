"use client";

import { z } from "zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import loginIcon from "@/public/login-03.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";

const phoneRegex = /^(78|72|73)\d{7}$/;

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  agreeToTerms: z.boolean().default(false).optional(),
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  lastName: z.string().min(3, "Last name must be at least 3 characters long"),
  firstName: z.string().min(3, "First name must be at least 3 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
});

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      phone: "",
      lastName: "",
      agreeToTerms: false,
      password: "",
      firstName: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" w-full rounded-2xl bg-white p-10 ">
      <h1 className="text-start mb-6 text-2xl font-bold text-headingColor">
        Register
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex gap-4 w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[10px] font-semibold">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image
                          src={"/avatar.svg"}
                          width={16}
                          height={16}
                          alt={"name"}
                          className="mr-3"
                        />
                      </span>
                      <Input
                        type="text"
                        placeholder="Enter First Name"
                        {...field}
                        className="px-10 py-6 w-full bg-headingColor bg-opacity-[0.04] text-sm rounded-lg border-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[10px] font-semibold">
                    Last Name
                  </FormLabel>
                  <FormControl className="w-full">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image
                          src={"/avatar.svg"}
                          width={16}
                          height={16}
                          alt={"name"}
                          className="mr-3"
                        />
                      </span>
                      <Input
                        type="text"
                        placeholder="Enter Last Name"
                        {...field}
                        className="px-10 py-6 w-full bg-headingColor bg-opacity-[0.04] text-sm rounded-lg border-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[10px] font-semibold">
                    Email
                  </FormLabel>
                  <FormControl className="">
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
                        placeholder="Enter email"
                        {...field}
                        className="px-10 py-6 bg-headingColor bg-opacity-[0.04] text-sm rounded-lg border-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={ form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[10px] font-semibold">
                    Phone Number
                  </FormLabel>
                  <FormControl className="">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image
                          src={"/phone.svg"}
                          width={16}
                          height={16}
                          alt={"phone"}
                          className="mr-3"
                        />
                        <span className="font-bold text-sm">250</span>
                      </span>
                      <Input
                        type="tel"
                        placeholder="---  ---  ---"
                        {...field}
                        className="px-24 py-6 bg-headingColor bg-opacity-[0.04] text-sm rounded-lg border-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4 w-full">
            <FormField
              control={ form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[10px] font-semibold">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image
                          src={"/lock.svg"}
                          width={16}
                          height={16}
                          alt={"mail"}
                          className="mr-3"
                        />
                      </span>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        {...field}
                        className="px-10 py-6 bg-headingColor bg-opacity-[0.04] placeholder:opacity-[0.56] text-sm  rounded-lg border-none"
                      />
                      <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeClosedIcon className="h-5 w-5 text-headingColor" />
                        ) : (
                          <EyeOpenIcon className="h-5 w-5 text-headingColor" />
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={ form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-[10px] font-semibold">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image
                          src={"/lock.svg"}
                          width={16}
                          height={16}
                          alt={"mail"}
                          className="mr-3"
                        />
                      </span>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        {...field}
                        className="px-10  py-6 bg-headingColor bg-opacity-[0.04] placeholder:opacity-[0.56] text-sm  rounded-lg border-none"
                      />
                      <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeClosedIcon className="h-5 w-5 text-headingColor" />
                        ) : (
                          <EyeOpenIcon className="h-5 w-5 text-headingColor" />
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between items-center h-fit pt-6  ">
            <div className="flex gap-2 items-center w-fit  ">
            <FormField
              control={ form.control}
              name="agreeToTerms"
              render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className= "text-sm text-authSubHeadingColor">
                  I agree to the{" "}
                  </FormLabel>
                </div>
              </FormItem>
            )}
            />
              <Link
                href="#"
                className="underline hover:no-underline hover:text-primary text-right md:text-left w-fit text-sm font-semibold"
              >
                Terms and Conditions
              </Link>
            </div>
            <Button className="flex items-center justify-center h-12 gap-2 rounded-lg text-[0.875rem] w-full mt-4 md:w-fit md:mt-0 px-8 py-2 font-bold text-primaryBtnColor shadow-none">
              Register <Image src={loginIcon} alt={""} />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
