---
id: index
title: Password Profiles
sidebar_label: Password Profiles
---

A `password_profile` resource represents a specific configuration that allows users to authenticate through username and password.

## The Password Profile object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->
| **Attribute** | **Type** | **Description** |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this password profile. |
| `meta` | [`object`](#the-meta-object) | Additional information for this password profile. For more information ,see **The meta object** section. |
| `username_format` | `string` | The `username_format` of the password profile. The options are, `any` or `email`. You can change the `username-format` setting. However, the changes apply only to the users created or updated after changing this setting. The new setting does not change the `username_format` for existing users.|
| `name` | `string` | The name of the password profile.
| `type` | `string` | The type of object returned. You must use `password_profile`. |

<!--Sample Response-->

```json
{
    "data": {
        "meta": {
            "created_at": "2021-06-03T20:21:04.579Z",
            "updated_at": "2021-06-03T20:21:04.579Z"
        },
        "type": "password_profile",
        "id": "cfec5b5b-abc8-4c49-8247-495b511607fc",
        "username_format": "email",
        "name": "password profile"
    },
    "links": {
        "self": "http://api.moltin.com/v2/authentication-realms/c624ab3d-44f0-49cc-bff7-446ff39a24f0/password-profiles/cfec5b5b-abc8-4c49-8247-495b511607fc"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## The `meta` object

| **Attribute** | **Type** | **Description** |
| :--- | :--- | :--- |
| `meta.created_at` | `string` | The creation date of this password profile. |
| `meta.updated_at` | `string` | The last updated date of this password profile. |
