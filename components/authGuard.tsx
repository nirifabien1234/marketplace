"use client";

import { usePathname, useRouter, redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { excludedRoutes } from "@/lib/excludedRoutes";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { useSession } from "../hooks/useSession";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const pathname = usePathname();
  const { session } = useSession();
  const router = useRouter();
  const shouldExclude = pathname && excludedRoutes.includes(pathname);

  useEffect(() => {
    
    if (session) {
      setIsLoading(true);
      if (session.isLoggedIn) {
        if (pathname === "/auth/signin") {
          setIsLoading(false);
          router.push("/");
        } else {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        router.push("/auth/signin");
      }
    }
  }, [session, pathname, router]);

  useEffect(() => {
    setIsLoading(true);

    if (!session) {
        setIsLoading(false);
        router.push("/auth/signin");
      }
    }, [session, router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-lg font-bold text-primaryBtnColor w-full h-screen">
        Please wait...
      </div>
    );
  }

  return (
    <>
      {!shouldExclude && <NavBar />}
      {children}
      {!shouldExclude && <Footer />}
    </>
  );
};

export { AuthGuard };
