---
id: create-a-brand
title: Create a Brand
sidebar_label: Create a Brand
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/brands` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `POST` Create a Brand

```http
https://api.moltin.com/v2/brands
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
| `status` | Optional | `string` | `live` or `draft` depending on the status. Defaults to `draft`. |
| `description` | Optional | `string` | Any description for this brand. |
| `slug` | Required | `string` | A unique slug identifier for the brand. |
| `name` | Required | `string` | The name of the brand. |
| `type` | Required | `string` | This represents the type of object being returned. |


<!-- Response -->

`201 Created`

```json
{
  "data": {
    "id": "06e510ae-4ddd-4150-a721-561ca5c4ce31",
    "type": "brand",
    "status": "live",
    "name": "Cool Clothing",
    "slug": "cool-clothing",
    "description": "Cool clothing make cool clothes!",
    "relationships": {}
  }
}
```

`422: Unprocessable Entity`

In this example we skip passing `name` to fail validation

```json
{
    "errors": [
        {
            "title": "Failed Validation",
            "detail": "The data.name field is required."
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/brands \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
          "type": "brand",
          "name": "Cool Clothing",
          "slug": "cool-clothing",
          "description": "Cool clothing make cool clothes!",
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
const brand = {
  name: 'Cool Clothing',
  slug: 'cool-clothing',
  description: 'Cool clothing make cool clothes.',
  status: 'live'
}
Moltin.Brands.Create(id, brand).then(brand => {
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
​
const data = {
  type: 'brand',
  name: 'Cool Clothing',
  slug: 'cool-clothing',
  description: 'Cool clothing make cool clothes.',
  status: 'live'
}
​
client
  .post('brands', data)
  .then(brand => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
