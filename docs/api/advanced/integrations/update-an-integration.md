---
id: update-an-integration
title: Update an Integration
sidebar_label: Update an Integration
---

## `PUT` Update by ID

```http
https://api.moltin.com/v2/integrations/:id
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [`object`](create-an-integration.md#configuration-object) | A [configuration object](create-an-integration.md#configuration-object). |
| `observes` | Optional | `array` | An array of events you want to observe. |
| `enabled` | Optional | `boolean` | Specifies whether the integration is enabled. Default:`false`. |
| `integration_type` | Optional | `string` | This defines how the event is delivered, either `webhook`, `aws_sqs` or `stomp`. |
| `description` | Optional | `string` | A description for the integration. |
| `name` | Optional | `string` | The name of the integration. |
| `type` | Required | `string` | Represents the type of object. |

## Request Example

### Curl

```bash
curl -X PUT https://api.moltin.com/v2/integrations/:id \
     -H "Authorization: Bearer: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "integration",
        "enabled": false
      }
    }'
```

## Response example

`200 OK`

```json
{
  "data": {
    "id": "8cb9e689-ede7-4f6d-b61a-6aa970d572dd",
    "type": "integration",
    "integration_type": "webhook",
    "name": "Order shipping notification",
    "description": "Send a shipping notification via email with discount code.",
    "enabled": false,
    "configuration": {
      "url": "https://yourwebsite.com/order-created-notification"
    },
    "observes": ["order.fulfilled"],
    "links": {
      "self":
        "https://api.moltin.com/v2/integrations/8cb9e689-ede7-4f6d-b61a-6aa970d572dd"
    },
    "meta": {
      "timestamps": {
        "created_at": "2018-04-30T09:35:32.202Z",
        "updated_at": "2018-04-30T09:48:24.816Z"
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
