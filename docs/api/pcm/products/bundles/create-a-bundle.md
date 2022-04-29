---
id: create-a-bundle
title: Create a Bundle
sidebar_label: Create a Bundle
---

## `POST` Create a Bundle

```http
https://api.moltin.com/pcm/products
```

Creates a product bundle with the attributes that are defined in the body.

You can also create bundle options within a bundle. For example, if you want to sell gaming bundle where three items, PS5, PS5 controller, and a PS+ subscription, are mandatory purchase and the fourth item can be one of the four 4 game options.

## Parameters

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
|`attributes.components` | Required |`object` | Specifies the categories of the products included in the bundle. |

In the following example, the name of the bundle is `Favourite games bundle` and this bundle consists of products from the components `Consoles` and `Games`. Each component consists of a product from that component with details, such as the product name, product id, and quantity:

## Request Examples (curl)

### SKU-based bundles

```bash
curl -X POST https://api.moltin.com/pcm/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
  "data": {
    "type": "product",
    "attributes": {
      "name": "Favourite games bundle",
      "description": "All of your favourite DOOM games in one bundle",
      "sku": "doom-franchise",
      "mpn": "1234-5678-ABCD",
      "upc_ean": "123456",
      "commodity_type": "digital",
      "status": "live",
      "components": {
        "games": {
          "name": "Game 1",
          "options": [
            {
              "id": "7c0aa6df-0bd3-4d1f-b6f9-fd9358868869",
              "type": "product",
              "quantity": 1
            }
          ]
        },
        "posters": {
          "name": "Game 2",
          "options": [
            {
              "id": "f0ec8088-13e1-4a53-8b5d-3f4d973e05c9",
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

### SKU-less bundles

```bash
curl -X POST https://api.moltin.com/pcm/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
  "data": {
    "type": "product",
    "attributes": {
      "name": "Shower bundle",
      "description": "A bundle of shower products",
      "commodity_type": "physical",
      "status": "live",
      "components": {
        "shampoo": {
          "name": "Shampoo",
          "options": [
            {
              "id": "shampooProductID",
              "type": "product",
              "quantity": 1
            }
          ]
        },
        "conditioner": {
          "name": "Conditioner",
          "options": [
            {
              "id": "conditionerProductID",
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

### Response

`201 Created`

```json
{
    "data": {
        "type": "product",
        "id": "cc0a5d66-59cb-4a50-930b-9d1d42fc51b9",
        "attributes": {
            "commodity_type": "digital",
            "components": {
                "games": {
                    "name": "Game 1",
                    "options": [
                        {
                            "id": "7c0aa6df-0bd3-4d1f-b6f9-fd9358868869",
                            "type": "product",
                            "quantity": 1
                        }
                    ]
                },
                "posters": {
                    "name": "Game 2",
                    "options": [
                        {
                            "id": "f0ec8088-13e1-4a53-8b5d-3f4d973e05c9",
                            "type": "product",
                            "quantity": 1
                        }
                    ]
                }
            },
            "description": "All of your favourite DOOM games in one bundle",
            "mpn": "1234-5678-ABCD",
            "name": "Favourite games bundle",
            "sku": "doom-franchise",
            "status": "live",
            "upc_ean": "123456"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/children"
                }
            },
            "component_products": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/relationships/component_products"
                }
            },
            "files": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/relationships/files"
                }
            },
            "main_image": {
                "data": null
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/relationships/templates"
                }
            },
            "variations": {
                "data": [],
                "links": {
                    "self": "/products/cc0a5d66-59cb-4a50-930b-9d1d42fc51b9/relationships/variations"
                }
            }
        },
        "meta": {
            "created_at": "2022-02-03T19:11:25.307Z",
            "updated_at": "2022-02-03T19:11:25.307Z"
        }
    }
}
```

<!--
## Request Example with upper and lower limit for bundle option lists

You can add an upper limit to set the maximum number of options that customer can select in a component. You can add a limit to set the minimum number of options customers must select from a component. With this feature, you can add multiple options in a list for customers to select and limit the number of options that customers can select.

For example, if you want to offer a promotions to your customer where you want to sell 4 books for a single price and customer can select four books from 10 books. When you create the bundle, you can add all ten products to the bundle and explicitly specify that the minimum selections required is 4, and the maximum selections allowed is 4. The game options are Minecraft, Fifa2021, Battlefield, or Call of Duty.

The following code example provides request example with:

- Component `List 1` with the option `PS5`.
- Component `List 2` with the option `Controller`.
- Component `List 3` with the option `PS+``
- Component `List 4` with the options `Minecraft`, `Fifa`, `Battlefield`, and `Call of Duty` and set minimum and maximum limit to `1` as in the following example:

```bash
curl -X POST 'https://api.moltin.com/pcm/products' \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
  "data": {
        "type": "product",
        "attributes": {
        "name": "Favourite games bundle",
        "description": "All of your favourite DOOM games in one bundle",
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
```-->

## Related Resources

### Concept

- [Bundles - Product Content Management](../../../../concepts/pcm-bundles.md)

### API

- [Products API](../../../../api/pcm/catalogs/releases/index.md)
- [Bundles API](../../../../api/pcm/products/bundles/create-a-bundle.md)
