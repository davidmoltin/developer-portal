---
id: price-books
title: Price Books
sidebar_label: Price Books
---

A price book contains the prices for the products in a catalog. Catalogs with the same hierarchies of products can be associated with different price books.

In Elastic Path Commerce Cloud, a price book contains a list of product SKUs and the prices you want to charge for those products. If your store supports multiple locales, a price book can contain product prices in each of the supported currencies.

Each catalog can have zero or one price book. In your storefront, the product prices are displayed in the currency for the selected locale. If a product in the catalog does not have a price in the price book, the product is displayed without a price. A price book can be associated with multiple catalogs.

:::important
Price books work with products that are defined using the Product Content Management (PCM) resource model. If your products are defined using an earlier Products resource model, you will need to migrate products to the `pcm/products` resource before you implement price books.
:::

You can create multiple price books for different scenarios, such as seasonal sales, business versus retail customer pricing, and reward programs.

You can duplicate an existing price book and create a new price book. All products and prices associated with the price book are copied to the new price book. Based on the business requirements, you can use the same data or update the data.

## Volume Pricing

With volume pricing feature for price books, a store can offer different pricing for minimum quantities of items that customers purchase. When a customer adds sufficient quantity of an item and meets the minimum required quantity for different pricing, all products with that item SKU are discounted in the cart. You can define the price range for different quantities of different items as in the following example:

| Quantity | Price/Each |
| --- | --- |
| 1-5| $10.50|
| 6-10 | $10.00|
| 11-20 | $9.50|
| 21-50 | $8.50|
| 51+| $7.90|

## Sales Pricing

With sales pricing feature for price books, a store can optionally add a sale price to a product price. For example, a store can schedule seasonal pricing on products without creating a new price book and catalog ruleset. The store can schedule the date ranges for the sale products.

## Price Modifiers

You can use price modifiers to change the price property of child products. By default, child products inherit the same price as their base products. Using price modifiers, you can enable child products to inherit a different price. This enables you to configure the price of child products, for example, to be lower than its base product, without having to individually update the price of your child products. There are three types of price modifier.

Modifier | Data Type | Effect |
| :--- | :--- | :--- |
| `price_increment` | `string` | Increases the price of a product. |
| `price_decrement` | `string` | Decreases the price of a product. |
| `price_equals` | `string` | Sets the price of a product to the amount you specify. |

The following is an overview of the steps you need to follow to use price modifiers.

1. Create a price modifier. You must give the price modifier a unique name. For more information, see [Create a Price Modifier](../api/pcm/pricebooks/create-a-price-modifier.md)
1. Create a product modifier that uses the same name as the price modifier. For more information, see [Create Modifiers](../api/pcm/products/options/modifiers/modifier-crud.md).
1. Build your child products with the new product modifier. For more informaiton, see [Build Child Products](../api/pcm/products/build-child-products.md).

## Related concepts

- [Catalogs](catalogs.md)
- [Product Content Management](products-pcm.md)

## APIs

- [Price Books API](../api/pcm/pricebooks/index.md)
