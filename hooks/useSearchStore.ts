'use client';

import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { endpoints } from '@/app/api/endpoints';
import { useSession } from './useSession';
import { Product, ProductFilters, Pagination, SearchTerm } from '@/types/types';

export const useSearchStores = (searchTerm: SearchTerm) => {
  const { session } = useSession();
  const token = session?.accessToken

  const fetchStores = async () => {
    const query = new URLSearchParams(searchTerm as any).toString();
    const url = `${endpoints.store.getAll}${query ? `?${query}` : ''}`;
    const response = await fetcher(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  };

  const { isLoading: isLoadingStores, isError: isErrorSearchingStores, data: storesSearchResult } = useQuery({
    queryFn: fetchStores,
    queryKey: ['searchedStores', searchTerm],
    enabled: !!token && !!searchTerm.name
  });

  return { isLoadingStores, isErrorSearchingStores, storesSearchResult };
};
