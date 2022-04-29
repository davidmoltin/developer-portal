---
id: add-custom-item-to-cart
title: Add Custom Item to Cart
sidebar_label: Add Custom Item to Cart
---

You want to add a custom item to the cart to handle things like shipping, taxes and inventory you don’t manage with Commerce Cloud.

:::note
Any requests to add a product to cart return a collection of [cart items](cart-items/index.md).
:::

:::note
[Tax items](cart-items/tax-items/index.md#the-tax-item-object) may optionally be added with the product. Only administrators with [client credentials](../../basics/authentication/client-credential-token.md) are able to do this. If included, they replace any existing taxes on the product.
:::

:::important
A cart can contain a maximum of 100 unique items. Items include products, custom items, tax items, and promotions.
:::

:::warning
Custom Cart Items are available through [implicit authentication](../../basics/authentication/implicit-token.md). Ensure that you always check each order has the correct details for each item, most importantly, price.
:::

## `POST` Add Custom Item to Cart

```http
https://api.moltin.com/v2/carts/:reference/items
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The system generated ID for the cart that the customer created. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-MOLTIN-CURRENCY` | Optional | `string` | Specifies the currency to be used for the products in the cart. Your site’s default is used if not specified. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `tax` | Optional | `array` | A list of tax items to apply to this cart item. |
| `type` | Required | `string` | `custom_item` |
| `name` | Required | `string` | The name of the custom item. |
| `sku` | Optional | `string` | The SKU code to use for the custom item. |
| `description` | Optional | `string` | A description of the custom item. |
| `quantity` | Required | `integer` | The amount of custom items to add to cart. |
| `price.amount` | Required | `integer` | The unit price of the custom item. |
| `price.includes_tax` | Optional | `boolean` | `true` if relevant taxes have been included in the price, `false` if not. Defaults to `true` |


<!-- Response -->

`201 Created`


```json
{
    "data": [
        {
            "id": "581db51b-d4df-4aff-855d-e8ddbcf81b0c",
            "type": "custom_item",
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        },
                        "value": {
                            "amount": 10000,
                            "currency": "USD",
                            "formatted": "$100.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2018-05-08T10:11:17.871313413Z",
                    "updated_at": "2018-05-08T10:11:17.871313413Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 57500,
                "currency": "USD",
                "formatted": "$575.00"
            },
            "without_tax": {
                "amount": 57500,
                "currency": "USD",
                "formatted": "$575.00"
            }
        },
        "timestamps": {
            "created_at": "2018-05-08T10:00:20.171Z",
            "updated_at": "2018-05-08T10:11:17.871313413Z",
            "expires_at": "2018-05-20T10:11:17.871313413Z"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "custom_item",
        "name": "My Custom Item",
        "sku": "my-custom-item",
        "description": "My first custom item!",
        "quantity": 1,
        "price": {
          "amount": 10000
        }
      }
    }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const reference = 'XXXX'
const item = {
  name: 'My Custom Item',
  sku: 'my-custom-item',
  description: 'My first custom item!',
  quantity: 1,
  price: {
    amount: 10000
  }
}
Moltin.Cart(reference)
  .AddCustomItem(item)
  .then(cart => {
    // Do something
  })
```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X'
})
const reference = 'XXXX'
client
  .post(`carts/${reference}/items`, {
    type: "custom_item",
    name: 'My Custom Item',
    sku: 'my-custom-item',
    description: 'My first custom item!',
    quantity: 1,
    price: {
      amount: 10000
    }
  })
  .then(cart => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
