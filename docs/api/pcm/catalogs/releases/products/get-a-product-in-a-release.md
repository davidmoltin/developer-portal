---
id: get-a-product-in-a-release
title: Get a Product in the Latest Release
sidebar_label: Get a Product
---

## `GET` Get a Product from a Catalog Release

```http
https://api.moltin.com/pcm/catalogs/:catalogId/releases/:releaseId/products/:productId
```

Returns a product from a published catalog. The product must be in `live` status.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

:::important
Use `releaseId` to delete a specific release than the latest catalog.
:::

You can also use `include=component_products` to retrieve top-level resources, such as:

- Files or main image.
- Component product data.
- Key attribute data, such as SKU or slug.

With this option, you can get more information about the products in a product bundle in your storefront, improving the buying experience for your shoppers. For more information, see [Create a Bundle](../../../../../api/pcm/products/bundles/create-a-bundle.md).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of a catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latest` for the most recently published version. |
| `productId` | Required | `string` | The unique identifier of a product. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Implicit Bearer token only returns products with `live` status. The token does not return products with `draft` status. |

### Query parameters

| Key | Value | Description |
| :--- | :--- | :--- |
| `include` | `component_products` | The top-level resources, such as files or main image, component product data and key attribute data, such as SKU or slug, to return for component products in a product bundle. For more information, see [Create a Bundle](../../../../../api/pcm/products/bundles/create-a-bundle.md). |

## Request Examples

### Curl

```bash
curl GET https://api.moltin.com/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/relationships/products/14e055d0-eebb-4090-8594-a0a7aeea2151 \
     -H "Authorization: Bearer XXXX"
