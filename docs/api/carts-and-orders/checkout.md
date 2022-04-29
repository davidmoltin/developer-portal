---
id: checkout
title: Checkout
sidebar_label: Checkout
---

After a [cart](carts/index.md) is ready to checkout, you can easily convert your cart to an [order](../carts-and-orders/orders/index.md). The cart remains and can be modified and checked out again if required.

After a successful Checkout is completed, the response contains the order.

:::note
• The cart currency is set when the first item is added to the cart.
• The product being added to the cart requires a price in the same currency as the other items in the cart. The API returns a `400` error if a price is not defined in the correct currency.
:::

:::warning
By default, carts are automatically deleted 7 days after the last update. You can change this setting by updating [cart settings](https://documentation.elasticpath.com/commerce-cloud/docs/api/advanced/settings/cart-settings.html).
:::

:::caution
There are a number of actions that happen to your [inventory](../inventory/index.md) when checking out and paying for an order. For more information please be sure to evaluate our [detailed article](https://www.moltin.com/developer/concepts/how-inventory-works) explaining the processes.
:::

## `POST` With Customer ID

```http
https://api.moltin.com/v2/carts/:reference/checkout
```

You can checkout a Cart with an existing customer ID

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `x-moltin-customer-token` | Optional | `string` | A customer token to access specific customer orders. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `customer.id` | Required | `string` | The ID of the customer. |
| `billing_address.first_name` | Required | `string` | First name of the billing recipient. |
| `billing_address.last_name` | Required | `string` | Last name of the billing recipient. |
| `billing_address.company_name` | Optional | `string` | Company name of the billing recipient. |
| `billing_address.line_1` | Required | `string` | First line of the billing address. |
| `billing_address.line_2` | Optional | `string` | Second line of the billing address. |
| `billing_address.postcode` | Required | `string` | Postcode of the billing address. |
| `billing_address.city` | Optional | `string` | Specifies the city of the billing address. |
| `billing_address.county` | Required | `string` | County, state, province, or region of the billing address. |
| `billing_address.country` | Required | `string` | Country of the billing address. |
| `shipping_address.first_name` | Required | `string` | First name of the shipping recipient. |
| `shipping_address.last_name` | Required | `string` | Last name of the shipping recipient. |
| `shipping_address.phone_number` | Optional | `string` | Phone number of the shipping recipient. |
| `shipping_address.company_name` | Optional | `string` | Company of the shipping recipient. |
| `shipping_address.line_1` | Required | `string` | First line of the shipping address. |
| `shipping_address.line_2` | Optional | `string` | Second line of the shipping address. |
| `shipping_address.city` | Optional | `string` | City of the shipping address. |
| `shipping_address.postcode` | Required | `string` | Post code of the shipping address. |
| `shipping_address.county` | Required | `string` | County / state/ region of the shipping address. |
| `shipping_address.country` | Required | `string` | Country of the shipping address. |
| `shipping_address.instructions` | Optional | `string` | Shipping instructions. |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "type": "order",
        "id": "c79a24c1-d639-4ac7-9eb5-3565efd9c84b",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "customer": {
            "name": "Ron Swanson",
            "email": "ronswanson@example.com"
        },
        "shipping_address": {
            "first_name": "Ron",
            "last_name": "Swanson",
            "phone_number": "",
            "company_name": "Moltin",
            "line_1": "British India House",
            "line_2": "15 Carliol Square",
            "city": "Newcastle upon Tyne",
            "postcode": "NE1 6UF",
            "county": "Tyne & Wear",
            "country": "UK",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Ron",
            "last_name": "Swanson",
            "company_name": "Moltin",
            "line_1": "British India House",
            "line_2": "15 Carliol Square",
            "city": "Newcastle upon Tyne",
            "postcode": "NE1 6UF",
            "county": "Tyne & Wear",
            "country": "UK"
        },
        "links": {},
        "meta": {
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
            "timestamps": {
                "created_at": "2021-06-03T22:47:33Z",
                "updated_at": "2021-06-03T22:47:33Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "5ff8e482-da0b-4c43-b9ae-a13d384f10bd"
                    },
                    {
                        "type": "item",
                        "id": "f8aefa8a-b57a-421e-9b4c-ae8f17e12371"
                    }
                ]
            }
        }
    },
    "included": {
        "items": [
            {
                "type": "order_item",
                "id": "5ff8e482-da0b-4c43-b9ae-a13d384f10bd",
                "quantity": 1,
                "product_id": "047e3569-6889-4feb-9a22-1de5722a1a54",
                "name": "Deck Shoe",
                "sku": "deck-shoe-001",
                "unit_price": {
                    "amount": 47500,
                    "currency": "USD",
                    "includes_tax": true
                },
                "value": {
                    "amount": 47500,
                    "currency": "USD",
                    "includes_tax": true
                },
                "links": {},
                "meta": {
                    "display_price": {
                        "with_tax": {
                            "unit": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            },
                            "value": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            }
                        },
                        "without_tax": {
                            "unit": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            },
                            "value": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
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
                        },
                        "discount": {
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
                        }
                    },
                    "timestamps": {
                        "created_at": "2021-06-03T22:47:33Z",
                        "updated_at": "2021-06-03T22:47:33Z"
                    }
                },
                "relationships": {
                    "cart_item": {
                        "data": {
                            "type": "cart_item",
                            "id": "4265f5f8-b616-45d6-90cf-d4d797777d72"
                        }
                    }
                }
            },
            {
                "type": "order_item",
                "id": "f8aefa8a-b57a-421e-9b4c-ae8f17e12371",
                "quantity": 1,
                "product_id": "7767cb41-dc76-4214-97e7-0595c4b58e18",
                "name": "5off",
                "sku": "5off",
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
                        },
                        "discount": {
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
                        "created_at": "2021-06-03T22:47:33Z",
                        "updated_at": "2021-06-03T22:47:33Z"
                    }
                },
                "relationships": {
                    "cart_item": {
                        "data": {
                            "type": "cart_item",
                            "id": "7d7f6c5c-74a8-40c3-8808-d08a825ba986"
                        }
                    }
                }
            }
        ]
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "customer": {
           "id": "c8c1c511-beef-4812-9b7a-9f92c587217c"
         },
         "billing_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "Moltin",
           "line_1": "2nd Floor British India House",
           "line_2": "15 Carliol Square",
           "city": "Newcastle upon Tyne",
           "postcode": "NE1 6UF",
           "county": "Tyne & Wear",
           "country": "UK"
         },
         "shipping_address": {
           "first_name": "John",
           "last_name": "Doe",
           "phone_number": "(555) 555-1234",
           "company_name": "Moltin",
           "line_1": "2nd Floor British India House",
           "line_2": "15 Carliol Square",
           "city": "Newcastle upon Tyne",
           "postcode": "NE1 6UF",
           "county": "Tyne & Wear",
           "country": "UK",
           "instructions": "Leave in porch"
         }
       }
    }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const reference = 'XXXX'
