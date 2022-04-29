---
id: create-variation
title: Create a Variation
sidebar_label: Create a Variation
---


## `POST` Create a Variation

```http
https://api.moltin.com/pcm/variations
```

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of resource object. You must use `product-variation`.|
| `attributes.name` | Required | `string` | The variation name.|

## Request Example - Curl

```bash
curl -X POST https://api.moltin.com/pcm/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-variation",
            "attributes": {
                "name": "color"
            }
        }
    }'
```

### Response

`201 Created`

```json
{
    "data": {
        "type": "product-variation",
        "id": "8b9f9d4d-6d17-4113-b028-d54de3555bdf",
        "attributes": {
            "name": "color"
        }
    }
}
```
