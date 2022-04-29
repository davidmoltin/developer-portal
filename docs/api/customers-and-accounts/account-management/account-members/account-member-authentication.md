---
id: account-member-authentication
title: Account Member Authentication
sidebar_label: Account Member Authentication
---

Elastic Path provides authentication tokens for an account and an account member.

## The Account Management Authentication Token Object

### Parameters

| Attribute | Type | Description|
| --- | --- | --- |
| `account_name` | `string` | The name of the account that this token grants access to. |
| `account_id` | `string` | The ID of the account that this token grants access to. |
| `token` | `string` | The JWT authentication token that you can [use in other endpoints](#using-a-token). |
| `type` | `string` | The type of the object returned. |
| `expires` | `timestamp` | The epoch time that this token expires at. The time is set to 24 hours after the token is generated. |

#### Sample response

```json
{
  "data":
    {
        "account_name": "acc-name-1",
        "account_id": "9e227208-b592-49c0-8c8f-043b66c634b0",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIxLTAzLTE2VDE5OjM2OjExLjA3MFoiLCJpYXQiOiIyMDIxLTAzLTE1VDE5OjM2OjExLjA3MFoiLCJzY29wZSI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMyIsInN1YiI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMiJ9.ytQ3UutTl_RJ8NiB1xN29Ta23p-FXsYOhcUM7MUQ4CM",
        "type": "account_management_authentication_token",
        "expires": "2021-03-16T19:36:11.070Z"
    }
}
```

## `POST` Generate an Account Management Authentication Token

```http
https://api.moltin.com/v2/account-members/tokens
```

### Using OpenID Connect

#### Parameters

##### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

##### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Specifies the type of the object. You must use `account_management_authentication_token`. |
| `authentication_mechanism` | Required | `string` | Specifies the authentication mechanism. For an OpenID Connect login, you must use `oidc`. |
| `oauth_authorization_code` | Required | `string` | Specifies the code returned from the OpenID Connect Provider authentication. |
| `oauth_redirect_uri`  | Required | `string` | Specifies the URL of the front-end that handles the callback of the token. |
| `oauth_code_verifier` | Required | `string` | Specifies the Proof Key for Code Exchange (PKCE) code verifier corresponding to the code challenge supplied to the authorization endpoint. For more information about code verifier and challenge, see the [Generating a Code Verifier and Challenge](../../../../developer/how-to/get-single-sign-on-customer-token.md#generate-proof-key-for-code-exchange-pkce-parameters) section. |


#### Request example - Curl

```bash
curl -X POST https://api.moltin.com/v2/account-members/tokens \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
       "data":{
         "type": "account_management_authentication_token",
         "authentication_mechanism": "oidc",
         "oauth_authorization_code":  "c2490f06-6d8e-4927-99aa-4bf02b419e96",
         "oauth_redirect_uri": "https://example-store.com/oauth2/callback",
         "oauth_code_verifier": "0E934PurR8ExVg6Pj7T4kQewxKzWSfSFG5d15FGfww8"
       }
    }'
```

#### Response example

`201 Created`

```json
{
    "meta": {
        "page": {
            "limit": 20,
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
            "account_name": "acc-name-1",
            "account_id": "9e227208-b592-49c0-8c8f-043b66c634b0",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIxLTAzLTE2VDE5OjM2OjExLjA3MFoiLCJpYXQiOiIyMDIxLTAzLTE1VDE5OjM2OjExLjA3MFoiLCJzY29wZSI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMyIsInN1YiI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMiJ9.ytQ3UutTl_RJ8NiB1xN29Ta23p-FXsYOhcUM7MUQ4CM",
            "type": "account_management_authentication_token",
            "expires": "2021-03-16T19:36:11.070Z"
        },
        {
            "account_name": "acc-name-2",
            "account_id": "87acbe78-921f-4a25-84db-09dc276754ba",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTU5MTg3NTksImlhdCI6MTYxNTkxODc0NCwic2NvcGUiOiI5N2FjYmU3OC05MjFmLTRhMjUtODRkYi0wOWRjMjc2NzU0YmEiLCJzdWIiOiI5N2FjYmU3OC05MjFmLTRhMjUtODRkYi0wOWRjMjc2NzU0YmEifQ.NphZBSWYxfl3-odXOxD0l6Zj7E9HxOG7qp34Sizm0WU",
            "type": "account_management_authentication_token",
            "expires": "2021-03-16T18:19:19.070Z"
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "first": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "last": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```

### Using username and password

#### Parameters

##### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

##### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of the object. You must use `account_management_authentication_token`. |
| `authentication_mechanism` | Required | `string` | The authentication mechanism. For logging in with a username and password, you must use `password`. |
| `password_profile_id` | Required | `string` | The password profile ID. For more information, see the [password profiles page](../../../single-sign-on/password-profiles/index.md) section. |
| `username` | Required | `string` | The username. |
| `password`  | Required | `string` | The password. |

#### Request example - Curl

```bash
curl -X POST https://api.moltin.com/v2/account-members/tokens \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
       "data":{
         "type": "account_management_authentication_token",
         "authentication_mechanism": "password",
         "password_profile_id": "c5687352-d102-46fd-b85e-256f10574019",
         "username":  "username",
         "password": "pa$$word",
       }
    }'
```

#### Response example

`201 Created`

```json
{
    "meta": {
        "page": {
            "limit": 20,
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
            "account_name": "acc-name-1",
            "account_id": "9e227208-b592-49c0-8c8f-043b66c634b0",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIxLTAzLTE2VDE5OjM2OjExLjA3MFoiLCJpYXQiOiIyMDIxLTAzLTE1VDE5OjM2OjExLjA3MFoiLCJzY29wZSI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMyIsInN1YiI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMiJ9.ytQ3UutTl_RJ8NiB1xN29Ta23p-FXsYOhcUM7MUQ4CM",
            "type": "account_management_authentication_token",
            "expires": "2021-03-16T19:36:11.070Z",
        },
        {
            "account_name": "acc-name-2",
            "account_id": "87acbe78-921f-4a25-84db-09dc276754ba",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTU5MTg3NTksImlhdCI6MTYxNTkxODc0NCwic2NvcGUiOiI5N2FjYmU3OC05MjFmLTRhMjUtODRkYi0wOWRjMjc2NzU0YmEiLCJzdWIiOiI5N2FjYmU3OC05MjFmLTRhMjUtODRkYi0wOWRjMjc2NzU0YmEifQ.NphZBSWYxfl3-odXOxD0l6Zj7E9HxOG7qp34Sizm0WU",
            "type": "account_management_authentication_token",
            "expires": "2021-03-16T18:19:19.070Z",
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "first": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "last": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```

### Switching accounts

#### Parameters

##### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |
| `EP-Account-Management-Authentication-Token` | Required | `string` | A previously issued account management authentication token. |

##### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Specifies the type of the object. You must use `account_management_authentication_token`. |
| `authentication_mechanism` | Required | `string` | Specifies the authentication mechanism. You must use `account_management_authentication_token`. |

#### Request example - curl

```bash
curl -X POST https://api.moltin.com/v2/account-members/tokens/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
        "data": {
            "type": "account_management_authentication_token",
            "authentication_mechanism": "account_management_authentication_token"
          }
    }'
```

#### Response example

`201 Created`

```json
{
    "meta": {
        "page": {
            "limit": 20,
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
            "account_name": "acc-name-1",
            "account_id": "9e227208-b592-49c0-8c8f-043b66c634b0",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIxLTAzLTE2VDE5OjM2OjExLjA3MFoiLCJpYXQiOiIyMDIxLTAzLTE1VDE5OjM2OjExLjA3MFoiLCJzY29wZSI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMyIsInN1YiI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMiJ9.ytQ3UutTl_RJ8NiB1xN29Ta23p-FXsYOhcUM7MUQ4CM",
            "type": "account_management_authentication_token",
            "expires": "2021-03-16T19:36:11.070Z"
        },
        {
            "account_name": "acc-name-2",
            "account_id": "87acbe78-921f-4a25-84db-09dc276754ba",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTU5MTg3NTksImlhdCI6MTYxNTkxODc0NCwic2NvcGUiOiI5N2FjYmU3OC05MjFmLTRhMjUtODRkYi0wOWRjMjc2NzU0YmEiLCJzdWIiOiI5N2FjYmU3OC05MjFmLTRhMjUtODRkYi0wOWRjMjc2NzU0YmEifQ.NphZBSWYxfl3-odXOxD0l6Zj7E9HxOG7qp34Sizm0WU",
            "type": "account_management_authentication_token",
            "expires": "2021-03-16T18:19:19.070Z"
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "first": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "last": "https://api.moltin.com/v2/account-members/tokens?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```

## Using a token

 Use the `token` value to implicitly read, create, or update the resources that are linked to the selected [account](../accounts/index.md) and [account members](index.md). For each element in the list returned by the account member authentication API, a `token` value is returned.  You can use these tokens as the value to the `EP-Account-Management-Authentication-Token` header with the following endpoint:

- [Checkout a cart](../../../carts-and-orders/checkout.md)
