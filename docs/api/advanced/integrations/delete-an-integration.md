---
id: delete-an-integration
title: Delete an Integration
sidebar_label: Delete an Integration
---

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/integrations/:id
```

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the integration to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X DELETE https://api.moltin.com/v2/integrations/:id \
     -H "Authorization: Bearer XXXX"
```

## Response Example

`200 OK`

```json
{
  "data": {
    "type": "integration",
    "id": "8cb9e689-ede7-4f6d-b61a-6aa970d572dd"
  }
}
```

## Related Resources

### Concepts

- [Integrations](../../../concepts/integrations.md)

### APIs

- [Integrations API](index.md)
- [Observable Events](observable-events.md)

### How-to guides

- [Integration Examples](../../../developer/get-started/integrations.md)
