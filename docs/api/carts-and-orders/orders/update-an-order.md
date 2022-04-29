---
id: update-an-order
title: Update an Order
sidebar_label: Update an Order
---

You can only update custom data, `shipping`, `shipping_address`, and `status` on orders. All other settings in the order object are immutable.

:::warning
You can update the `shipping`, `shipping_address`, and `status` of an order only if the order is not fulfilled. You can use the refund API to refund an order only if the payment status is `paid`. Cancelling an order does not automatically refund a payment. You must refund the orders manually.
:::

## `PUT` Update by ID

```http
https://api.moltin.com/v2/orders/:id
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the order you want to update. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | `order` |

### Request examples

#### Curl

```bash
curl -X PUT https://api.moltin.com/v2/orders/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
      "data": {
        "type": "order"
        "shipping_address": {
          "first_name": "John"
        }
      }
    }'
```

#### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
const order = {
  shipping_address: {
    first_name: "John"
  }
}
Moltin.Orders.Update(id, order).then(order => {
  // Do something
})
```

### Response example

`200 OK`

```json
{
  "data": {
    "type": "order",
    "id": "369ad4a4-ee67-48b0-x347-t50a6e61d83d",
    "status": "incomplete",
    "payment": "unpaid",
    "shipping": "unfulfilled",
    "customer": {
      "name": "Mr John Doe",
      "email": "johndoe@example.com"
    },
    "shipping_address": {
      "first_name": "James",
      "last_name": "Doe",
      "phone_number": "",
      "company_name": "",
      "line_1": "2nd Floor British India House",
      "line_2": "15 Carliol Square",
      "city": "Newcastle Upon Tyne",
      "postcode": "NE1 6UF",
      "county": "Tyne & Wear",
      "country": "United Kingdom",
      "instructions": ""
    },
    "billing_address": {
      "first_name": "John",
      "last_name": "Doe",
      "company_name": "",
      "line_1": "2nd Floor British India House",
      "line_2": "15 Carliol Square",
      "city": "Newcastle Upon Tyne",
      "postcode": "NE1 6UF",
      "county": "Tyne & Wear",
      "country": "United Kingdom"
    },
    "links": {},
    "meta": {
      "display_price": {
        "with_tax": {
          "amount": 237500,
          "currency": "USD",
          "formatted": "$2175.00"
        },
        "without_tax": {
          "amount": 237500,
          "currency": "USD",
          "formatted": "$2175.00"
        }
      },
      "timestamps": {
        "created_at": "2018-04-16T10:11:59.715Z",
        "updated_at": "2018-04-16T10:11:59.715Z"
      }
    },
    "relationships": {
      "items": {
        "data": [
          {
            "type": "item",
            "id": "de9fddf5-011b-4485-abf8-ebb8f53c39ff"
          }
        ]
      }
    }
  }
}
```

## `PUT` Cancel an Order by ID

 You can cancel an order only if the order is not fulfilled.

```http
https://api.moltin.com/v2/orders/:id
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the order you want to cancel. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of the resource. You must use `order`. |
| `status` | Required | `string` | The status of the order. You can only update the status to `cancelled`. |

### Request example - curl

```bash
curl -X PUT https://api.moltin.com/v2/orders/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
      "data": {
        "type": "order",
        "status": "cancelled"
        }
      }
    }'
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "order",
        "id": "50ca1ec7-cb04-45f0-b7a9-3613ef7c23d3",
        "status": "cancelled",
        "payment": "authorized",
        "shipping": "unfulfilled",
        "anonymized": false,
        "customer": {
            "name": "Andy",
            "email": "andy@example.com"
        },
        "shipping_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "phone_number": "123-456-1111",
            "company_name": "Elasticpath",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "v1v 1v1",
            "county": "BC",
            "country": "CA",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Andy",
            "last_name": "Dwyer",
            "company_name": "Elasticpath",
            "line_1": "1 Sunny Street",
            "line_2": "",
            "city": "Sunny Town",
            "postcode": "v1v 1v1",
            "county": "BC",
            "country": "CA"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "without_tax": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                },
                "tax": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                },
                "discount": {
                    "amount": 0,
                    "currency": "USD",
                    "formatted": "$0.00"
                }
            },
            "timestamps": {
                "created_at": "2022-02-16T00:30:24Z",
                "updated_at": "2022-02-16T00:32:25Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "df6f9b0c-b4b6-4fbe-b94c-c36bab71f121"
                    }
                ]
            }
        }
    }
}
```

## `PUT` Fulfill an Order by ID

You can fulfill a paid order only.

```http
https://api.moltin.com/v2/orders/:id
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the order that you want to fulfill. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of the resource. You must use `order`. |
| `shipping` | Required | `string` | The shipping status of the order. You can only update the `shipping` status to `fulfilled`. |

### Request example - curl

```bash
curl -X PUT https://api.moltin.com/v2/orders/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
      "data": {
        "type": "order",
        "shipping": "fulfilled"
        }
      }
    }'
```

### Response example

`200 OK`

```json
{
  "data": {
    "type": "order",
    "id": "369ad4a4-ee67-48b0-x347-t50a6e61d83d",
    "status": "complete",
    "payment": "paid",
    "shipping": "fulfilled",
    "customer": {
      "name": "Mr John Doe",
      "email": "johndoe@example.com"
    },
    "shipping_address": {
      "first_name": "James",
      "last_name": "Doe",
      "phone_number": "",
      "company_name": "",
      "line_1": "2nd Floor British India House",
      "line_2": "15 Carliol Square",
      "city": "Newcastle Upon Tyne",
      "postcode": "NE1 6UF",
      "county": "Tyne & Wear",
      "country": "United Kingdom",
      "instructions": ""
    },
    "billing_address": {
      "first_name": "John",
      "last_name": "Doe",
      "company_name": "",
      "line_1": "2nd Floor British India House",
      "line_2": "15 Carliol Square",
      "city": "Newcastle Upon Tyne",
      "postcode": "NE1 6UF",
      "county": "Tyne & Wear",
      "country": "United Kingdom"
    },
    "links": {},
    "meta": {
      "display_price": {
        "with_tax": {
          "amount": 237500,
          "currency": "USD",
          "formatted": "$2175.00"
        },
        "without_tax": {
          "amount": 237500,
          "currency": "USD",
          "formatted": "$2175.00"
        }
      },
      "timestamps": {
        "created_at": "2018-04-16T10:11:59.715Z",
        "updated_at": "2018-04-16T10:11:59.715Z"
      }
    },
    "relationships": {
      "items": {
        "data": [
          {
            "type": "item",
            "id": "de9fddf5-011b-4485-abf8-ebb8f53c39ff"
          }
        ]
      }
    }
  }
}
```
