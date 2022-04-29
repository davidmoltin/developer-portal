---
id: get-all-oidc-profiles
title: Get all OpenID Connect Profiles
sidebar_label: Get all OpenID Connect Profiles
---


## `GET` Get a list of OpenID Connect Profiles

```http
https://api.moltin.com/v2/authentication-realms/:realmId/oidc-profiles/
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realmId` | Required | `string` | The **ID** for the authentication-realm containing the OpenID Connect profiles. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md).
:::

<!-- Response -->

`200 OK`


```json
{
    "data": [
        {
            "client_id": "openid-client",
            "discovery_url": "https://auth.ssoprovider.com/.well-known/openid-configuration",
            "id": "ed83913b-d6dc-4472-9328-bb486443de9c",
            "links": {
                "authorization-endpoint": "https://api.moltin.com/oidc-idp/login/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb?elasticpath_commerce_cloud_profile_id=ed83913b-d6dc-4472-9328-bb486443de9c",
                "callback-endpoint": "https://api.moltin.com/oidc-idp/callback/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c",
                "client-discovery-url": "https://api.moltin.com/oidc-idp/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/.well-known/openid-configuration",
                "self": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c"
            },
            "meta": {
                "issuer": "https://auth.ssoprovider.com",
                "created_at": "2020-11-04T21:59:58.611Z",
                "updated_at": "2020-11-04T21:59:58.611Z"
            },
            "name": "SSO Provider",
            "type": "oidc-profile"
        },
        {
            "client_id": "openid-client",
            "discovery_url": "https://auth.ssoprovider2.com/.well-known/openid-configuration",
            "id": "4294950f-78e6-43a5-ac55-3630e267c3fb",
            "links": {
                "authorization-endpoint": "https://api.moltin.com/oidc-idp/login/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb?elasticpath_commerce_cloud_profile_id=4294950f-78e6-43a5-ac55-3630e267c3fb",
                "callback-endpoint": "https://api.moltin.com/oidc-idp/callback/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/4294950f-78e6-43a5-ac55-3630e267c3fb",
                "client-discovery-url": "https://api.moltin.com/oidc-idp/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/.well-known/openid-configuration",
                "self": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/4294950f-78e6-43a5-ac55-3630e267c3fb"
            },
            "meta": {
                "issuer": "https://auth.ssoprovider2.com",
                "created_at": "2020-11-04T22:12:12.155Z",
                "updated_at": "2020-11-04T22:12:12.155Z"
            },
            "name": "SSO Provider 2",
            "type": "oidc-profile"
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "first": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "last": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "next": null,
        "prev": null
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 10,
            "offset": 0,
            "total": 1
        },
        "results": {
            "total": 2
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->


:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md).
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/authentication-realms/:realmId/oidc-profiles/ \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
Moltin.OidcProfile.All(realmId, null)
```

<!--END_DOCUSAURUS_CODE_TABS-->
