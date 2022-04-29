---
id: get-customer-authentication-settings
title: Get Customer Authentication Settings
sidebar_label: Get Customer Authentication Settings
---

## `GET` Get Customer Authentication Settings

```http
https://api.moltin.com/v2/settings/customer-authentication
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
        "id": "88888888-4444-4333-8333-111111111111",
        "meta": {
            "client_id": "customers"
        },
        "relationships": {
            "authentication-realm": {
                "data": {
                    "id": "40086652-2779-45f0-8ea6-ae630dfd13cb",
                    "links": {
                        "self": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb"
                    },
                    "duplicate_email_policy": "allowed",
                    "type": "authentication-realm"
                }
            }
        },
        "type": "customer-authentication-settings"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/settings/customer-authentication \
     -H "Authorization: Bearer XXXX" \
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.AuthenticationSettings.Get().then(authenticationSettings => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
