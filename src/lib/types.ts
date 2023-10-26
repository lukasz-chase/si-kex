export interface item {
  id: string;
  images: string[];
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface cartItem extends item {
  quantity: number;
}

export interface CartStore {
  cartItems: cartItem[];
  cartPrice: number;
}
