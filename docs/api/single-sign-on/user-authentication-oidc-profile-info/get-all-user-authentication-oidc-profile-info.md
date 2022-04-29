---
id: get-all-user-authentication-oidc-profile-info
title: Get all User Authentication OpenID Connect Profile Info
sidebar_label: Get all User Authentication OpenID Connect Profile Info
---


## `GET` Get a list of User Authentication Oidc Profile Info

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-oidc-profile-info
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-oidc-profile-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the `user-authentication-info` object containing the requested `user-authentication-oidc-profile-info` object. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md).
:::

<!-- Response -->

`200 OK`


```json{
    "meta": {
        "page": {
            "limit": 10,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 2
        }
    },
    "data": [
        {
            "links": {
                "self": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53/user-authentication-oidc-profile-info/dc764c11-2a4b-4ab3-be71-45b06d6fec7b"
            },
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
        {
            "links": {
                "self": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53/user-authentication-oidc-profile-info/0cb55e9d-b300-43cf-8cf8-03ff43175183"
            },
            "id": "0cb55e9d-b300-43cf-8cf8-03ff43175183",
            "subject": "testsubject1",
            "issuer": "https://sso.provider0.com/auth/realms/Sample/",
            "meta": {
                "created_at": "2021-06-07T18:25:02.696Z",
                "updated_at": "2021-06-07T18:25:02.696Z"
            },
            "type": "user_authentication_oidc_profile_info",
            "oidc_profile_id": "07e5c3dc-bd56-41e2-8f98-e472c9e723c5"
        }
    ],
    "links": {
        "next": null,
        "current": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53/user-authentication-oidc-profile-info?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "last": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53/user-authentication-oidc-profile-info?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "prev": null,
        "first": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53/user-authentication-oidc-profile-info?page%5Blimit%5D=10&page%5Boffset%5D=0"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->


:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md) section.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-oidc-profile-info/ \
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
Moltin.UserAuthenticationOidcProfileInfo.All(realmId, userAuthenticationInfoId, null)
```

<!--END_DOCUSAURUS_CODE_TABS-->
