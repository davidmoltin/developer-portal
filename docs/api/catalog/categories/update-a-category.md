---
id: update-a-category
title: Update a Category
sidebar_label: Update a Category
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/categories` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `PUT` Update a Category by ID

```http
https://api.moltin.com/v2/categories/:id
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
| `id` | Required | `string` | ID of the category to update. |
| `type` | Required | `string` | Represents the type of the object being returned; e.g., `category`. |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "57fbb8eb-34cc-4076-8ec8-7e6f52c07100",
        "type": "category",
        "status": "live",
        "name": "Womens",
        "slug": "Womens",
        "description": "Womens clothing",
        "meta": {
            "timestamps": {
                "created_at": "2018-10-05T15:18:48+00:00",
                "updated_at": "2018-10-05T15:18:48+00:00"
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
curl -X PUT https://api.moltin.com/v2/categories/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
      "data": {
          "type": "category",
          "id": "645f97aa-ae63-4ee9-9259-062e570ba064",
          "name": "Category #1 Updated",
          "slug": "category-1-update",
          "description": "First category updated",
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
const category = {
    name: "Category #1 Updated",
    slug: "category-1-update",
    description: "First category updated",
    status: "live"
}
Moltin.Categories.update(id, category).then(category => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
