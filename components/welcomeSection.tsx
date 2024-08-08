"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchBar1 } from "@/components/searchBar1";
import { Category, Product, ProductFilters } from "@/types/types";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import { setSearchedProducts } from "@/app/redux/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

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
  categories: Category[];
  bgColor: string;
  buttonTextColor: string;
  buttonBorderColor: string;
  titleColor: string;
  subtitleColor: string;
  usedWhere: string;
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
  usedWhere,
}) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSelectedCategory = (categoryName: string) => {
    setSelectedCategoryName(categoryName);
  };

  const {
    data: productsSearchResult,
    isLoading: isLoadingProducts,
    isError: isErrorSearchingProducts,
  } = useSearchProducts({ name: "" }, selectedCategoryName);
  const productsFromSearch = productsSearchResult?.data?.products;

  // Populate the Redux store with searched products
  useEffect(() => {
    if (productsFromSearch) {
      dispatch(setSearchedProducts(productsFromSearch as Product[]));
    }
  }, [dispatch, productsFromSearch]);

  return (
    <div
      className={`flex flex-col justify-center gap-6 items-center w-full p-10 rounded-2xl ${bgColor}`}
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className={`text-2xl font-black ${titleColor}`}>{title}</h1>
        <p className={`text-sm font-light ${subtitleColor}`}>
          {itemsCount} {subtitle}
        </p>
      </div>
      <div className="md:w-[37.5rem] w-full">
        {usedWhere === "home" ? (
          <SearchBar1
            searchIconClassName={searchBarProps.searchIconClassName}
            inputClassName={searchBarProps.inputClassName}
            filterIconClassName={searchBarProps.filterIconClassName}
            placeholder={searchBarProps.placeholder}
            usedFor="products"
          />
        ) : (
          <SearchBar1
            searchIconClassName={searchBarProps.searchIconClassName}
            inputClassName={searchBarProps.inputClassName}
            filterIconClassName={searchBarProps.filterIconClassName}
            placeholder={searchBarProps.placeholder}
            usedFor="stores"
          />
        )}
      </div>
      <div className="flex justify-center flex-wrap items-center gap-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={() => handleSelectedCategory(category.name)}
            className={`rounded-full h-7  bg-transparent border-solid ${buttonBorderColor} ${buttonTextColor} ${
              selectedCategoryName === category.name && usedWhere === "home"
                ? "border-white text-white"
                : ""
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export { WelcomeSection };
