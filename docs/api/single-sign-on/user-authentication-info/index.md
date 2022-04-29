---
id: index
title: User Authentication Info
sidebar_label: User Authentication Info
---

`user-authentication-info` is the information object used for user authentication. This object contains information, such as the name and email address, and has sub-resources for each mechanism that the user can use to log in.
For example, if an [OpenID Connect Profile](../oidc-profiles/index.md) profile is configured in the [Authentication Realm](../authentication-realms/index.md) and the user is configured to authenticate through that profile, then the `user-authentication-info` object is associated with a [User Authentication OpenID Connect Profile Info](../user-authentication-oidc-profile-info/index.md) subresource.

## The User Authentication Info object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the `user-authentication-info` object. |
| `name` | `string` | The name used for the `user-authentication-info` object. |
| `email` | `string` | The email address used for the `user-authentication-info` object. |
| `meta` | [`object`](#the-meta-object) | Additional information for this `user-authentication-info` object. For more information, see **The meta object** section. |
| `type` | `string` | The type of the object returned. |

<!--Sample Response-->

```json
{
  "data": {
    "id": "787af9a4-83e1-4216-bc60-df076daef0c5",
    "name": "John Doe",
    "email": "john.doe@banks.com",
    "meta": {
      "created_at": "2021-06-02T18:44:07.617Z",
      "updated_at": "2021-06-02T18:44:07.617Z",
      "creation_status": "COMPLETE"
    },
    "type": "user_authentication_info"
  },
  "links": {
    "self": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/787af9a4-83e1-4216-bc60-df076daef0c5"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## The `meta` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.created_at` | `string` | The creation date of this `user-authentication-info` object. |
| `meta.updated_at` | `string` | The last updated date of this `user-authentication-info` object. |
| `meta.creation_status` | `string` | The status of the creation of this `user-authentication-info` object. The options are `IN_PROGRESS` or `COMPLETED`. |

## Filtering

The following operators and attributes are available for [filtering](../../basics/filtering.md) user authentication infos:

| Operator | Description |
| :--- | :--- |
| `eq` | Checks whether the values of two operands are equal. If the values are equal, the condition is true. |
| `like` | Checks if the operand contains the specified string. You can use wildcard characters in operand. |

| Attribute | Type | Operator | Example |
| :--- | :--- | :--- | :--- |
| `name`    | `string` | `eq` / `like` | `like(name,Brad*)` |
| `email`   | `string` | `eq` / `like` | `like(email,*@elasticpath.com)` |
