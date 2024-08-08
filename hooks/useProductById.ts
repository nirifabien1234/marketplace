import { useAppSelector } from "@/app/redux/hooks";


export const useProductById = (id: string, type: "products" | "searched") => {
  const {products, searchedProducts} = useAppSelector((state) => state.products);

  return  type === "searched" ? searchedProducts?.find((product) => product.id === id) : products?.find((product) => product.id === id);
};
