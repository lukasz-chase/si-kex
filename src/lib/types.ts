export interface item {
  id: string;
  img: string;
  name: string;
  price: number;
}

export interface cartItem extends item {
  quantity: number;
}

export interface CartStore {
  cartItems: cartItem[];
  cartPrice: number;
}
