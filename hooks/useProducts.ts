'use client';

import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { endpoints } from '@/app/api/endpoints';
import { useSession } from './useSession';
import { Product, ProductFilters, Pagination } from '@/types/types';

export const useProducts = (filters: ProductFilters) => {
  const { session } = useSession();
  const token = session?.accessToken

  const fetchProducts = async () => {
    const query = new URLSearchParams(filters as any).toString();
    const url = `${endpoints.products.getAll}${query ? `?${query}` : ''}`;
    const response = await fetcher(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryFn: fetchProducts,
    queryKey: ['products', filters],
    enabled: !!token
  });

  return { isLoading, isError, data, error };
};
