---
id: index
title: PCM Products API
sidebar_label: Products API
---

With the Product Content Management services, you define your products separately from catalogs, prices, inventory, and other resource relationships.

## The Product object

| Name | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique product ID that is generated when you create the product. |
| `type` | `string` | The type of resource object. You must use `product`. |
| `attributes` | [`object`](#the-product_attributes-object) | The attributes that describe the product. |

## The `product_attributes` object

The product attributes that can be displayed in your storefront.

| Name | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | A name for the product. |
| `commodity_type` | `string` | The commodity type, either `physical` or `digital`. |
| `components` | `string` | The bundle name, id, type and quantity. |
| `description` | `string` | A description for the product. |
| `mpn` | `string` | The [manufacturer part number](../../../glossary.md#manufacturer-part-number-mpn) of the product. |
| `sku` | `string` | The unique [stock keeping unit](../../../glossary.md#stock-keeping-unit-sku) of the product. |
| `slug` | `string` | A label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. NO spaces or other characters are allowed. By default, the product name is used as the slug. |
| `status` | `string` | The status for the product, either `draft` or `live`. |
| `upc_ean` | `string` | The [universal product code](../../../glossary.md#universal-product-code-upc) or [european article number](../../../glossary.md#european-article-number-ean) of the product. |
