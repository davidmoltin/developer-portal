---
id: get-all-collections
title: Get All Collections
sidebar_label: Get All Collections
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/collections` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `GET` Get All Collections

```http
https://api.moltin.com/v2/collections
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
 | `include` | Optional | `string` | collection, products. |
 | `filter` | Optional | `string` | Filter the results. For more information, see [Filtering collections](index.md#filtering). |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "id": "645f97aa-ae63-4ee9-9259-062e570ba064",
            "type": "collection",
            "status": "live",
            "name": "Winter Season",
            "slug": "winter-season",
            "description": "Our Winter Season is now live!",
            "meta": {
                "timestamps": {
                    "created_at": "2018-05-10T14:23:18+00:00",
                    "updated_at": "2018-05-10T14:23:18+00:00"
                }
            },
            "relationships": {}
        },
        {
            "id": "fbc05bbb-638a-4d36-998b-005c7bdf3dc9",
            "type": "collection",
            "status": "live",
            "name": "Winter Season",
            "slug": "winter-season",
            "description": "Our Winter Season is now live!",
            "meta": {
                "timestamps": {
                    "created_at": "2018-05-10T02:36:29+00:00",
                    "updated_at": "2018-05-10T02:36:29+00:00"
                }
            },
            "relationships": {}
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/collections?page[limit]=100&page[offset]=0",
        "first": "https://api.moltin.com/v2/collections?page[limit]=100&page[offset]=0",
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
curl -X GET https://api.moltin.com/v2/collections \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'XXXX'
})
Moltin.Collections.All().then(collections => {
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
  .get('collections')
  .then(collections => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
