---
id: get-a-hierarchy-node
title: Get a Hierarchy Node
sidebar_label: Get a Node
---

## `GET` Get a Hierarchy Node

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId
```

Retrieves a node from a hierarchy.

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

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": {
        "type": "node",
        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
        "attributes": {
            "description": "Electric stoves and ovens",
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
curl -X GET https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765 \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
