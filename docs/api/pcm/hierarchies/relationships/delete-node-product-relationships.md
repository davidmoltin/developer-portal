---
id: delete-node-product-relationships
title: Delete Node-Product Relationships
sidebar_label: Delete Node-Product Relationships
---

## `DELETE` Delete Node-Product relationships

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId/relationships/products
```

Deletes relationships between a node and one or more products.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |
| `nodeId` | Required | `string` | The unique identifier of the node in the hierarchy. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

Required. An array of product references with the following attributes.

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Valid value: `product` |
| `id` | Required | `string` | The unique identifier of the product. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": {
        "type": "node",
        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
        "attributes": {
            "description": "Electric stoves and ovens updated",
            "name": "Electric Ranges",
            "slug": "Electric-Ranges-MA2"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/children"
                }
            },
            "parent": {
                "data": {
                    "type": "node",
                    "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
                }
            },
            "products": {
                "data": [],
                "links": {
                    "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/products"
                }
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/relationships/products \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": [
            {
            "type": "product",
            "id": "f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b"
            }
        ]
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
