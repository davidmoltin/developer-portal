---
id: create-a-currency
title: Create a Currency
sidebar_label: Create a Currency
---

## `POST` Create a Currency

```http
https://api.moltin.com/v2/currencies
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
| `enabled` | Required | `boolean` | Is this currency available for products? `true` or `false` |
| `default` | Required | `boolean` | Is this the default currency? `true` or `false` |
| `decimal_places` | Required | `string` | How many decimal places the currency is formatted to. |
| `thousand_separator` | Required | `string` | The thousand separator character. Example: `,` |
| `decimal_point` | Required | `string` | The decimal point character. Example: `.` |
| `format` | Required | `string` | Specify how the price currency is displayed. Example: `"¥{price}"`. |
| `exchange_rate` | Required | `integer` | The exchange rate from the default currency. |
| `code` | Required | `string` | The currency code. Example: `YEN`. |
| `type` | Required | `string` | The type represents the object being returned. |


<!-- Response -->

`201 Created`


```json
{
  "data": {
    "id": "190c3e9e-8006-4231-8c29-833fb4f6bff0",
    "type": "currency",
    "code": "YEN",
    "exchange_rate": 1,
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

`400: Bad Request`

You’ll get an error if you try to create a currency with an existing `code`

```json
{
  "errors": [
    {
      "status": 400,
      "title": "Currency already exists",
      "detail": "The specified currency code already exists for this store"
    }
  ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/currencies \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "currency",
         "code": "YEN",
         "exchange_rate": 1,
         "format": "¥{price}",
         "decimal_point": ".",
         "thousand_separator": ",",
         "decimal_places": 2,
         "default": false,
         "enabled": true
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
const currency = {
  code: 'YEN',
  exchange_rate: 1,
  format: '¥{price}',
  decimal_point: '.',
  thousand_separator: ',',
  decimal_places: 2,
  default: false,
  enabled: true
}
Moltin.Currencies.Create(id, currency).then(currency => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
