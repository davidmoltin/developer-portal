---
id: configure-authorize.net
title: Configure Authorize.net
sidebar_label: Configure Authorize.net
---

You can configure Authorize.net programatically using the `/gateways/authorize_net` endpoint.

## The Authorize.net gateway object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| login | `string` | Your `live` or `test` API Login ID. |
| password | `string` | Your `live` or `test` Transaction Key. |
| type | `string` | This is always `gateway` |
| name | `string` | The display name of the gateway. |
| slug | `string` | A unique slug for this gateway. |
| enabled | `boolean` | `true` or `false` -- enable the gateway. |
| test | `boolean` | `true` or `false` -- enable test mode. |

<!--Sample Object-->

```json
{
  "data": {
    "enabled": true,
    "login": "xxx",
    "password": "xxx",
    "name": "Stripe",
    "slug": "stripe",
    "type": "gateway",
    "test": false
  }
}
Update Stripe settings

```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Authorize.net Settings

```http
https://api.moltin.com/v2/gateways/authorize_net
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
| `login` | Optional | `string` | Authorize.net API Login ID. |
| `password` | Optional | `string` | Authorize.net Transaction Key. |
| `enabled` | Optional | `string` | `true`, `false` |
| `test` | Optional | `string` | `true`, `false` |


<!-- Response -->

`200 OK`


```json

```

<!--END_DOCUSAURUS_CODE_TABS-->


```bash
curl -X PUT https://api.moltin.com/v2/gateways/authorize_net \
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
