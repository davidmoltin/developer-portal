---
id: create-a-hierarchy-node
title: Create a Hierarchy Node
sidebar_label: Create a Node
---

## `POST` Create a Node in a Hierarchy

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/nodes
```

Creates a node in the specified hierarchy.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

Required. By default, the parent of the node is the hierarchy root node. To create a node with a different parent, specify the parent node in the `relationships.parent` section.

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `node` |
| `attributes.name` | Required | `string` | A name for the node. Names must be unique among sibling nodes in the hierarchy, but otherwise a name can be non-unique. Cannot be null. |
| `attributes.description` | Optional | `string` | A description of the node. |
| `attributes.slug` | Optional | `string` |  A slug for the node. Slugs must be unique among sibling nodes in the hierarchy, but otherwise a slug can be non-unique. |
| `relationships.parent.data.type` | Optional | `string` | Always: `node` |
| `relationships.parent.data.id` | Optional | `string` | The node ID for the parent node. The new node is created as a child of this parent node. |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

<!-- Response - PCM -->

`201 Created`

```json
{
    "data": {
        "type": "node",
        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
        "attributes": {
            "description": "Electric stoves and ovens",
            "name": "Electric Ranges",
            "slug": "Electric-Ranges-MA2",
            "locales": {
                "fr-FR": {
                    "name": "Cuisinières électriques",
                    "description": "Cuisinières et fours électriques"
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
curl -X POST https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "node",
            "attributes":{
                "name": "Electric Ranges",
                "description": "Electric stoves and ovens",
                "slug": "Electric-Ranges-MA2"
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
                        "type": "node"
                    }
                }
            }
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
