---
id: get-all-account-memberships
title: Get All Account Memberships
sidebar_label: Get All Account Memberships
---

## `GET` Get a list of Account Memberships

```http
https://api.moltin.com/v2/accounts/:accountId/account-memberships/
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `accountId` | Required | `string` | The ID of the account for which you want to list the memberships. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Query parameters

| Name | Required | Type | Description |
 | --- | --- | --- | --- |
| `filter` | Optional | `string` | Filter attributes. For more information, see the [Filtering account memberships](index.md#filtering) section. |

:::note
You can use pagination with this resource. For more information, see [pagination](../../../basics/pagination.md).
:::

### Request examples

#### Curl

```bash
curl -X GET https://api.moltin.com/v2/accounts/:accountId/account-memberships/ \
     -H "Authorization: Bearer XXXX"
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const accountId = '00000000-0000-1000-8000-000f00000300';
Moltin.AccountMemberships.All(accountId).then(acc => {
  // Do something
})
```

### Response example

`200 OK`

```json
{
  "meta": {
    "page": {
      "limit": 20,
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
      "id": "fe9de9cf-b2d9-4dc0-839d-3d5c1e0e5d62",
      "type": "account_membership",
      "meta": {
        "timestamps": {
          "created_at": "2021-03-24T15:14:05.883Z",
          "updated_at": "2021-03-24T15:14:05.883Z"
        }
      },
      "relationships": {
        "account_member": {
          "data": {
            "id": "10000000-0000-1000-8000-111111111111",
            "type": "account_member"
          }
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/accounts/2e08554b-3368-4fe5-b15a-fe50689bb98b/account-memberships/fe9de9cf-b2d9-4dc0-839d-3d5c1e0e5d62"
      }
    },
    {
      "id": "72023637-ec80-46d4-8ba2-e43b75ea02ac",
      "type": "account_membership",
      "meta": {
        "timestamps": {
          "created_at": "2021-03-24T15:14:54.883Z",
          "updated_at": "2021-03-24T15:14:54.883Z"
        }
      },
      "relationships": {
        "account_member": {
          "data": {
            "id": "20000000-0000-1000-8000-111111111111",
            "type": "account_member"
          }
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/accounts/2e08554b-3368-4fe5-b15a-fe50689bb98b/account-memberships/72023637-ec80-46d4-8ba2-e43b75ea02ac"
      }
    }
  ],
  "links": {
    "current": "https://api.moltin.com/v2/accounts/2e08554b-3368-4fe5-b15a-fe50689bb98b/account-memberships?page[offset]=0&page[limit]=20",
    "first": "https://api.moltin.com/v2/accounts/2e08554b-3368-4fe5-b15a-fe50689bb98b/account-memberships?page[offset]=0&page[limit]=20",
    "last": "https://api.moltin.com/v2/accounts/2e08554b-3368-4fe5-b15a-fe50689bb98b/account-memberships?page[offset]=0&page[limit]=20",
    "next": "null",
    "prev": "null"
  }
}
```
