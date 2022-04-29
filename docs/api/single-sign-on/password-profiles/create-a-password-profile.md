---
id: create-a-password-profile
title: Create a Password Profile
sidebar_label: Create a Password Profile
---

## `POST` Create a Password Profile

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/password-profiles
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Represents the type of object being returned. You must use `password_profile`. |
| `username_format` | Required | `string` | Represents the password profile format. The options are, `any` or `email`. With the `any` setting, you can provide usernames in any format including email address. With the `email` setting, you can only provide email address as the username. The default  setting is `any`. |
| `name` | Required | `string` | Specifies the name of the password profile. |

<!-- Response -->

`201 Created`


```json
{
    "data": {
        "meta": {
            "created_at": "2021-06-03T21:12:14.896Z",
            "updated_at": "2021-06-03T21:12:14.896Z"
        },
        "type": "password_profile",
        "id": "0a6f5f8a-3a61-4ad1-9ea1-60fd1aa71243",
        "username_format": "email",
        "name": "password profile"
    },
    "links": {
        "self": "http://api.moltin.com/v2/authentication-realms/c624ab3d-44f0-49cc-bff7-446ff39a24f0/password-profiles/0a6f5f8a-3a61-4ad1-9ea1-60fd1aa71243"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/authentication-realms/:realm-id/password-profiles/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
        "type": "password_profile",
        "username_format": "email" ,
        "name" : "password profile"
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
Moltin.PasswordProfile.Create({
      realmId,
      body
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
