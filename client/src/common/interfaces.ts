// @purpose redux
// @location /redux/slices/data.ts
// @desc interfaces for redux data slice

interface IdString {
    id: string;
  }
  
interface CartItem {
    id: string;
    type: string;
    value: string;
    price: string;
    description: string;
    images: IdString[];
    name: string;
    item_quantity: number;
  }
  
export interface DataState {
    cart: CartItem[];
    cart_quantity: number;
    current_item: CartItem;
  }