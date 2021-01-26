import { Product, Cart, ProductInCart } from "./types";

/**
 * Given a product, return it's price
 * @param product
 */
export const getPrice = (product: Product): number => product.price;

/**
 * Given a product in a cart, return it's quantity
 * @param product
 */
export const getQuantity = (product: ProductInCart): number => product.quantity;

/**
 * Given a cart, return the total cost of the products it contains
 * @param cart
 */
export const getTotal = (cart: Cart): number => {
  return cart.reduce(
    (accumulator, product) =>
      accumulator + getPrice(product) * getQuantity(product),
    0
  );
};
