---
id: implicit-token
title: Implicit token
sidebar_label: Implicit
---

An `implicit` token is typically used for situations where you are requesting data on the client side and you are exposing your public key. When authenticated implicitly, you can only fetch (`GET`) data with live status (products, categories, brands, etc).

The `implicit` token is most appropriate for use inside client-side applications, such as JavaScript.

:::warning
An `implicit` token can be thought of as a **Read only** token.
:::

## `POST` Create an implicit token

```http
https://api.moltin.com/oauth/access_token
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Form Data Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | `string` | Your **client_id** |
| `grant_type` | Required | `string` | The grant type, in this case it must be **implicit** |


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
     -d "grant_type=implicit"

```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})

```

<!--END_DOCUSAURUS_CODE_TABS-->
