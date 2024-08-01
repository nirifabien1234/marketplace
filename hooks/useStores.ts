'use client';

import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { endpoints } from '@/app/api/endpoints';
import { useSession } from './useSession';
import { CategoryFilters } from '@/types/types';

export const useStores = (id: string) => {
  const { session } = useSession();
  const token = session?.accessToken

  const fetchStores = async () => {
    const query = new URLSearchParams({ id }).toString();
    const url = `${endpoints.store.getAll}/${query ? `?${query}` : ''}`;
    const response = await fetcher(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryFn: fetchStores,
    queryKey: ['stores', id],
    enabled: !!token
  });

  return { isLoading, isError, data, error };
};
