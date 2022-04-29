---
id: delete-a-password-profile
title: Delete a Password Profile
sidebar_label: Delete a Password Profile
---

Deleting a `password-profile` object removes all related `user-authentication-password-profile-info` objects of the `password-profile` object.

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/password-profiles/:profile-id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested password profile. |
| `profile-id` | Required | `string` | The ID for the requested password profile to delete. |

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
curl -X DELETE https://api.moltin.com/v2/authentication-realms/:realm-id/password-profiles/:profile-id \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
const profileId = 'XXXX'
Moltin.PasswordProfile.Delete({
      realmId,
      profileId
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
