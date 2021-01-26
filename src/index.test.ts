import { Cart, ProductInCart } from "./types";
import { getPrice, getQuantity, getTotal } from "./index";

const PRODUCT_ONE: ProductInCart = {
  price: 12,
  quantity: 1,
};

const PRODUCT_TWO: ProductInCart = {
  price: 22,
  quantity: 2,
};

const CART: Cart = [PRODUCT_ONE, PRODUCT_TWO];

describe("getPrice", () => {
  it("PRODUCT_ONE has a price of 12", () => {
    expect(getPrice(PRODUCT_ONE)).toBe(12);
  });

  it("PRODUCT_TWO has a price of 22", () => {
    expect(getPrice(PRODUCT_TWO)).toBe(22);
  });
});

describe("getQuantity", () => {
  it("PRODUCT_ONE has a quantity of 1", () => {
    expect(getQuantity(PRODUCT_ONE)).toBe(1);
  });
  it("PRODUCT_TWO has a quantity of 2", () => {
    expect(getQuantity(PRODUCT_TWO)).toBe(2);
  });
});

describe("getTotal", () => {
  it("Cart total is 56", () => {
    expect(getTotal(CART)).toBe(56);
  });
});
