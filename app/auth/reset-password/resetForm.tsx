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

export function ResetForm() {
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
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" w-full rounded-2xl bg-white p-10 ">
      <h1 className="text-start mb-6 text-2xl font-bold text-headingColor">
        Reset Password
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between items-center h-fit pt-6  ">
            <div className="flex gap-2 items-center w-fit  ">
              <Link
                href="/auth/signin"
                className="underline hover:no-underline hover:text-primary text-right md:text-left w-fit text-sm font-semibold"
              >
                Login Instead
              </Link>
            </div>
            <Button className="flex items-center justify-center h-12 gap-2 rounded-lg text-[0.875rem] w-full mt-4 md:w-fit md:mt-0 px-8 py-2 font-bold text-primaryBtnColor shadow-none">
              Submit <Image src={loginIcon} alt={""} />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
