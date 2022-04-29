---
id: update-a-collection
title: Update a Collection
sidebar_label: Update a Collection
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/collections` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `PUT` Update by ID

```http
https://api.moltin.com/v2/collections/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the collection to update. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Represents the type of object being returned. |
| `name` | Optional | `string` | The name of the collection. |
| `slug` | Optional | `string` | A unique slug identifier for the collection. |
| `description` | Optional | `string` | Any description for this collection. |
| `status` | Optional | `string` | `live` or `draft` depending on the collection status. |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "645f97aa-ae63-4ee9-9259-062e570ba064",
        "type": "collection",
        "status": "draft",
        "name": "Collection #1 Updated",
        "slug": "collection-1-update",
        "description": "First collection updated",
        "meta": {
            "timestamps": {
                "created_at": "2018-05-10T14:23:18+00:00",
                "updated_at": "2018-05-10T14:23:18+00:00"
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
curl -X PUT https://api.moltin.com/v2/collections/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
        "data": {
            "type": "collection",
            "id": "645f97aa-ae63-4ee9-9259-062e570ba064",
            "name": "Collection #1 Updated",
            "slug": "collection-1-update",
            "description": "First collection updated",
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
const collectionId = 'xxxx'
const collection = {
    name: "Collection #1 Updated",
    slug: "collection-1-update",
    description: "First collection updated",
    status: "live"
}
Moltin.Collections.Update(collectionId, collection).then(collection => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
