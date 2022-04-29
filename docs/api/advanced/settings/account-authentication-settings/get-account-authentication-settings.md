---
id: get-account-authentication-settings
title: Get Account Authentication Settings
sidebar_label: Get Account Authentication Settings
---

## `GET` Get Account Authentication Settings

```http
https://api.moltin.com/v2/settings/account-authentication
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "2c45e4ec-26e0-4043-86e4-c15b9cf985a2",
        "type": "account_authentication_settings",
        "relationships": {
            "authentication_realm": {
                "data": {
                    "id": "3418c54e-d768-42c1-a9db-d7afd2a18452",
                    "type": "authentication_realm",
                    "links": {
                        "self": "https://api.moltin.com/v2/authentication-realms/3418c54e-d768-42c1-a9db-d7afd2a18452"
                    }
                }
            }
        },
        "meta": {
            "client_id": "accounts"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/settings/account-authentication \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
