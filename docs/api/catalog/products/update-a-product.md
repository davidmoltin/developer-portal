---
id: update-a-product
title: Update a Product
sidebar_label: Update a Product
---

:::important
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../pcm/products/index.md) section.
:::

## `PUT` Update by ID

```http
https://api.moltin.com/v2/products/:id
```

Updating an existing product.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the product you want to update. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Language` | Optional | `string` | If set, the system stores a record of the translation in the specific language. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | Represents the ID of object being updated. |
| `type` | Required | `string` | Represents the type of object being updated. (should be product). |
| `name` | Optional | `string` | Specifies a human readable name for this product. |
| `slug` | Optional | `string` | Specifies a unique slug for this product. |
| `sku` | Optional | `string` | Specifies a unique SKU for this product. |
| `manage_stock` | Optional | `boolean` | Specifies whether Elastic Path Commerce Cloud manages the stock. The options are `true` or `false`, where `false` indicates Elastic Path Commerce Cloud that the stock is available.|
| `description` | Optional | `string` | Provides a description for the product. |
| `price` | Optional | `array` | Displays an array of prices, one for each currency. |
| `price.amount` | Optional | `string` | Provides a value for each currency. |
| `price.currency` | Optional | `string` | Specifies the currency of this price in three-letter ISO. |
| `price.includes_tax` | Optional | `boolean` | Specifies whether tax is included in the price. The options are `true` or `false`. |
| `status` | Optional | `string` | Specifies the status of the product. The options are `draft` or `live`. |
| `commodity_type` | Optional | `string` | Specifies the type of the product. The options are physical or digital. |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "type": "product",
        "id": "b47372eb-6f13-4bcb-ad06-329f4ffee69d",
        "name": "A Product",
        "slug": "a-product-1",
        "sku": "SP01-{color}-new-2",
        "manage_stock": false,
        "description": "Some description",
        "price": [
            {
                "amount": 6999,
                "currency": "GBP",
                "includes_tax": true
            },
            {
                "amount": 7499,
                "currency": "USD",
                "includes_tax": true
            }
        ],
        "status": "live",
        "commodity_type": "physical",
        "meta": {
            "timestamps": {
                "created_at": "2018-05-11T20:07:56+00:00",
                "updated_at": "2018-05-12T00:50:11+00:00"
            },
            "display_price": {
                "with_tax": {
                    "amount": 7499,
                    "currency": "USD",
                    "formatted": "$74.99"
                },
                "without_tax": {
                    "amount": 7499,
                    "currency": "USD",
                    "formatted": "$74.99"
                }
            },
            "stock": {
                "level": 0,
                "availability": "out-stock"
            }
        },
        "relationships": {
            "categories": {
                "data": [
                    {
                        "type": "category",
                        "id": "3acf1815-ef09-44df-a6d3-e3e702663524"
                    }
                ]
            },
            "collections": {
                "data": [
                    {
                        "type": "collection",
                        "id": "10229491-7dbb-424d-be08-80c5735795cc"
                    }
                ]
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/products/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -H "X-Moltin-Language: en" \ # Optional language header
     -d $'{
        "data": {
            "type": "product",
            "id": "XXXX",
            "name": "Updated product name"
        }
    }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
const data = {
  'name': 'Updated product name',
  'type': 'product',
  'id': id
}
Moltin.Products.Update(id, data).then(product => {
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
const id = 'XXXX'
const data = {
  name: 'Updated product name',
  type: 'product',
  id
}
client
  .put(`products/${id}`, data)
  .then(product => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
