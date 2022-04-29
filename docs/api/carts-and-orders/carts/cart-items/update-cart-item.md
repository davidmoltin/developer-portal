---
id: update-cart-item
title: Update Cart Item
sidebar_label: Update Cart Item
---

You can easily update a Cart item. A successful update returns the [cart items](index.md).

## `PUT` Update Cart Item

```http
https://api.moltin.com/v2/carts/:reference/items/:itemId
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | `integer` | The amount of products to add to cart. |

## Request Examples

### Curl

```bash
curl -X PUT https://api.moltin.com/v2/carts/:reference/items/:itemId \
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "cart_item",
        "id": "76746981-f63a-45f4-ba9e-59773d89dc2e",
        "quantity": 2
      }
    }'
```

### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const reference = 'XXXX'
const itemId = 'XXXX'
const quantity = 10
Moltin.Cart(reference).UpdateItem(itemId, quantity).then(cart => {
  // Do something
})
```

### Node JS SDK

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X'
})
const reference = 'XXXX'
const itemId = 'XXXX'
const quantity = 10
client
  .put(`carts/${reference}/items/${itemId}`, {
    type: "cart_item",
    id: itemId,
    quantity
  })
  .then(items => {
    // Do something...
  })
  .catch(console.error)
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "df9468c2-627c-4e73-bdd3-587d6a81c465",
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
            "quantity": 10,
            "manage_stock": true,
            "unit_price": {
                "amount": 47500,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 475000,
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
                            "formatted": "$475.00"
                        },
                        "value": {
                            "amount": 475000,
                            "currency": "USD",
                            "formatted": "$4750.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 47500,
                            "currency": "USD",
                            "formatted": "$475.00"
                        },
                        "value": {
                            "amount": 475000,
                            "currency": "USD",
                            "formatted": "$4750.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2018-05-08T10:25:40.02Z",
                    "updated_at": "2018-05-08T10:25:40.02Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 475000,
                "currency": "USD",
                "formatted": "$4750.00"
            },
            "without_tax": {
                "amount": 475000,
                "currency": "USD",
                "formatted": "$4750.00"
            }
        },
        "timestamps": {
            "created_at": "2018-05-08T10:25:40.02Z",
            "updated_at": "2018-05-08T10:25:40.02Z",
            "expires_at": "2018-05-20T10:25:40.02Z"
        }
    }
}
```

`404 Not Found`

```json
{
    "errors": [
        {
            "status": 404,
            "title": "Not Found",
            "detail": "The Item doesn't exist in the cart"
        }
    ]
}
```
