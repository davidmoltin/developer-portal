---
id: category-relationships
title: Category Relationships
sidebar_label: Category Relationships
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/categories` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../../pcm/hierarchies/index.md) section.
:::

## `POST` Create Category Relationship

```http
https://api.moltin.com/v2/categories/:id/relationships/categories
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the Category you want to modify relationships for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `parent.type` | Required | `string` | The type of the related object (should be `category`). |
| `parent.id` | Required | `string` | The ID of the parent Category. |
| `children[].type` | Required | `string` | The type of related object (should be `category`). |
| `children[].id` | Required | `string` | The ID of the Category. |


<!-- Response -->

`200 OK`

```json
{
    "id": "59a8c4e2-bd2d-4a14-9f1a-a497330cdf11",
    "type": "category",
    "status": "live",
    "name": "Mens",
    "slug": "mens",
    "description": "Browse our mens clothing line",
    "meta": {
        "timestamps": {
            "created_at": "2019-07-04T13:18:53+00:00",
            "updated_at": "2019-07-04T14:29:45+00:00"
        }
    },
    "relationships": {}
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/categories/:id/relationships/categories \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "parent": {
                "type": "category",
                "id": "6272a049-dc98-428b-ad90-65572add46c0"
            },
            "children": [
                {
                "type": "category",
                "id": "b438be03-9ae7-4e6a-8fb6-7ee41ce0ae71"
                }
            ]
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
