---
id: configure-braintree
title: Configure Braintree
sidebar_label: Configure Braintree
---

You can configure Braintree programatically using the `/gateways/braintree` endpoint.

## The Braintree gateway object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `merchant_id` | `string` | Your Braintree merchant ID. |
| `public_key` | `string` | Your Braintree public key. |
| `private_key` | `string` | Your Braintree private key. |
| `name` | `string` | The display name of the gateway. |
| `environment` | `string` | `production` or `sandbox` |
| `slug` | `string` | A unique slug for this gateway. |
| `type` | `string` | Always `gateway` |
| `enabled` | `boolean` | `true` or `false` -- enable the gateway. |

<!--Sample Object-->

```javascript
{
  "data": {
    "enabled": true,
    "environment": "production",
    "merchant_id": "xxx",
    "name": "Braintree",
    "private_key": "xxx",
    "public_key": "xxx",
    "slug": "braintree",
    "type": "gateway"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Braintree settings

```http
https://api.moltin.com/v2/gateways/braintree
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | `boolean` | `true`, `false` |
| `environment` | Optional | `string` | `production`, `sandbox` |
| `merchant_id` | Optional | `string` | Your Braintree merchant ID. |
| `private_key` | Optional | `string` | Your Braintree private key. |
| `public_key` | Optional | `string` | Your Braintree public key. |


<!-- Response -->

`200 OK`


```json
{
  "data": {
    "enabled": true,
    "environment": "production",
    "merchant_id": "xxx",
    "name": "Braintree",
    "private_key": "xxx",
    "public_key": "xxx",
    "slug": "braintree",
    "type": "gateway"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/gateways/braintree \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
      "data": {
        "enabled": true,
        "environment": "production",
        "merchant_id": "xxx",
        "private_key": "xxx",
        "public_key": "xxx",
      }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
