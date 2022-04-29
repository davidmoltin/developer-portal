---
id: add-product-to-cart
title: Add Product to Cart
sidebar_label: Add Product to Cart
---

Adding a Product to Cart is the most common Cart action. If you want to add any [custom products](add-custom-item-to-cart.md) or [promotions](add-promotion-to-cart.md), you’ll need to do that as a separate action.

Ensure that you follow the guidelines for safe characters for the cart id. For more information about cart ID naming requirements, see the [Safe Characters](../../basics/safe-characters.md) section.

:::note

* Any requests to add a product to cart returns the collection of [cart items](cart-items/index.md).
* [Tax items](cart-items/tax-items/index.md#the-tax-item-object) may optionally be added with the product. Only administrators with [client credentials](../../basics/authentication/client-credential-token.md) are able to do this. If included, they replace any existing taxes on the product.
* The cart currency is set when the first item is added to the cart.
* The product being added to the cart requires a price in the same currency as the other items in the cart. The API returns a `400` error if a price is not defined in the correct currency.

:::

:::important
A cart can contain a maximum of 100 unique items. Items include products, custom items, tax items, and promotions.
:::

:::caution
There are a number of actions that happen to your [inventory](https://app.gitbook.com/@moltin/s/api/catalog/inventory) when checking out and paying for an order. For more information, see the [Inventory](../../../concepts/inventory.md) documentation.
:::

## `POST` Add Product to Cart

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
| `X-MOLTIN-CURRENCY` | Optional | `string` | Specifies the currency to be used for the products in the cart. If you do not specify a currency, the site’s default currency is used. This header only affects the first item added to the cart. |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |
| `X-Moltin-Customer-Token` | Required | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `catalog_rule` object. |
| `EP-Channel`  | Required | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `catalog_rule` object.
| `EP-Context-Tag` | Required | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `catalog_rule` object. |

### Body : adding product using ID

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `tax` | Optional | `array` | Displays a list of tax items to apply to the cart item. |
| `quantity` | Required | `integer` | Specifies the number of products to add to the cart. |
| `type` | Required | `string` | Specifies the type of the resource, which is `cart_item`. |
| `id` | Required | `string` | Specifies the ID of the product you want to add to cart. |

### Body : adding product using SKU

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `tax` | Optional | `array` | Displays a list of tax items to apply to the cart item. |
| `quantity` | Required | `integer` | Specifies the number of products to add to the cart. |
| `type` | Required | `string` | Specifies the type of the resource, which is `cart_item`. |
| `sku` | Required | `string` | Specifies the item SKU that you want to add to cart. |

## Request Examples

### Curl

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
          "id": "df32387b-6ce6-4802-9b90-1126a5c5a54f",
          "type": "cart_item",
          "quantity": 1
        }
      }'
```

### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const referenceId = 'XXXX'
const productId = 'XXXX'
const quantity = 1
Moltin.Cart(referenceId)
  .AddProduct(productId, quantity, data = {}, isSku)
  // Add product by sku => isSku = true;
  // Add product by id => isSku = false;
  // The default value of isSku is `false`, which adds products by product id. To add products by SKU, set to `true`.
  .then(cart => {
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
const productId = 'XXXX'
const quantity = 1
client
  .post(`carts/${reference}/items`, {
    type: "cart_item",
    id: productId,
    quantity
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
```
