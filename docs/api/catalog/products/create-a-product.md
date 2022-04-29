---
id: create-a-product
title: Create a Product
sidebar_label: Create a Product
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../pcm/products/index.md) section.
:::

## `POST` Create a Product

```http
https://api.moltin.com/v2/products
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Represents the type of object being created. |
| `name` | Required | `string` | A human readable name for this product. |
| `slug` | Required | `string` | A unique slug for this product. |
| `sku` | Required | `string` | A unique SKU for this product. |
| `manage_stock` | Required | `boolean` | True if moltin should manage stock, `false` if not. |
| `description` | Required | `string` | A human readable description of the product. |
| `price` | Required | `array` | An array of prices, one for each currency. |
| `price.amount` | Required | `integer` | Value of the price. |
| `price.currency` | Required | `string` | Currency of this price (3 letter ISO). |
| `price.includes_tax` | Optional | `boolean` | true if relevant taxes have been included in the price, `false` if not. |
| `status` | Optional | `string` | `draft`, `live` |
| `commodity_type` | Required | `string` | `physical`, `digital` |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "type": "product",
        "id": "e41f25d8-a2c2-4af2-b316-364f3fc8048d",
        "name": "Deck Shoe",
        "slug": "deck-shoe_33",
        "sku": "deck-shoe_33",
        "manage_stock": false,
        "description": "Modern boat shoes were invented in 1935 by American Paul A. Sperry",
        "price": [
            {
                "amount": 5891,
                "currency": "USD",
                "includes_tax": true
            }
        ],
        "status": "live",
        "commodity_type": "physical",
        "relationships": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 5891,
                    "currency": "USD",
                    "formatted": "$58.91"
                },
                "without_tax": {
                    "amount": 5891,
                    "currency": "USD",
                    "formatted": "$58.91"
                }
            },
            "stock": {
                "level": 0,
                "availability": "out-stock"
            }
        }
    }
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product",
            "name": "Deck Shoe",
            "slug": "deck-shoe",
            "sku": "deck-shoe-001",
            "description": "Modern boat shoes were invented in 1935 by American Paul A. Sperry",
            "manage_stock": true,
            "price": [
            {
                "amount": 5891,
                "currency": "USD",
                "includes_tax": true
            }
            ],
            "status": "live",
            "commodity_type": "physical"
        }
    }'

```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const product = {
  name: 'Deck Shoe',
  slug: 'deck-shoe',
  sku: 'deck-shoe-001',
  description: 'A product for testing purposes',
  manage_stock: false,
  price: [
    {
      amount: 5891,
      currency: 'USD',
      includes_tax: true
    }
  ],
  status: 'live',
  commodity_type: 'physical'
}
Moltin.Products.Create(product).then(product => {
  // Do something
})

```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
const client = new MoltinClient({
  client_id: 'X',
  client_secret: 'X'
})
const data = {
  type: 'product',
  name: 'Deck Shoe',
  slug: 'deck-shoe',
  sku: 'deck-shoe-001',
  description: 'A product for testing purposes',
  manage_stock: false,
  price: [
    {
      amount: 5891,
      currency: 'USD',
      includes_tax: true
    }
  ],
  status: 'live',
  commodity_type: 'physical'
}
client
  .post('products', data)
  .then(product => {
    // Do something...
  })
  .catch(console.error)

```

<!--END_DOCUSAURUS_CODE_TABS-->
