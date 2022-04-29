---
id: get-a-currency
title: Get a Currency
sidebar_label: Get a Currency
---

## `GET` Get a Currency by ID

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


<!-- Response -->

`200 OK`


```json
{
  "data": {
    "id": "451b94f8-0536-4580-91e1-68bad2f05925",
    "type": "currency",
    "code": "GBP",
    "exchange_rate": 1,
    "format": "£{price}",
    "decimal_point": ".",
    "thousand_separator": ",",
    "decimal_places": 0,
    "default": false,
    "enabled": true,
    "links": {
      "self":
        "https://api.moltin.com/currencies/451b94f8-0536-4580-91e1-68bad2f05925"
    },
    "meta": {
      "timestamps": {
        "created_at": "2017-09-27T08:48:01.821Z",
        "updated_at": "2018-04-24T19:19:40.941Z"
      }
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/currencies/:id \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
Moltin.Currencies.Get(id).then(currency => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
