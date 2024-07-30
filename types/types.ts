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
  }
  
  export interface SessionData {
    accessToken?: string;
    refreshToken?: string;
    isLoggedIn?: boolean;
  }