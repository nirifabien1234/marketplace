// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface CartState {
  isOpen: boolean;
  items: CartItem[];
}

const initialState: CartState = {
  isOpen: false,
  items: [
    { id: 1, name: 'Product 1', price: '10,000 Rwf', quantity: 1, image: '/product_placeholder_image.png' },
    { id: 2, name: 'Product 2', price: '15,000 Rwf', quantity: 2, image: '/product_placeholder_image.png' },
    { id: 3, name: 'Product 2', price: '15,000 Rwf', quantity: 2, image: '/product_placeholder_image.png' },
    { id: 4, name: 'Product 2', price: '15,000 Rwf', quantity: 2, image: '/product_placeholder_image.png' },
    { id: 5, name: 'Product 2', price: '15,000 Rwf', quantity: 2, image: '/product_placeholder_image.png' },
    { id: 6, name: 'Product 2', price: '15,000 Rwf', quantity: 2, image: '/product_placeholder_image.png' },
    { id: 7, name: 'Product 2', price: '15,000 Rwf', quantity: 2, image: '/product_placeholder_image.png' },
    // Add more items as needed
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleCart, addItem, incrementQuantity, decrementQuantity, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
