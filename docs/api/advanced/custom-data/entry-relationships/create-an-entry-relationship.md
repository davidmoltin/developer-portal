---
id: create-an-entry-relationship
title: Create an Entry Relationship
sidebar_label: Create an Entry Relationship
---

## `POST` Create an Entry Relationship

```http
https://api.moltin.com/v2/flows/:flowSlug/entries/:entryId/relationships/:fieldSlug
```

Create an Entry relationship to one or more resources. If any relationships already exist, the ones made in the request are added to them.

## Request

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `fieldSlug` | Required | `string` | The slug of the field that the relationship belongs to. |
| `entryId` | Required | `string` | The ID of the entry this field belongs to. |
| `flowSlug` | Required | `string` | The slug of the flow the entry belongs to. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data.id` | Optional | `string` | The ID of the related resource. |
| `data.type` | Optional | `string` | Represents the resource type of the object. |
| `data` | Optional | `object` | Data to be stored. |

## Request Example (curl)

```bash
curl -X DELETE https://api.moltin.com/v2/products/:productId/relationships/collections \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
    {
      "type": "brand",
      "id": "0d28e5b6-f615-4e1c-b038-275cfde97927"
    }
  ]
}'
```

### Response example

`201 Created`


```json
{
    "data": [
        {
            "type": "brand",
            "id": "0d28e5b6-f615-4e1c-b038-275cfde97927"
        }
    ]
}
```
