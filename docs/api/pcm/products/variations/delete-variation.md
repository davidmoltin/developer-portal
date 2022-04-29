---
id: delete-variation
title: Delete a Variation
sidebar_label: Delete a Variation
---

## `DELETE` Delete a variation

```http
https://api.moltin.com/pcm/variations/:variationId
```

:::note
You can only delete the variations that are not in use. If you delete a variation that is still in use, a `422 Failed Validation` error message is returned.
:::

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `variationId` | Required | `string` | The ID of the variation to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X DELETE https://api.moltin.com/pcm/variations/:id \
     -H "Authorization: Bearer XXXX"

```

### Response

`204 No Content`

```json

```
