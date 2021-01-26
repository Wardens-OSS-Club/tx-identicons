# The Math Package

This math package will be used to build an ecommerce

Having a math package allows you to reuse the code in both frontend and backend

You can also unit test this code, which is most likely the most important code you're writing

## Installation
`yarn add entreprenerd-demo-math`

## Usage
```javascript
const { getPrice } = require("entreprenerd-demo-math");
const price = getPrice({price: 1})
console.log("price", price)
```

## Methods

### getPrice(product)
Given a product, return it's price

### getQuantity(product)
Given a product in a cart, return it's quantity

### getTotal(cart)
Given a cart, return the total cost of the products it contains
