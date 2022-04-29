---
id: delete-a-user-authentication-password-profile
title: Delete a User Authentication Password Profile
sidebar_label: Delete a User Authentication Password Profile
---

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/:user-authentication-password-profile-info
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-password-profile-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the `user-authentication-info` object linked to the requested `user-authentication-password-profile-info` object. |
| `user-authentication-password-profile-info-id` | Required | `string` | The ID for the `user-authentication-info-password-profile-info` object. |

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
curl -X DELETE https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/:user-authentication-password-profile-info \
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
const userAuthenticationPasswordProfileId = 'XXXX'
Moltin.UserAuthenticationPasswordProfile.Delete({
        realmId,
        userAuthenticationId,
        userAuthenticationPasswordProfileId
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
