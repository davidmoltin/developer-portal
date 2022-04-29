---
id: index
title: Relationships
sidebar_label: Relationships
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/categories` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../../pcm/hierarchies/index.md) section.
:::

You can use the Categories API to associate categories with each other in a hierarchical tree structure. The relationship between Categories is known as `parents` and `children`.

You can create relationships between categories by attaching [`parent`](parent-relationships.md) and [`child`](child-relationships.md) category IDs to the category of interest. **A category can have 1 parent but many children.**

The [Category Relationship](category-relationships.md) endpoint allows you to specify the parent and children of a category in one request.

## `GET` Get the Categories tree

```http
https://api.moltin.com/v2/categories/tree
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

```json
{
  "data": [
    {
      "id": "59a8c4e2-bd2d-4a14-9f1a-a497330cdf11",
      "type": "category",
      "status": "live",
      "name": "Mens",
      "slug": "mens",
      "description": "Browse our mens clothing line",
      "children": [
        {
          "id": "b438be03-9ae7-4e6a-8fb6-7ee41ce0ae71",
          "type": "category",
          "status": "live",
          "name": "Mens apparel",
          "slug": "mens-apparel",
          "description": "Browse our mens apparel",
          "children": [
            {
              "id": "6272a049-dc98-428b-ad90-65572add46c0",
              "type": "category",
              "status": "live",
              "name": "Clothing",
              "slug": "clothing",
              "description": "Browse our clothing line"
                }
              ]
            }
          ]
        }
      ]
    }
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/categories/tree \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Categories.Tree().then(categories => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
