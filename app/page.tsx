"use client";

import { SearchBar1 } from "../components/searchBar1";
import { ProductCard } from "@/components/productCard";
import { StoreListItem } from "@/components/storeListItem";
import { Button } from "@/components/ui/button";
import {
  ArrangeByLettersAZIcon,
  ArrowDown01Icon,
  DeliveryBox01Icon,
  FilterIcon,
  LinkSquare02Icon,
  Store02Icon,
} from "hugeicons-react";
import Link from "next/link";
import { OpenStore } from "@/components/openStore";
import { WelcomeSection } from "@/components/welcomeSection";
import { useProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/redux/hooks";
import {
  setProducts,
  setLoading,
} from "@/app/redux/features/products/productsSlice";
import {
  Category,
  CategoryFilters,
  Product,
  ProductFilters,
  Store,
} from "@/types/types";
import { Pagination } from "../types/types";
import { useCategories } from "@/hooks/useCategories";
import { setCategories } from "./redux/features/categories/categorySlice";
import { useRouter } from "next/navigation";
import { useStores } from "@/hooks/useStores";
import { setStores } from "./redux/features/stores/storesSlice";
import { useSearchProducts } from "@/hooks/useSearchProducts";

export default function Home() {
  // State for filters
  const [filters, setFilters] = useState<ProductFilters>({
    pageNumber: 1,
    recordsPerPage: 12,
  });

  const [categoryFilters, setCategoryFilters] = useState<CategoryFilters>({
    pageNumber: 1,
    recordsPerPage: 12,
  });

  const [storeFilters, setStoreFilters] = useState<any>({
    id: "",
  });

  // Fetch data
  const { isLoading, isError, data } = useProducts(filters);
  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useCategories(categoryFilters);
  const {
    data: storesData,
    isLoading: isLoadingStores,
    isError: isErrorStores,
  } = useStores(storeFilters);

  // Setup dispatch
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Extract data from API responses
  const storesFromApi = storesData?.data?.stores;
  const categoriesFromApi = categoriesData?.data?.categories;
  const productsFromApi = data?.data?.products;

  // Populate the Redux store with fetched data
  useEffect(() => {
    if (productsFromApi) {
      dispatch(setProducts(productsFromApi as Product[]));
    }
  }, [dispatch, productsFromApi]);

  useEffect(() => {
    if (categoriesFromApi) {
      dispatch(setCategories(categoriesFromApi as Category[]));
    }
  }, [dispatch, categoriesFromApi]);

  useEffect(() => {
    if (storesFromApi) {
      dispatch(setStores(storesFromApi as Store[]));
    }
  }, [dispatch, storesFromApi]);

  // Select data from Redux store
  const { products, searchedProducts } = useAppSelector(
    (state) => state.products
  );
  const { categories } = useAppSelector((state) => state.categories);
  const { stores } = useAppSelector((state) => state.stores);
  const totalPages = data?.data?.pagination?.totalPages;

  const productsToRender = searchedProducts && searchedProducts.length > 0 ? searchedProducts : products;

  // Load more products
  const handleLoadMore = () => {
    setFilters((prev) => ({ ...prev, pageNumber: filters?.pageNumber! + 1 }));
  };

  const shouldDisplayProduct = (product: Product) =>
    !product.thumbnail.includes("addidas.com") &&
    !product.thumbnail.includes("x.com");

  const renderProductCards = (products: Product[]) => {
    return products.map((product, index) => {
      if (!shouldDisplayProduct(product)) return null;

      return (
        <ProductCard
          key={index}
          id={product.id}
          title={product.name}
          price={`${product.unitPrice} Rwf`}
          originalPrice=""
          imageUrl={product.thumbnail[0]}
          showCartButton={true}
          showFavouriteButton={true}
        />
      );
    });
  };

  return (
    <>
      <main className="flex min-h-screen items-center justify-between lg:px-20">
        <div className="flex flex-col gap-4 w-full py-10 items-center">
          <WelcomeSection
            title={
              <>
                Welcome to <span className="text-primary">Mark8</span>
              </>
            }
            subtitle={isLoading ? "Loading..." : " Products"}
            itemsCount={data?.data?.pagination.totalRecords}
            searchBarProps={{
              searchIconClassName: "text-primary",
              inputClassName:
                "pl-10 bg-white font-normal text-white bg-opacity-[0.04] w-full border-none placeholder:text-loginSubHeadingColor placeholder:opacity-[0.56] focus-visible:outline-none focus-visible:ring-none focus-visible:ring-none focus-visible:border-none focus-visible:ring-offset-none",
              filterIconClassName: "text-white",
              placeholder: "What are you looking for?",
            }}
            categories={categories}
            bgColor="bg-primaryBtnColor"
            buttonTextColor="text-categoryBtnColor"
            buttonBorderColor="border-categoryBtnColor"
            titleColor="text-white"
            subtitleColor="text-separatorColor"
            usedWhere="home"
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center py-4">
              <div className="flex gap-4">
                <DeliveryBox01Icon
                  strokeWidth={2}
                  size={23}
                  className="text-primary"
                />
                <p className="text-headingColor text-base font-bold">
                  Recent Products (100)
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="size-12 border-[1.5px] border-separatorColor "
                >
                  <FilterIcon
                    strokeWidth={2}
                    size={20}
                    className="text-headingColor"
                  />
                </Button>
                <Button
                  variant="outline"
                  className="size-12 border-[1.5px] border-separatorColor"
                >
                  <ArrangeByLettersAZIcon
                    strokeWidth={2}
                    size={20}
                    className="text-headingColor"
                  />
                </Button>
              </div>
            </div>
            <div className="flex  gap-4 w-full ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:w-3/4 w-full h-fit">
              {renderProductCards(productsToRender)}
              </div>

              <div className=" w-[24.8125rem] rounded-2xl border border-separatorColor">
                <div className="flex justify-between items-center p-3 md:p-5">
                  <div className="flex gap-4 justify-center items-center">
                    <Store02Icon
                      strokeWidth={2}
                      size={23}
                      className="text-primary"
                    />
                    <p className="text-headingColor text-sm md:text-base font-bold">
                      Top 10 stores
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        router.push("/stores");
                      }}
                      className="size-12 "
                    >
                      <LinkSquare02Icon
                        strokeWidth={2}
                        size={20}
                        className="text-headingColor"
                      />
                      <span className="sr-only">View all Stores</span>
                    </Button>
                  </div>
                </div>
                <div className="p-5 bg-searchOuterBg">
                  <SearchBar1
                    searchIconClassName={"text-registerBtnColor"}
                    inputClassName={
                      " pl-10 py-6 bg-white font-normal rounded-lg text-registerBtnColor w-full border-none placeholder:text-defaultIconColor   focus-visible:outline-none focus-visible:ring-none focus-visible:ring-none focus-visible:border-none focus-visible:ring-offset-none"
                    }
                    filterIconClassName={"text-defaultIconColor"}
                    placeholder={"Search a store"}
                    usedFor="stores"
                  />
                </div>
                <div className=" flex flex-col gap-5 p-5 w-full">
                  {stores.map((store, index) => (
                    <Link key={index} href={`/stores/${store.id}`}>
                      <StoreListItem
                        imageSrc={store.image}
                        storeName={store.name}
                        productCount={100}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-fit flex gap-2 px-8 py-6 border-[1.5px] border-separatorColor rounded-lg "
            disabled={filters.pageNumber === totalPages}
            onClick={() => handleLoadMore()}
          >
            <ArrowDown01Icon
              strokeWidth={2}
              size={20}
              className="text-primary"
            />
            <span className="font-extrabold text-sm text-registerBtnColor	">
              {isLoading ? "Loading..." : "Load More"}
            </span>
          </Button>
          <OpenStore />
        </div>
      </main>
    </>
  );
}
