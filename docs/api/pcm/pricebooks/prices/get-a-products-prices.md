---
id: get-a-products-prices
title: Get a Product Prices in a Price Book by its ID
sidebar_label: Get a Productʼs Prices
---

## `GET` Prices by Product ID

```http
https://api.moltin.com/pcm/pricebooks/:id/prices/:priceId
```

Retrieves the specified product price (`priceId`) from a price book (`id`).

:::note
Set the sale price for a bundle in the price book. The `bundle_id` fields in the price book specifies the bundles to which the product sale price is applied.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book. |
| `priceId` | Required | `string` | The unique identifier of the product price. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant the API access. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": {
        "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
        "attributes": {
            "currencies": {
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
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 50
                        }
                    }
                },
                "USD": {
                    "amount": 100,
                    "includes_tax": false,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 50
                        }
                    }
                }
            },
            "sales": {
                "summer": {
                    "bundle_ids": [
                        "a3cacaa9-b5bb-4096-bb6b-af41394ca850"
                    ],
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
    },
    "links": {
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146 \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
