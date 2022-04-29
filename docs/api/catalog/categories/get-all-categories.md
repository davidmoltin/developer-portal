---
id: get-all-categories
title: Get all Categories
sidebar_label: Get all Categories
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/categories` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `GET` Get all Categories

```http
https://api.moltin.com/v2/categories
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Query Parameters**:

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `include` | Optional | `string` | `categories`, `products` |
| `filter` | Optional | `string` | Filter the results. For more information, see [Filtering categories](index.md#filtering). |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "id": "9dd56fc2-5746-46a2-bdf6-fe396bb6b7af",
            "type": "category",
            "status": "live",
            "name": "Clothing",
            "slug": "clothing",
            "description": "Browse our clothing line",
            "meta": {
                "timestamps": {
                    "created_at": "2018-05-10T14:11:32+00:00",
                    "updated_at": "2018-05-10T14:11:32+00:00"
                }
            },
            "relationships": {}
        },
        {
            "id": "75542cfa-38e2-4a48-8416-74055af7d62e",
            "type": "category",
            "status": "live",
            "name": "Clothing",
            "slug": "clothing",
            "description": "Browse our clothing line",
            "meta": {
                "timestamps": {
                    "created_at": "2018-05-10T02:20:47+00:00",
                    "updated_at": "2018-05-10T02:24:10+00:00"
                }
            },
            "relationships": {}
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/categories?page[limit]=100&page[offset]=0",
        "first": "https://api.moltin.com/v2/categories?page[limit]=100&page[offset]=0",
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
            "total": 2
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
curl https://api.moltin.com/v2/categories \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Categories.All().then(categories => {
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
​
client
  .get('categories')
  .then(categories => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
