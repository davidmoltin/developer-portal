---
id: get-all-jobs
title: Get All Jobs
sidebar_label: Get All Jobs
---

:::note
Currently, the `jobs` endpoint supports viewing the status of the `https://api.moltin.com/pcm/products/:productId/build` request and the errors in the build only.
:::

## `GET` Get All Jobs

```http
https://api.moltin.com/pcm/jobs
```

## Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X GET https://api.moltin.com/pcm/jobs \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
      "data": [
        {
          "type": "pim-job",
          "id": "3ab3deca-1f11-47b7-a409-24ea3234d72c",
          "attributes": {
              "created_at": "2021-09-29 15:00:20.885 +0000 UTC",
              "status": "success",
              "type": "child-products",
              "updated_at": "2021-09-29 15:00:20.885 +0000 UTC"
          }
        }
      ]
    }
```
