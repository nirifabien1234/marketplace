import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { endpoints } from '@/app/api/endpoints';
import { RegisterUser, Credentials } from '@/types/types';

export const useLogin = () => {
  const queryClient = useQueryClient();
  
  
  return useMutation({
    mutationFn: async (credentials: Credentials) => {
      const response = await fetcher(endpoints.auth.login, {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: RegisterUser) => {
      return fetcher(endpoints.auth.signup, {
        method: 'POST',
        body: JSON.stringify(userData),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return () => {
    // signOut();
    queryClient.invalidateQueries({ queryKey: ['user'] });
  };
};
