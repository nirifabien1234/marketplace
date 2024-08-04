"use client";
import { FC, useState, useCallback, useEffect } from "react";
import { FilterVerticalIcon, Search01Icon } from "hugeicons-react";
import { Input } from "./ui/input";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import { Product, SearchTerm, Store } from "@/types/types";
import debounce from "lodash/debounce";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { setProducts } from "@/app/redux/features/products/productsSlice";
import { useSearchStores } from "@/hooks/useSearchStore";
import { setStores } from "@/app/redux/features/stores/storesSlice";

interface SearchBar1Props {
  searchIconClassName?: string;
  inputClassName?: string;
  filterIconClassName?: string;
  placeholder?: string;
  usedFor: string;
}

const SearchBar1: FC<SearchBar1Props> = ({
  searchIconClassName = "text-primary",
  inputClassName = "px-10 py-6 text-sm rounded-lg border-none",
  filterIconClassName = "text-headingColor",
  placeholder = "Search...",
  usedFor,
}) => {
  const [searchTerm, setSearchTerm] = useState<SearchTerm>({ name: "" });
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<SearchTerm>({
    name: "",
  });
  const dispatch = useAppDispatch();

  const { data: productsSearchResult, isLoading: isLoadingProducts, isError } = useSearchProducts(debouncedSearchTerm);
  const { storesSearchResult, isLoadingStores, isErrorSearchingStores } = useSearchStores(debouncedSearchTerm);

  const { products } = useAppSelector((state) => state.products);
  const { stores } = useAppSelector((state) => state.stores);

  const debouncedSetSearchTerm = useCallback(
    debounce((newTerm: SearchTerm) => {
      setDebouncedSearchTerm(newTerm);
    }, 500),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = { name: e.target.value };
    setSearchTerm(newTerm);
    debouncedSetSearchTerm(newTerm);
  };

  const handleSearchResultItemClick = (item: Product | Store, usedFor: "products" | "stores") => {
  
    if (usedFor === "products") {
      if (!products.some((p) => p.id === item.id)) {
        dispatch(setProducts([...products, item as Product]));
      }
    } else if (usedFor === "stores") {
      if (!stores.some((store) => store.id === item.id)) {
        dispatch(setStores([...stores, item as Store]));
      }
    }
  };

  useEffect(() => {
    return () => {
      debouncedSetSearchTerm.cancel();
    };
  }, [debouncedSetSearchTerm]);

  useEffect(() => {
    if (productsSearchResult?.data?.products) {
      dispatch(setProducts(productsSearchResult?.data?.products as Product[]));
    }
  }, [dispatch, productsSearchResult]);

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search01Icon
          className={searchIconClassName}
          strokeWidth={2}
          size={16}
        />
      </span>
      <Input
        type="text"
        value={searchTerm.name}
        onChange={handleSearch}
        placeholder={placeholder}
        className={inputClassName}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
        <FilterVerticalIcon
          strokeWidth={2}
          size={16}
          className={filterIconClassName}
        />
      </span>

      {productsSearchResult?.data?.products?.length > 0 && usedFor === "products" && (
        <div className="absolute mt-2 bg-white border left-0 right-0 rounded shadow-lg max-h-60 overflow-y-auto z-10 w-full">
          {productsSearchResult?.data.products.map((product: Product, index: number) => (
            <Link
              key={index}
              onClick={() => handleSearchResultItemClick(product, "products")}
              href={`products/${product.id}`}
              className="flex items-center gap-6 p-3 w-full hover:bg-loginSectionBg"
            >
              <Image
                src={product.thumbnail[0]}
                width={36}
                height={36}
                quality={60}
                alt=""
                className="rounded-xl object-cover h-14 w-14"
              />
              <div className="flex flex-col gap-1 w-full">
                <p className="text-base font-bold text-primaryBtnColor">
                  {product.name}
                </p>
                <p className="text-sm text-primary font-semibold">
                  {product.unitPrice} Rwf
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {storesSearchResult?.data?.stores?.length > 0 && usedFor === "stores" && (
        <div className="absolute mt-2 bg-white border left-0 right-0 rounded shadow-lg max-h-60 overflow-y-auto z-10 w-full">
          {storesSearchResult.data.stores.map((store: Store, index: number) => (
            <Link
              key={index}
              onClick={() => handleSearchResultItemClick(store, "stores")}
              href={`store/${store.id}`}
              className="flex items-center gap-6 p-3 w-full hover:bg-loginSectionBg"
            >
              <Image
                src={store.image}
                width={36}
                height={36}
                quality={60}
                alt=""
                className="rounded-xl object-cover h-14 w-14"
              />
              <div className="flex flex-col gap-1 w-full">
                <p className="text-base font-bold text-primaryBtnColor">
                  {store.name}
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  {store.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {isLoadingStores || isLoadingProducts && (
        <div className="absolute mt-2 bg-white border left-0 right-0 rounded shadow-lg max-h-60 overflow-y-auto z-10 w-full p-3">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export { SearchBar1 };
