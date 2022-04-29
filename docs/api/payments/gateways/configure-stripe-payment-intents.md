---
id: configure-stripe-payment-intents
title: Configure Stripe Payment Intents
sidebar_label: Configure Stripe Payment Intents
---

## `PUT` Update Stripe Payment Intent settings

```http
https://api.moltin.com/v2/gateways/stripe_payment_intents
```

Use `/gateways/stripe_payment_intents` endpoint to configure Stripe Payment Intents.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `login` | `string` | Specifies the Stripe secret key for your account that is in `live` or `test` mode.|
| `type` | `string` | Specifies the type of the resource. You must use `gateway`. |
| `name` | `string` | Specifies the display name of the gateway. |
| `slug` | `string` | Specifies a unique slug for this gateway. |
| `enabled` | `boolean` | Specifies whether the gateway is enabled. The options are `true` or `false`. |

### Object example

```javascript
{
  "data": {
    "enabled": true,
    "login": "xxx",
    "name": "Stripe Payment Intents",
    "slug": "stripe_payment_intents",
    "type": "gateway"
  }
}
```

## Request example - curl

```bash
curl -X PUT https://api.moltin.com/v2/gateways/stripe_payment_intents \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "enabled": true,
         "login": "xxx"
       }
     }'
```

## Response example

`200 OK`

```json
{
  "data": {
    "enabled": true,
    "login": "xxx",
    "name": "Stripe Payment Intents",
    "slug": "stripe_payment_intents",
    "type": "gateway"
  }
}
```
