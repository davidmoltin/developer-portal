---
id: get-all-account-members
title: Get All Account Members
sidebar_label: Get All Account Members
---

## Get All Account Members

```http
https://api.moltin.com/v2/account-members
```

### Parameters

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Query parameters

| Name | Required | Type | Description |
 | --- | --- | --- | --- |
| `filter` | Optional | `string` | Filter attributes. For more information, see the [Filtering account members](index.md#filtering) section. |

:::note
You can use pagination with this resource. For more information, see [pagination](../../../basics/pagination.md).
:::

### Request examples

#### Curl

```bash
curl -X GET https://api.moltin.com/v2/account-members \
     -H "Authorization: Bearer XXXX"
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
Moltin.AccountMembers.All().then(acc => {
  // Do something
})
```

### Response example

`200 OK`

```json
{
  "meta": {
    "page": {
      "limit": 100,
      "offset": 0,
      "current": 1,
      "total": 1
    },
    "results": {
      "total": 2
    }
  },
  "data": [
    {
      "id": "908f7849-60da-4e4a-a3b1-51d4cbe3b953",
      "type": "account_member",
      "name": "Ron Swanson",
      "email": "ron@swanson.com",
      "links": {
        "self": "https://api.moltin.com/v2/account-members/908f7849-60da-4e4a-a3b1-51d4cbe3b953"
      }
    },
    {
      "id": "0ff71321-f7ae-4400-abc2-d7919a78d429",
      "type": "account_member",
      "name": "John Smith",
      "email": "john@smith.com",
      "links": {
        "self": "https://api.moltin.com/v2/account-members/0ff71321-f7ae-4400-abc2-d7919a78d429"
      }
    }
  ],
  "links": {
    "current": "https://api.moltin.com/v2/account-members?page[offset]=0&page[limit]=100",
    "first": "https://api.moltin.com/v2/account-members?page[offset]=0&page[limit]=100",
    "last": "https://api.moltin.com/v2/account-members?page[offset]=0&page[limit]=100",
    "next": "null",
    "prev": "null"
  }
}
```
