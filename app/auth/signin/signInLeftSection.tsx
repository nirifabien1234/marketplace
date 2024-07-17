"use client";

import React from "react";
import Image from "next/image";
import { getCurrentYear } from "@/lib/getCurrentYear";

const SignInLeftSection: React.FC = () => {

  return (
          <div className=" w-full rounded-l-2xl  bg-loginSectionBg p-10 hidden md:block">
            <div className="flex flex-col justify-between h-full ">
              <Image
                src="/mark8.png"
                alt="Mark8 logo"
                width={56}
                height={56}
                priority
              />
              <div>
                <h1 className="text-start mb-1 text-2xl font-bold text-headingColor">
                  Mark8
                </h1>
                <p className="text-authSubHeadingColor text-sm">
                  By Awesomity Lab
                </p>
              </div>
              <p className="text-xs text-authSubHeadingColor">
              &copy; {getCurrentYear()} Awesomity Lab
              </p>
            </div>
          </div>
  );
};

export {SignInLeftSection};
