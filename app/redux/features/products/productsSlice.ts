import { Product } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface ProductsState {
  products: Product[];
  searchedProducts?: Product[];
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: ProductsState = {
  products: [],
  searchedProducts: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      if (state.products && action.payload) {
        state.products.push(...action.payload);
      }
    },
    setSearchedProducts: (state, action: PayloadAction<Product[]>) => {
      state.searchedProducts = action.payload;
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    setStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setSearchedProducts, setLoading, setError, setStatus } = productsSlice.actions;
export default productsSlice.reducer;
