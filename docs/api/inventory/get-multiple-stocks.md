---
id: get-multiple-stocks
title: Get Multiple Stocks
sidebar_label: Get Multiple Stocks
---

:::important
This endpoint works only using the `client_credentials` token  with `Seller Admin` role.
:::

## `POST` Get Stocks for Multiple Products

```http
https://api.moltin.com/v2/inventories/multiple
```

Retrieves stocks for multiple products.

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| :---            | :---     | :---     | :---                                                |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name            | Required | Type      | Description |
| :-------------- | :------- |:----------| :------------------------------------------------- |
| `id`            | Required | `string`  | The unique identifier of the product.              |

## Request Example

```bash
curl -X POST https://api.moltin.com/v2/inventories/multiple \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
            "data": [
        {
            "id": "a297a398-8386-43c2-8f23-d26913e96ecf"
        },
        {
            "id": "b296c2d7-e1ac-4d24-839f-0578ff091db0"
        }
        ]
    }'
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "a297a398-8386-43c2-8f23-d26913e96ecf",
            "type": "stock",
            "total": 132,
            "available": 132,
            "allocated": 0
        },
        {
            "id": "b296c2d7-e1ac-4d24-839f-0578ff091db0",
            "type": "stock",
            "total": 100,
            "available": 100,
            "allocated": 0
        }
    ],

}
```
