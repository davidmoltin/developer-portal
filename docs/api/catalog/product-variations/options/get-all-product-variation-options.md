---
id: get-all-product-variation-options
title: Get all Product Variation Options
sidebar_label: Get all Product Variation Options
---


## `GET` Get all Product Variation Options

```http
https://api.moltin.com/v2/variations/:id/options
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | ID of the variation. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

Options successfully retrieved.

```json
{
    "data": [
        {
            "type": "option",
            "id": "13633d24-67bf-4736-b753-f093257d05cb",
            "name": "Little",
            "description": "Our smallest size.",
            "relationships": {
                "modifiers": {
                    "data": [
                        {
                            "name_prepend": "Little "
                        },
                        {
                            "slug_append": "-little"
                        },
                        {
                            "sku_append": "-LITTLE"
                        },
                        {
                            "price_decrement": [
                                {
                                    "currency": "GBP",
                                    "amount": 1500,
                                    "includes_tax": true
                                },
                                {
                                    "currency": "USD",
                                    "amount": 2000,
                                    "includes_tax": true
                                }
                            ]
                        }
                    ]
                }
            }
        },
        {
            "type": "option",
            "id": "fd1c0f24-2810-4d19-8fed-40be18f35bc3",
            "name": "Regular",
            "description": "Our regular size.",
            "relationships": {
                "modifiers": {
                    "data": [
                        {
                            "sku_append": "-REGULAR"
                        },
                        {
                            "slug_append": "-regular"
                        },
                        {
                            "name_prepend": "Regular "
                        }
                    ]
                }
            }
        },
        {
            "type": "option",
            "id": "9ba2e929-1e95-4d20-a0c7-67c911d4e9c8",
            "name": "Large",
            "description": "Our large size.",
            "relationships": {
                "modifiers": {
                    "data": [
                        {
                            "name_prepend": "Large "
                        },
                        {
                            "sku_append": "-LARGE"
                        },
                        {
                            "slug_append": "-large"
                        },
                        {
                            "price_increment": [
                                {
                                    "currency": "GBP",
                                    "amount": 1500,
                                    "includes_tax": true
                                },
                                {
                                    "currency": "USD",
                                    "amount": 2000,
                                    "includes_tax": true
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/variations/:id/options \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
