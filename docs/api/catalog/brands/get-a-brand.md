---
id: get-a-brand
title: Get a Brand
sidebar_label: Get a Brand
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/brands` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `GET` Get by ID

```http
https://api.moltin.com/v2/brands/:id
```

This endpoint retrieves an existing Brand by ID.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested Brand. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

```json
{
  "data": {
    "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c",
    "type": "brand",
    "status": "live",
    "name": "I Love Lamp",
    "slug": "ilovelamp",
    "description": "A lamp brand.",
    "meta": {
      "timestamps": {
        "created_at": "2018-04-05T08:48:39+00:00",
        "updated_at": "2018-04-23T11:09:30+00:00"
      }
    },
    "relationships": {}
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/brands/:id \
     -H "Authorization: Bearer XXXX" \
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
Moltin.Brands.Get(id).then(brand => {
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
const id = 'XXXX'
​
client
  .get(`brands/${id}`)
  .then(brands => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
