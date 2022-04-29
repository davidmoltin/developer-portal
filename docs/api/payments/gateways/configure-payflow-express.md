---
id: configure-payflow-express
title: Configure PayPal Payflow Pro
sidebar_label: Configure PayPal Payflow Pro
---

Use the `/gateways/payflow_express` endpoint to configure PayPal Express PayFlow Pro.

## PayPal Payflow Pro gateway object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | Specify `gateway` as the `type` value. |
| `name` | `string` | The display name of the gateway. |
| `slug` | `string` | A unique slug for the gateway. |
| `enabled` | `boolean` | Specify `true` or `false` to enable or disable the gateway. |
| `test` | `boolean` | Specify `true` or `false` to enable or disable the test mode. |
| `partner` | `string` | Your partner from Payflow credentials of the PayPal Manager account. |
| `login` | `string` | Your merchant login from the Payflow credentials of the PayPal Manager account. |
| `password` | `string` | Your password from the Payflow credentials of the PayPal Manager account. |

<!--Sample Object-->

```json
{
  "data": {
    "type":     "gateway",
	"name":     "PayPal Payflow Pro Express Checkout",
	"slug":     "payflow_express",
	"enabled":  false,
	"test":     false,
	"partner":  "PayPal",
	"login":    "xxxxxxxx",
	"password": "xxxxxxxx"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update the PayPal Payflow Pro settings

```http
https://api.moltin.com/v2/gateways/payflow_express
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
| `partner` | Optional | `string` | Your partner from the Payflow credentials of the PayPal Manager account. |
| `login` | Optional | `string` | Your merchant login from the Payflow credentials of the PayPal Manager account. |
| `password` | Optional | `string` | Your password from the Payflow credentials of the PayPal Manager account. |
| `enabled` | Optional | `boolean` | Specify `true` or `false` to enable or disable the gateway. |
| `test` | Optional | `boolean` | Specify `true` or `false` to enable or disable the test mode. |

<!-- Response -->

`200 OK`

```json
{
  "data": {
    "type":      "gateway",
	"name":      "PayPal Payflow Pro Express Checkout",
	"slug":      "payflow_express",
	"enabled":   true,
	"test":      true,
	"partner":   "PayPal",
	"login":     "xxxxxx",
	"password":  "xxxxxx"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/gateways/payflow_express \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "enabled":   true,
         "test":      true,
	     "partner":   "PayPal",
	     "login":     "xxxxxx",
	     "password":  "xxxxxx"
       }
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
