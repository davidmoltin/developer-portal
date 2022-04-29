---
id: get-products-by-hierarchy-in-a-release
title: Get Products by Hierarchy in the Latest Release
sidebar_label: Get Products by Hierarchy
---

## `GET` Get the List of Products in a Hierarchy

```text
https://api.moltin.com/pcm/catalogs/:catalogId/releases/latest/hierarchies/:hierarchyId/products
```

Returns the products associated with the specified hierarchy from a published catalog. The product must be in the `live` status.

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
| `hierarchyId` | Required | `string` | The unique identifier of a hierarchy. |

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
        "published_at": "2021-02-01T00:00:00.000",
        "base_product": false,
        "base_product_id": "cdf574bc-e36e-48fc-9eac-01c87839b285",
        "commodity_type": "physical",
        "upc_ean": "0123456",
        "manufacturer_part_num": "mfn1",
        "created_at": "2021-01-01T00:00:00.000",
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
          "buttons": {
            "name": "Buttoned down shirt",
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "type": "product",
                "quantity": 2
              }
            ]
          },
          "collar": {
            "name": "Shirt with pockets",
            "options": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "type": "product",
                "quantity": 2
              }
            ]
          },
          "pockets": {
            "name": "Shirt with pockets",
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
        "updated_at": "2021-01-01T00:00:00.000",
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
          },
          "additionalProp2": {
            "additionalProp1": {},
            "additionalProp2": {},
            "additionalProp3": {}
          },
          "additionalProp3": {
            "additionalProp1": {},
            "additionalProp2": {},
            "additionalProp3": {}
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
        "sale_id": "sale2021",
        "sale_expires": "2021-01-01T00:00:00.000",
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
          "springSale": {
            "sale_id": "spring_sale21",
            "sale_expires": "2021-05-01T00:00:00.000",
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
          "summerSale": {
            "sale_id": "summer_sale21",
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
            "sale_id": "fall_sale21",
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
          }
        },
        "tiers": {
          "winterSale": {
            "sale_id": "winter_sale1-22",
            "sale_expires": "2022-01-01T00:00:00.000",
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
          "mid-winterSale": {
            "sale_id": "winter_sale22",
            "sale_expires": "2022-02-01T00:00:00.000",
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
          "summerSale": {
            "sale_id": "summer_sale23",
            "sale_expires": "2023-08-01T00:00:00.000",
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
    },
  "links": {
    "first": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products?page[limit]=25&page[offset]=0&",
    "last": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products?page[offset]=0&page[limit]=25&",
    "self": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
