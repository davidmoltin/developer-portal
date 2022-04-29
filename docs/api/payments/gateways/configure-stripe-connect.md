---
id: configure-stripe-connect
title: Configure Stripe Connect
sidebar_label: Configure Stripe Connect
---

## `PUT` Update Stripe Connect settings

```http
https://api.moltin.com/v2/gateways/stripe_connect
```

Use the `/gateways/stripe_connect` endpoint to configure Stripe Connect in Elastic Path Commerce Cloud.

:::note
You can contact Elastic Path sales or [customer success team](mailto:customersuccess@elasticpath.com) to get more information about Stripe Connect and to check whether it will work for you.
:::

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `stripe_account` | `string` |Specifies the Stripe Connect account ID. |
| `type` | `string` | Specifies the type of the resource. You must use `gateway`. |
| `name` | `string` | Specifies the display name of the gateway. |
| `slug` | `string` | Specifies a unique slug for this gateway. |
| `enabled` | `boolean` | Specifies whether the gateway is enabled. The options are `true` or `false`. |
| `test` | `boolean` | Specifies whether the  test mode is enabled. The options are `true` or `false`.  |

### Object Example

```javascript
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

## Request Example

```bash
curl -X PUT https://api.moltin.com/v2/gateways/stripe_connect \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "enabled": true,
         "stripe_account": "acct_xxx"
         "test": true,
       }
     }'
```

## Response Example

`200 OK`

```json
{
  "data": {
    "enabled": true,
    "test": true,
    "stripe_account": "acct_xxx",
    "name": "Stripe Connect",
    "slug": "stripe_connect",
    "type": "gateway"
  }
}
```
