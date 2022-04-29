---
id: get-all-options
title: Get all Options
sidebar_label: Get all Options
---

## `GET` Get all Options

```http
https://api.moltin.com/pcm/variations/:variationId/options
```

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `variationId` | Required | `string` | The ID of the variation. |


### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X GET https://api.moltin.com/pcm/variations/:variationId/options \
     -H "Authorization: Bearer XXXX"

```

### Response

`200 OK`

```json
{
    "data": [
        {
            "type": "product-variation-option",
            "id": "806f74ec-f4d9-4ee3-b7ff-85ac1a67240c",
            "attributes": {
                "description": "red",
                "name": "red"
            }
        },
        {
            "type": "product-variation-option",
            "id": "a9f00bf1-ce46-45ab-8754-4779cab79fdf",
            "attributes": {
                "description": "blue",
                "name": "blue"
            }
        }
    ]
}
```
