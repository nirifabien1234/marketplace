'use client';

import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { endpoints } from '@/app/api/endpoints';
import { useSession } from './useSession';
import { CategoryFilters } from '@/types/types';

export const useCategories = (filters: CategoryFilters) => {
  const { session } = useSession();
  const token = session?.accessToken

  const fetchCategories = async () => {
    const query = new URLSearchParams(filters as any).toString();
    const url = `${endpoints.categories.getAll}${query ? `?${query}` : ''}`;
    const response = await fetcher(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryFn: fetchCategories,
    queryKey: ['categories', filters],
    enabled: !!token
  });

  return { isLoading, isError, data, error };
};
