---
id: create-node-child-relationships
title: Create Relationships to Child Nodes
sidebar_label: Create Relationships to Child Nodes
---

## `POST` Create Relationships between a Node and Child Nodes

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyID/nodes/:parentNodeID/relationships/children
```

Use this endpoint to create relationships between a single parent node and one or more child nodes. You can create a relationship only if:

- The parent node already exists.
- All child nodes already exist.
- Every child node in the body of the request exists in the same hierarchy as the parent node.
- A node is not a parent of itself. An array of child nodes request body must not contain the ID of the parent node in the path.
- All siblings in a hierarchy must have unique `slug`. Siblings are the child nodes that are related to the same parent.

### Sort Order

You can also provide `sort_order` information when you create a relationship by adding `meta` object to the array of node reference objects for each child node that requires sorting.

The node with the highest value of `sort_order` appears at the top of the response. For example, a node with a `sort_order` value of `3` appears before a node with a `sort_order` value of `2`.

If you don’t provide `sort_order` when creating relationships, all child nodes in the response for [Get a Node’s Children](./get-node-children.md) request are ordered by the `updated_at` time in descending order. The most recently updated child node appears at the top of the response.

If you set `sort_order` only for a few child nodes and not all, the child nodes with `sort_order` value appear first in the response and then other child nodes appear in the order of `updated_at` time.

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyID` | Required | `string` | The unique identifier of the hierarchy. |
| `parentNodeID` | Required | `string` | The unique identifier of the parent node in the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of the resource object, you must use `node`. |
| `id` | Required | `string` | The unique identifier of a child node that has a relationship with the parent node in the same hierarchy.|
| `meta` | Optional | `object` | The `sort_order` for each node. This value determines the order of nodes in the response for the [Get a Node’s Children](./get-node-children.md) request. |

## Request Example - Curl

```bash
curl -X POST https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/children \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": [
            {
                "type": "node",
                "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
                "meta": {
                    "sort_order": 2
                }
            },
            {
                "type": "node",
                "id": "de3c3590-4138-4943-b04d-d7b7dc48fa54",
                "meta": {
                    "sort_order": 1
                }
            }
        ]
     }'
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "node",
        "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
        "attributes": {
            "description": "All stoves and ovens",
            "name": "Ranges",
            "slug": "Ranges-MA1"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/children"
                }
            },
            "products": {
                "data": [],
                "links": {
                    "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/products"
                }
            }
        }
    }
}
```
