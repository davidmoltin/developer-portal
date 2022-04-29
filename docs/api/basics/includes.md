---
id: includes
title: Includes
sidebar_label: Includes
---

Using the `include` parameter, you can retrieve top-level resources, such as:

- Files or main image.
- Component product data.
- Key attribute data, such as SKU or slug.

The `include` query parameter you choose depends on the API endpoint you are using. You can use multiple values with the `include` query parameter. Use a comma to separate the values. For example, `include=files,main_image`.

:::note
There is a soft limit of five included resources per request, where one included resource can be `main_image`, another one can be `categories`, etc.
:::

Each supported resource includes its own documentation on the available resources that can be included.

If you request a resource to be included, but no related entities of that resource type exist for your store, the response does not have an "included" section present.

Similarly, if you request to include a resource that is not supported as an include by the endpoint, there is no "included" section in the response.

:::note
We recommend not to include a resource if the response for the resource may contain more than 100 entities.
:::

## `GET` Include Component Products in a Bundle

Use the `include-component_products` parameter in your storefront to get more information about the products in a product bundle, improving the buying experience for your shoppers. For more information, see [Create a Bundle](../../api/pcm/products/bundles/create-a-bundle.md). The following PCM API requests can use the `include=component_products` parameter.

- [Get a product in the latest catalog release](../../api/pcm/catalogs/releases/products/get-all-products-in-a-release.md)
- [Get all products in the latest release](../../api/pcm/catalogs/releases/products/get-a-product-in-a-release.md)
- [Get all products in a catalog](../../api/pcm/catalogs/releases/products/get-all-products.md)
- [Get a product in a catalog](../../api/pcm/catalogs/releases/products/get-a-product.md)
- [Get all products](../../api/pcm/catalogs/releases/products/get-all-products.md)
- [Get a product](../../api/pcm/catalogs/releases/products/get-a-product.md)

## Parameters for Include Component Products in a Bundle

### Path parameters for include component products in a bundle

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of a catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latest` for the most recently published version. |
| `productId` | Required | `string` | The unique identifier of a product. |

### Headers for include component products in a bundle

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Implicit Bearer token only returns products with `live` status. The token does not return products with `draft` status. |

### Query parameters for include component products in a bundle

| Key | Value | Description |
| :--- | :--- | :--- |
| `include` | `component_products` | The top-level resources, such as files or images, and key attribute data, such as SKU or slug, to return for component products in a product bundle. For more information, see [Create a Bundle](../../api/pcm/products/bundles/create-a-bundle.md). |

## Request Example for Include Component Products in a Bundle

### Curl

```bash
curl GET https://api.moltin.com/pcm/catalogs/:catalogId/releases/:releaseId/products/:productId?include=component_products
     -H "Authorization: Bearer XXXX" \
```

## Response Example for Include Component Products in a Bundle

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

## `GET` Include Product Files and Main Image in PCM Catalog View

The following examples use `include=files,main_image` parameter.

```http
https://api.moltin.com/pcm/catalog/products/:id?include=files,main_image
```

## Parameters for Include Files and Main Image

### Path parameters for include files and main image

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the product. |

### Headers parameters for include files and main image

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters for include files and main image

| Key | Value | Description |
| --- | --- | --- |
| `include` | `files` `main_image` |The top-level resources, such as files or images for products. |

## Request Example for Include Files and Main Image

```bash
curl GET https://api.moltin.com/pcm/catalog/products/:id?include=files,main_image \
     -H "Authorization: Bearer XXXX"
