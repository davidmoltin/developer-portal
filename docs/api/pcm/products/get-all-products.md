---
id: get-all-products
title: Get all Products
sidebar_label: Get all Products
---

## `GET` Get all Products

```http
https://api.moltin.com/pcm/products
```

Retrieves a list of all products in the Product Content Management system.

You can also use `include=component_products` to retrieve top-level resources, such as files or images, and key attribute data, such as SKU or slug for component products in a product bundle. With this option, you can get more information about the products in a product bundle in your store front, improving the buying experience for your shoppers. For more information, see [Create a Bundle](bundles/create-a-bundle.md).

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Query parameters

| Key | Value | Description |
| :--- | :--- | :--- |
| `include` | `component_products` | The top-level resources, such as files or images, and key attribute data, such as SKU or slug, to return for component products in a product bundle. For more information, see [Create a Bundle](bundles/create-a-bundle.md). |

## Request Example - Curl

```bash
curl -X POST https://api.moltin.com/pcm/products \
     -H "Authorization: Bearer XXXX" \
```

## Response

### Example 1

`200 OK`

```json
{
    "data": [
        {
            "type": "product",
            "id": "f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b",
            "attributes": {
                "commodity_type": "physical",
                "description": "This electric model offers an induction heating element and convection oven.",
                "mpn": "BE-R-1111-aaaa-1a1a",
                "name": "BestEver Range, Model 1a1a",
                "sku": "BE-Range-1a1a",
                "slug": "bestever-range-1a1a",
                "status": "draft",
                "upc_ean": "111122223333"
            },
            "relationships": {
                "files": {
                    "data": [],
                    "links": {
                        "self": "/products/f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b/relationships/files"
                    }
                },
                "templates": {
                    "data": [],
                    "links": {
                        "self": "/products/f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b/relationships/templates"
                    }
                }
            }
        },
        {
            "type": "product",
            "id": "14e055d0-eebb-4090-8594-a0a7aeea2151",
            "attributes": {
                "commodity_type": "physical",
                "description": "This gas model includes a convection oven.",
                "mpn": "BE-R-2222-bbbb-2b2b",
                "name": "BestEver Range, Model 2b2b",
                "sku": "BE-Range-2b2b",
                "slug": "bestever-range-2b2b",
                "status": "draft",
                "upc_ean": "222233334444"
            },
            "relationships": {
                "files": {
                    "data": [],
                    "links": {
                        "self": "/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/files"
                    }
                },
                "templates": {
                    "data": [],
                    "links": {
                        "self": "/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/templates"
                    }
                }
            }
        },
    ]
}
```

### Example 2 - when a product returned is a base product

For parent products the `base_product` value is set to `true` and the variations added to the products are returned as in the following example:

`200 OK`

```json
{
            "id": "2736bfd5-d370-4e00-841f-d20044070197",
            "type": "product",
            "attributes": {
                "base_product": true,
                "commodity_type": "physical",
                "created_at": "2021-11-24T23:36:26.571Z",
                "description": "nike shoe",
                "manage_stock": false,
                "manufacturer_part_num": "333",
                "name": "nike shoe",
                "sku": "nike_1",
                "slug": "nike-shoe",
                "status": "live",
                "upc_ean": "12345678",
                "updated_at": "2022-01-26T19:54:36.841Z",
                "published_at": "2022-01-26T19:54:37.064Z"
            },
            "meta": {
                "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
                "catalog_source": "pim",
                "variation_matrix": {
                    "527b09d2-b66e-4d8f-b264-ff724a9d8eb0": {
                        "1a6827fe-2adb-49dc-a457-ab69918bfd65": "7a4b5b72-06a3-40d5-8df1-1150848cabbb",
                        "337a76ed-78db-440c-9d40-db6e95310bf7": "41eae842-558f-4dcc-a99e-0cf17b9fbf41",
                        "e5e4f0eb-1e24-4c6e-be35-1188724326c5": "f2b5d41f-a561-45ac-81cd-19e11dc6e56a"
                    },
                    "c2f9a4de-18e1-4409-a6ec-f1015a37cf2e": {
                        "1a6827fe-2adb-49dc-a457-ab69918bfd65": "aa1964cb-d21f-40e7-afa9-1ee9abdd0fda",
                        "337a76ed-78db-440c-9d40-db6e95310bf7": "4531c87a-57ad-4fa3-bb8d-bc7d15f8607d",
                        "e5e4f0eb-1e24-4c6e-be35-1188724326c5": "7d28f075-0110-4cd4-8d58-15cda55c8b5b"
                    }
                },
                "variations": [
                    {
                        "id": "c80e85a0-88be-401b-93e2-ea910b372f25",
                        "name": "shoe_size",
                        "options": [
                            {
                                "id": "e5e4f0eb-1e24-4c6e-be35-1188724326c5",
                                "description": "40",
                                "name": "40"
                            },
                            {
                                "id": "1a6827fe-2adb-49dc-a457-ab69918bfd65",
                                "description": "42",
                                "name": "42"
                            },
                            {
                                "id": "337a76ed-78db-440c-9d40-db6e95310bf7",
                                "description": "44",
                                "name": "44"
                            }
                        ]
                    },
                    {
                        "id": "1748f33a-c1df-4952-97ca-b0d20d9aff60",
                        "name": "color",
                        "options": [
                            {
                                "id": "c2f9a4de-18e1-4409-a6ec-f1015a37cf2e",
                                "description": "black",
                                "name": "black"
                            },
                            {
                                "id": "527b09d2-b66e-4d8f-b264-ff724a9d8eb0",
                                "description": "red",
                                "name": "red"
                            }
                        ]
                    }
                ]
            }
        }
```

