---
id: update-a-brand
title: Update a Brand
sidebar_label: Update a Brand
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/brands` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `PUT` Update by ID

```http
https://api.moltin.com/v2/brands/:id
```

This endpoint updates an existing Brand by ID.

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

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | This represents the type of object being returned. |
| `id` | Required | `string` | The ID of the requested brand. |
| `status` | Optional | `string` | `live` or `draft` depending on the status. |
| `description` | Optional | `string` | Any description for this brand. |
| `slug` | Optional | `string` | A unique slug identifier for the brand. |
| `name` | Optional | `string` | The name of the brand. |


<!-- Response -->

`200 OK`

```json
{
  "data": {
    "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c",
    "type": "brand",
    "status": "live",
    "name": "Trendy Lamp Co",
    "slug": "trendy-lamp-co",
    "description": "Trendy lamps.",
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
curl -X PUT https://api.moltin.com/v2/brands/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "brand",
         "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c",
         "name": "Trendy Lamp Co.",
         "slug": "trendy-lamp-co",
         "description": "Trendy lamps.",
         "status": "live"
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
const brand = {
  name: 'Trendy Lamp Co',
  slug: 'trendy-lamp-co',
  description: 'Trendy lamps.',
  status: 'live'
}
Moltin.Brands.Update(id, brand).then(brand => {
  // Do something
})
```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'​
const data = {
  type: 'brand',
  name: 'Cool Clothing',
  slug: 'cool-clothing',
  description: 'Cool clothing make cool clothes.',
  status: 'live'
}
​
client
  .put(`brands/${id}`, data)
  .then(brand => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
