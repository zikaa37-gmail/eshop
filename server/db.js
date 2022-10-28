const customers = require("./mocks/customers");
const creditCards = require("./mocks/credit-cards");
const manufacturers = require("./mocks/manufacturers");
const categories = require("./mocks/categories");
const subcategories = require("./mocks/subcategories");
const productGroups = require("./mocks/product-groups");
const products = require("./mocks/products");
const orders = require("./mocks/orders");
module.exports = () => ({
  customers,
  creditCards,
  manufacturers,
  categories,
  subcategories,
  productGroups,
  products,
  orders
});
