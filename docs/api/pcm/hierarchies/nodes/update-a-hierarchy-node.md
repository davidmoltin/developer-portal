---
id: update-a-hierarchy-node
title: Update a Hierarchy Node
sidebar_label: Update a Node
---

## `PUT` Update a Hierarchy Node

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId
```

Updates the specified node in a hierarchy. You can do a partial update, where you specify only the field value to change.

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

Specify whichever `attributes` you want to change. The values of the other `attributes` remain the same.  If the `attributes` section is empty, the node is not updated.

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `node` |
| `id` | Required | `string` | The unique identifier of the node. Must match the node ID specified in the request path. |
| `attributes.name` | Optional | `string` | An updated name. Names must be unique among sibling nodes in the hierarchy, but otherwise names can be non-unique. Cannot be null. |
| `attributes.description` | Optional | `string` | An updated description. |
| `attributes.slug` | Optional | `string` | An updated slug. Slugs must be unique among sibling nodes in the hierarchy, but otherwise slugs can be non-unique. |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": {
        "type": "node",
        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
        "attributes": {
            "description": "Electric stoves and ovens - UPDATED",
            "name": "Electric Ranges",
            "slug": "Electric-Ranges-MA2",
            "locales": {
                "fr-FR": {
                    "name": "Cuisinières électriques",
                    "description": "Cuisinières et fours électriques - MISE À JOUR"
                }
            }
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
curl -X PUT https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765 \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
            "type": "node",
            "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
            "attributes":{
                "description": "Electric stoves and ovens - UPDATED",
            }
        }
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
