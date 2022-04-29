---
id: configure-adyen
title: Configure Adyen
sidebar_label: Configure Adyen
---

You can configure Adyen using the `/gateways/adyen` endpoint.

## The Adyen gateway object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `merchant_account` | `string` | Your Adyen merchant account code. For example, `MyCompanyECOM`. |
| `username` | `string` | Your web service username. For example, `ws@Company.MyCompany`. |
| `password` | `string` | Your web service user Basic Auth password. |
| `test` | `boolean` | `true` or `false` to indicate if there is an Adyen test account. |
| `enabled` | `boolean` | Enter `true` or `false` to enable the gateway. |
| `name` | `string` | The display name of the gateway. |
| `slug` | `string` | A unique slug for this gateway: `adyen`. |
| `type` | `string` | The type is `gateway`. |

<!--Sample Object-->

```json
{
  "data": {
    "merchant_account": "MyCompanyECOM",
    "username": "ws@Company.MyCompany",
    "password": "xxx",
    "test": false,
    "enabled": true,
    "name": "Adyen",
    "slug": "adyen",
    "type": "gateway"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Adyen settings

```http
https://api.moltin.com/v2/gateways/adyen
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
| `merchant_account` | Optional | `string` | Your Adyen merchant account code. For example,  `MyCompanyECOM`. |
| `username` | Optional | `string` | Your web service username. For example, `ws@Company.MyCompany`. |
| `password` | Optional | `string` | Your web service user Basic Auth password. |
| `test` | Optional | `boolean` | Enter `true` or `false` to indicate if it is an Adyen test account. |
| `enabled` | Optional | `boolean` | Enter `true` or `false` to indicate if the gateway is enabled. |


<!-- Response -->

`200 OK`


```json
{
  "data": {
    "merchant_account": "MyCompanyECOM",
    "username": "ws@Company.MyCompany",
    "password": "xxx",
    "test": false,
    "enabled": true,
    "name": "Adyen",
    "slug": "adyen",
    "type": "gateway"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/gateways/adyen \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer XXX" \
     -d $'{
        "data": {
           "enabled": true,
           "merchant_account": "MyCompanyECOM",
           "username": "ws@Company.MyCompany",
           "password": "xxx",
           "test": false
        }
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
