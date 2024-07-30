"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { excludedRoutes } from "@/lib/excludedRoutes";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { SessionData } from "@/types/types";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const shouldExclude = pathname && excludedRoutes.includes(pathname);

  useEffect(() => {
    const sessionString = sessionStorage.getItem("session");
    if (sessionString) {
      setSession(JSON.parse(sessionString));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && session?.isLoggedIn !== true && !shouldExclude) {
      router.push("/auth/signin");
    }
  }, [session, isLoading, router, pathname, shouldExclude]);

  if (isLoading || (!session && !shouldExclude)) {
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
