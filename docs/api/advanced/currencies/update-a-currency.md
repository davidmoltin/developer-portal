---
id: update-a-currency
title: Update a Currency
sidebar_label: Update a Currency
---

## `PUT` Update a Currency by ID

```http
https://api.moltin.com/v2/currencies/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested Currency. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type represents the object being returned. Always `currency`. |
| `code` | Optional | `string` | The currency code. Example: `YEN`. |
| `enabled` | Optional | `boolean` | Is this currency available for products? `true` or `false` |
| `default` | Optional | `boolean` | Is this the default currency? `true` or `false` |
| `decimal_places` | Optional | `integer` | How many decimal places the currency is formatted to. |
| `thousand_separator` | Optional | `string` | The thousand separator character. For example, `,`. |
| `decimal_point` | Optional | `string` | The decimal point character. For example, `.`. |
| `format` | Optional | `string` | Specify how the price currency is displayed. For example, `"¥{price}"`. |
| `exchange_rate` | Optional | `string` | The exchange rate from the default currency. |


<!-- Response -->

`200 OK`


```json
{
  "data": {
    "id": "190c3e9e-8006-4231-8c29-833fb4f6bff0",
    "type": "currency",
    "code": "YEN",
    "exchange_rate": 1.5,
    "format": "¥{price}",
    "decimal_point": ",",
    "thousand_separator": ".",
    "decimal_places": 2,
    "default": false,
    "enabled": true,
    "links": {
      "self":
        "https://api.moltin.com/currencies/190c3e9e-8006-4231-8c29-833fb4f6bff0"
    },
    "meta": {
      "timestamps": {
        "created_at": "2018-05-02T09:01:56.303640168Z",
        "updated_at": "2018-05-02T09:01:56.303641068Z"
      }
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/currencies/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "currency",
         "exchange_rate": 1.5
       }
     }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
const currency = {
  exchange_rate: 1.5
}
Moltin.Currencies.Update(id, currency).then(currency => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
