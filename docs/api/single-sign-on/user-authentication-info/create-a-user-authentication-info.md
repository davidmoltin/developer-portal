---
id: create-a-user-authentication-info
title: Create a User Authentication Info
sidebar_label: Create a User Authentication Info
---

## `POST` Create a User Authentication Info

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-info` object. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `name` | `string` | The name used for the `user-authentication-info`. |
| `email` | `string` | The email used for the `user-authentication-info`. |
| `type` | `string` | The type of the object to create. |


<!-- Response -->

`201 Created`


```json
{
  "data": {
    "id": "787af9a4-83e1-4216-bc60-df076daef0c5",
    "name": "John Doe",
    "email": "john.doe@banks.com",
    "meta": {
      "created_at": "2021-06-02T18:44:07.617Z",
      "updated_at": "2021-06-02T18:44:07.617Z",
      "creation_status": "COMPLETE"
    },
    "type": "user_authentication_info"
  },
  "links": {
    "self": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/787af9a4-83e1-4216-bc60-df076daef0c5"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "type": "user_authentication_info",
        "name": "John Doe",
        "email": "john.doe@banks.com"
     }
   }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
Moltin.UserAuthenticationInfo.Create({
      realmId,
      body
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
