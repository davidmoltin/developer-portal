---
id: configure-cybersource
title: Configure CyberSource
sidebar_label: Configure CyberSource
---

You can configure CyberSource by using the `/gateways/cyber_source` endpoint.

## The CyberSource gateway object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `login` | `string` | Your live or test CyberSource merchant ID. |
| `password` | `string` | Your live or test CyberSource SOAP key. |
| `type` | `string` | Enter `gateway`. |
| `name` | `string` | The display name of the gateway. |
| `slug` | `string` | A unique slug for the gateway. |
| `enabled` | `boolean` | Enter `true` or `false` to enable or disable the gateway. |
| `test` | `boolean` | Enter `true` or `false` to enable or disable test mode for the gateway. |

<!--Sample object-->

```json
{
  "data": {
    "enabled": true,
    "test": true,
    "login": "xxx",
    "password": "xxx",
    "name": "CyberSource",
    "slug": "cyber_source",
    "type": "gateway"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update CyberSource settings

```http
https://api.moltin.com/v2/gateways/cyber_source
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
| `enabled` | Optional | `boolean` | Enter `true` or `false` to enable or disable the gateway. |
| `test` | Optional | `boolean` | Enter `true` or `false` to enable test mode for the gateway. |
| `login` | Optional | `string` | Your live or test CyberSource merchant ID. |
| `password` | Optional | `string` | Your live or test CyberSource SOAP key. |

<!-- Response -->

`200 OK`

```json
{
    "data": {
        "enabled": true,
        "login": "merchant-id",
        "password": "soap-key",
        "slug": "cyber_source",
        "test": true,
        "type": "gateway"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- cURL -->

```bash
curl -X PUT https://api.moltin.com/v2/gateways/cyber_source \
     -H "Authorization: Bearer XXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "enabled": true,
         "login": "xxx",
         "password": "xxx",
         "test": true
       }
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
