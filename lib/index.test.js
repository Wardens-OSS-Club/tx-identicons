"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var PRODUCT_ONE = {
    price: 12,
    quantity: 1,
};
var PRODUCT_TWO = {
    price: 22,
    quantity: 2,
};
var CART = [PRODUCT_ONE, PRODUCT_TWO];
describe("getPrice", function () {
    it("PRODUCT_ONE has a price of 12", function () {
        expect(index_1.getPrice(PRODUCT_ONE)).toBe(12);
    });
    it("PRODUCT_TWO has a price of 22", function () {
        expect(index_1.getPrice(PRODUCT_TWO)).toBe(22);
    });
});
describe("getQuantity", function () {
    it("PRODUCT_ONE has a quantity of 1", function () {
        expect(index_1.getQuantity(PRODUCT_ONE)).toBe(1);
    });
    it("PRODUCT_TWO has a quantity of 2", function () {
        expect(index_1.getQuantity(PRODUCT_TWO)).toBe(2);
    });
});
describe("getTotal", function () {
    it("Cart total is 56", function () {
        expect(index_1.getTotal(CART)).toBe(56);
    });
});