```

## Response Example For Include Files and Main Image

```json
"data": {
    "id": "35c870cb-bd9c-4c8a-ba09-e648f792c437",
    "type": "product",
    "attributes": {
      "base_product": false,
      "commodity_type": "physical",
      "created_at": "2021-12-07T10:39:29.104Z",
      "manage_stock": false,
      "name": "foo",
      "sku": "foo",
      "status": "live",
      "updated_at": "2021-12-07T10:55:18.789Z",
      "published_at": "2021-12-07T10:55:29.531Z"
    },
    "meta": {
      "catalog_id": "780a5c2b-1942-4e12-aa5f-c7863cc65274",
      "catalog_source": "pim"
    },
    "relationships": {
      "files": {
        "data": [
          {
            "created_at": "2021-12-07T10:55:18.789Z",
            "id": "5724f3df-9c91-4073-9a27-859ef8065198",
            "type": "file"
          }
        ]
      },
      "main_image": {
        "data": {
          "id": "5724f3df-9c91-4073-9a27-859ef8065198",
          "type": "main_image"
        }
      }
    }
  },
  "links": {
    "self": "/catalog/products/35c870cb-bd9c-4c8a-ba09-e648f792c437?include=files,main_image&"
  },
  "included": {
    "files": [
      {
        "type": "file",
        "id": "5724f3df-9c91-4073-9a27-859ef8065198",
        "link": {
          "href": "https://foo.com/foo.jpg"
        },
        "file_name": "",
        "mime_type": "",
        "file_size": 0,
        "public": true,
        "meta": {
          "dimensions": {},
          "timestamps": {
            "created_at": "2021-12-07T10:50:18.43Z"
          }
        },
        "links": {
          "self": "https://api.elasticpath.local/v2/files/5724f3df-9c91-4073-9a27-859ef8065198"
        }
      }
    ],
    "main_images": [
      {
        "type": "file",
        "id": "5724f3df-9c91-4073-9a27-859ef8065198",
        "link": {
          "href": "https://foo.com/foo.jpg"
        },
        "file_name": "",
        "mime_type": "",
        "file_size": 0,
        "public": true,
        "meta": {
          "dimensions": {},
          "timestamps": {
            "created_at": "2021-12-07T10:50:18.43Z"
          }
        },
        "links": {
          "self": "https://api.elasticpath.local/v2/files/5724f3df-9c91-4073-9a27-859ef8065198"
        }
      }
    ]
  }
}
```

## `GET` Include Category Products

```http
https://api.moltin.com/v2/categories/:id?include=products
```

## Parameters for Include Category Products

### Path parameters for include category products

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the category. |

### Headers for include category products


| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters for include category products


| Key | Value | Description |
| --- | --- | --- |
| `include` |  `products` | The categories for products. |

## Request Examples for Include Category Products

### Curl

```bash
curl GET https://api.moltin.com/v2/categories/:id?include=products \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
Moltin.Categories.With('products')
  .Get(id)
  .then(category => {
    // Do something
  })
```

## Response Example for Include Category Products

 `200 OK`

```json
{
    "data": {
        "id": "521e6029-0e0e-4704-b9a5-9777047ada04",
        "type": "category",
        "status": "live",
        "name": "Bright",
        "slug": "bright",
        "description": "Bright Category",
        "meta": {
            "timestamps": {
                "created_at": "2018-02-05T11:19:08+00:00",
                "updated_at": "2018-03-29T10:34:13+00:00"
            }
        },
        "relationships": {
            "products": {
                "data": [
                    {
                        "type": "product",
                        "id": "41c84c63-4d5e-4135-979f-e4b681b83dcc"
                    }
                ]
            }
        },
        "background_color": "#ded7cb",
        "background_image": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/61118f21-14a2-466c-a84b-c30b1f900cf9.png"
    },
    "included": {
        "products": [
            {
                "type": "product",
                "id": "41c84c63-4d5e-4135-979f-e4b681b83dcc",
                "name": "Orb",
                "slug": "orb",
                "sku": "ORLP100WHI",
                "manage_stock": false,
                "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
                "price": [
                    {
                        "amount": 45000,
                        "currency": "USD",
                        "includes_tax": true
                    }
                ],
                "status": "live",
                "commodity_type": "physical",
                "meta": {
                    "timestamps": {
                        "created_at": "2017-06-19T13:26:03+00:00",
                        "updated_at": "2018-03-13T13:43:57+00:00"
                    },
                    "display_price": {
                        "with_tax": {
                            "amount": 45000,
                            "currency": "USD",
                            "formatted": "$450.00"
                        },
                        "without_tax": {
                            "amount": 45000,
                            "currency": "USD",
                            "formatted": "$450.00"
                        }
                    },
                    "stock": {
                        "level": 500,
                        "availability": "in-stock"
                    }
                },
                "relationships": {
                    "files": {
                        "data": [
                            {
                                "type": "file",
                                "id": "61118f21-14a2-466c-a84b-c30b1f900cf9"
                            }
                        ]
                    },
                    "categories": {
                        "data": [
                            {
                                "type": "category",
                                "id": "521e6029-0e0e-4704-b9a5-9777047ada04"
                            }
                        ]
                    },
                    "main_image": {
                        "data": {
                            "type": "main_image",
                            "id": "61118f21-14a2-466c-a84b-c30b1f900cf9"
                        }
                    }
                }
            }
        ]
    }
}
```

## `GET` Include Product Main Image

```http
https://api.moltin.com/v2/products?include=main_image
```

## Parameters for Include Product Main Image

### Headers for include product main image

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters for include product main image

| Key | Value | Description |
| --- | --- | --- |
| `include` | `main_image` | The main images for products. |

## Request Examples for Include Product Main Image

### Curl

```bash
curl GET https://api.moltin.com/v2/products?include=main_image \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
Moltin.Products.With('main_image')
  .All()
  .then(products => {
    // Do something
  })
