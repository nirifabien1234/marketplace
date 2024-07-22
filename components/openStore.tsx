import { FC } from "react";
import Image from "next/image";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight02Icon, Mail01Icon } from "hugeicons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";



const OpenStore: FC = () => {
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
        console.log(values);
      }
  return (
    <div className="flex justify-between items-center p-10 bg-searchOuterBg w-full flex-wrap md:flex-nowrap">
      <h1 className="flex font-black text-2xl text-registerBtnColor w-full md:w-fit mb-4 md:mb-0 justify-center items-center">
        <span className="text-primary">Open</span> {" "}Your Store
      </h1>
      <div className="flex items-center w-full md:w-[30rem] lg:w-[37.5rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail01Icon strokeWidth={2} size={20} className="text-primary" />
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
  );
};

export { OpenStore };
