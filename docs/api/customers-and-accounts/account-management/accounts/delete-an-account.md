---
id: delete-an-account
title: Delete an Account
sidebar_label: Delete an Account
---

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/accounts/:id
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the account that you want to delete. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl -X DELETE https://api.moltin.com/v2/accounts/:id \
     -H "Authorization: Bearer XXXX"
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const accountId = "00000000-0000-0000-0000-000000000000"
Moltin.Accounts.Delete(accountId).then(acc => {
  // Do something
})
```

### Response example

`204 No Content`

```json

```
