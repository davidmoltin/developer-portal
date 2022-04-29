---
id: get-a-category
title: Get a Category
sidebar_label: Get a Category
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/categories` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `GET` Get by ID

```http
https://api.moltin.com/v2/categories/:id
```

This endpoint retrieves an existing Category by ID.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested Category. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "65c036ce-c13b-4c05-89d5-9a47b9763935",
        "type": "category",
        "status": "live",
        "name": "Bright",
        "slug": "bright",
        "description": "Bright Category",
        "meta": {
            "timestamps": {
                "created_at": "2017-07-31T20:25:44+00:00",
                "updated_at": "2018-04-28T12:00:05+00:00"
            }
        },
        "relationships": {
            "products": {
                "data": [
                    {
                        "type": "product",
                        "id": "2bc131a2-9cca-4a04-b40c-b19f773a1354"
                    },
                    {
                        "type": "product",
                        "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe"
                    }
                ]
            }
        },
        "background_color": "#dadada", // Custom flow field
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/categories/:id \
     -H "Authorization: Bearer XXXX" \
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
Moltin.Categories.Get(id).then(category => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
