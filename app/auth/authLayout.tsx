"use client";

import React from "react";
import {usePathname} from "next/navigation";

const AuthLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const pathname = usePathname();
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/auth.svg)" }}
    >
      <div className={`max-w-[50rem] w-full ${pathname === "/auth/reset-password" ? "w-md flex justify-center" : ""}`}>{children}</div>
    </div>
  );
};

export { AuthLayout };
