---
id: configure-paypal-express
title: Configure PayPal Express
sidebar_label: Configure PayPal Express
---

Use the `/gateways/paypal_express`  endpoint to configure PayPal Express.

## The PayPal Express gateway object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | Specify `gateway` as the `type` value. |
| `name` | `string` | The display name of the gateway. |
| `slug` | `string` | A unique slug for this gateway. |
| `enabled` | `boolean` | Specify `true` or `false` to enable or disable the gateway. |
| `test` | `boolean` | Specify `true` or `false` to enable or disable the test mode. |
| `login` | `string` | Your username from the API Credentials for the `live` or `sandbox` PayPal business account. |
| `password` | `string` | Your password from the API Credentials for the `live` or `sandbox` PayPal business account. |
| `signature` | `string` | Your signature from the API Credentials for the `live` or `sandbox` PayPal business account. |

<!--Sample Object-->

```json
{
  "data": {
    "type":      "gateway",
	"name":      "PayPal Express Checkout",
	"slug":      "paypal_express",
	"enabled":   true,
	"test":      true,
	"login":     "sb-xxxxxxx_api1.business.example.com",
	"password":  "xxxxxx",
	"signature": "xxxxxx"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update PayPal Express settings

```http
https://api.moltin.com/v2/gateways/paypal_express
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
| `login` | Optional | `string` | Your username from the API Credentials for the `live` or `sandbox` PayPal business account. |
| `password` | Optional | `string` | Your password from the API Credentials for the `live` or `sandbox` PayPal business account. |
| `signature` | Optional | `string` | Your signature from the API Credentials for the `live` or `sandbox` PayPal business account. |
| `enabled` | Optional | `boolean` | Specify `true` or `false` to enable or disable the gateway. |
| `test` | Optional | `boolean` | Specify `true` or `false` to enable or disable the test mode. |

<!-- Response -->

`200 OK`


```json
{
  "data": {
    "type":      "gateway",
	"name":      "PayPal Express Checkout",
	"slug":      "paypal_express",
	"enabled":   true,
	"test":      true,
	"login":     "sb-xxxxxxx_api1.business.example.com",
	"password":  "xxxxxx",
	"signature": "xxxxxx"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/gateways/paypal_express \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "enabled":   true,
         "test":      true,
         "login":     "sb-xxxxxxx_api1.business.example.com",
         "password":  "xxxxxxx",
         "signature": "xxxxxxx"
       }
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
