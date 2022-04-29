---
id: index
title: Addresses
sidebar_label: Addresses
---

The Addresses API allows you to organize customer and account addresses. Addresses are a sub-resource of a [`customer`](../customers/index.md) and [`account`](../account-management/accounts/index.md) resources. A `customer` or `account` can have multiple addresses, such as `home`, `work`, and `neighbour`.

You can use a customer address with an [implicit](../../basics/authentication/implicit-token.md#post-create-an-implicit-token) Bearer token, which is recommended for client-side interactions. You can also use [client_credentials](../../basics/authentication/client-credential-token.md#post-create-a-client-credential-token) Bearer token, which is recommended for back-end interactions.

You can use an account address with either [client_credentials](../../basics/authentication/client-credential-token.md#post-create-a-client-credential-token) Bearer token or a combination of [implicit](../../basics/authentication/implicit-token.md#post-create-an-implicit-token) Bearer token and [Account Management authentication](../account-management/account-members/account-member-authentication.md) token.

## The Address object

### Attributes

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this address. |
| `type` | `string` | The type represents the object being returned. |
| `first_name` | `string` | The first name of the recipient on this address. |
| `last_name` | `string` | The last name of the recipient on this address. |
| `name` | `string` | The name for the address saved, such as `home`, `work` or `wife’s office`. |
| `phone_number` | `string` | A phone number for this address. |
| `instructions` | `string` | Any delivery instructions associated with this addresses. |
| `company_name` | `string` | The company name at this address. |
| `line_1` | `string` | Usually the street name. |
| `line_2` | `string` | Usually the unit or apartment number. |
| `city` | `string` | The city for this address. |
| `county` | `string` | The county, state, province, or region for this address. |
| `postcode` | `string` | The ZIP, postcode or other postal reference for this address. |
| `country` | `string` | A two digit code for this country address. This is a `ISO 3166-2` standard. |

### Sample Response

```json
{
    "id": "5f8da740-6680-463e-b31c-190b2db4bf9d",
    "type": "address",
    "name": "Home",
    "first_name": "Ron",
    "last_name": "Swanson",
    "company_name": "",
    "phone_number": "(555) 555-1234",
    "line_1": "1 Sunny Street",
    "line_2": "Sunny Place",
    "city": "Sunny Town",
    "postcode": "SU33 1YY",
    "county": "Sunnyville",
    "country": "GB",
    "instructions": "Leave in the shed",
    "links": {
        "self":
        "https://api.moltin.com/v2/addresses/5f8da740-6680-463e-b31c-190b2db4bf9d"
    },
    "meta": {
        "timestamps": {
            "created_at": "2018-05-04T15:20:09.734Z",
            "updated_at": "2018-05-04T15:20:09.734Z"
        }
    }
}
```
