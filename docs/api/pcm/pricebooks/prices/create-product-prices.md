---
id: create-product-prices
title: Create Product Prices in a Price Book
sidebar_label: Create Product Prices
---

## `POST` Add Product Prices to a Price Book

```http
https://api.moltin.com/pcm/pricebooks/:id/prices
```

Adds the prices for a product to a specified price book. If the prices for the product already exist in the pricebook, the operation fails and the existing product prices are not updated.

:::tip
To update prices for a product, see [Update product prices](update-product-prices.md).
:::

## Request

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier of the price book. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body:**

Required. A [`ProductPrice`](../index.md#the-productprice-object) object with the following attributes:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of resource. You must use `product-price` |
| `attributes.sku` | Required | `string` | The product SKU that the prices belongs to. **Note**: If the prices for the product already exist in the pricebook, the operation fails and the existing product prices are not updated.|
| `attributes.currencies` | Required | [`object`](../index.md#the-currencies-object) | A collection of one or more `currencies: <key>` objects. |
| `attributes.currencies.tiers` | Optional | `object` | The price tier that an item is eligible for based on the quantity purchased. **Note**: You cannot have conflicting tiers within the same currencies block. |
| `attributes.sales` | Optional | `object` | The sales price that an item is eligible for based on the price book. **Note**: You cannot have conflicting sales prices within the same block. |

## Request Example (curl)

```bash
curl -X POST https://api.moltin.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-price",
            "attributes": {
                "sku": "product-1"
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
                    "GBP": {
                        "amount": 73,
                        "includes_tax": true,
                        "tiers": {
                            "min_20": {
                                "minimum_quantity": 20,
                                "amount": 60
                            }
                        }
                    },
                    "CAD": {
                        "amount": 127,
                        "includes_tax": false,
                        "tiers": {
                            "min_10": {
                                "minimum_quantity": 10,
                                "amount": 100
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
                }
            },
          }'
```

### Response

`200 OK`

```json
{
    "data": {
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
                    "amount": 127,
                    "includes_tax": false,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 100
                        }
                    }
                },
                "GBP": {
                    "amount": 73,
                    "includes_tax": true,
                    "tiers": {
                        "min_20": {
                            "minimum_quantity": 20,
                            "amount": 60
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
    },
    "links": {
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146"
    }
}
```

## Create Bundle Sale Price Request Example

You can assign sale price to an option in a bundle. In the product pricebook, create a sale for the `bundleId` and provide the sale price for the option when it is sold as a part of the bundle. You can add the same sale price for the same option using an array of `bundleids` if you want to sell the product as a part of different bundles. The following request creates bundle sale price for the given product:

```bash
curl -X POST https://api.moltin.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product-price",
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
                    "GBP": {
                        "amount": 73,
                        "includes_tax": true,
                        "tiers": {
                            "min_20": {
                                "minimum_quantity": 20,
                                "amount": 60
                            }
                        }
                    },
                    "CAD": {
                        "amount": 127,
                        "includes_tax": false,
                        "tiers": {
                            "min_10": {
                                "minimum_quantity": 10,
                                "amount": 100
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
                }
            },
            "sku": "product-1"
          }'
```

:::note
The `includes_tax` setting must be the same for all options in a bundle. If you include tax for an option in a component within a bundle, you must include tax for all options in the bundle. You cannot set `includes_tax` setting only for an individual option in a bundle.
:::

### Response

`200 OK`

```json
{
    "data": {
        "id": "76c78677-a22a-4104-8fb7-11f1cfc3b146",
        "attributes": {
          "sku": "product-1",
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
                    "amount": 127,
                    "includes_tax": false,
                    "tiers": {
                        "min_10": {
                            "minimum_quantity": 10,
                            "amount": 100
                        }
                    }
                },
                "GBP": {
                    "amount": 73,
                    "includes_tax": true,
                    "tiers": {
                        "min_20": {
                            "minimum_quantity": 20,
                            "amount": 60
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
        },
        "type": "product-price"
    },
    "links": {
        "self": "/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146"
    }
}
```

## Related Resources

- [Bundles - Product Content Management](../../../../concepts/pcm-bundles.md)
