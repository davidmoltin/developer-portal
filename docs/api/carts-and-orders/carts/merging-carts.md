---
id: merging-carts
title: Merging Carts
sidebar_label: Merging Carts
---

A shopper can have more than one cart and decide to merge the carts into one cart. If a shopper adds items to a cart anonymously and then signs into their account as a registered user, the system asks them which cart to use. For example, a shopper has an existing cart with items `A`, `B` and `C` in it. The shopper returns later and adds items `D` and `E` while not signed in. The shopper then signs in and wants to merge the new cart with the existing cart. After the carts merge, the cart contains items `A`, `B`, `C`, `D` and `E`.

Any items that are duplicated from the anonymous cart to the registered cart are incremented by the quantity from the anonymous cart. For example, the shopper has an existing cart with items `A`, `B` and `C`, returns later and adds  two more `A` items and one `B` item while not signed in. The shopper then signs in and wants to merge the new cart with the existing cart. The existing cart will contain three `A` items, two `B` items, and one `C` item.

## `POST` Add items to cart from another cart

```http
https://api.moltin.com/v2/carts/:cartID/items`
```

Call this endpoint each time a shopper merges items from one cart to another.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The system generated ID for the cart that you want to merge items to. |

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
| `data[].type` | Required | `string` | The type of related object. Ensure that it is `cart_items`. |
| `data[].cart_id` | Required | `string` | The original cart to be merged from. |
| `options.add_all_or_nothing` | Optional | `boolean` | When `true`, if an error occurs for any item, no items are added to the cart. When `false`, valid items are added to the cart and the items with errors are reported in the response. Default is `true`. |

## Request Example

### Curl

```json
curl -X POST https://api.moltin.com/v2/carts/:cartID/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data":[
           {
             "type": "cart_items",
             "cart_id": "da0b0a12-8232-4be1-a354-a1a64b11de91"
           }
        ],
        "options": {
                "add_all_or_nothing": false
            }
        }'
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
