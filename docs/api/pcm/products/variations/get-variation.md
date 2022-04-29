---
id: get-variation
title: Get a Variation
sidebar_label: Get a Variation
---

## `GET` Get a variation

```http
https://api.moltin.com/pcm/variations/:variationId
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `variationId` | Required | `string` | The ID of the variation to get. |

## Request Example - Curl

```bash
curl -X GET https://api.moltin.com/pcm/variations/1838ded2-3726-4288-bd82-7c4f14376aac \
     -H "Authorization: Bearer XXXX"

```

### Response

`200 OK`

```json
{
    "data": {
        "type": "product-variation",
        "id": "1838ded2-3726-4288-bd82-7c4f14376aac",
        "attributes": {
            "name": "Paint color"
        }
    }
}
```
