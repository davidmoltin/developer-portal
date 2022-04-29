---
id: get-a-gateway
title: Get a Gateway
sidebar_label: Get a Gateway
---

## `GET` Get a Gateway by Slug

```http
https://api.moltin.com/v2/gateways/:slug
```

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `slug` | Required | `string` | The slug of the gateway. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://api.moltin.com/v2/gateways/:slug \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const slug = 'XXXX'
Moltin.Gateways.Get(slug).then(gateway => {
  // Do something
})
```

## Response Example

`200 OK`

```json
{
  "data": {
    "enabled": true,
    "stripe_account": "acct_xxx",
    "name": "Stripe Connect",
    "slug": "stripe_connect",
    "test": true,
    "type": "gateway"
  }
}
```
