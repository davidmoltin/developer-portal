---
id: index
title: Account Members
sidebar_label: Account Members
---

An `Account Member` resource is a user that you can add to accounts using [account memberships](../account-memberships/index.md).

Account members API is read only, and you cannot add users using this API. You must use the [`user_authentication_info`](../../../single-sign-on/user-authentication-info/index.md) object to create users in the [authentication realm](../../../single-sign-on/authentication-realms/index.md) of [account authentication settings](../../../advanced/settings/account-authentication-settings/index.md). For more information on adding account members, see the [adding accounts and account members](../../../../developer/how-to/add-account-and-member.md) section.

## The Account Object

### Parameters

| Attribute | Type | Description |
| --- |--- | --- |
| `id` | `string` | The unique identifier for the selected account member. |
| `type` | `string` | The type of the object that is returned. |
| `name` | `string` | The name of the account member. |
| `email` | `string` | The email address of the account member. |

### Sample response

```json
{
  "data": {
    "id": "0ff71321-f7ae-4400-abc2-d7919a78d429",
    "type": "account_member",
    "name": "John Smith",
    "email": "john@smith.com"
  },
  "links": {
    "self": "https://api.moltin.com/v2/account-members/0ff71321-f7ae-4400-abc2-d7919a78d429"
  }
}
```

## Filtering

The following operators and attributes are available for [filtering](../../../basics/filtering.md) account members.

| Operator | Description |
| :--- | :--- |
| `eq` | Checks whether the values of two operands are equal. If the values are equal, the condition is true. |
| `like` | Checks if the operand contains the specified string. You can use wildcard characters in operand. |


| Attribute | Type | Operator | Example |
| :--- | :--- | :--- | :--- |
| `email` | `string` | `eq` / `like` | `eq(email,ronswanson@example.com)` |
| `name` | `string` | `eq` / `like` | `like(name,*swan*)` |
