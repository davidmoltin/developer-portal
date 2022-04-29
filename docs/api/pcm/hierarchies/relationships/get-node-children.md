---
id: get-node-children
title: Get a Nodeʼs Children
sidebar_label: Get a Nodeʼs Children
---

## `GET` Get a Nodeʼs Children

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId/children
```

Retrieves a list of child nodes for the specified node. By default, child nodes in the response are arranged by the `updated_at` time in descending order and the most recently updated child node appears at the top of the response.

:::tip Sorting child nodes
You can change the order in which child nodes appear in the response by setting the `sort_order` value for each child when you make [Create Relationships to Child Nodes](./create-node-child-relationships.md) request.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |
| `nodeId` | Required | `string` | The unique identifier of the node in the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `string` | The number of items to return per page. Minimum value is `1`. |
| `page[offset]` | Optional | `string` | The number of items to offset the results by. Offset is zero-based. |

## Request Example - curl

```bash
curl -X GET https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/children \
     -H "Authorization: Bearer XXXX" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "node",
            "id": "de3c3590-4138-4943-b04d-d7b7dc48fa54",
            "attributes": {
                "description": "Gas stoves and ovens",
                "name": "Gas Ranges",
                "slug": "Gas-Ranges-MA2"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/children"
                    }
                },
                "products": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/products"
                    }
                }
            }
        },
        {
            "type": "node",
            "id": "f26c613b-320a-4744-a4cb-841a451c95ab",
            "attributes": {
                "description": "Electric stoves and ovens",
                "name": "Electric Ranges",
                "slug": "Electric-Ranges-MA2"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/children"
                    }
                },
                "products": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/products"
                    }
                }
            }
        }
    ]
}
```
