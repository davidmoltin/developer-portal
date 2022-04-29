---
id: get-all-authentication-realms
title: Get all Authentication Realms
sidebar_label: Get all Authentication Realms
---


## `GET` Get a list of Authentication Realms

```http
https://api.moltin.com/v2/authentication-realms
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

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
            "id": "3bed9216-c1e9-455d-89bd-16da1b7d9749",
            "links": {
                "self": "https://api.moltin.com/v2/authentication-realms/3bed9216-c1e9-455d-89bd-16da1b7d9749"
            },
            "meta": {
                "created_at": "2020-11-04T21:30:11.426Z",
                "updated_at": "2020-11-04T21:30:11.426Z"
            },
            "name": "Test Authentication Realm 2",
            "redirect_uris": [
                "https://example.com"
            ],
            "relationships": {
                "origin": {
                    "data": {
                        "id": "88888888-4444-4333-8333-111111111111",
                        "type": "customer-authentication-settings"
                    }
                }
            },
            "duplicate_email_policy": "allowed",
            "type": "authentication-realm"
        },
        {
            "id": "40086652-2779-45f0-8ea6-ae630dfd13cb",
            "links": {
                "self": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb"
            },
            "meta": {
                "created_at": "2020-11-04T21:28:50.796Z",
                "updated_at": "2020-11-04T21:28:50.796Z"
            },
            "name": "Test Authentication Realm",
            "redirect_uris": [
                "https://example.com"
            ],
            "relationships": {
                "origin": {
                    "data": {
                        "id": "88888888-4444-4333-8333-111111111111",
                        "type": "customer-authentication-settings"
                    }
                }
            },
            "duplicate_email_policy": "allowed",
            "type": "authentication-realm"
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/authentication-realms?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "first": "https://api.moltin.com/v2/authentication-realms?page%5Blimit%5D=10&page%5Boffset%5D=0",
        "last": "https://api.moltin.com/v2/authentication-realms?page%5Blimit%5D=10&page%5Boffset%5D=0",
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
curl -X GET https://api.moltin.com/v2/authentication-realms \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
