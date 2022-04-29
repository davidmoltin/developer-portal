---
id: configure-stripe
title: Configure Stripe
sidebar_label: Configure Stripe
---

Use the `/gateways/stripe` endpoint to configure Stripe.

## `PUT` Update Stripe Settings

```http
https://api.moltin.com/v2/gateways/stripe
```

## Parameters

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `login` | `string` | Your `live` or `test` Stripe secret key. |
| `type` | `string` | The type of the resource. You must use `gateway`. |
| `name` | `string` | The display name of the gateway. |
| `slug` | `string` | A unique slug for this gateway. |
| `enabled` | `boolean` | Specifies whether the gateway is enabled. The options are `true` or `false`. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `login` | Optional | `string` | Stripe `test` or `live` secret key. |
| `enabled` | Optional | `boolean` | `true`, `false` |

### Object example

```javascript
{
  "data": {
    "enabled": true,
    "login": "xxx",
    "name": "Stripe",
    "slug": "stripe",
    "type": "gateway"
  }
}
```

## Request example - curl

```bash
curl -X PUT https://api.moltin.com/v2/gateways/stripe \
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
    "name": "Stripe",
    "slug": "stripe",
    "type": "gateway"
  }
}
```
