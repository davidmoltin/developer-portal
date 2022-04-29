---
id: get-all-variations
title: Get all variations
sidebar_label: Get all Variations
---

## `GET` Get all variations

```http
https://api.moltin.com/pcm/variations
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X GET https://api.moltin.com/pcm/variations \
     -H "Authorization: Bearer XXXX"

```

### Response

`200 OK`

```json
{
    "data": [
        {
            "type": "product-variation",
            "id": "a726a358-096d-4c63-b390-dc8f601f0fe2",
            "attributes": {
                "name": "color"
            }
        },
        {
            "type": "product-variation",
            "id": "dac5f09e-a767-49ff-9ce7-6ce72aaf26e4",
            "attributes": {
                "name": "Size"
            }
        }
    ]
}
```
