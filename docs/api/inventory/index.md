---
id: index
title: Inventory
sidebar_label: Inventory
---

The Inventory API allows you to manage stock for products in your project catalog. Each product keeps a history of inventory transactions, enabling easier stock auditing.

:::note
You can specify an initial stock level when you create a product. The stock is set to `0` by default.
:::

:::caution
There are a number of actions that happen to your inventory when checking out and paying for an order. For more information about the inventory process, see [Inventory](../../concepts/inventory.md).
:::

## The Stock object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the stock. |
| `type` | `string` | The type represents the object being returned. |
| `total` | `integer` | The total amount of stock we have. |
| `available` | `integer` | The amount of stock available for purchase. |
| `allocated` | `integer` | The amount of paid for stock, also known as "reserved". |

<!--Sample Object-->

```javascript
{
  "data": {
    "id": "15fbeab0-75a3-4d6b-b23b-9db7455c077e",
    "type": "stock",
    "total": 100,
    "available": 90,
    "allocated": 10
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

Each product has its own Inventory and stock history. This is useful when auditing product movements across your project.

## The Stock Transaction object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the stock transaction. |
| `type` | `string` | The type represents the object being returned. |
| `action` | `string` | The type of [action](update-inventory.md#action-types) performed by this transaction. |
| `product_id` | `string` | The product identifier that this stock transaction is for. |
| `quantity` | `integer` | The amount of stock affected by the stock transaction. |
