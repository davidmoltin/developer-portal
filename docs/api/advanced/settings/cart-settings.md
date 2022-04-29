---
id: cart-settings
title: Cart Settings
sidebar_label: Cart Settings
---

You can modify the cart expiry settings to set it to any number of days up to 365. Any existing carts default to the expiry of 7 days.

## `GET` Cart Settings

```http
https://api.moltin.com/v2/settings/cart
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Grant type must be `client_credentials`. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->
```bash
curl -X GET https://api.moltin.com/v2/settings/cart \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`200 OK`


```json
{
    "data": {
        "type": "settings",
        "cart_expiry_days": 7
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Cart Settings

```http
https://api.moltin.com/v2/settings/cart
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Grant type must be `client_credentials`. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required| `string` | The type is `settings`.|
| `cart_expiry_days` | Required | `number` | The number of days in which the cart will expire. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/settings/cart \
     -H "Authorization: Bearer XXXX"
     -d $'{
        "data": {
           type: "settings",
           cart_expiry_days: 365
        }
      }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`200 OK`


```json
{
    "data": {
        "type": "settings",
        "cart_expiry_days": 365
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->


## Response Codes

You might encounter the following response codes, depending on the scenario:

- `400 Bad Request` - The maximum expiry is 365. Must be less than or equal to 365.
