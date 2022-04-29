---
id: update-entry-relationships
title: Update Entry Relationships
sidebar_label: Update Entry Relationships
---

## `PUT` Update Entry Relationships

```http
https://api.moltin.com/v2/flows/:flowSlug/entries/:entryId/relationships/:fieldSlug
```

Replace the relationships between an entry and a resource. Unlike a `POST` to this endpoint, a `PUT` overrides any existing relationships.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `fieldSlug` | Required | `string` | The slug of the field that the relationship belongs to. |
| `entryId` | Required | `string` | The ID of the entry this field belongs to. |
| `flowSlug` | Required | `string` | The slug of the entry this flow belongs to. |

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


<!-- Response -->

`200 OK`


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

<!--END_DOCUSAURUS_CODE_TABS-->