### Example 3 - when a product returned is a child product

For child products the `base_product` value is set to `false`. Child products have relationships and are linked to the parent products.

`200 OK`

```json
{
            "id": "41eae842-558f-4dcc-a99e-0cf17b9fbf41",
            "type": "product",
            "attributes": {
                "base_product": false,
                "base_product_id": "2736bfd5-d370-4e00-841f-d20044070197",
                "commodity_type": "physical",
                "created_at": "2021-11-29T17:19:12.068Z",
                "description": "nike shoesize-44",
                "manage_stock": false,
                "manufacturer_part_num": "333",
                "name": "nike shoe",
                "sku": "nike_1-red-44",
                "slug": "nike-shoe-red-44",
                "status": "live",
                "upc_ean": "12345678",
                "updated_at": "2022-01-26T19:54:36.841Z",
                "published_at": "2022-01-26T19:54:37.064Z"
            },
            "meta": {
                "catalog_id": "09b9359f-897f-407f-89a2-702e167fe781",
                "catalog_source": "pim"
            },
            "relationships": {
                "parent": {
                    "data": {
                        "id": "2736bfd5-d370-4e00-841f-d20044070197",
                        "type": "product"
                    }
                }
            }
        }
```

### Request example using Include Component Products

#### Curl

```bash
curl GET https://api.moltin.com/pcm/products?include=component_products
     -H "Authorization: Bearer XXXX" \
```

#### Response example

`200 OK`

```json
{
  "data": [
    {
      "type": "product",
      "id": "4ca7de77-994d-4e7c-b834-4cb2ae156f57",
      "attributes": {
        "commodity_type": "physical",
        "components": {
          "Apples": {
            "name": "Apples",
            "options": [
              {
                "id": "f809fe4f-83f7-4db4-8175-e467a0d1974a",
                "type": "product",
                "quantity": 12
              }
            ]
          },
          "Oranges": {
            "name": "Oranges",
            "options": [
              {
                "id": "7f8f596a-2dc0-4e78-ba0d-3810eac6f86a",
                "type": "product",
                "quantity": 12
              }
            ]
          }
        },
        "description": "fruit",
        "name": "fruit Bundle",
        "slug": "45-b",
        "status": "live"
      },
      "relationships": {
        "children": {
          "data": [],
          "links": {
            "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/children"
          }
        },
        "component_products": {
          "data": [],
          "links": {
            "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/relationships/component_products"
          }
        },
        "files": {
          "data": [],
          "links": {
            "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/relationships/files"
          }
        },
        "main_image": {
          "data": null
        },
        "templates": {
          "data": [],
          "links": {
            "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/relationships/templates"
          }
        },
        "variations": {
          "data": [],
          "links": {
            "self": "/products/4ca7de77-994d-4e7c-b834-4cb2ae156f57/relationships/variations"
          }
        }
      },
      "meta": {
        "created_at": "2022-02-01T12:51:51.132Z",
        "updated_at": "2022-02-01T12:51:51.132Z",
        "variation_matrix": {}
      }
    }
  ],
  "meta": {
    "results": {
      "total": 8
    }
  },
  "included": {
    "component_products": [
      {
        "type": "product",
        "id": "f809fe4f-83f7-4db4-8175-e467a0d1974a",
        "attributes": {
          "commodity_type": "physical",
          "description": "fruit",
          "name": "Apples",
          "sku": "45",
          "status": "live"
        },
        "relationships": {
          "children": {
            "data": [],
            "links": {
              "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/children"
            }
          },
          "component_products": {
            "data": [],
            "links": {
              "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/relationships/component_products"
            }
          },
          "files": {
            "data": [],
            "links": {
              "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/relationships/files"
            }
          },
          "main_image": {
            "data": null
          },
          "templates": {
            "data": [],
            "links": {
              "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/relationships/templates"
            }
          },
          "variations": {
            "data": [],
            "links": {
              "self": "/products/f809fe4f-83f7-4db4-8175-e467a0d1974a/relationships/variations"
            }
          }
        },
        "meta": {
          "created_at": "2022-02-01T12:50:33.347Z",
          "updated_at": "2022-02-01T12:50:33.347Z",
          "variation_matrix": {}
        }
      },
      {
        "type": "product",
        "id": "7f8f596a-2dc0-4e78-ba0d-3810eac6f86a",
        "attributes": {
          "commodity_type": "physical",
          "description": "fruit",
          "name": "Oranges",
          "sku": "46",
          "status": "live"
        },
        "relationships": {
          "children": {
            "data": [],
            "links": {
              "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/children"
            }
          },
          "component_products": {
            "data": [],
            "links": {
              "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/relationships/component_products"
            }
          },
          "files": {
            "data": [],
            "links": {
              "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/relationships/files"
            }
          },
          "main_image": {
            "data": null
          },
          "templates": {
            "data": [],
            "links": {
              "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/relationships/templates"
            }
          },
          "variations": {
            "data": [],
            "links": {
              "self": "/products/7f8f596a-2dc0-4e78-ba0d-3810eac6f86a/relationships/variations"
            }
          }
        },
        "meta": {
          "created_at": "2022-02-01T12:49:19.298Z",
          "updated_at": "2022-02-01T12:49:19.298Z",
          "variation_matrix": {}
        }
      }
    ]
  }
}
```

## Related Resources

### Concept

- [Bundles - Product Content Management](../../../concepts/pcm-bundles.md)

### API

- [Products API](../catalogs/releases/index.md)
- [Bundles API](bundles/create-a-bundle.md)
