---
id: get-all-currencies
title: Get all Currencies
sidebar_label: Get all Currencies
---

## `GET` Get all Currencies

```http
https://api.moltin.com/v2/currencies
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
  "data": [
    {
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
    },
    {
      "id": "cd9f04a9-2338-469b-a1f2-096ac5973a90",
      "type": "currency",
      "code": "USD",
      "exchange_rate": 1,
      "format": "${price}",
      "decimal_point": ".",
      "thousand_separator": ",",
      "decimal_places": 2,
      "default": true,
      "enabled": true,
      "links": {
        "self":
          "https://api.moltin.com/currencies/cd9f04a9-2338-469b-a1f2-096ac5973a90"
      },
      "meta": {
        "timestamps": {
          "created_at": "2017-06-12T13:36:23.541Z",
          "updated_at": "2018-05-01T14:32:53.956Z"
        }
      }
    }
  ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/currencies \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Currencies.All().then(currencies => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
