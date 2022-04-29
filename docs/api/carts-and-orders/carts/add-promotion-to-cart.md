---
id: add-promotion-to-cart
title: Add Promotion to Cart
sidebar_label: Add Promotion to Cart
---

You can use the promotions API to apply discounts to your cart as a special cart item type.

:::note
Any requests to add a product to cart will return a collection of [cart items](cart-items/index.md).
:::

:::important
A cart can contain a maximum of 100 unique items. Items include products, custom items, tax items, and promotions.
:::

## `POST` Add Promotion to Cart

```http
https://api.moltin.com/v2/carts/:reference/items
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The system generated ID for the cart that the customer created. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |
| `x-moltin-customer-token` | Optional | `string` | A customer token to use for a customer specific promotion. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | `string` | Specifies the promotion code. For more information about `codes[].user[]`, see the [Create Promotion codes](../../promotions/create-promotion-codes.md) section.|
| `type` | Required | `string` | Specifies the type of resource, which is `promotion_item`. |


## Request Examples

### Curl

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -H "x-moltin-customer-token: XXXX" \
     -d $'{
       "data": {
         "type": "promotion_item",
         "code": "PROMO_CODE"
       }
     }'
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
    client_id: 'X'
})
const reference = 'XXXX'
const promoCode = 'XXXX'
Moltin.Cart(reference)
    .AddPromotion(promoCode)
    .then(cart => {
        // Do something
    })
```

### Node JS SDK

```javascript
const {MoltinClient} = require('@moltin/request')
​
const client = new MoltinClient({
    client_id: 'X'
})
const reference = 'XXXX'
const code = 'XXXX'
client
    .post(`carts/${reference}/items`, {
        type: "promotion_item",
        code
    })
    .then(cart => {
        // Do something...
    })
    .catch(console.error)
```

## Response Example

`201 Created`

```json
{
    "data": [
        {
            "id": "54d5dfee-f761-4f40-9522-c75e02828fe0",
            "type": "cart_item",
            "product_id": "622b59d9-cadf-4b1a-904f-6fff4ff98918",
            "name": "DEMO",
            "description": "DEMO",
            "sku": "DEMO",
            "slug": "DEMO",
            "image": {
                "mime_type": "image/png",
                "file_name": "demo.png",
                "href": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/7cc08cbb-256e-4271-9b01-d03a9fac9f0a.png"
            },
            "quantity": 1,
            "manage_stock": true,
            "unit_price": {
                "amount": 1500,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 1500,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://api.moltin.com/v2/products/622b59d9-cadf-4b1a-904f-6fff4ff98918"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 1000,
                            "currency": "USD",
                            "formatted": "$10.00"
                        },
                        "value": {
                            "amount": 1000,
                            "currency": "USD",
                            "formatted": "$10.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 1000,
                            "currency": "USD",
                            "formatted": "$10.00"
                        },
                        "value": {
                            "amount": 1000,
                            "currency": "USD",
                            "formatted": "$10.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        },
                        "value": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2021-05-04T23:10:41Z",
                    "updated_at": "2021-05-04T23:10:41Z"
                }
            }
        },
        {
            "id": "25c7feeb-13bc-458a-b5b7-f9ad0f3958f6",
            "type": "promotion_item",
            "promotion_id": "7767cb41-dc76-4214-97e7-0595c4b58e18",
            "name": "5off",
            "description": "Promotion",
            "sku": "5off",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": -500,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -500,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    },
                    "discount": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2021-05-04T23:11:38Z",
                    "updated_at": "2021-05-04T23:11:38Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 1000,
                "currency": "USD",
                "formatted": "$10.00"
            },
            "without_tax": {
                "amount": 1000,
                "currency": "USD",
                "formatted": "$10.00"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            },
            "discount": {
                "amount": -500,
                "currency": "USD",
                "formatted": "-$5.00"
            }
        },
        "timestamps": {
            "created_at": "2021-05-04T23:10:41Z",
            "updated_at": "2021-05-04T23:39:50Z",
            "expires_at": "2021-05-11T23:39:50Z"
        }
    }
}
```

`404 Not Found`

If you try to add a code that does not exist, you get a `404` response.

```json
{
    "errors": [
        {
            "status": 404,
            "title": "Not Found",
            "detail": "No promotion could be found with the given code."
        }
    ]
}
```

`201 Created`

If you add an eligible item for a free gift to the cart, you get a `promotion_suggestions` response.

```json
{
    "promotion_suggestions": [
            {
                "promotion_id": "f5a4e0a0-eaf0-4314-8a3c-e40e72f83d1a",
                "code": "auto_f5a4e0a0-eaf0-4314-8a3c-e40e72f83d1a",
                "info": "free free-gift-001 when my-custom-item is added to cart",
                "bundle": [
                    {
                        "targets": [
                            "free-gift-001"
                        ],
                        "quantity": 1
                    }
                ],
                "message": "Gift"
            }
        ]
}
```
