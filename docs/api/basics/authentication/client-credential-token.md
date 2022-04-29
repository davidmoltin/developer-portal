---
id: client-credential-token
title: Client credential token
sidebar_label: Client credential
---

A `client_credentials` token is used when the credentials are not publicly exposed, usually a server-side language such as PHP or Node.js. This type of authentication enables `CRUD` access to all resources.

To see the access granted by a `client_credentials` token, refer to [Permissions](./permissions.md).

## `POST` Create a client credential token

```http
https://api.moltin.com/oauth/access_token
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Form Data Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `grant_type` | Required | `string` | The grant type, in this case it must be **client_credentials** |
| `client_secret` | Required | `string` | Your **client_secret** |
| `client_id` | Required | `string` | Your **client_id** |


<!-- Response -->

Example response code: `200 OK`

Example response body:


```json
{
    "expires": 1524486008,
    "identifier": "client_credentials",
    "expires_in": 3600,
    "access_token": "xa3521ca621113e44eeed9232fa3e54571cb08bc",
    "token_type": "Bearer"
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST "https://api.moltin.com/oauth/access_token" \
     -d "client_id=XXXX" \
     -d "client_secret=XXXX" \
     -d "grant_type=client_credentials"

```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})

```

<!--END_DOCUSAURUS_CODE_TABS-->
