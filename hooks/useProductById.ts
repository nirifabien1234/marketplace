import { useAppSelector } from "@/app/redux/hooks";


export const useProductById = (id: string) => {
  const products = useAppSelector((state) => state.products.products);

  return products?.find((product) => product.id === id);
};
