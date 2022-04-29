---
id: get-an-account-member
title: Get an Account Member
sidebar_label: Get an Account Member
---

## `GET` Get an Account Member

```http
https://api.moltin.com/v2/account-members/:id
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier of the account member that you want to retrieve. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl -X GET https://api.moltin.com/v2/account-members/:id \
     -H "Authorization: Bearer XXXX" \
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const accountMemberId = "00000000-0000-1000-8000-000f00000300"
Moltin.AccountMembers.Get(accountMemberId).then(acc => {
  // Do something
})
```

### Response example

`200 OK`

```json
{
  "data": {
    "id": "0ff71321-f7ae-4400-abc2-d7919a78d429",
    "type": "account_member",
    "name": "John Smith",
    "email": "john@smith.com"
  },
  "links": {
    "self": "https://api.moltin.com/v2/account-members/0ff71321-f7ae-4400-abc2-d7919a78d429"
  }
}
```
