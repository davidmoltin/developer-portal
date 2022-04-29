---
id: update-a-user-authentication-password-profile
title: Update a User Authentication Password Profile
sidebar_label: Update a User Authentication Password Profile
---

## `PUT` Update a User Authentication Password Profile Info

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/:user-authentication-password-profile-info
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-password-profile-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the `user-authentication-info` linked to the requested `user-authentication-info-password-profile-info` object. |
| `user-authentication-password-profile-info-id` | Required | `string` | The **ID** for the `user-authentication-info-password-profile-info` object. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name                  | Required | Type | Description |
|-----------------------| --- | --- | --- |
| `type`                | Required | `string` | The type of the object. Set this value to `user-authentication-password-profile-info` object. |
| `password_profile_id` | Required | `string` | The ID of the password profile. |
| `username`            | Optional | `string` | The username used to authenticate. |
| `password`            | Optional | `string` | The password used to authenticate. |

<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "2b2dd626-9960-40c6-a9f9-d4af96eed3fb",
        "username": "john.doe",
        "meta": {
            "created_at": "2021-06-07T15:58:08.198Z",
            "updated_at": "2021-06-07T15:58:08.198Z"
        },
        "type": "user_authentication_password_profile_info",
        "password_profile_id": "a760a1f3-5680-420e-bcc4-a924de8b1a11"
    },
    "links": {
        "self": "https://api.moltin.com/authentication-realms/12b33a5d-b536-47a8-987d-9cdba15f1647/user-authentication-info/a9dc5358-c3ee-44f9-a36c-3057213e750d/user-authentication-password-profile-info/2b2dd626-9960-40c6-a9f9-d4af96eed3fb"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/:user-authentication-password-profile-info \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
        "type": "user_authentication_password_profile_info",
        "password_profile_id": "486fa6f1-d85a-44a0-abdf-ff0076fffd6c",
        "username": "john.doe",
        "password" : "password"
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
const userAuthenticationInfoId = 'XXXX'
const userAuthenticationPasswordProfileId = 'XXXX'
Moltin.UserAuthenticationPasswordProfile.Update({
        realmId,
        userAuthenticationId,
        userAuthenticationPasswordProfileId,
        body
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
