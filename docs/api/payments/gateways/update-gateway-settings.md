---
id: update-gateway-settings
title: Update Gateway Settings
sidebar_label: Update Gateway Settings
---

## `PUT` Update gateway

```http
https://api.moltin.com/v2/gateways/:slug
```

This endpoint allows you update your settings to enable or disable the gateways.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `slug` | Required | `string` | The slug of the gateway to be updated. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Required | `boolean` | Change this to enable or disable the payment gateway. |


<!-- Response -->

`200 OK`

Cake successfully retrieved.

```json
{
    "data": {
        "enabled": true,
        "name": "Manual",
        "slug": "manual",
        "type": "gateway"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