```

## Response Example 1

```json
{
    "data": {
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
            },
            "updated_at": "2021-04-20T20:46:27.089Z",
            "published_at": "2021-04-20T21:06:03.009Z"
        },
        "meta": {
            "catalog_id": "d9b4c1c8-64e8-4b96-b713-7961cf30cacc",
            "catalog_source": "pim"
        }
    },
    "links": {
        "self": "/pcm/catalogs/d9b4c1c8-64e8-4b96-b713-7961cf30cacc/releases/latest/products/14e055d0-eebb-4090-8594-a0a7aeea2151"
    }
}
```

## Response Example 2

`200 OK`

```json
{
  "data": {
    "attributes": {
      "availability": "available",
      "base_product": false,
      "base_product_id": "cdf574bc-e36e-48fc-9eac-01c87839b285",
      "commodity_type": "physical",
      "components": [
        "string"
      ],
      "created_at": "1970-01-01T00:00:00.000",
      "description": "This is a product",
      "dimensions": "4x5x2",
      "manage_stock": false,
      "name": "Blue shirt",
      "price": {
         "USD": {
           "amount": 23500,
           "includes_tax": true
         },
         "CAD": {
           "amount": 23500,
           "includes_tax": true
         },
      },
      "product_hash": "string",
      "sku": "blue-shirt",
      "slug": "blue-shirt",
      "status": "live",
      "translations": [
        "string"
      ],
      "updated_at": "1970-01-01T00:00:00.000",
      "weight": {
        "g": 0,
        "kg": 0,
        "lb": 0,
        "oz": 0
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
      "children": [
        {
          "id": "5cd99ff5-bb12-404d-9f2b-33756cfa0315",
          "type": "product"
        }
      ],
      "custom-modifiers": [
        "string"
      ],
      "files": [
        "string"
      ],
      "main-image": "string",
      "modifiers": [
        "string"
      ],
      "product-spec": [
        "string"
      ],
      "variationOpts": [
        "string"
      ],
      "variations": [
        "string"
      ]
    },
    "type": "product"
  }
}
```

## Request Example with Include Component Products

### Curl

```bash
curl GET https://api.moltin.com/pcm/catalogs/:catalogId/releases/:releaseId/products/:productId?include=component_products
     -H "Authorization: Bearer XXXX" \
```

## Response Example

```json
{
  "data": {
    "id": "00efcc23-9bab-4bc7-9272-6b95111814e8",
    "type": "product",
    "attributes": {
      "base_product": false,
      "commodity_type": "physical",
      "components": {
        "games": {
          "max": 1,
          "min": 1,
          "name": "GamesOptions",
          "options": [
            {
              "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
              "quantity": 1,
              "type": "product"
            },
            {
              "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
              "quantity": 2,
              "type": "product"
            }
          ]
        },
        "toys": {
          "max": 2,
          "min": 2,
          "name": "ToysOptions",
          "options": [
            {
              "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82",
              "quantity": 1,
              "type": "product"
            },
            {
              "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
              "quantity": 1,
              "type": "product"
            },
            {
              "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
              "quantity": 1,
              "type": "product"
            }
          ]
        }
      },
      "created_at": "2022-02-10T11:23:23.690Z",
      "description": "Pim Bundle Option with Multiple Products 279777684760",
      "manage_stock": false,
      "manufacturer_part_num": "Product-mpn-279777684760",
      "name": "pimBundle1_279777684760",
      "price": {
        "USD": {
          "amount": 50000,
          "includes_tax": true
        }
      },
      "sku": "pimBundle1-279777684760",
      "status": "live",
      "upc_ean": "279777684760",
      "updated_at": "2022-02-10T11:23:29.066Z",
      "published_at": "2022-02-14T10:54:17.286Z"
    },
    "meta": {
      "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
      "catalog_source": "pim",
      "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891",
      "bundle_configuration": {
        "selected_options": {
          "games": {
            "d7b79eb8-19d8-45ea-86ed-2324a604dd9c": 1
          },
          "toys": {
            "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea": 1,
            "1aea6f97-f0d9-452c-b3c1-7fb5629ead82": 1
          }
        }
      },
      "display_price": {
        "with_tax": {
          "amount": 50000,
          "currency": "USD",
          "formatted": "$500.00"
        }
      }
    },
    "relationships": {
      "component_products": {
        "links": {
          "self": "/catalog/products/00efcc23-9bab-4bc7-9272-6b95111814e8/relationships/component_products"
        }
      }
    }
  },
  "links": {
    "self": "/catalog/products/00efcc23-9bab-4bc7-9272-6b95111814e8?include=component_products&"
  },
  "included": {
    "component_products": [
      {
        "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c",
        "type": "product",
        "attributes": {
          "base_product": false,
          "commodity_type": "physical",
          "created_at": "2022-02-10T11:23:15.781Z",
          "description": "Product 789651886289",
          "manage_stock": false,
          "manufacturer_part_num": "Product-mpn-789651886289",
          "name": "PIMProduct 789651886289",
          "price": {
            "USD": {
              "amount": 1000,
              "includes_tax": true
            }
          },
          "sku": "optSku1",
          "slug": "product-slug-789651886289",
          "status": "live",
          "upc_ean": "789651886289",
          "updated_at": "2022-02-10T11:23:25.283Z",
          "published_at": "2022-02-14T10:54:17.286Z"
        },
        "meta": {
          "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
          "catalog_source": "pim",
          "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891",
          "display_price": {
            "with_tax": {
              "amount": 1000,
              "currency": "USD",
              "formatted": "$10.00"
            }
          }
        }
      },
      {
        "id": "baaebdd6-490e-4834-a4a5-307602f70ea0",
        "type": "product",
        "attributes": {
          "base_product": false,
          "commodity_type": "physical",
          "created_at": "2022-02-10T11:23:18.638Z",
          "description": "Product 916762898972",
          "manage_stock": false,
          "manufacturer_part_num": "Product-mpn-916762898972",
          "name": "PIMProduct 916762898972",
          "sku": "optSku3",
          "slug": "product-slug-916762898972",
          "status": "live",
          "upc_ean": "916762898972",
          "updated_at": "2022-02-10T11:23:18.638Z",
          "published_at": "2022-02-14T10:54:17.286Z"
        },
        "meta": {
          "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
          "catalog_source": "pim",
          "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891"
        }
      },
      {
        "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82",
        "type": "product",
        "attributes": {
          "base_product": false,
          "commodity_type": "physical",
          "created_at": "2022-02-10T11:23:17.067Z",
          "description": "Product 711743382529",
          "manage_stock": false,
          "manufacturer_part_num": "Product-mpn-711743382529",
          "name": "PIMProduct 711743382529",
          "sku": "optSku2",
          "slug": "product-slug-711743382529",
          "status": "live",
          "upc_ean": "711743382529",
          "updated_at": "2022-02-10T11:23:17.067Z",
          "published_at": "2022-02-14T10:54:17.286Z"
        },
        "meta": {
          "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
          "catalog_source": "pim",
          "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891"
        }
      },
      {
        "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea",
        "type": "product",
        "attributes": {
          "base_product": false,
          "commodity_type": "physical",
          "created_at": "2022-02-10T11:23:20.791Z",
          "description": "Product 632550476778",
          "manage_stock": false,
          "manufacturer_part_num": "Product-mpn-632550476778",
          "name": "PIMProduct 632550476778",
          "sku": "optSku4",
          "slug": "product-slug-632550476778",
          "status": "live",
          "upc_ean": "632550476778",
          "updated_at": "2022-02-10T11:23:20.791Z",
          "published_at": "2022-02-14T10:54:17.286Z"
        },
        "meta": {
          "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
          "catalog_source": "pim",
          "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891"
        }
      },
      {
        "id": "de691397-2320-48fb-af7b-8b17d27a34a4",
        "type": "product",
        "attributes": {
          "base_product": false,
          "commodity_type": "physical",
          "created_at": "2022-02-10T11:23:22.108Z",
          "description": "Product 199667152140",
          "manage_stock": false,
          "manufacturer_part_num": "Product-mpn-199667152140",
          "name": "PIMProduct 199667152140",
          "sku": "optSku5",
          "slug": "product-slug-199667152140",
          "status": "live",
          "upc_ean": "199667152140",
          "updated_at": "2022-02-10T11:23:22.108Z",
          "published_at": "2022-02-14T10:54:17.286Z"
        },
        "meta": {
          "catalog_id": "e647ddae-474e-47df-9615-bfa01eb39a76",
          "catalog_source": "pim",
          "pricebook_id": "4a5f38b7-5984-4c52-9802-f947c5bd8891"
        }
      }
    ]
  }
}
```

## Related Resources

### Concept

- [Bundles - Product Content Management](../../../../../concepts/pcm-bundles.md)
- [Catalogs](../../../../../concepts/catalogs.md)

### API

- [Products API](../../../../../api/pcm/products/index.md)
- [Bundles API](../../../../../api/pcm/products/bundles/create-a-bundle.md)