```

## Response Example for Include Product Main Image

 `200 OK`

```json
{
    "data": {
            "id": "933f837e-106d-412d-9724-e45a0760f404",
            "type": "product",
            "tax-code": null,
            "name": "Sourdough bread",
            "slug": "sourdough-bread",
            "sku": "SRD-BR-01",
            "manage_stock": false,
            "description": "Sourdough bread",
            "price": [
                {
                    "amount": 299,
                    "currency": "USD",
                    "includes_tax": true
                }
            ],
            "status": "live",
            "commodity_type": "physical",
            "meta": {
                "timestamps": {
                    "created_at": "2018-06-08T09:50:59+00:00",
                    "updated_at": "2019-05-21T02:05:42+00:00"
                },
                "display_price": {
                    "with_tax": {
                        "amount": 299,
                        "currency": "USD",
                        "formatted": "$2.99"
                    },
                    "without_tax": {
                        "amount": 299,
                        "currency": "USD",
                        "formatted": "$2.99"
                    }
                },
                "stock": {
                    "level": 0,
                    "availability": "out-stock"
                }
            },
                "main_image": {
                    "data": {
                        "type": "main_image",
                        "id": "147807c4-28a5-4a73-ac2a-4fe80b5f6791"
                    }
                }
            }
        }
    }
```

## `GET` Multiple Includes

```http
https://api.moltin.com/v2/products?include=main_image,category
```

## Parameters for Multiple Includes

### Headers for multiple includes

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters for multiple includes

| Key | Value | Description |
| --- | --- | --- |
| `include` | `main_images,category` | The main image and categories for products. |

## Request Examples for Multiple Includes

### Curl

```bash
curl GET https://api.moltin.com/v2/products?include=main_image,category \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
Moltin.Products.With(['main_image', 'category'])
  .All()
  .then(products => {
    // Do something
  })
```

## Response Example for Multiple Includes

`200 OK`

```json
{
    "data": {
            "id": "933f837e-106d-412d-9724-e45a0760f404",
            "type": "product",
            "tax-code": null
            "name": "Sourdough bread",
            "slug": "sourdough-bread",
            "sku": "SRD-BR-01",
            "manage_stock": false,
            "description": "Sourdough bread",
            "price": [
                {
                    "amount": 299,
                    "currency": "USD",
                    "includes_tax": true
                }
            ],
            "status": "live",
            "commodity_type": "physical",
            "meta": {
                "timestamps": {
                    "created_at": "2018-06-08T09:50:59+00:00",
                    "updated_at": "2019-05-21T02:05:42+00:00"
                },
                "display_price": {
                    "with_tax": {
                        "amount": 299,
                        "currency": "USD",
                        "formatted": "$2.99"
                    },
                    "without_tax": {
                        "amount": 299,
                        "currency": "USD",
                        "formatted": "$2.99"
                    }
                },
                "stock": {
                    "level": 0,
                    "availability": "out-stock"
                }
            },
            "relationships": {
                "categories": {
                    "data": [
                        {
                            "type": "category",
                            "id": "9ea28fde-cf9b-4316-9ed1-638e3461e0f5"
                        }
                    ]
                },
                "main_image": {
                    "data": {
                        "type": "main_image",
                        "id": "147807c4-28a5-4a73-ac2a-4fe80b5f6791"
                    }
                }
            }
        }
    }
```

## Related Resources

### Concept

- [Bundles - Product Content Management](../../concepts/pcm-bundles.md)

### API

- [Catalog Releases API](../../api/pcm/catalogs/releases/index.md)
- [Bundles API](../../api/pcm/products/bundles/create-a-bundle.md)
