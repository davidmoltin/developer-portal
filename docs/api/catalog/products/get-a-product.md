---
id: get-a-product
title: Get a Product
sidebar_label: Get a Product
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../pcm/products/index.md) section.
:::

## `GET` Get by ID

```http
https://api.moltin.com/v2/products/:id
```

This endpoint retrieves an existing Product by ID.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested Product. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |

**Query Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `include` | Optional | `string` | `main_image`, `files`, `brands`, `categories`, `collections` |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "type": "product",
        "id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
        "name": "Crown",
        "slug": "crown",
        "sku": "CWLP100BLK",
        "manage_stock": true,
        "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
        "price": [
            {
                "amount": 47500,
                "currency": "USD",
                "includes_tax": true
            }
        ],
        "status": "live",
        "commodity_type": "physical",
        "meta": {
            "timestamps": {
                "created_at": "2017-06-19T14:58:42+00:00",
                "updated_at": "2018-04-10T09:12:05+00:00"
            },
            "display_price": {
                "with_tax": {
                    "amount": 47500,
                    "currency": "USD",
                    "formatted": "$475.00"
                },
                "without_tax": {
                    "amount": 47500,
                    "currency": "USD",
                    "formatted": "$475.00"
                }
            },
            "stock": {
                "level": 500,
                "availability": "in-stock"
            },
            "variation_matrix": []
        },
        "relationships": {
            "files": {
                "data": [
                    {
                        "type": "file",
                        "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
                    }
                ]
            },
            "categories": {
                "data": [
                    {
                        "type": "category",
                        "id": "a636c261-0259-4975-ac8e-77246ec9cfe0"
                    }
                ]
            },
            "main_image": {
                "data": {
                    "type": "main_image",
                    "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
                }
            }
        },
        "material": null, // Custom flow field
        "max_watt": null, // Custom flow field
        "bulb_qty": null, // Custom flow field
        "bulb": null, // Custom flow field
        "new": null, // Custom flow field
        "on_sale": null, // Custom flow field
        "background_color": "#d9d9d9", // Custom flow field
        "finish": "test" // Custom flow field
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->


:::note
There is only a display\_price in your response if the product you are requesting has a price in the currency you are using as a header. If a header is not passed, the product must have a price in your default currency.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products/:id \
     -H "Authorization: Bearer XXXX" \
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
Moltin.Products.Get(id).then(product => {
  // Do something
})
```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
const client = new MoltinClient({
  client_id: 'X'
})
const id = 'XXXX'
client
  .get(`products/${id}`)
  .then(product => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
