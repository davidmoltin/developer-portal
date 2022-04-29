---
id: delete-an-account-membership
title: Delete an Account Membership
sidebar_label: Delete an Account Membership
---

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/accounts/:accountId/account-memberships/:membershipId
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `accountId` | Required | `string` | The ID of the account that the membership is associated with. |
| `membershipId` | Required | `string` | The ID of the account membership that you want to delete. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl -X DELETE https://api.moltin.com/v2/accounts/:accountId/account-memberships/:membershipId \
     -H "Authorization: Bearer XXXX" \
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const accountId = '00000000-0000-1000-8000-000f00000300';
const accountMembershipId = '00000000-0000-1000-8000-000f00000301';
Moltin.AccountMemberships.Delete(accountId, accountMembershipId).then(acc => {
  // Do something
})
```

### Response example

`204 No Content`

```json

```
