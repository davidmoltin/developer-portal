---
id: bulk-update-in-cart
title: Bulk Update Items in Cart
sidebar_label: Bulk Update Items in Cart
---

With the bulk update feature, a shopper can update an array of items in their cart in one action, rather than updating each item one at a time. This minimizes the time a shopper spends updating items to a cart.

:::tip
To remove an item from the cart, update the cart quantity to zero.
:::

## `PUT` Bulk Update Items to Cart

```http
https://api.moltin.com/v2/carts/:cartID/items
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
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | Specifies the `cartitemID` of the item that you want to update in cart. |
| `quantity` | Required | `integer` | Specifies the amount of items to update in the cart. |
| `options.update_all_or_nothing` | Optional | `boolean`| When `true`, if an error occurs for any item, no items are updated in the cart. When `false`, valid items are updated in the cart and the items with errors are reported in the response. Default is `true`. |

<!--Request Example-->

```json
{
    "data": [
        {
            "id": "8a4f1c77-4435-4b83-b0e4-020af02999c3",
            "quantity": 2
        },
        {
            "id": "14f1d7f8-43ed-4e7a-92ea-d73ea605c338",
            "quantity": 3
        }
    ],
    "options": {
        "update_all_or_nothing": true
  }

}
```

<!-- Response -->
`200 OK`

```json
{
    "data": [
        {
            "id": "8a4f1c77-4435-4b83-b0e4-020af02999c3",
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
            "quantity": 2,
            "manage_stock": false,
            "unit_price": {
                "amount": 20000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 40000,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {},
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 19857,
                            "currency": "USD",
                            "formatted": "$198.57"
                        },
                        "value": {
                            "amount": 39714,
                            "currency": "USD",
                            "formatted": "$397.14"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 19857,
                            "currency": "USD",
                            "formatted": "$198.57"
                        },
                        "value": {
                            "amount": 39714,
                            "currency": "USD",
                            "formatted": "$397.14"
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
                    "created_at": "2020-09-30T16:12:39Z",
                    "updated_at": "2020-09-30T16:12:39Z"
                }
            }
        },
        {
            "id": "14f1d7f8-43ed-4e7a-92ea-d73ea605c338",
            "type": "cart_item",
            "product_id": "11d7ab79-c454-40f1-993c-1ad5ea424bfa",
            "name": "product2",
            "description": "product2",
            "sku": "product2_sku",
            "slug": "product2",
            "image": {
                "mime_type": "",
                "file_name": "",
                "href": ""
            },
            "quantity": 3,
            "manage_stock": false,
            "unit_price": {
                "amount": 10000,
                "currency": "USD",
                "includes_tax": true
            },
            "value": {
                "amount": 30000,
                "currency": "USD",
                "includes_tax": true
            },
            "links": {
                "product": "https://epcc-integration.global.ssl.fastly.net/v2/products/11d7ab79-c454-40f1-993c-1ad5ea424bfa"
            },
            "meta": {
                "display_price": {
                    "with_tax": {
                        "unit": {
                            "amount": 9929,
                            "currency": "USD",
                            "formatted": "$99.29"
                        },
                        "value": {
                            "amount": 29786,
                            "currency": "USD",
                            "formatted": "$297.86"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 9929,
                            "currency": "USD",
                            "formatted": "$99.29"
                        },
                        "value": {
                            "amount": 29786,
                            "currency": "USD",
                            "formatted": "$297.86"
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
                    "created_at": "2020-09-30T16:12:39Z",
                    "updated_at": "2020-09-30T16:12:39Z"
                }
            }
        },
        {
            "id": "a1648bb5-3d64-4ef1-ac6b-d2c316ee1bbc",
            "type": "promotion_item",
            "promotion_id": "8d7ed6cf-b9e3-4bc7-9944-2d43bbed3276",
            "name": "$5 off your order!",
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
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    },
                    "without_tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    },
                    "tax": {
                        "unit": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        },
                        "value": {
                            "amount": 0,
                            "currency": "",
                            "formatted": "0"
                        }
                    }
                },
                "timestamps": {
                    "created_at": "2020-09-30T16:23:14Z",
                    "updated_at": "2020-09-30T16:23:14Z"
                }
            }
        }
    ],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 69500,
                "currency": "USD",
                "formatted": "$695.00"
            },
            "without_tax": {
                "amount": 69500,
                "currency": "USD",
                "formatted": "$695.00"
            },
            "tax": {
                "amount": 0,
                "currency": "USD",
                "formatted": "$0.00"
            }
        },
        "timestamps": {
            "created_at": "2020-09-30T16:12:39Z",
            "updated_at": "2020-09-30T16:23:14Z",
            "expires_at": "2021-09-30T16:12:39Z"
        }
    }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->


<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
              {
                  "id": "8a4f1c77-4435-4b83-b0e4-020af02999c3",
                  "quantity": 2
              },
              {
                  "id": "14f1d7f8-43ed-4e7a-92ea-d73ea605c338",
                  "quantity": 3
              }
          ],
            "options": {
                "update_all_or_nothing": true
  }

}'
```

<!--END_DOCUSAURUS_CODE_TABS-->
