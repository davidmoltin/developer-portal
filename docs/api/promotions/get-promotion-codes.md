---
id: get-promotion-codes
title: Get Promotion Codes
sidebar_label: Get Promotion Codes
---

## `GET` Get Codes by Promotion ID

```http
https://api.moltin.com/v2/promotions/:id/codes
```

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique promotion identifier. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl https://api.moltin.com/v2/promotions/:id/codes \
     -H "Authorization: Bearer XXXX"
```

### Response

`200 OK`

```json
{
    "data": [
        {
            "code": "ZXY_CBA"
        },
        {
            "code": "ABC_XYZ"
        }
    ]
}
```
