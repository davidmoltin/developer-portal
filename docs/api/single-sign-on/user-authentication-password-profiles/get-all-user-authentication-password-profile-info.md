---
id: get-all-user-authentication-password-profile-info
title: Get all User Authentication Password Profile Info
sidebar_label: Get all User Authentication Password Profile Info
---


## `GET` Get a list of User Authentication Password Profile Info

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the requested `user-authentication-password-profile-info` object. |
| `user-authentication-info-id` | Required | `string` | The ID for the `user-authentication-info` object containing the requested `user-authentication-password-profile-info` object. |

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
            "limit": 100,
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
                "self": "http://localhost:8080/v2/authentication-realms/0358b12d-56a6-4b79-9b42-ad93f538f263/user-authentication-info/c3ce7aed-594c-4e68-b7c1-fbe020895e45/user-authentication-password-profile-info/b9170288-7896-486d-b5ea-d00fcadee1a4"
            },
            "id": "b9170288-7896-486d-b5ea-d00fcadee1a4",
            "username": "john.doe1@gmail.com",
            "meta": {
                "created_at": "2021-07-19T15:42:10.073Z",
                "updated_at": "2021-07-19T15:42:10.073Z"
            },
            "type": "user_authentication_password_profile_info",
            "password_profile_id": "3293ce2a-819a-45b1-be0c-cf54a3b23526"
        },
        {
            "links": {
                "self": "http://localhost:8080/v2/authentication-realms/0358b12d-56a6-4b79-9b42-ad93f538f263/user-authentication-info/c3ce7aed-594c-4e68-b7c1-fbe020895e45/user-authentication-password-profile-info/95c190fb-ff06-4cae-a25e-988bce3bb426"
            },
            "id": "95c190fb-ff06-4cae-a25e-988bce3bb426",
            "username": "john.doe@gmail.com",
            "meta": {
                "created_at": "2021-07-19T15:42:02.024Z",
                "updated_at": "2021-07-19T15:42:02.024Z"
            },
            "type": "user_authentication_password_profile_info",
            "password_profile_id": "3293ce2a-819a-45b1-be0c-cf54a3b23526"
        }
    ],
    "links": {
        "next": null,
        "current": "http://localhost:8080/v2/authentication-realms/0358b12d-56a6-4b79-9b42-ad93f538f263/user-authentication-info/c3ce7aed-594c-4e68-b7c1-fbe020895e45/user-authentication-password-profile-info?page%5Blimit%5D=100&page%5Boffset%5D=0",
        "last": "http://localhost:8080/v2/authentication-realms/0358b12d-56a6-4b79-9b42-ad93f538f263/user-authentication-info/c3ce7aed-594c-4e68-b7c1-fbe020895e45/user-authentication-password-profile-info?page%5Blimit%5D=100&page%5Boffset%5D=0",
        "prev": null,
        "first": "http://localhost:8080/v2/authentication-realms/0358b12d-56a6-4b79-9b42-ad93f538f263/user-authentication-info/c3ce7aed-594c-4e68-b7c1-fbe020895e45/user-authentication-password-profile-info?page%5Blimit%5D=100&page%5Boffset%5D=0"
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
curl -X GET https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/:user-authentication-info-id/user-authentication-password-profile-info/ \
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
Moltin.UserAuthenticationPasswordProfile.All(realmId, userAuthenticationInfoId, null)
```

<!--END_DOCUSAURUS_CODE_TABS-->
