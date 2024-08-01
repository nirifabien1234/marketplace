export interface Credentials {
    email: string;
    password: string;
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
  }
  export interface RegisterUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    agreeToTerms: boolean;
  }
  
  export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    unitPrice: number;
    thumbnail: string;
    description: string;
    category?: Category;
  }
  export interface Category {
    id: string;
    name: string;
    description: string;
  }
  export interface Store {
    id: string;
    name: string;
    image: string;
    description: string;
  }

  export interface Pagination {
    totalPages: number;
    totalRecords: number;
    currentPage: number;
    recordsPerPage: number;
  }
  
  export interface ProductFilters {
    name?: string;
    description?: string;
    createdFromDate?: string;
    createdToDate?: string;
    createdBy?: string;
    categoryId?: string;
    code?: string;
    pageNumber?: number;
    recordsPerPage?: number;
    minUnitPrice?: number;
    maxUnitPrice?: number;
    sortBy?: string;
    sortOrder?: string;
  }
  export interface CategoryFilters {
    name?: string;
    description?: string;
    createdFromDate?: string;
    createdToDate?: string;
    createdBy?: string;
    pageNumber?: number;
    recordsPerPage?: number;
    sortBy?: string;
    sortOrder?: string;
  }
  
  export interface SessionData {
    accessToken?: string;
    refreshToken?: string;
    isLoggedIn?: boolean;
  }