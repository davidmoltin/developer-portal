---
id: get-all-prices-in-a-pricebook
title: Get All Prices in a Price Book
sidebar_label: Get All Prices
---

## `GET` all Prices by Price Book ID

```http
https://api.moltin.com/pcm/pricebooks/:id/prices
```

Retrieves all the product prices in the specified price book.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Query Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `string` | The number of items to return per page. |
| `page[offset]` | Optional | `string` | The number of items to offset the results by. Offset is zero-based. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": [
        {
            "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
            "attributes": {
                "currencies": {
                    "USD": {
                        "amount": 100,
                        "includes_tax": false,
                        "tiers": {
                            "min_5": {
                                "minimum_quantity": 5,
                                "amount": 50
                            }
                        }
                    },
                    "CAD": {
                        "amount": 125,
                        "includes_tax": false,
                        "tiers": {
                            "min_10": {
                                "minimum_quantity": 10,
                                "amount": 50
                            }
                        }
                    },
                    "GBP": {
                        "amount": 75,
                        "includes_tax": true,
                        "tiers": {
                            "min_20": {
                                "minimum_quantity": 20,
                                "amount": 50
                            }
                        }
                    }
                },
                "sales": {
                    "summer": {
                        "schedule": {},
                        "currencies": {
                            "USD": {
                                "amount": 90,
                                "includes_tax": false,
                                "tiers": {
                                    "min_5": {
                                        "minimum_quantity": 5,
                                        "amount": 40
                                    }
                                }
                            },
                            "CAD": {
                                "amount": 117,
                                "includes_tax": false,
                                "tiers": {
                                    "min_10": {
                                        "minimum_quantity": 10,
                                        "amount": 80
                                    }
                                }
                            },
                            "GBP": {
                                "amount": 65,
                                "includes_tax": true,
                                "tiers": {
                                    "min_20": {
                                        "minimum_quantity": 20,
                                        "amount": 50
                                    }
                                }
                            }
                        }
                    }
                },
                "sku": "product-1"
            },
            "type": "product-price"
        }
    ],
    "links": {
        "first": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices?page[offset]=0&page[limit]=25&",
        "last": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices?page[offset]=0&page[limit]=25&",
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices"
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 25,
            "total": 1
        },
        "results": {
            "total": 1
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
