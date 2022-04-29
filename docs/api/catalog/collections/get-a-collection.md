---
id: get-a-collection
title: Get a Collection
sidebar_label: Get a Collection
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/collections` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `GET` Get by ID

```http
https://api.moltin.com/v2/collections/:id
```

This endpoint retrieves an existing Collection by ID.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested Collection. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "12912957-4159-4eea-b1c4-685876588300",
        "type": "collection",
        "status": "live",
        "name": "Top Picks",
        "slug": "top_picks",
        "description": "Top Picks Collection",
        "meta": {
            "timestamps": {
                "created_at": "2017-06-26T11:18:05+00:00",
                "updated_at": "2018-04-04T10:56:47+00:00"
            }
        },
        "relationships": {
            "products": {
                "data": [
                    {
                        "type": "product",
                        "id": "36c21093-8996-4a9d-aacb-bf061f0769ed"
                    },
                    {
                        "type": "product",
                        "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df"
                    },
                    {
                        "type": "product",
                        "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe"
                    },
                    {
                        "type": "product",
                        "id": "001b9188-3959-4269-aaf6-e4a74f8607b8"
                    },
                    {
                        "type": "product",
                        "id": "a6fa6cbe-a718-45ab-ae1e-883c5a72ee61"
                    }
                ]
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/collections/:id \
     -H "Authorization: Bearer XXXX" \
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
Moltin.Collections.Get(id).then(collection => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
