---
id: get-an-integration
title: Get an Integration
sidebar_label: Get an Integration
---

## `GET` Get an Integration by ID

```http
https://api.moltin.com/v2/integrations/:id
```

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the integration. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

### Curl

```bash
curl -X GET https://api.moltin.com/v2/integrations/:id \
     -H "Authorization: Bearer XXXX"
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "71679ff8-36c1-4f8f-8ed2-cea50555d78c",
    "type": "integration",
    "integration_type": "webhook",
    "name": "Order shipping notification",
    "description": "Send a shipping notification via email with discount code.",
    "enabled": true,
    "configuration": {
      "url": "https://yourwebsite.com/order-created-notification"
    },
    "observes": ["order.fulfilled"],
    "links": {
      "self":
        "https://api.moltin.com/v2/integrations/5f2c7366-c97f-4047-b3f3-a603270db189"
    },
    "meta": {
      "timestamps": {
        "created_at": "2018-04-19T10:21:06.747Z",
        "updated_at": "2018-04-19T10:40:19.805Z"
      }
    }
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
