export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  specifications?: string[];
  images?: string[];
  reviews?: {
    id: number;
    user: string;
    rating: number;
    comment: string;
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}