---
id: get-an-order
title: Get an Order
sidebar_label: Get an Order
---

## `GET` Get by ID

```http
https://api.moltin.com/v2/orders/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the order. |

### Headers

| Name | Required | Type | Description                                                                                                                                                                                                                                                       |
| --- | --- | --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.                                                                                                                                                                                                               |
| `include` | Optional | `string` | The information included, such as `items`,  `account`, or `account_member`.                                                                                                                                                                                       |

## Request Examples

:::note

* This request is only accessible to `client_credentials` token users with `Seller Admin` role.
* Non `client_credentials` token users cannot access this endpoint. See [Permissions](../../basics/authentication/permissions.md).

:::

### Curl

```bash
curl -X GET https://api.moltin.com/v2/orders/:id \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
Moltin.Orders.Get(id).then(orders => {
  // Do something
})
// Get order with items
Moltin.Orders.With('items').Get(id).then(orders => {
  // Do something
})
```

### Response

The following response contains accounts and account members in the `included` section:

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
      "first_name": "John",
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
        },
        "tax": {
          "amount": 0,
          "currency": "",
          "formatted": ""
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
      },
      "account": {
        "data": {
          "type": "account",
          "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68"
        }
      },
      "account_member": {
        "data": {
          "type": "account-member",
          "id": "c8c1c511-beef-4812-9b7a-9f92c587217c"
        }
      }
    },
    "included": {
      "accounts": [{
        "id": "b6e47478-7e7f-4127-b7e9-4a255564ae68",
        "type": "account",
        "name": "acc-name",
        "legal_name": "acc-legal-name",
        "registration_id": "00000000-0000-1000-8000-000f00000300"
      }],
      "account_members": [{
        "id": "c8c1c511-beef-4812-9b7a-9f92c587217c",
        "type": "account_member",
        "name": "John Smith",
        "email": "john@smith.com"
      }]
    }
  }
}
```
