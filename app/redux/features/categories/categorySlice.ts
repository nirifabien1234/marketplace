import { Category } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface CategoryState {
  categories: Category[];
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: CategoryState = {
  categories: [],
  status: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
    state.categories = action.payload

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

export const { setCategories, setLoading, setError, setStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
