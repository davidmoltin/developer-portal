---
id: index
title: Account Authentication Settings
sidebar_label: Account Authentication Settings
---

You can use the Account Authentication Settings endpoint to retrieve settings controlling account authentication.

## The Account Authentication Settings object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for these account authentication settings. |
| `meta` | [`object`](#the-meta-object) | Additional information for these account authentication settings. Also see: **The meta object** below. |
| `relationships` | [`object`](#the-relationships-object) | Related resources. Also see: **The relationships object** below. |
| `type` | `string` | The type represents the object being returned. |

<!--Sample Response-->

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

## The `meta` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.client_id` | `string` | The client id to be used in Single Sign On authentication flows for accounts.

## The `relationships` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `relationships.authentication_realm` | `object` | Relationship information regarding the authentication realm entity used for authentication for this store. |
| `relationships.authentication_realm.data` | `object` | Information regarding the authentication realm entity. |
| `relationships.authentication_realm.data.id` | `string` | The id of the authentication realm entity. |
| `relationships.authentication_realm.data.type` | `string` | The type of the authentication realm entity. |
