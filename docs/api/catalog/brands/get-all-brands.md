---
id: get-all-brands
title: Get all Brands
sidebar_label: Get all Brands
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/brands` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `GET` Get all Brands

```http
https://api.moltin.com/v2/brands
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
 | `filter` | Optional | `string` | Filter attributes. For more information, see [Filtering brands](index.md#filtering). |
 | `include` | Optional | `string` | `brands`, `products` |


<!-- Response -->

`200 OK`

```json
{
  "data": [
    {
      "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c",
      "type": "brand",
      "status": "live",
      "name": "I Love Lamp",
      "slug": "i-love-lamp",
      "description": "A lamp brand.",
      "meta": {
        "timestamps": {
          "created_at": "2018-04-05T08:48:39+00:00",
          "updated_at": "2018-04-23T11:09:30+00:00"
        }
      },
      "relationships": {}
    }
  ],
  "links": {
    "current":
      "https://api.moltin.com/v2/brands?page[limit]=100&page[offset]=0",
    "first": "https://api.moltin.com/v2/brands?page[limit]=100&page[offset]=0",
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
curl -X GET https://api.moltin.com/v2/brands \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Brands.All().then(brands => {
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
  .get('brands')
  .then(brands => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
