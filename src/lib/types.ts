export interface Item {
  id: string;
  images: string[];
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface cartItem extends Item {
  quantity: number;
}

export interface CartStore {
  cartItems: cartItem[];
  cartPrice: number;
}

export interface Order {
  created_at: string;
  id: number;
  items: string;
  price: number;
  status: string;
  user_id: string;
}
