export interface Product {
  price: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export type Cart = ProductInCart[];
