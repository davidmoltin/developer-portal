---
id: get-a-user-authentication-oidc-profile-info
title: Get a User Authentication OpenID Connect Profile Info
sidebar_label: Get a User Authentication OpenID Connect Profile Info
---

## `GET` Get by ID

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-oidc-profile-info/:user-authentication-oidc-profile-info-id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-oidc-profile-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the `user-authentication-info` object containing the requested `user-authentication-oidc-profile-info` object. |
| `user-authentication-oidc-profile-info-id` | Required | `string` | The ID for the requested `user-authentication-oidc-profile-info` object. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
  "data": {
    "id": "dc764c11-2a4b-4ab3-be71-45b06d6fec7b",
    "subject": "testsubject2",
    "issuer": "https://sso.provider.com/auth/realms/Sample/",
    "meta": {
      "created_at": "2021-06-07T18:25:02.696Z",
      "updated_at": "2021-06-07T18:25:02.696Z"
    },
    "type": "user_authentication_oidc_profile_info",
    "oidc_profile_id": "7f213d23-0a87-41b7-ad24-c58957ac7b9b"
  },
  "links": {
    "self": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53/user-authentication-oidc-profile-info/dc764c11-2a4b-4ab3-be71-45b06d6fec7b"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-oidc-profile-info/:user-authentication-oidc-profile-info-id \
     -H "Authorization: Bearer XXXX" \
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
const userAuthenticationInfoId = 'XXXX'
const userAuthenticationOidcProfileId = 'XXXX'
Moltin.UserAuthenticationOidcProfileInfo.Get({
      realmId,
      userAuthenticationInfoId,
      userAuthenticationOidcProfileId
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
