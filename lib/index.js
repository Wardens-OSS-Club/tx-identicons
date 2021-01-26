"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotal = exports.getQuantity = exports.getPrice = void 0;
/**
 * Given a product, return it's price
 * @param product
 */
var getPrice = function (product) { return product.price; };
exports.getPrice = getPrice;
/**
 * Given a product in a cart, return it's quantity
 * @param product
 */
var getQuantity = function (product) { return product.quantity; };
exports.getQuantity = getQuantity;
/**
 * Given a cart, return the total cost of the products it contains
 * @param cart
 */
var getTotal = function (cart) {
    return cart.reduce(function (accumulator, product) {
        return accumulator + exports.getPrice(product) * exports.getQuantity(product);
    }, 0);
};
exports.getTotal = getTotal;
