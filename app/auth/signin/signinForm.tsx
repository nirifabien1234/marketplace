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

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  function onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="md:max-w-lg w-full rounded-r-2xl bg-white p-10 ">
    <h1 className="text-start mb-6 text-2xl font-bold text-headingColor">
      Login
    </h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[10px] font-semibold">Email</FormLabel>
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
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
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
        <div className="flex flex-col md:flex-row w-full justify-between items-center h-fit pt-10 ">
          <Link
            href="/auth/reset-password"
            className="underline hover:no-underline hover:text-primary text-right md:text-left w-full text-sm font-semibold"
          >
            Forgot Password?
          </Link>
          <Button className="flex items-center justify-center h-12 gap-2 rounded-lg text-[0.875rem] w-full mt-4 md:w-fit md:mt-0 px-8 py-2 font-bold text-primaryBtnColor shadow-none">
            Login <Image src={loginIcon} alt={""} />
          </Button>
        </div>
      </form>
    </Form>
  </div>
  );
}
