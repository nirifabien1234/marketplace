import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { endpoints } from '@/app/api/endpoints';
import { useSession } from './useSession';

export const useProducts = () => {
  const { session } = useSession();

  const { isLoading, isError, data, error } = useQuery({
    queryFn: async () => {
      const response = await fetcher(endpoints.products.getAll, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session?.accessToken}` // Include token in headers
        }
      });
      return response;
    },
    queryKey: ['products'],
    enabled: !!session?.accessToken,
  });

  return { isLoading, isError, data, error };
};
