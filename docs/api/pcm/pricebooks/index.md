---
id: index
title: Price Books API
sidebar_label: Price Books API
---

Price books contain prices for the products in your catalog. Use the Price Books API to create price books and add product prices to the price book.

:::important Product Content Management Only
Price books work with Product Content Management (PCM) resources only. If your products are defined as `v2/products` resources, you need to migrate your products to `pcm/products` resources before you can successfully implement price books.
:::

## The Pricebook object

| Attribute | Type | Description |
| :--- | :--- | :-- |
| `id` | `string` | The unique identifier of the price book. |
| `type` | `string` | Always: `pricebook` |
| `attributes.name` | `string` | The name of the price book. |
| `attributes.description` | `string` | The purpose for the price book, such as flash sale pricing or preferred customer pricing. |
| `attributes.created_at` | `string($date-time)` | Generated value. The date and time when the price book was created. |
| `attributes.updated_at` | `string($date-time)` | Generated value. The date and time when the price book was last updated. |

## The `PricebookListData` object

An array containing a list of price books.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `data` | [`array`](#the-pricebook-object) | Displays details about the price book, excluding products and prices. |
| `links` | `object` | Links among the price books in the list. |

## The `ProductPrice` object

 Each product SKU can have prices in multiple currencies.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string`| The generated unique identifier of the product price resource. The product price ID is not the same as the ID of the product. |
| `type` | `string` | Always: `product-price` |
| `attributes.sku` | `string` | The product SKU that the prices belongs to. |
| `attributes.currencies` | [`object`](index.md#the-currencies-object) | A collection of one or more `currencies: <key>` objects. |

## The `currencies` object

Each currency can have one price per product SKU.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `currencies: <key>` | `string` | Where `<key>` is the three-letter ISO code for the currency associated with this price. |
| `currencies: <key>: amount` | `integer` | The price in the lowest denomination for the specified currency. |
| `currencies: <key>: includes_tax` | `boolean` | Whether this price includes tax. Default is `false`. |
| `currencies: <key>: tiers` | `object` | The price tier that an item is eligible for based on the quantity purchased. **Note**: You cannot have conflicting tiers within the same currencies block. |

## The `tiers` object

Each tier can only have one currency within the same block.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `tiers: <key>` | `object` | The name of the tier, such as `Pencils`. |
| `tiers: <key>: minimum_quantity` | `integer` | The minimum quantity defined for the specified price. |
| `tiers: <key>: amount` | `integer` | The price for each quantity. |

## The `sales` object

Each sale can only have one sale within the same block.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `sales: <key>` | `object` | The name of the sale, such as `Summer Sale`. |
| `sales: <key>` | `object` | The schedule of the sale. Contains an optional `valid_from` and `valid_to` parameter for the start and end date of the sale. |

## The `product-identifier` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier of a product. |

## Errors

The default error is a `409` error.

```json
{
  "errors": [
    {
      "detail": "The pricebook already exists",
      "status": "409",
      "title": "conflict"
    }
  ]
}
```
