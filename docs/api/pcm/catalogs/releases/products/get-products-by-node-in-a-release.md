---
id: get-products-by-node-in-a-release
title: Get Products by Node in the Latest Release
sidebar_label: Get Products by Node
---

## `GET` Get the List of Products for a Hierarchy Node

```text
https://api.moltin.com/pcm/catalogs/:catalogId/releases/latest/nodes/:nodeId/relationships/products
```

Returns the products associated with the specified hierarchy node from a published catalog. The product must be in the `live` status.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

:::important
Use `releaseId` to delete a specific release than the latest catalog.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of a catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latest` for the most recently published version. |
| `nodeId` | Required | `string` | The unique identifier of a hierarchy node. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |

**Query Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `string` | The number of items to return per page. Minimum value is `1`. |
| `page[offset]` | Optional | `string` | The number of items to offset the results by. Offset is zero-based. |

<!-- Response - PCM -->

`200 OK`

```json
},
  "data": [
    {
      "attributes": {
        "availability": "available",
        "published_at": "2021-01-01T00:00:00.000",
        "base_product": false,
        "base_product_id": "cdf574bc-e36e-48fc-9eac-01c87839b285",
        "commodity_type": "physical",
        "upc_ean": "0123456",
        "manufacturer_part_num": "mfn1",
        "created_at": "2020-01-01T00:00:00.000",
        "description": "This is a product",
        "dimensions": "4x5x2",
        "manage_stock": false,
        "name": "Blue shirt",
        "price": {
          "USD": {
            "amount": 100,
            "includes_tax": false
          },
          "CAD": {
            "amount": 100,
            "includes_tax": false
          },
          "GBP": {
            "amount": 100,
            "includes_tax": false
          }
        },
        "tiers": {
          "min_5": {
            "minimum_quantity": 5,
            "price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            }
          },
          "min_10": {
            "minimum_quantity": 10,
            "price": {
              "USD": {
                "amount": 150,
                "includes_tax": false
              },
              "CAD": {
                "amount": 150,
                "includes_tax": false
              },
              "GBP": {
                "amount": 150,
                "includes_tax": false
              }
            }
          },
          "min_15": {
            "minimum_quantity": 15,
            "price": {
              "USD": {
                "amount": 175,
                "includes_tax": false
              },
              "CAD": {
                "amount": 175,
                "includes_tax": false
              },
              "GBP": {
                "amount": 175,
                "includes_tax": false
              }
            }
          }
        },
        "components": {
          "Buttons": {
            "name": "Button down shirt",
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "type": "product",
                "quantity": 2
              }
            ]
          },
          "Pockets": {
            "name": "Shirt with pockets",
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "type": "product",
                "quantity": 2
              }
            ]
          },
          "Collar": {
            "name": "Shirt with collar",
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "type": "product",
                "quantity": 2
              }
            ]
          }
        },
        "product_hash": "string",
        "sku": "blue-shirt",
        "slug": "blue-shirt",
        "status": "live",
        "updated_at": "1970-01-01T00:00:00.000",
        "weight": {
          "g": 997.903,
          "kg": 1,
          "lb": 2.20,
          "oz": 32
        },
        "extensions": {
          "size": {
            "size": {},
            "medium": {},
            "large": {}
          }
        }
      },
      "id": "8fccaa19-dba9-4621-8d11-31a222a68c7c",
      "relationships": {
        "categories": [
          {
            "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
            "label": "category",
            "name": "Formal dresswear"
          }
        ],
        "brands": [
          {
            "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
            "label": "category",
            "name": "Formal dresswear"
          }
        ],
        "collections": [
          {
            "id": "65477ce0-fcb8-436b-a120-3d57979421dd",
            "label": "category",
            "name": "Formal dresswear"
          }
        ],
        "parent": {
          "data": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "type": "product"
          }
        },
        "children": {
          "data": [
            {
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "type": "product"
            }
          ]
        },
        "files": {
          "data": [
            {
              "type": "file",
              "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "created_at": "1970-01-01T00:00:00.000"
            }
          ]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
      },
      "type": "product",
      "meta": {
        "catalog_id": "362a16dc-f7c6-4280-83d6-4fcc152af091",
        "display_price": {
          "with_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          },
          "without_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          }
        },
        "catalog_source": "pim",
        "sale_id": "string",
        "sale_expires": "2023-01-01T00:00:00.000",
        "original_price": {
          "USD": {
            "amount": 100,
            "includes_tax": false
          },
          "CAD": {
            "amount": 100,
            "includes_tax": false
          },
          "GBP": {
            "amount": 100,
            "includes_tax": false
          }
        },
        "original_display_price": {
          "with_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          },
          "without_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          }
        },
        "component_products": {
          "summerSale": {
            "sale_id": "Summer_sale21",
            "sale_expires": "2021-08-01T00:00:00.000",
            "price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          },
          "fallSale": {
            "sale_id": "Fall_Sale21",
            "sale_expires": "2021-11-01T00:00:00.000",
            "price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          },
          "winterSale": {
            "sale_id": "Winter_sale22",
            "sale_expires": "2022-01-01T00:00:00.000",
            "price": {
              "USA": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USA": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          }
        },
        "tiers": {
          "springSale": {
            "sale_id": "Spring_sale21",
            "sale_expires": "2021-05-01T00:00:00.000",
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USA": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          },
          "summerSale": {
            "sale_id": "Summer_sale21",
            "sale_expires": "2021-08-01T00:00:00.000",
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USA": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          },
          "mid-winterSale": {
            "sale_id": "midWinter_sale22",
            "sale_expires": "2022-03-01T00:00:00.000",
            "display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            },
            "original_price": {
              "USD": {
                "amount": 100,
                "includes_tax": false
              },
              "CAD": {
                "amount": 100,
                "includes_tax": false
              },
              "GBP": {
                "amount": 100,
                "includes_tax": false
              }
            },
            "original_display_price": {
              "with_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              },
              "without_tax": {
                "amount": 47500,
                "currency": "USD",
                "formatted": "$475.00"
              }
            }
          }
        },
        "variation_matrix":
        {"3fa85f64-5717-4562-b3fc-2c963f66afa6": "4cd092fe-8878-4d93-8438-c305d2c6fb1f"
        },
        "variations": [
          {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": "color",
            "options": [
              {
                "id": "4cd092fe-8878-4d93-8438-c305d2c6fb1f",
                "name": "Red",
                "description": "Red"
              }
            ]
          }
        ],
        "language": "en-GB"
      }
    }
  ],
  "links": {
    "first": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products?page[offset]=0&page[limit]=25&",
    "last": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products?page[offset]=0&page[limit]=25&",
    "self": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products"
  }
}
```

```json
{
    "data": [
        {
            "id": "14e055d0-eebb-4090-8594-a0a7aeea2151",
            "type": "product",
            "attributes": {
                "base_product": false,
                "commodity_type": "physical",
                "created_at": "2021-03-10T20:00:43.734Z",
                "description": "This gas model includes a convection oven.",
                "manage_stock": false,
                "manufacturer_part_num": "BE-R-2222-bbbb-2b2b",
                "name": "BestEver Range, Model 2b2b",
                "sku": "BE-Range-2b2b",
                "slug": "bestever-range-2b2b",
                "status": "live",
                "upc_ean": "222233334444",
                "updated_at": "2021-04-20T20:46:27.089Z",
                "published_at": "2021-04-20T20:53:44.392Z",
                "price": {
                    "USD": {
                        "amount": 200,
                        "includes_tax": false
                    },
                    "CAD": {
                        "amount": 250,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 100,
                        "includes_tax": true
                    }
                },
                "tiers": {
                    "min_5": {
                        "minimum_quantity": 5,
                        "price": {
                            "USD": {
                                "amount": 100,
                                "includes_tax": false
                            },
                            "CAD": {
                                "amount": 125,
                                "includes_tax": false
                            },
                            "GBP": {
                                "amount": 80,
                                "includes_tax": true
                            }
                        }
                    }
                }
            },
            "meta": {
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
                "catalog_source": "pim",
                "original_price": {
                    "USD": {
                        "amount": 400,
                        "includes_tax": false
                    },
                    "CAD": {
                        "amount": 500,
                        "includes_tax": false
                    },
                    "GBP": {
                        "amount": 300,
                        "includes_tax": true
                    }
                },
                "tiers": {
                    "min_5": {
                        "original_price": {
                            "USD": {
                                "amount": 150,
                                "includes_tax": false
                            },
                            "CAD": {
                                "amount": 175,
                                "includes_tax": false
                            },
                            "GBP": {
                                "amount": 120,
                                "includes_tax": true
                            }
                        }
                    }
                },
                "sale_expires": "2030-01-01T00:00:00.000Z",
                "sale_id": "summer"
            }
        }
    ],
    "links": {
        "first": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products?page[offset]=0&page[limit]=25&",
        "last": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products?page[offset]=0&page[limit]=25&",
        "self": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/nodes/f26c613b-320a-4744-a4cb-841a451c95ab/relationships/products \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
