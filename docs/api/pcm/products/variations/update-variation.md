---
id: update-variation
title: Update a Variation
sidebar_label: Update a Variation
---

## `PUT` Update a Variation

```http
https://api.moltin.com/pcm/variations/:variationID
```

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Path Parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `variationId` | Required | `string` | The ID of the variation to update. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of resource object. You must use `product-variation`.|
| `id` | Required | `string` | The unique identifier of the product variation. |
| `attributes.name` | Required | `string` | The variation name.|

## Request Example - Curl

```bash
curl -X POST https://api.moltin.com/pcm/variations/:variationID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-variation",
            "id": "8b9f9d4d-6d17-4113-b028-d54de3555bdf",
            "attributes": {
                "name": "T-Shirt size"
            }
        }
    }'
```

### Response

`204 No Content`
