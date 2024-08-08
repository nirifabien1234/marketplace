"use client";

import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { endpoints } from '@/app/api/endpoints';
import { useSession } from './useSession';
import { Product, SearchTerm } from '@/types/types';
import { trimString } from '@/lib/trimString';

export const useSearchProducts = (searchTerm?: SearchTerm, categoryName?: string) => {
  const { session } = useSession();
  const token = session?.accessToken;

  const fetchProducts = async () => {
    let url = `${endpoints.products.getAll}`;
    let products = [];

    if (categoryName && !searchTerm?.name) {
      // Fetch all products and filter by categoryName
      let pageNumber = 1
      let totalPages = 1
      for( pageNumber = 1; pageNumber <= totalPages; pageNumber++){
        const url = `${endpoints.products.getAll}?pageNumber=${pageNumber}&recordsPerPage=10`;
        let response = await fetcher(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }

        });

        
        if(response?.data?.products){
          console.log("loopProducts ===> ",response?.data?.products)
          console.log("Reached here!!!!!!!! with categoryName:", categoryName)
          products.push(...response?.data?.products.filter(
            (product: Product) => trimString(product?.category?.name as string) === trimString(categoryName)
          ));
        }
        
        console.log("remaining pages ===> ",pageNumber,totalPages)
        console.log("products", products)
        totalPages = response?.data?.pagination.totalPages
      }
    } else {
      // Fetch products based on searchTerm or both searchTerm and categoryName
      const query = new URLSearchParams(searchTerm as any).toString();
      if (query) {
        url += `?${query}`;
      }

      console.log("here i am !!!!!!!!1111")

      const response = await fetcher(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (categoryName) {
        products = response.data.products.filter(
          (product: Product) => product?.category?.name === categoryName
        );
      } else {
        products = response.data.products;
      }
    }
    // console.log(products)

    return { data: { products } };
  };

  const { isLoading, isError, data, error } = useQuery({
    queryFn: fetchProducts,
    queryKey: ['searchedProducts', searchTerm, categoryName],
    enabled: !!token && !!(searchTerm?.name || categoryName)
  });

  return { isLoading, isError, data, error };
};
