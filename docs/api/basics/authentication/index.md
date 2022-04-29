---
id: index
title: Authentication
sidebar_label: Authentication
---

All requests to the API need to be accompanied by an authorization header with an authentication token:

```json
Authorization: Bearer 212LJ3k0i2382364HIUEjfeJB98yvH
```

Authentication token gives permissions for the client to access their data, and is used to authenticate a request to the API endpoint.

:::note
Read our [Quick Start guide](../../../developer/get-started/your-first-api-request.md) on how to make your first API request.
:::

Authentication tokens are generated via the `authentication` endpoint and expire within 1 hour. They need to be then regenerated. If you’re using our [JavaScript SDK](../../../developer/get-started/sdk.md), this is automatically handled for you.

There are two main token types available for use within your store `client_credentials` and `implicit`. The [implicit token](implicit-token.md) is the more limited of the two, restricting access to mostly read-only, whereas [client credential token](client-credential-token.md) has full read and write access.

* For more details on token formatting, see: [Content Type](../content-type.md).

:::warning
Do not use or disclose your `client_secret` in public.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `expires` | `timestamp` | The epoch time that this token expires at. |
| `identifier` | `string` | The type of token requested. This can be a `client_credentials` or `implicit`. |
| `expires_in` | `integer` | The duration in seconds after which the token expires. |
| `access_token` | `string` | The access token you use for subsequent authenticated requests to the API. |
| `token_type` | `string` | Right now this is only `Bearer`. |

<!--Sample Response-->

```json
{
  "expires": 1500638876,
  "identifier": "client_credentials",
  "expires_in": 3600,
  "access_token": "xa3521ca621113e44eeed9232fa3e54571cb08bc",
  "token_type": "Bearer"
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

## Client credentials vs. implicit use case scenarios

Typically, you’d use the implicit authentication method for client-side browser based applications (i.e. frontend), and client credentials for all administrative tasks (`CRUD`) you’d need to perform at the backend.

## Customer authentication

You can also generate [customer tokens](../../customers-and-accounts/customers/customer-tokens.md#post-generate-a-token) to authenticate the customers with single sign-on, or email address and password. You must use customer token with the implicit token to access orders or customer APIs. Using the tokens, you can create and filter orders and addresses.
