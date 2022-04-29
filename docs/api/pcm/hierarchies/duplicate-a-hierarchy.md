---
id: duplicate-a-hierarchy
title: Duplicate a Hierarchy
sidebar_label: Duplicate a Hierarchy
---

## `POST` Duplicate a Hierarchy

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/duplicate
```

Using this option, you can duplicate an existing hierarchy. This is useful because it enables you to quickly and easily create multiple hierarchies with the same node structure.

When you duplicate a hierarchy, you can specify a new name and/or a new description for the duplicated hierarchy. All other attributes, such as slug and locales, stays the same.

Any nodes in the existing hierarchy are also created in the duplicated hierarchy. However, any products associated with the nodes in an existing hierarchy are not associated with the nodes in the duplicated hierarchy. Once a duplicate hierarchy is created, you must create the relationships between your products and the nodes in the duplicated hierarchy. For more information, see [Create Node Product Relationships](../../../api/pcm/hierarchies/relationships/create-node-product-relationships.md).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy you want to duplicate. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `hierarchy` |
| `attributes.name` | Optional | `string` | The name of the duplicate hierarchy. The maximum length is 1000 characters. |
| `attributes.description` | Optional | `string` | A description of the duplicate hierarchy. |

## Request Example

```bash
curl -X POST https://api.moltin.com/pcm/hierarchies/09150b64-b6a0-4928-a432-3edc721a2150/duplicate
     -H "Authorization: Bearer XXXX" \
     {
      "data": {
      "type": "hierarchy",
      "attributes": {
        "name": "football_games",
        "description": "All the football games we sell"
       }
     }
    }
```

## Response Example

`200 OK`

```json
{
  "data": {
    "type": "hierarchy",
    "id": "aa5719e9-a5c4-4d57-a1f8-3ff6a267e962",
    "attributes": {
      "description": "All the football games we sell",
      "name": "football_games",
      "slug": "games"
    },
    "relationships": {
      "children": {
        "data": [],
        "links": {
          "related": "/hierarchies/aa5719e9-a5c4-4d57-a1f8-3ff6a267e962/children"
        }
      }
    },
    "meta": {
      "created_at": "2022-03-24T12:03:10.469Z",
      "updated_at": "2022-03-24T12:03:10.469Z"
    }
  }
}
```

## Related Resources

### Concepts

- [PCM Hierarchies](../../../concepts/hierarchies.md)


### API

- [PCM Products API](../../pcm/products/index.md)
- [Node Product Relationships API](../../pcm/hierarchies/relationships/create-node-product-relationships.md)
