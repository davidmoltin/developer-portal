---
id: update-a-bundle
title: Update a Bundle
sidebar_label: Update a Bundle
---

## `PUT` Update a Bundle

```http
https://api.moltin.com/pcm/products/:productId
```

Updates the specified bundle.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the bundle. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Specifies the type of resource. You must use `product`. |
| `attributes.name` | Required | `string` | Specifies the product name to display to customers. |
| `attributes.commodity_type` | Required | `string` | Specifies the type of commodity, such as `physical` or `digital`. |
| `attributes.sku` | Required | `string` | Specifies the unique SKU of the product. |
| `attributes.slug` | Optional | `string` | Specifies a label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. No spaces or other characters are allowed. By default, product name is used as the slug. |
| `attributes.description` | Optional | `string` | Specifies the product description to display to customers. |
| `attributes.mpn` | Optional | `string` | Specifies MPN of the product. |
| `attributes.status` | Optional | `string` | Specifies the status of the bundle, such as `draft` or `live`. The default status is `draft`. |
| `attributes.upc_ean` | Optional | `string` | Specifies the UPC or EAN used to scan a product in a Point Of Sale (POS) system. |
| `attributes.locales` | Optional | `object` | Specifies the product details localized in the supported languages. For example, product names or descriptions. |
|`attributes.components` | Required |`object` | Specifies the categories of the products included in the bundle. Currently, you can only have one option for each component. |

In the following example, the name of the bundle is `Best games bundle` and this bundle consists of products from the components `games` and `posters`. Each component consists of a product from that component with details, such as the product name, product id, and quantity:

## Request Example

```bash
curl -X PUT https://api.moltin.com/pcm/products/:bundleId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
           "id": "8a0072c0-cedf-4e53-bdc4-a14a5d6389d5",
             "type": "product",
             "attributes": {
             "name": "Favourite games bundle",
             "description": "Favourite DOOM games in one bundle - Select one from four choices",
                 "sku": "fav23455",
                 "mpn": "1234-5678-ABCD00",
                 "upc_ean": "123456",
                 "commodity_type": "digital",
                 "status": "live",
                 "components": {
                     "List 1": {
                         "name": "PS5",
                         "options": [{
                             "id": "c7cf43f3-24c6-4523-8a24-3663b49b81aa",
                             "type": "product",
                             "quantity": 1
                             }]
                         },
                     "List 2": {
                         "name": "Controller",
                         "options": [{
                         "id": "e59ca559-37c7-4dc9-8a91-df94cd5700d3",
                         "type": "product",
                         "quantity": 1
                     }
                     ]
                             },
                     "List 3": {
                         "name": "PS+",
                         "options": [
                         {"id": "8ae2a7ea-f767-4af0-8486-ae203947ecc4",
                         "type": "product",
                         "quantity": 1}
                     ]
                 },
                     "List 4": {
                         "min": 1,
                         "max": 1,
                         "options": [
                             {
                                 "id": "549a291f-669c-47d0-bc04-60a3f18fc55c",
                                 "type": "product",
                                 "quantity": 1
                             },
                             {
                                 "id": "071e461c-22a2-42e0-9604-c345bbc9b85c",
                                 "type": "product",
                                 "quantity": 1
                             },
                             {
                                 "id": "633b8172-8aa9-4dbd-aa07-0dcefca3de74",
                                 "type": "product",
                                 "quantity": 1
                             },
                             {
                                 "id": "549a291f-669c-47d0-bc04-60a3f18fc55c",
                                 "type": "product",
                                 "quantity": 1
                             }
                             ]
                         }
                     }
                 }
             }
         }'
```

### Response Example

`200 OK`

```json
{
    "data": {
        "type": "product",
        "id": "8a0072c0-cedf-4e53-bdc4-a14a5d6389d5",
        "attributes": {
            "commodity_type": "digital",
            "components": {
                "List 1": {
                    "name": "PS5",
                    "options": [
                        {
                            "id": "c7cf43f3-24c6-4523-8a24-3663b49b81aa",
                            "type": "product",
                            "quantity": 1
                        }
                    ]
                },
                "List 2": {
                    "name": "Controller",
                    "options": [
                        {
                            "id": "e59ca559-37c7-4dc9-8a91-df94cd5700d3",
                            "type": "product",
                            "quantity": 1
                        }
                    ]
                },
                "List 3": {
                    "name": "PS+",
                    "options": [
                        {
                            "id": "8ae2a7ea-f767-4af0-8486-ae203947ecc4",
                            "type": "product",
                            "quantity": 1
                        }
                    ]
                },
                "List 4": {
                    "options": [
                        {
                            "id": "549a291f-669c-47d0-bc04-60a3f18fc55c",
                            "type": "product",
                            "quantity": 1
                        },
                        {
                            "id": "071e461c-22a2-42e0-9604-c345bbc9b85c",
                            "type": "product",
                            "quantity": 1
                        },
                        {
                            "id": "633b8172-8aa9-4dbd-aa07-0dcefca3de74",
                            "type": "product",
                            "quantity": 1
                        },
                        {
                            "id": "549a291f-669c-47d0-bc04-60a3f18fc55c",
                            "type": "product",
                            "quantity": 1
                        }
                    ],
                    "min": 1,
                    "max": 1
                },
                "headsets": {
                    "name": "Headsets",
                    "options": [
                        {
                            "id": "8ae2a7ea-f767-4af0-8486-ae203947ecc4",
                            "type": "product",
                            "quantity": 5
                        }
                    ]
                }
            },
            "description": "Favourite DOOM games in one bundle - Select one from four choices",
            "mpn": "1234-5678-ABCD00",
            "name": "Favourite games bundle",
            "sku": "fav23455",
            "slug": "PGH69345-B",
            "status": "live",
            "upc_ean": "123456"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "self": "/products/8a0072c0-cedf-4e53-bdc4-a14a5d6389d5/children"
                }
            },
            "component_products": {
                "data": [],
                "links": {
                    "self": "/products/8a0072c0-cedf-4e53-bdc4-a14a5d6389d5/relationships/component_products"
                }
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/8a0072c0-cedf-4e53-bdc4-a14a5d6389d5/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/8a0072c0-cedf-4e53-bdc4-a14a5d6389d5/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/8a0072c0-cedf-4e53-bdc4-a14a5d6389d5/relationships/variations"
                }
            }
        },
        "meta": {
            "created_at": "2022-02-03T19:38:00.602Z",
            "updated_at": "2022-02-03T19:43:21.487Z",
            "variation_matrix": {}
        }
    }
}
```

## Related Resources

### Concept

- [Bundles - Product Content Management](../../../../concepts/pcm-bundles.md)

### API

- [Products API](../../../../api/pcm/catalogs/releases/index.md)
- [Bundles API](../../../../api/pcm/products/bundles/create-a-bundle.md)
