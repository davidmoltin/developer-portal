---
id: get-customer-carts
title: Get a Customerʼs Carts
sidebar_label: Get a Customerʼs Carts
---

You can retrieve the carts that are associated with a customer.

When a shopper retrieves their latest carts, the carts are sorted in descending order by the `updated_date`. For more information, see [Pagination](../../../basics/pagination.md).

## `GET` Get a customerʼs carts with a `customer` token

```http
https://api.moltin.com/v2/carts
```

Retrieve carts for the customer. The customer is specified by a `customer` token in the header.

:::important
Requires an [`implicit` token](../../../basics/authentication/implicit-token.md) with a [`customer` token](../../../customers-and-accounts/customers/customer-tokens.md).
:::

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `x-moltin-customer-token` | Required | `string` | A customer token to access specific customer orders.|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "id": "1",
            "type": "cart",
            "notes": "some notes for this cart",
            "name": "Cart",
            "description:": "",
            "links": {
                "self": "https://api.moltin.com/v2/carts/1"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "amount": 10000,
                        "currency": "USD",
                        "formatted": "$100.00"
                    },
                    "without_tax": {
                        "amount": 10000,
                        "currency": "USD",
                        "formatted": "$100.00"
                    },
                    "tax": {
                        "amount": 0,
                        "currency": "USD",
                        "formatted": "$0.00"
                    }
                },
                "timestamps": {
                    "created_at": "2020-12-03T23:27:12Z",
                    "updated_at": "2020-12-03T23:47:10Z"
                }
            },
            "relationships": {
                "items": {
                    "data": [
                        {
                            "type": "custom_item",
                            "id": "1cf8b15b-4f12-43c5-837c-dbbc09aefa55"
                        }
                    ]
                },
                "customers": {
                    "data": [
                        {
                            "type": "customer",
                            "id": "662461ad-ddcb-4dbd-8ed7-ade9aa63b5f9"
                        }
                    ]
                }
            }
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
        "first": "https://api.moltin.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
        "last": "https://api.moltin.com/v2/carts?page[offset]=2&page[limit]=1&filter=",
        "prev": "https://api.moltin.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
        "next": "https://api.moltin.com/v2/carts?page[offset]=1&page[limit]=1&filter="
    },
    "meta": {
        "page": {
            "limit": 1,
            "offset": 0,
            "current": 1,
            "total": 3
        },
        "results": {
            "total": 3
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/carts \
     -H "x-moltin-customer-token: XXXX"
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `GET` Get all carts

```http
https://api.moltin.com/v2/carts
```

The get all carts request returns all carts in the store belonging to any customer.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description                                                                                                                                        |
| --- | --- | --- |----------------------------------------------------------------------------------------------------------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. [`client_credentials` token](../../../basics/authentication/client-credential-token.md) is required in order to access all carts belonging to any customer. |

<!-- Response -->

`200 OK`

```json
{
  "data": [
    {
      "id": "1",
      "type": "cart",
      "notes": "some notes for this cart",
      "name": "Cart",
      "description": "",
      "links": {
        "self": "https://api.moltin.com/v2/carts/1"
      },
      "meta": {
        "display_price": {
          "with_tax": {
            "amount": 10000,
            "currency": "USD",
            "formatted": "$100.00"
          },
          "without_tax": {
            "amount": 10000,
            "currency": "USD",
            "formatted": "$100.00"
          },
          "tax": {
            "amount": 0,
            "currency": "USD",
            "formatted": "$0.00"
          }
        },
        "timestamps": {
          "created_at": "2020-12-03T23:27:12Z",
          "updated_at": "2020-12-03T23:47:10Z"
        }
      },
      "relationships": {
        "items": {
          "data": [
            {
              "type": "cart_item",
              "id": "1cf8b15b-4f12-43c5-837c-dbbc09aefa55"
            }
          ]
        },
        "customers": {
          "data": [
            {
              "type": "customer",
              "id": "662461ad-ddcb-4dbd-8ed7-ade9aa63b5f9"
            }
          ]
        }
      }
    }
  ],
  "links": {
    "current": "https://api.moltin.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
    "first": "https://api.moltin.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
    "last": "https://api.moltin.com/v2/carts?page[offset]=2&page[limit]=1&filter=",
    "prev": "https://api.moltin.com/v2/carts?page[offset]=0&page[limit]=1&filter=",
    "next": "https://api.moltin.com/v2/carts?page[offset]=1&page[limit]=1&filter="
  },
  "meta": {
    "page": {
      "limit": 1,
      "offset": 0,
      "current": 1,
      "total": 3
    },
    "results": {
      "total": 3
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/carts \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \'
```

<!--END_DOCUSAURUS_CODE_TABS-->

