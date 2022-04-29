---
id: bulk-add-to-cart
title: Bulk Add Items to Cart
sidebar_label: Bulk Add Items to Cart
---

With the bulk add feature, a shopper can add an array of items to their cart in one action, rather than adding each item one at a time. Shoppers can specify items by selecting one of the two options, by SKU or by product ID. This minimizes the time a shopper spends adding items to a cart. An example for bulk add is:

```json
{
"data": [
{
"type": "cart_item",
"sku": "sku-1",
"quantity": 1
},
{
"type": "cart_item",
"sku": "sku-2",
"quantity": 1
}
],
"options": {
"add_all_or_nothing": true
}
}
```

With the bulk add items to cart capability you can use one or more of the following cart actions in a transaction:

- [Add Product to Cart](add-product-to-cart.md)
- [Add Custom Item to Cart](add-custom-item-to-cart.md)
- [Add Promotion to Cart](add-promotion-to-cart.md)

:::important
The request body depends on the type of items that you want to add, such as promotion, custom or product.
:::

## `POST` Bulk Add to Cart

```text
https://api.moltin.com/v2/carts/:reference/items
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The system generated ID for the cart that the customer created. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-MOLTIN-CURRENCY` | Optional | `string` | Specifies the currency to be used for the products in the cart. If you do not specify a currency, the site’s default currency is used. This header only affects the first item added to the cart. |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |
| `X-Moltin-Customer-Token` | Required | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `catalog_rule` object. |
| `EP-Channel`  | Required | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `catalog_rule` object.
| `EP-Context-Tag` | Required | `string`| A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `catalog_rule` object. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `options.add_all_or_nothing` | Optional | `boolean`| When `true`, if an error occurs for any item, no items are added in the cart. When `false`, valid items are added in the cart and the items with errors are reported in the response. Default is `true`. |

**Custom Item Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of item, such as `custom_item`. |
| `name` | Required | `string` | Specifies the name of the item. |
| `sku` | Required | `string` | The SKU of the item. |
| `description` | Optional | `string` | Specifies the description of the item. |
| `quantity` | Required | `integer` | Specifies the amount of items to add to the cart. |
| `price.amount` | Required | `integer` | The price of the items. |
| `price.includes_tax` | Optional | `boolean` | If true, the price includes tax. The default is true. |
| `amount` | Required | `integer` | Specifies the total cost of the items added to the cart. |
| `tax` | Optional | `array` | Specifies a list of tax items to apply to the cart item. **Note**: Only administrators with client credentials can use this field. |

**Cart Item Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Specifies the type, such as `cart_item`. |
| `id` | Required | `string` | Specifies the ID of the item that you want to add to cart. **Note**: Ensure that you select only one of the two options, by SKU or by product id.|
| `sku` | Required | `string` | Specifies the item SKU that you want to add to cart. **Note**: Ensure that you select only one of the two options, by SKU or by product id. |

**Promotion Item Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Specifies the promotional item, such as `promotion_item`. |
| `code` | Required | `string` | Specifies the code for the promotional item, such as `promoCode`. |

<!--Product ID Request Example-->

```json
{
  "data": [
    {
      "type": "custom_item",
      "name": "My Custom Item",
      "sku": "my-custom-item",
      "description": "My first custom item!",
      "quantity": 1,
      "price": {
        "amount": 20000,
        "includes_tax": true
      }
    },
    {
      "type": "cart_item",
      "id": "838520de-b64a-4a0e-9d4c-f5bb53c83ec3",
      "quantity": 1
    },
    {
      "type": "promotion_item",
      "code": "5off"
    }
  ],
      "options": {
        "add_all_or_nothing": true
  }
}
```

<!--Product ID Response -->
`201 Created`

```json
{
    "data": [
        {
            "id": "931dcd00-7621-4bb6-95bb-12fc58b10d7d",
            "type": "custom_item",
            "name": "My Custom Item",
            "description": "My first custom item!",
            "sku": "my-custom-item",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        },
                        "value": {
                            "amount": 20000,
                            "currency": "USD",
                            "formatted": "$200.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2020-08-27T15:33:49Z",
                    "updated_at": "2020-08-27T15:33:49Z"
                }
            }
        },
        {
            "id": "2e5ad28c-e112-4a43-a148-37ce842f49c0",
            "type": "cart_item",
            "product_id": "838520de-b64a-4a0e-9d4c-f5bb53c83ec3",
            "name": "Item Name",
            "description": "item description",
            "sku": "item_sku",
            "slug": "item_slug",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": 5000,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": 5000,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {
                "product": "https://api.moltin.com/v2/products/838520de-b64a-4a0e-9d4c-f5bb53c83ec3"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 5000,
                            "currency": "USD",
                            "formatted": "$50.00"
                        },
                        "value": {
                            "amount": 5000,
                            "currency": "USD",
                            "formatted": "$50.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 5000,
                            "currency": "USD",
                            "formatted": "$50.00"
                        },
                        "value": {
                            "amount": 5000,
                            "currency": "USD",
                            "formatted": "$50.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2020-08-27T15:33:49Z",
                    "updated_at": "2020-08-27T15:33:49Z"
                }
            }
        },
        {
            "id": "1425513e-8446-4e84-a72b-8e77d47f906f",
            "type": "promotion_item",
            "promotion_id": "38ef7ac1-2066-4507-90c9-2de4b49d3717",
            "name": "$5 off",
            "description": "Promotion",
            "sku": "5off",
            "slug": "",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": false,
            "unit_price": {
                "amount": -500,
                "currency": "USD",
                "includes_tax": false
            },
            "value": {
                "amount": -500,
                "currency": "USD",
                "includes_tax": false
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        },
                        "value": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        },
                        "value": {
                            "amount": -500,
                            "currency": "USD",
                            "formatted": "-$5.00"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2020-08-27T15:33:49Z",
                    "updated_at": "2020-08-27T15:33:49Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 24500,
                "currency": "USD",
                "formatted": "$245.00"
            },
            "without_tax": {
                "amount": 24500,
                "currency": "USD",
                "formatted": "$245.00"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2020-08-27T15:33:49Z",
            "updated_at": "2020-08-27T15:33:49Z"
        },
        "messages": [
            {
                "source": {
                    "type": "promotion_item",
                    "id": "1425513e-8446-4e84-a72b-8e77d47f906f"
                },
                "title": "Promotion Added",
                "description": "Promotion has been added to cart."
            }
        ]
    }
}
```

