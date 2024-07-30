import { Product } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface ProductsState {
  products: Product[];
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
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

export const { setProducts, setLoading, setError, setStatus } = productsSlice.actions;
export default productsSlice.reducer;
