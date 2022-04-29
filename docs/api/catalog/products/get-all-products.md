---
id: get-all-products
title: Get all Products
sidebar_label: Get all Products
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../pcm/products/index.md) section.
:::

## `GET` Get all Products

```http
https://api.moltin.com/v2/products
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |
| `X-Moltin-Currency` | Optional | `string` | Format display prices with an enabled store currency code. |
| `X-Moltin-Language` | Optional | `string` | Return a specific translation with enabled store translations. |

**Query Parameters**:

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `page\[limit\]` | Optional | `string` | The number of items to return per page. |
 | `page\[offset\]` | Optional | `string` | The number of items to offset the results by. Offset is zero-based. |
 | `sort` | Optional | `string` | Sort the attributes. |
 | `filter` | Optional | `string` | Filter the results. For more information, see [Filtering products](index.md#filtering). |
 | `include` | Optional | `string` | `main_images`, `files`, `brands`, `categories`, `collections`. |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
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
                }
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
            }
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0",
        "first": "https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0",
        "last": null
    },
    "meta": {
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 1
        }
    }
}

```

<!--END_DOCUSAURUS_CODE_TABS-->


:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md).
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.All().then(products => {
  // Do something
})
```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
const client = new MoltinClient({
  client_id: 'X'
})
client
  .get('products')
  .then(products => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