<!--SKU Request Example-->

```json
{
  "data": [
     {
      "type": "cart_item",
      "sku": "sku-1",
      "quantity": 1
    },
    {
      "type": "cart_item",
      "sku": "sku-2",
      "quantity": 1
    }
  ],
    "options": {
        "add_all_or_nothing": true
  }
}
```

<!--SKU Response -->
`201 Created`

```json
{
    "data": [
        {
            "id": "0ac4ee19-7d8e-4b2f-b087-e4073ec801a4",
            "type": "cart_item",
            "product_id": "6648dde1-f7c1-4e77-9698-1fd541d121af",
            "name": "Product Name",
            "description": "description",
            "sku": "sku-1",
            "slug": "1",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": true,
            "unit_price": {
                "amount": 11,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 11,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://api.moltin.com/v2/products/6648dde1-f7c1-4e77-9698-1fd541d121af"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 11,
                            "currency": "USD",
                            "formatted": "$0.11"
                        },
                        "value": {
                            "amount": 11,
                            "currency": "USD",
                            "formatted": "$0.11"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 11,
                            "currency": "USD",
                            "formatted": "$0.11"
                        },
                        "value": {
                            "amount": 11,
                            "currency": "USD",
                            "formatted": "$0.11"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2020-10-23T23:15:24Z",
                    "updated_at": "2020-10-23T23:15:24Z"
                }
            }
        },
        {
            "id": "18c23ab3-92e5-4671-9c28-fbfcc8f7db18",
            "type": "cart_item",
            "product_id": "acede2a9-f763-453a-a3ae-cc4f66e6dca3",
            "name": "Product Name 2",
            "description": "Description 2",
            "sku": "sku-2",
            "slug": "2",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 1,
            "manage_stock": true,
            "unit_price": {
                "amount": 22,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 22,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://api.moltin.com/v2/products/acede2a9-f763-453a-a3ae-cc4f66e6dca3"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 22,
                            "currency": "USD",
                            "formatted": "$0.22"
                        },
                        "value": {
                            "amount": 22,
                            "currency": "USD",
                            "formatted": "$0.22"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 22,
                            "currency": "USD",
                            "formatted": "$0.22"
                        },
                        "value": {
                            "amount": 22,
                            "currency": "USD",
                            "formatted": "$0.22"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "USD",
                            "formatted": "$0.00"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2020-10-23T23:15:24Z",
                    "updated_at": "2020-10-23T23:15:24Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 33,
                "currency": "USD",
                "formatted": "$0.33"
            },
            "without_tax": {
                "amount": 33,
                "currency": "USD",
                "formatted": "$0.33"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2020-10-23T23:15:24Z",
            "updated_at": "2020-10-23T23:15:24Z"
        }
    }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--Product ID cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
    {
      "type": "custom_item",
      "name": "My Custom Item",
      "sku": "my-custom-item",
      "description": "My first custom item!",
      "quantity": 1,
      "price": {
        "amount": 20000,
        "includes_tax": true
      }
    },
    {
      "type": "cart_item",
      "id": "838520de-b64a-4a0e-9d4c-f5bb53c83ec3",
      "quantity": 1
    },
    {
      "type": "promotion_item",
      "code": "5off"
    }
  ],
      "options": {
        "add_all_or_nothing": true
  }
}
```
<!--SKU cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
    {
      "type": "custom_item",
      "name": "My Custom Item",
      "sku": "my-custom-item",
      "description": "My first custom item!",
      "quantity": 1,
      "price": {
        "amount": 20000,
        "includes_tax": true
      }
    },
    {
      "type": "cart_item",
      "sku": "sku-1",
      "quantity": 1
    },
    {
      "type": "promotion_item",
      "code": "5off"
    }
  ],
      "options": {
        "add_all_or_nothing": true
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Response Codes

You might encounter the following response codes, depending on the scenario:

- `400 Bad Request` - An error is found, such as insufficient available stock.
- `404 Not found` - The requested product could not be found.

:::note
For items added in bulk, error codes are returned for each item individually in a response.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--Bulk Add Error Example-->

`404 Not Found`

```json
{
  "errors": [
        {
            "status": 404,
            "title": "Product not found",
            "detail": "The requested product could not be found",
            "meta": {
                "sku": "sku-1"
            }
        },
        {
            "status": 400,
            "title": "Insufficient stock",
            "detail": "There is not enough stock to add Product 2 to your cart",
            "meta": {
                "id": "91b074df-2b2a-44ff-be2d-fdb4fa2ddfb4",
                "sku": "sku-2"
            }
        }
    ]
}
<!--END_DOCUSAURUS_CODE_TABS-->
