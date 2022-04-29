---
id: delete-a-promotion
title: Delete a Promotion
sidebar_label: Delete a Promotion
---

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/promotions/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the promotion that you want to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X DELETE https://api.moltin.com/v2/promotions/:id \
     -H "Authorization: Bearer XXXX"
```

## Response Example

`204 No Content`
