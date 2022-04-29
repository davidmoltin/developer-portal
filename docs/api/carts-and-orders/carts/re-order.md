---
id: re-order
title: Add Order Items to Cart (Re-order)
sidebar_label: Add Items to Cart (Re-order)
---

From a shopper’s order history, they can add the items from a previous order into their carts. Shoppers can add items regardless of past order status, such as incomplete or not paid. For more information, see [Orders](../../../concepts/orders.md).

:::note
Any requests to add an item to cart return a collection of [cart items](cart-items/index.md).
:::

:::important
A cart can contain a maximum of 100 unique items. Items include products, custom items, and promotions.
:::

## `POST` Add items to cart from a previous order

```http
https://api.moltin.com/v2/carts/:cartID/items
```

Call this endpoint each time you add items to a cart from a previous order.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |
| `X-Moltin-Customer-Token` | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `catalog_rule` object. |
| `EP-Channel`  | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `catalog_rule` object.
| `EP-Context-Tag` |`string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `catalog_rule` object. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | `order_items`. |
| `order_id` | Required | `string` | The order identifier. |
| `options.add_all_or_nothing` | Optional | `boolean` | When `true`, if an error occurs for any item, no items are added to the cart. When `false`, valid items are added to the cart and the items with errors are reported in the response. Default is `true`. |

## Request Example

### Curl

```json
curl -X POST https://api.moltin.com/v2/carts/:cartID/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
     -d $ {
      "data": {
        "type": "order_items",
        "order_id": "da0b0a12-8232-4be1-a354-a1a64b11de91"
      }
     }
```

## Response Example

`201 Created`

```json
{
    "data": [
        {
            "id": "8838d444-87f4-411f-9d89-9fc809f0b1cb",
            "type": "cart_item",
            "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
            "name": "Crown",
            "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
            "sku": "CWLP100BLK",
            "image": {
                "mime_type": "image/png",
                "file_name": "lamp7-trans.png",
                "href": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/7cc08cbb-256e-4271-9b01-d03a9fac9f0a.png"
            },
            "quantity": 1,
            "manage_stock": true,
            "unit_price": {
                "amount": 47500,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 47500,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://api.moltin.com/products/9eda5ba0-4f4a-4074-8547-ccb05d1b5981"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "47500"
                        },
                        "value": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "475.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "47500"
                        },
                        "value": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "475.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2018-05-08T10:00:20.171620445Z",
                    "updated_at": "2018-05-08T10:00:20.171620445Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "475.00"
            },
            "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "475.00"
            }
        },
        "timestamps": {
            "created_at": "2018-05-08T10:00:20.171620445Z",
            "updated_at": "2018-05-08T10:00:20.171620445Z",
            "expires_at": "2018-05-20T10:00:20.171620445Z"
        }
    }
}
