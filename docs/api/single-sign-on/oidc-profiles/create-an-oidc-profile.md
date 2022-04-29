---
id: create-an-oidc-profile
title: Create an OpenID Connect Profile
sidebar_label: Create an OpenID Connect Profile
---

## `POST` Create an OpenID Connect Profile

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/oidc-profiles
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
| `type` | Required | `string` | Represents the type of object being returned. |
| `name` | Required | `string` | The name of the OpenID Connect profile. |
| `discovery_url` | Required | `string` | The url for the discovery document for the OpenID Provider. |
| `client_id` | Required | `string` | The client ID for the OpenID Provider. |
| `client_secret` | Required | `string` | The client secret for the OpenID Provider. |


<!-- Response -->

`201 Created`


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
curl -X POST https://api.moltin.com/v2/authentication-realms/:realm-id/oidc-profiles/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "type": "oidc-profile",
        "name": "SSO Provider",
        "discovery_url": "https://auth.ssoprovider.com/.well-known/openid-configuration",
        "client_id": "openid-client",
        "client_secret": "CL13NT-S3CR3T"
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
const profileId = 'XXXX'
Moltin.OidcProfile.Create({
      realmId,
      body
    }
  )
```

<!--END_DOCUSAURUS_CODE_TABS-->
