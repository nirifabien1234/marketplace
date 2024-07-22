import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCurrentYear } from "@/lib/getCurrentYear";
import {
  InstagramIcon,
  Linkedin02Icon,
  NewTwitterIcon,
  YoutubeIcon,
} from "hugeicons-react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className=" w-full bottom-0 left-0 right-0 flex flex-col md:flex-row gap-5 md:gap-0 h-fit md:h-[7.5rem] justify-between items-center  border-b bg-background px-4 py-8 md:px-20 bg-loginSectionBg mt-10">
      <nav className=" flex-col gap-6 text-lg font-medium md:items-center md:gap-5 md:text-sm lg:gap-6">
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
            <h1 className="text-start text-base font-bold text-headingColor">
              Mark8
            </h1>
          </div>
        </Link>
      </nav>
      <div className="flex gap-4">
        <p className="text-sm text-headingColor">
          &copy; {getCurrentYear()}. Mark8
        </p>
        <p className="text-sm font-light text-authSubHeadingColor">
          By Awesomity Lab
        </p>
      </div>
      <div className="flex gap-4">
        <NewTwitterIcon
          size={16}
          strokeWidth={2}
          className="text-headingColor cursor-pointer hover:text-primary"
        />
        <InstagramIcon
          size={16}
          strokeWidth={2}
          className="text-headingColor cursor-pointer hover:text-primary"
        />
        <YoutubeIcon
          size={16}
          strokeWidth={2}
          className="text-headingColor cursor-pointer hover:text-primary"
        />
        <Linkedin02Icon
          size={16}
          strokeWidth={2}
          className="text-headingColor cursor-pointer hover:text-primary"
        />
      </div>
    </footer>
  );
};

export { Footer };
