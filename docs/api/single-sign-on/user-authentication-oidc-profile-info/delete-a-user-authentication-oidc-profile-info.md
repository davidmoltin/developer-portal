---
id: delete-a-user-authentication-oidc-profile-info
title: Delete a User Authentication OpenID Connect Profile Info
sidebar_label: Delete a User Authentication OpenID Connect Profile Info
---

## `DELETE` Delete by ID

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

`204 No Content`


```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:id2/user-authentication-oidc-profile-info/:id3 \
     -H "Authorization: Bearer XXXX"
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
Moltin.UserAuthenticationOidcProfileInfo.Delete({
      realmId,
      userAuthenticationInfoId,
      userAuthenticationOidcProfileId
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
