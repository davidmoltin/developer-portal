---
id: create-a-category
title: Create a Category
sidebar_label: Create a Category
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/categories` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../pcm/hierarchies/index.md) section.
:::

## `POST` Create a Category

```http
https://api.moltin.com/v2/categories
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
| `type` | Required | `string` | Represents the type of the object being returned. |
| `name` | Required | `string` | The name of the category. |
| `slug` | Required | `string` | A slug is a unique, human-readable identifier for a category. **Note**: Slugs need not be unique within a store. However, giving the same slug to multiple child categories within a parent category results in error.  For example, you can have a slug called `pants` in different parent categories, such as `men’s apparel` and `women’s apparel`. But, you cannot have the slug, `pants`, for more than one child category within men’s apparel or women’s apparel categories.|
| `description` | Optional | `string` | Any description for this category. |
| `status` | Optional | `string` | live or draft depending on the category status. (defaults to `draft`). |


<!-- Response -->

`201 Created`

```json
{
    "data": {
        "id": "9dd56fc2-5746-46a2-bdf6-fe396bb6b7af",
        "type": "category",
        "status": "live",
        "name": "Clothing",
        "slug": "clothing",
        "description": "Browse our clothing line",
        "relationships": {}
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/categories \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
        "type": "category",
        "name": "Clothing",
        "slug": "clothing",
        "description": "Browse our clothing line",
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
const category = {
  name: 'Clothing',
  slug: 'clothing',
  description: 'Browse our clothing line',
  status: 'live'
}
Moltin.Categories.Create(category).then(category => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
