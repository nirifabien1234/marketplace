import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { SearchBar1 } from "@/components/searchBar1";

interface WelcomeSectionProps {
  title: ReactNode;
  subtitle: string;
  itemsCount: number;
  searchBarProps: {
    searchIconClassName: string;
    inputClassName: string;
    filterIconClassName: string;
    placeholder: string;
  };
  categories: string[];
  bgColor: string;
  buttonTextColor: string;
  buttonBorderColor: string;
  titleColor: string;
  subtitleColor: string;
}

const WelcomeSection: FC<WelcomeSectionProps> = ({
  title,
  subtitle,
  searchBarProps,
  categories,
  itemsCount,
  bgColor,
  buttonTextColor,
  buttonBorderColor,
  titleColor,
  subtitleColor,
}) => {
  return (
    <div className={`flex flex-col justify-center gap-6 items-center w-full p-10 rounded-2xl ${bgColor}`}>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className={`text-2xl font-black ${titleColor}`}>
          {title}
        </h1>
        <p className={`text-sm font-light ${subtitleColor}`}>{itemsCount} {" "} {subtitle}</p>
      </div>
      <div className="md:w-[37.5rem] w-full">
        <SearchBar1
          searchIconClassName={searchBarProps.searchIconClassName}
          inputClassName={searchBarProps.inputClassName}
          filterIconClassName={searchBarProps.filterIconClassName}
          placeholder={searchBarProps.placeholder}
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="outline"
            className={`rounded-full h-7 bg-transparent border-solid ${buttonBorderColor} ${buttonTextColor}`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export { WelcomeSection };
