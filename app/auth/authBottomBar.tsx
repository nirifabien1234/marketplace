"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import arrowIcon from "@/public/arrow.svg";
import { Button } from "../../components/ui/button";
import { usePathname } from "next/navigation";
import loginIcon from "@/public/login-03.svg";

const AuthBottomBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className=" mt-5 w-full bg-background   rounded-2xl p-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center mb-4 md:mb-0">
          <p className="text-headingColor text-sm text-start mb-2">
            {pathname !== "undefined" && pathname === "/auth/signin"
              ? "New Here"
              : "Already have an account?"}
          </p>
          <p className="text-sm text-authSubHeadingColor font-light">
            {pathname !== "undefined" && pathname === "/auth/signin"
              ? "Create an account"
              : "Go to Login"}
          </p>
        </div>
        <Button
          onClick={() =>
            pathname !== "undefined" && pathname === "/auth/signin"
              ? window.location.replace("/auth/signup")
              : window.location.replace("/auth/signin")
          }
          variant="outline"
          className="flex items-center justify-center h-12 gap-2 rounded-lg text-[0.875rem] px-8 py-2 font-bold text-primaryBtnColor shadow-none"
        >
          {pathname !== "undefined" && pathname === "/auth/signin" ? (
            <>
              Register Here
              <Image src={arrowIcon} width={16} height={16} alt="arrow" />
            </>
          ) : (
            <>
              Login
              <Image src={loginIcon} width={16} height={16} alt="arrow" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export { AuthBottomBar };
