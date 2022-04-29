---
id: get-all-accounts
title: Get All Accounts
sidebar_label: Get All Accounts
---

## `GET` Get a list of Accounts

```http
https://api.moltin.com/v2/accounts/
```

### Parameters

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Query parameters

| Name | Required | Type | Description |
 | --- | --- | --- | --- |
| `filter` | Optional | `string` | Specifies the filter attributes. For more information, see the [Filtering accounts](index.md#filtering) section. |

:::note
You can use pagination with this resource. For more information, see [pagination](../../../basics/pagination.md).
:::

### Request examples

#### Curl

```bash
curl -X GET https://api.moltin.com/v2/accounts/ \
     -H "Authorization: Bearer XXXX"
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
Moltin.Accounts.All().then(acc => {
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
      "id": "813123ac-5ec4-495e-9b64-d1cf2acf95ca",
      "type": "account",
      "name": "acc-name",
      "legal_name": "acc-legal-name",
      "company_address": "company address",
      "registration_id": "00000000-0000-1000-8000-000f00000300",
      "meta": {
        "timestamps": {
          "created_at": "2021-03-15T16:16:24.883Z",
          "updated_at": "2021-03-15T16:16:24.883Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/accounts/813123ac-5ec4-495e-9b64-d1cf2acf95ca"
      }
    },
    {
      "id": "7e927fea-6df2-40b3-b1ee-0844aac2a698",
      "type": "account",
      "name": "sub-acc-name",
      "legal_name": "sub-acc-legal-name",
      "company_address": "company address",
      "registration_id": "00000000-0000-1000-8000-000f00000500",
      "relationships": {
        "parent": {
          "data": {
            "id": "813123ac-5ec4-495e-9b64-d1cf2acf95ca",
            "type": "account"
          }
        },
        "ancestors": [
          {
            "data": {
              "id": "813123ac-5ec4-495e-9b64-d1cf2acf95ca",
              "type": "account"
            }
          }
        ]
      },
      "meta": {
        "timestamps": {
          "created_at": "2021-03-15T16:18:10.883Z",
          "updated_at": "2021-03-15T16:18:10.883Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/accounts/7e927fea-6df2-40b3-b1ee-0844aac2a698"
      }
    }
  ],
  "links": {
    "current": "https://api.moltin.com/v2/accounts?page[offset]=0&page[limit]=100",
    "first": "https://api.moltin.com/v2/accounts?page[offset]=0&page[limit]=100",
    "last": "https://api.moltin.com/v2/accounts?page[offset]=0&page[limit]=100",
    "next": "null",
    "prev": "null"
  }
}
```
