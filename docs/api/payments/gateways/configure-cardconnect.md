---
id: configure-cardconnect
title: Configure CardConnect
sidebar_label: Configure CardConnect
---

You can configure CardConnect programatically using the `/gateways/card_connect` endpoint.

## The CardConnect Gateway object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `slug` | `string` | A unique slug for this gateway: `card_connect`. |
| `name` | `string` | The display name of the gateway. |
| `merchant_id` | `string` | Your CardConnect Merchant ID. |
| `username` | `string` | Your CardConnect username. |
| `password` | `string` | Your CardConnect password. |
| `enabled` | `boolean` | Use `true` or `false` to indicate if the gateway is enabled. |
| `test` | `boolean` | Use `true` or `false` to enable or disable test mode for the gateway. |
| `type` | `string` | The value is always `gateway`. |

<!--Sample Object-->

```json
{
  "data": {
    "slug": "card_connect",
    "name": "CardConnect",
    "merchant_id": "xxx",
    "username": "xxx",
    "password": "xxx",
    "enabled": true,
    "test": false,
    "type": "gateway"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update CardConnect settings

```http
https://api.moltin.com/v2/gateways/card_connect
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
| `merchant_id` | Optional | `string` | Your CardConnect Merchant ID. |
| `username` | Optional | `string` | Your CardConnect username. |
| `password` | Optional | `string` | Your CardConnect password. |
| `enabled` | Optional | `boolean` | Enter `true` or `false` to enable or disable the gateway. |
| `test` | Optional | `boolean` |  Enter `true` or `false` to enable test mode for the gateway. |


<!-- Response -->

`200 OK`


```json
{
  "data": {
    "slug": "card_connect",
    "name": "CardConnect",
    "merchant_id": "xxx",
    "username": "xxx",
    "password": "xxx",
    "test": false,
    "enabled": false,
    "type": "gateway"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/gateways/card_connect \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "merchant_id": "xxx",
         "username": "xxx"
         "password": "xxx",
         "test": false,
         "enabled": false
       }
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
