---
id: delete-an-oidc-profile
title: Delete an OpenID Connect Profile
sidebar_label: Delete an OpenID Connect Profile
---

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/authentication-realms/:realmId/oidc-profiles/:profileId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realmId` | Required | `string` | The **ID** for the authentication-realm containing the requested OpenID Connect profile. |
| `profileId` | Required | `string` | The **ID** for the requested OpenID Connect profile to delete. |

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
curl -X DELETE https://api.moltin.com/v2/authentication-realms/:realmId/oidc-profiles/:profileId \
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
Moltin.OidcProfile.Delete({
      realmId,
      profileId
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
