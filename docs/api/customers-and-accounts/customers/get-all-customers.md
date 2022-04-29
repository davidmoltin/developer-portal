---
id: get-all-customers
title: Get all Customers
sidebar_label: Get all Customers
---

## `GET` Get a list of all customers

```http
https://api.moltin.com/v2/customers
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  Grant type must be `client_credentials`. |

### Query Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `filter` | Optional | `string` | Filter the results. For more information, see [Filtering customers](index.md#filtering). |

:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md).
:::

## Request example : Curl

```bash
curl -X GET https://api.moltin.com/v2/customers \
     -H "Authorization: Bearer XXXX"
```

## Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Customers.All().then(customer => {
  // Do something
})
//Filter example
Moltin.Customers.Filter({eq: {email: 'jim@bob.com'}}).All().then(customers => {
  // Do something
})
```

## Response

`200 OK`

```json
{
    "data": [
        {
            "type": "customer",
            "id": "2479c9b3-615d-4ebc-a99d-87ffc67d1955",
            "name": "Ron Swanson",
            "email": "ron@swanson.com",
            "password": true
        },
        {
            "type": "customer",
            "id": "7746d533-fd64-446f-ae8c-f8e07f3ed9fd",
            "name": "Ron Swanson_",
            "email": "ron_@swanson.com",
            "password": true
        }
    ],
    "meta": {
        "page": {
            "limit": 10,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 2
        }
    }
}
```
