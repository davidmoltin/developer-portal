---
id: account-checkout
title: Account Checkout
sidebar_label: Account Checkout
---

When a [Cart](../../../carts-and-orders/carts/index.md) is ready for checkout, you can convert the cart to an [order](../../../carts-and-orders/orders/index.md). The cart remains and can be modified and checked out again if required.

After a successful checkout, a response that contains the order is returned.

:::Warning
By default, carts are automatically deleted 7 days after the last update. You can change this setting by updating [cart settings](https://documentation.elasticpath.com/commerce-cloud/docs/api/advanced/settings/cart-settings.html).
:::

:::Important
Your inventory is modified during checkout and payment of an order. For more information about the changes in the inventory, see the [Inventory](https://documentation.elasticpath.com/commerce-cloud/docs/concepts/inventory.html) section.
:::

## `POST` Create Checkout With Account

The user authenticates with the `Client Credentials Token`.

```http
https://api.moltin.com/v2/carts/:reference/checkout
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `reference` | Required | `string` | The reference to the cart that you want to check out. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Set the grant type to `client_credentials` to use this checkout mechanism. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `account.id` | Required | `string` | The account ID. |
| `account.member_id` | Optional | `string` | The account member ID. |
| `contact.name` | Required | `string` | The name of the account member. |
| `contact.email` | Required | `string` | The email address of the account member. |

<!-- Response -->

`201 Created`

```json
{
    "data": {
        "id": "74b48ecb-8599-4c63-85a8-09cb9bb7ee39",
        "type": "order",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "contact": {
            "name": "John Doe",
            "email": "johndoe@email.com"
        },
        "shipping_address": {
           ...
        },
        "billing_address": {
           ...
        },
        "links": {},
        "meta": {
            ...
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "d9f30f2f-9973-45d7-a6c9-360be52a26b0"
                    }
                ]
            },
            "account": {
                "data": {
                    "type": "account",
                    "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68"
                }
            },
            "account_member": {
                "data": {
                    "type": "account_member",
                    "id": "338f84bf-e6c9-4704-9f33-2708addd463a"
                }
            }
        }
    },
    "included": {
        "items": [
          ...]
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/checkout \
     -H "Authorization: Bearer XXXX" \
    -d $'{
       "data": {
         "account": {
            "id": "8cee1b9e-3e39-4d5f-bd4a-86cdb985c6ee",
            "member_id": "338f84bf-e6c9-4704-9f33-2708addd462b"
        },
         "contact": {
           "email": "john@email.com",
           "name": "John Doe"
         },
         "billing_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "ElasticPath",
           "line_1": "2nd Floor British India House",
           "line_2": "15 Carliol Square",
           "city": "Newcastle upon Tyne",
           "postcode": "NE1 6UF",
           "county": "Tyne & Wear",
           "country": "UK"
         },
         "shipping_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "ElasticPath",
           "phone_number": "(555) 555-1234",
           "line_1": "2nd Floor British India House",
           "line_2": "15 Carliol Square",
           "city": "Newcastle upon Tyne",
           "postcode": "NE1 6UF",
           "county": "Tyne & Wear",
           "country": "UK",
           "instructions": "Leave in porch"
         }
       }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `POST` Create Checkout with Account Management Authentication Token

The shopper authenticates with the `Implicit Token` and the `EP-Account-Management-Authentication-Token`.

```http
https://api.moltin.com/v2/carts/:reference/checkout
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `reference` | Required | `string` | The reference to the cart that you want to check out. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `EP-Account-Management-Authentication-Token` | Required | `string` | An account management authentication token that identifies the authenticated account member. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  Set the grant type to `client_credentials` if account management authentication token is unavailable. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `contact.name` | Required | `string` | The name of the contact. |
| `contact.email` | Required | `string` | The email address of the contact. |

<!-- Response -->

`201 Created`

```json
{
    "data": {
        "id": "74b48ecb-8599-4c63-85a8-09cb9bb7ee39",
        "type": "order",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "contact": {
            "name": "John Doe",
            "email": "johndoe@email.com"
        },
        "shipping_address": {
           ...
        },
        "billing_address": {
           ...
        },
        "links": {},
        "meta": {
            ...
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "d9f30f2f-9973-45d7-a6c9-360be52a26b0"
                    }
                ]
            },
            "account": {
                "data": {
                    "type": "account",
                    "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68"
                }
            },
            "account_member": {
                "data": {
                    "type": "account_member",
                    "id": "338f84bf-e6c9-4704-9f33-2708addd463a"
                }
            }
        }
    },
    "included": {
        "items": [
          ...]
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Account-Management-Authentication-Token: XXXX"
    -d $'{
    "data": {
      "contact": {
        "name": "John Doe",
        "email": "johndoe@email.com"
      },
      "billing_address": {
        ...
      },
      "shipping_address": {
        ...
      }
    }
  }
```

<!--END_DOCUSAURUS_CODE_TABS-->