const customerId = 'XXXX'
const billing = {
  first_name: 'John',
  last_name: 'Doe',
  line_1: '2nd Floor British India House',
  line_2: '15 Carliol Square',
  city: 'Newcastle Upon Tyne',
  postcode: 'NE1 6UF',
  county: 'Tyne & Wear',
  country: 'United Kingdom'
}
Moltin.Cart(reference)
  .Checkout(customerId, billing, shipping)
  .then(order => {
    // Do something
  })
```

`shipping` is optional. `billing` is `shipping` if not provided.

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X'
})
​
const data = {
  "customer": {
     "id": "c8c1c511-beef-4812-9b7a-9f92c587217c"
   },
   "billing_address": {
     "first_name": "John",
     "last_name": "Doe",
     "company_name": "Moltin",
     "line_1": "2nd Floor British India House",
     "line_2": "15 Carliol Square",
     "city": "Newcastle upon Tyne",
     "postcode": "NE1 6UF",
     "county": "Tyne & Wear",
     "country": "UK"
   },
   "shipping_address": {
     "first_name": "John",
     "last_name": "Doe",
     "company_name": "Moltin",
     "phone_number": "(555) 555-1234",
     "line_1": "2nd Floor British India House",
     "line_2": "15 Carliol Square",
     "city": "Newcastle upon Tyne",
     "postcode": "NE1 6UF",
     "county": "Tyne & Wear",
     "country": "UK",
     "instructions": "Leave in porch"
   }
}
const reference = 'XXXX'
​
client
  .post(`carts/${reference}/checkout`, data)
  .then(order => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `POST` With Customer object

```http
https://api.moltin.com/v2/carts/:reference/checkout
```

You can checkout a Cart with an associated customer name and email.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `reference` | Required | `string` | The reference for the cart to checkout. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-MOLTIN-CURRENCY` | Optional | `string` | Specifies the currency to be used for the products in the cart. If you do not specify a currency, the site’s default currency is used. This header only affects the first item added to the cart. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `customer.email` | Required | `string` | Customer email address. |
| `customer.name` | Required | `string` | Full name of the customer. |
| `billing_address.first_name` | Required | `string` | First name of the billing recipient. |
| `billing_address.last_name` | Required | `string` | Last name of the billing recipient. |
| `billing_address.company_name` | Optional | `string` | Company name of the billing recipient. |
| `billing_address.line_1` | Required | `string` | First line of the billing address. |
| `billing_address.line_2` | Optional | `string` | Second line of the billing address. |
| `billing_address.city` | Optional | `string` | city of the billing address. |
| `billing_address.postcode` | Required | `string` | Postcode of the billing address. |
| `billing_address.county` | Required | `string` | County / state / region of the shipping address. |
| `billing_address.country` | Required | `string` | Country of the billing address. |
| `shipping_address.first_name` | Required | `string` | First name of the shipping recipient. |
| `shipping_address.last_name` | Required | `string` | Last name of the shipping recipient. |
| `shipping_address.company_name` | Optional | `string` | Company name of the shipping recipient. |
| `shipping_address.phone_number` | Optional | `string` | Phone number of the shipping recipient. |
| `shipping_address.line_1` | Required | `string` | First line of the shipping address. |
| `shipping_address.line_2` | Optional | `string` | Second line of the shipping address. |
| `shipping_address.city` | Optional | `string` | City of the shipping address. |
| `shipping_address.postcode` | Required | `string` | Postcode of the shipping address. |
| `shipping_address.county` | Required | `string` | County / state / region of the shipping address. |
| `shipping_address.country` | Required | `string` | Country of the shipping address. |
| `shipping_address.instructions` | Optional | `string` | Shipping instructions. |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "type": "order",
        "id": "5a9b6d0a-3e88-43d5-a12e-e5dedbac517d",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "customer": {
            "name": "Ron Swanson",
            "email": "ronswanson@example.com"
        },
        "shipping_address": {
            "first_name": "Ron",
            "last_name": "Swanson",
            "phone_number": "",
            "company_name": "Moltin",
            "line_1": "British India House",
            "line_2": "15 Carliol Square",
            "city": "Newcastle upon Tyne",
            "postcode": "NE1 6UF",
            "county": "Tyne & Wear",
            "country": "UK",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Ron",
            "last_name": "Swanson",
            "company_name": "Moltin",
            "line_1": "British India House",
            "line_2": "15 Carliol Square",
            "city": "Newcastle upon Tyne",
            "postcode": "NE1 6UF",
            "county": "Tyne & Wear",
            "country": "UK"
        },
        "links": {},
        "meta": {
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
                },
                "tax": {
                    "amount": 0,
                    "currency": "",
                    "formatted": ""
                }
            },
            "timestamps": {
                "created_at": "2021-06-03T22:47:33Z",
                "updated_at": "2021-06-03T22:47:33Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "5ff8e482-da0b-4c43-b9ae-a13d384f10bd"
                    },
                    {
                        "type": "item",
                        "id": "f8aefa8a-b57a-421e-9b4c-ae8f17e12371"
                    }
                ]
            }
        }
    },
    "included": {
        "items": [
            {
                "type": "order_item",
                "id": "5ff8e482-da0b-4c43-b9ae-a13d384f10bd",
                "quantity": 1,
                "product_id": "047e3569-6889-4feb-9a22-1de5722a1a54",
                "name": "Deck Shoe",
                "sku": "deck-shoe-001",
                "unit_price": {
                    "amount": 47500,
                    "currency": "USD",
                    "includes_tax": true
                },
                "value": {
                    "amount": 47500,
                    "currency": "USD",
                    "includes_tax": true
                },
                "links": {},
                "meta": {
                    "display_price": {
                        "with_tax": {
                            "unit": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            },
                            "value": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            }
                        },
                        "without_tax": {
                            "unit": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
                            },
                            "value": {
                                "amount": 47500,
                                "currency": "USD",
                                "formatted": "$475.00"
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
                        },
                        "discount": {
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
                        }
                    },
                    "timestamps": {
                        "created_at": "2021-06-03T22:47:33Z",
                        "updated_at": "2021-06-03T22:47:33Z"
                    }
                },
                "relationships": {
                    "cart_item": {
                        "data": {
                            "type": "cart_item",
                            "id": "4265f5f8-b616-45d6-90cf-d4d797777d72"
                        }
                    }
                }
            },
            {
                "type": "order_item",
                "id": "f8aefa8a-b57a-421e-9b4c-ae8f17e12371",
                "quantity": 1,
                "product_id": "7767cb41-dc76-4214-97e7-0595c4b58e18",
                "name": "5off",
                "sku": "5off",
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
                        },
                        "discount": {
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
                        "created_at": "2021-06-03T22:47:33Z",
                        "updated_at": "2021-06-03T22:47:33Z"
                    }
                },
                "relationships": {
                    "cart_item": {
                        "data": {
                            "type": "cart_item",
                            "id": "7d7f6c5c-74a8-40c3-8808-d08a825ba986"
                        }
                    }
                }
            }
        ]
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:reference/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "customer": {
           "email": "john@moltin.com",
           "name": "John Doe"
         },
         "billing_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "Moltin",
           "line_1": "2nd Floor British India House",
           "line_2": "15 Carliol Square",
           "city": "Newcastle upon Tyne",
           "postcode": "NE1 6UF",
           "county": "Tyne & Wear",
           "country": "UK"
         },
         "shipping_address": {
           "first_name": "John",
           "last_name": "Doe",
           "company_name": "Moltin",
           "phone_number": "(555) 555-1234",
           "line_1": "2nd Floor British India House",
           "line_2": "15 Carliol Square",
           "city": "Newcastle upon Tyne",
           "postcode": "NE1 6UF",
           "county": "Tyne & Wear",
           "country": "UK",
           "instructions": "Leave in porch"
         }
       }
    }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const reference = 'XXXX'
