---
id: create-multi-cart
title: Create Multiple Carts
sidebar_label: Create and Update Carts
---

Each customer can have multiple carts. Use the `carts` API to create and update multiple carts.

The carts are distinct from one another. Shoppers can add different items to their carts. They can check out one of the carts without affecting the content or status of their other carts.

After the shopper checks out the cart, the cart remains available to the shopper. The cart is persistent and stays with the shopper after it is used.

## `POST` Create a Custom Cart

```http
https://api.moltin.com/v2/carts
```

Creates a custom cart. Call this endpoint each time a customer creates a cart.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |
| `x-moltin-customer-token` | Optional | `string` | A customer token to be associated with the cart. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | `string` | The cart name provided by the customer. A cart name must contain 1 to 255 characters. You cannot use whitespace characters, but special characters are permitted. For more information, see the [Safe Characters](../../basics/safe-characters.md) section. |
| `id` | Optional | `string` | Custom identifier for the cart. Only `a-zA-Z0-9_-` symbols are allowed. |
| `description` | Optional | `string` | The cart description. |

<!-- Response -->

`201 Created`

```json
{
    "data": {
        "id": "f52eafaf-123e-4eee-9fa9-5c9b5c24b079",
        "name": "My cart",
        "description": "my first cart",
        "type": "cart",
        "links": {
            "self": "https://api.moltin.com/carts/v2/carts/f52eafaf-123e-4eee-9fa9-5c9b5c24b079"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "without_tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                },
                "tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": "0"
                }
            },
            "timestamps": {
                "created_at": "2020-09-09T16:45:28Z",
                "updated_at": "2020-09-09T16:45:28Z",
                "expires_at": "2020-09-20T16:45:28Z"
            }
        },
        "relationships": {
            "items": {
                "data": null
            },
            "customers": {
                "data": [
                    {
                        "type": "customer",
                        "id": "9efd11e1-7f66-4581-a9a9-ed63d8ba2474"
                    }
                ]
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
     -d $ {
      "data": {
        "name": "Bob’s cart",
        "description": "For Holidays"
  },
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update a Cart

```http
https://api.moltin.com/v2/carts/:reference
```

Updates cart properties for the specified cart `(:reference)`.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | `string` | The cart name supplied by the customer. A cart name must contain between 1 and 255 characters. You cannot use whitespace characters, but special characters are permitted. For more information, see [Safe Characters](../../basics/safe-characters.md). |
| `description` | Optional | `string` | The cart description. |

<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "df820a6e-ca10-457e-a7ac-f68d13b318dd",
        "name": "my cart",
        "description": "my first cart",
        "type": "cart",
        "links": {
            "self": "https://api.moltin.com/carts/v2/carts/df820a6e-ca10-457e-a7ac-f68d13b318dd"
        },
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 12221,
                    "currency": "USD",
                    "formatted": "$122.21"
                },
                "without_tax": {
                    "amount": 12221,
                    "currency": "USD",
                    "formatted": "$122.21"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2020-10-15T16:17:53Z",
                "updated_at": "2020-10-15T16:20:55Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "cart_item",
                        "id": "615c4c0e-8184-4991-a5a9-eda5499fb558"
                    }
                ]
            },
            "customers": {
                "data": [
                    {
                        "type": "customer",
                        "id": "9efd11e1-7f66-4581-a9a9-ed63d8ba2474"
                    }
                ]
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/carts/:cartID \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
     -d $ {
      "data": {
        "name": "My cart",
        "description": "my first cart"
  },
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--END_DOCUSAURUS_CODE_TABS-->

## Error Codes

You might encounter the following response codes, depending on the scenario:

* `400 Bad Request` - `Blank name` - The `name` parameter is blank or contains whitespace characters. Specify a valid string.

* `400 Bad Request` - `Name with > 255 characters` - Strings must be less than or equal to 255 characters.

* `400 Bad Request` - `Odd characters` - The `name` parameter cannot contain whitespace characters. Unicode Transformation Format (UTF-8) characters are allowed.
