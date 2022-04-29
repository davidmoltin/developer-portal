---
id: index
title: Customers
sidebar_label: Customers
---

Use the Customer API to manage customer details, addresses, and other information.

The Customer API allows you to generate JSON Web Tokens inside your client-side applications to authenticate requests to get all customer orders.

- [Customer tokens](customer-tokens.md)

You are able to use a [customer](customer-tokens.md) token with an [implicit](../../basics/authentication/implicit-token.md#post-create-an-implicit-token) Bearer token.  This is recommended for client-side interactions.  Or you can use a [client_credentials](../../basics/authentication/client-credential-token.md#post-create-a-client-credential-token) Bearer token.  This is recommended for back end interactions.

## The Customer object

### Parameters

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this customer. |
| `type` | `string` | The type represents the object being returned. |
| `name` | `string` | The `name` of the customer. |
| `email` | `string` | The `email` of the customer. |
| `password` | `boolean` | `true` if the customer has a password, `false` otherwise. |

### Sample Response

```json
{
    "data": {
        "type": "customer",
        "id": "f260b17a-390f-4b37-bf9d-f62c45a95865",
        "name": "Ron Swanson",
        "email": "ron@swanson.com",
        "password": true
    }
}
```

## Filtering

The following attributes are available for [filtering](../../basics/filtering.md) customers.

| Attribute | Type | **Operators** | **Example** |
| :--- | :--- | :--- | :--- |
| `email` | `string` | `eq` / `like` | `eq(email,ronswanson@example.com)` |
| `name` | `string` | `eq` / `like` | `like(name,*swan*)` |
