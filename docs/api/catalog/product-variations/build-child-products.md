---
id: build-child-products
title: Build Child Products
sidebar_label: Build Child Products
---

This endpoint builds your child/variation products. After you have a base product and have attached some variations, this endpoint triggers the process that applies those variations to the base product.
The result is a list of child products that each have one combination of the variation options applied to it.
The `id` you should use in the url is that of the base product.

## `POST` Build Child Products

```http
https://api.moltin.com/v2/products/:id/build
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | ID of the base product to be built. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Currency` | Optional | `string` | ISO code of the required currency. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

```json
{
    "type": "product",
    "id": "d8e64f88-7bb4-4095-a7e8-a55d094648bb",
    "name": "SPCA",
    "slug": "shirt",
    "sku": "1",
    "manage_stock": false,
    "description": "A shirt",
    "price": [
        {
            "amount": 500,
            "currency": "USD",
            "includes_tax": true
        }
    ],
    "status": "live",
    "commodity_type": "digital",
    "meta": {
        "timestamps": {
            "created_at": "2018-05-03T19:36:31+00:00",
            "updated_at": "2018-08-06T09:40:46+00:00"
        },
        "stock": {
            "level": 0,
            "availability": "out-stock"
        },
        "variations": {
            "id": "ccfb0d2c-8ed5-4dd8-ab41-ba883f4d3fbb",
            "name": "Shirt size",
            "options": [
                {
                    "id": "581dd431-38f0-415f-98fc-ec64b5aa7f9d",
                    "name": "small",
                    "description": "Size small"
                },
                {
                    "id": "f4413e4d-8258-4510-87f9-4af0d75bfcb1",
                    "name": "medium",
                    "description": "Size medium"
                },
                {
                    "id": "143814e1-c75f-46d4-8d14-97d15405321f",
                    "name": "large",
                    "description": "Size large"
                }
            ]
        }
    },
    "relationships": {
        "variations": {
            "data": [
                {
                    "type": "product-variation",
                    "id": "0c02ca9f-27be-48a8-89d9-cd7c30699343"
                }
            ]
        }
    }
 }

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/products/:id/build/ \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer XXXX"

```

<!--END_DOCUSAURUS_CODE_TABS-->
