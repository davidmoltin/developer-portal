---
id: get-an-authentication-realm
title: Get an Authentication Realm
sidebar_label: Get an Authentication Realm
---

## `GET` Get by ID

```http
https://api.moltin.com/v2/authentication-realms/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested authentication-realm. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "40086652-2779-45f0-8ea6-ae630dfd13cb",
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
    },
    "links": {
        "self": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/authentication-realms/:id \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
