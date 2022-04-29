---
id: get-an-oidc-profile
title: Get an OpenID Connect Profile
sidebar_label: Get an OpenID Connect Profile
---

## `GET` Get by ID

```http
https://api.moltin.com/v2/authentication-realms/:realmId/oidc-profiles/:profileId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realmId` | Required | `string` | The **ID** for the authentication-realm containing the requested OpenID Connect profile. |
| `profileId` | Required | `string` | The **ID** for the requested OpenID Connect profile. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "client_id": "openid-client",
        "discovery_url": "https://auth.ssoprovider.com/.well-known/openid-configuration",
        "id": "ed83913b-d6dc-4472-9328-bb486443de9c",
        "meta": {
            "issuer": "https://auth.ssoprovider.com",
            "created_at": "2020-11-04T21:59:58.611Z",
            "updated_at": "2020-11-04T21:59:58.611Z"
        },
        "name": "SSO Provider",
        "type": "oidc-profile"
    },
    "links": {
        "authorization-endpoint": "https://api.moltin.com/oidc-idp/login/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb?elasticpath_commerce_cloud_profile_id=ed83913b-d6dc-4472-9328-bb486443de9c",
        "callback-endpoint": "https://api.moltin.com/oidc-idp/callback/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c",
        "client-discovery-url": "https://api.moltin.com/oidc-idp/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/.well-known/openid-configuration",
        "self": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/authentication-realms/:realmId/oidc-profiles/:profileId \
     -H "Authorization: Bearer XXXX" \
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
const profileId = 'XXXX'
Moltin.OidcProfile.Get({
      realmId,
      profileId
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
