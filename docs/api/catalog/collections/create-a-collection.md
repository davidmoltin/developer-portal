---
id: create-a-collection
title: Create a Collection
sidebar_label: Create a Collection
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/collections` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `POST` Create a Collection

```http
https://api.moltin.com/v2/collections
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
| `type` | Required | `string` | Represents the type of object being returned. |
| `name` | Required | `string` | The name of the collection. |
| `slug` | Required | `string` | A unique slug identifier for the collection. |
| `description` | Optional | `string` | Any description for this collection. |
| `status` | Optional | `string` | `live`, or `draft` depending on the collection status. (defaults to draft). |


<!-- Response -->

`201 Created`

```json
{
    "data": {
        "id": "a276571c-321e-4c48-af2a-5a3895394b08",
        "type": "collection",
        "status": "live",
        "name": "Winter Season",
        "slug": "winter-season",
        "description": "Our Winter Season is now live!",
        "relationships": {}
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/collections \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
        "type": "collection",
        "name": "Winter Season",
        "slug": "winter-season",
        "description": "Our Winter Season is now live!",
        "status": "live"
     }
}'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'XXXX'
})
const collection = {
    name: "Winter Season",
    slug: "winter-season",
    description: "Our Winter Season is now live!",
    status: "live"
}
Moltin.Collections.Create(collection).then((response) => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
