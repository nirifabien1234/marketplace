import { Store } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface StoreState {
  stores: Store[];
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const initialState: StoreState = {
  stores: [],
  status: 'idle',
  error: null,
};

const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    setStores: (state, action: PayloadAction<Store[]>) => {
    state.stores = action.payload

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

export const { setStores, setLoading, setError, setStatus } = storesSlice.actions;
export default storesSlice.reducer;
