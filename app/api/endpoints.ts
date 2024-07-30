const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const endpoints = {
  auth: {
    login: `${baseUrl}/auth/login`,
    signup: `${baseUrl}/auth/signup`,
    getNewAccessToken: `${baseUrl}/auth/get-new-access-token`,
    // session: `${baseUrl}/auth/session`,
  },
  products: {
    getAll: `${baseUrl}/products`,
    create: `${baseUrl}/products`,
    getById: (id: string) => `${baseUrl}/products/${id}`,
    update: (id: string) => `${baseUrl}/products/${id}`,
    delete: (id: string) => `${baseUrl}/products/${id}`,
  },
  categories: {
    getAll: `${baseUrl}/categories`,
    create: `${baseUrl}/categories`,
    getById: (id: string) => `${baseUrl}/categories/${id}`,
    update: (id: string) => `${baseUrl}/categories/${id}`,
    delete: (id: string) => `${baseUrl}/categories/${id}`,
  },
  store: {
    getAll: `${baseUrl}/store`,
    create: `${baseUrl}/store`,
    getById: (id: string) => `${baseUrl}/store/${id}`,
    update: (id: string) => `${baseUrl}/store/${id}`,
    delete: (id: string) => `${baseUrl}/store/${id}`,
  },
};
