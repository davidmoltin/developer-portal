---
id: get-all-gateways
title: Get all Gateways
sidebar_label: Get all Gateways
---

## `GET` Get all Gateways

```http
https://api.moltin.com/v2/gateways
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://api.moltin.com/v2/gateways \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
Moltin.Gateways.All().then(gateways => {
  // Do something
})
```

## Response Example

`200 OK`

```json
{
  "data": [
    {
      "enabled": false,
      "environment": "",
      "merchant_id": "",
      "name": "Braintree",
      "private_key": "",
      "public_key": "",
      "slug": "braintree",
      "type": "gateway"
    },
    {
      "enabled": true,
      "name": "Manual",
      "slug": "manual",
      "type": "gateway"
    },
    {
      "enabled": false,
      "login": "",
      "name": "Stripe",
      "slug": "stripe",
      "type": "gateway"
    },
    {
      "enabled": false,
      "login": "",
      "name": "Stripe Payment Intents",
      "slug": "stripe_payment_intents",
      "type": "gateway"
    },
    {
      "enabled": false,
      "stripe_account": "",
      "name": "Stripe Connect",
      "slug": "stripe_connect",
      "test": false,
      "type": "gateway"
    }
  ]
}
```