const customer = {
  email: 'john@moltin.com',
  name: 'John Doe'
}
const billing = {
  first_name: 'John',
  last_name: 'Doe',
  line_1: '2nd Floor British India House',
  line_2: '15 Carliol Square',
  city: 'Newcastle Upon Tyne',
  postcode: 'NE1 6UF',
  county: 'Tyne & Wear',
  country: 'United Kingdom'
}
const shipping = {
  first_name: 'John',
  last_name: 'Doe',
  line_1: '2nd Floor British India House',
  line_2: '15 Carliol Square',
  city: 'Newcastle Upon Tyne',
  postcode: 'NE1 6UF',
  county: 'Tyne & Wear',
  country: 'United Kingdom'
}
Moltin.Cart(reference)
  .Checkout(customer, billing, shipping)
  .then(order => {
    // Do something
  })
```

`shipping` is optional. `billing` is `shipping` if not provided.

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X'
})
​
const data = {
  "customer": {
     "email": "john@moltin.com",
     "name": "John Doe"
   },
   "billing_address": {
     "first_name": "John",
     "last_name": "Doe",
     "company_name": "Moltin",
     "line_1": "2nd Floor British India House",
     "line_2": "15 Carliol Square",
     "city": "Newcastle upon Tyne",
     "postcode": "NE1 6UF",
     "county": "Tyne & Wear",
     "country": "UK"
   },
   "shipping_address": {
     "first_name": "John",
     "last_name": "Doe",
     "company_name": "Moltin",
     "phone_number": "(555) 555-1234",
     "line_1": "2nd Floor British India House",
     "line_2": "15 Carliol Square",
     "city": "Newcastle upon Tyne",
     "postcode": "NE1 6UF",
     "county": "Tyne & Wear",
     "country": "UK",
     "instructions": "Leave in porch"
   }
}
const reference = 'XXXX'
​
client
  .post(`carts/${reference}/checkout`, data)
  .then(order => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Next steps

After a Cart has been converted to an Order using either of the previous methods, you most likely want to capture payment for order.

- [Paying for an order](../payments/paying-for-an-order/index.md)
