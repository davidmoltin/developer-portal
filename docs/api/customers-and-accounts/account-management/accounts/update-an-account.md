---
id: update-an-account
title: Update an Account
sidebar_label: Update an Account
---

## `PUT` Update an Account

```http
https://api.moltin.com/v2/accounts/:id
```

### Parameters

#### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the requested account. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  |

#### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Specifies the type of object. You must use `account`. |
| `name` | Optional | `string` | Specifies the name of the account. |
| `legal_name` | Optional | `string` | Specifies the legal name of the account. |
| `registration_id` | Optional | `string` | Specifies the registration id of the account. |


### Request examples

#### Curl

```bash
curl -X PUT https://api.moltin.com/v2/accounts/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "type": "account",
         "name": "acc-name",
         "legal_name": "acc-legal-name",
         "registration_id": "00000000-0000-1000-8000-000f00000300"
      }
    }'
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const accountId = "00000000-0000-0000-0000-000000000000"
const account = {
    type: "account",
    name: "acc-name",
    legal_name: "acc-legal-name",
    registration_id: "00000000-0000-1000-8000-000f00000300",
    parent_id: "96b1f750-55d3-4768-a3f8-adffba694a2c"
}
Moltin.Accounts.Update(accountId, account).then(acc => {
  // Do something
})
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "deb6b25f-8451-4211-9a22-95610333df23",
        "type": "account",
        "name": "acc-name",
        "legal_name": "acc-legal-name",
        "registration_id": "00000000-0000-1000-8000-000f00000300",
        "relationships": {
            "parent": {
                "data": {
                    "id": "96b1f750-55d3-4768-a3f8-adffba694a2c",
                    "type": "account"
                }
            },
            "ancestors": [
                {
                    "data": {
                        "id": "96b1f750-55d3-4768-a3f8-adffba694a2c",
                        "type": "account"
                    }
                }
            ]
        },
        "meta": {
            "timestamps": {
                "created_at": "2021-02-23T09:40:33.882Z",
                "updated_at": "2021-02-23T09:40:33.882Z"
            }
        }
      },
  "links": {
    "self": "https://api.moltin.com/v2/accounts/deb6b25f-8451-4211-9a22-95610333df23"
    }
}
```
