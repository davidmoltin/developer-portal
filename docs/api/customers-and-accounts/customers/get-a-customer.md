---
id: get-a-customer
title: Get a Customer
sidebar_label: Get a Customer
---

## `GET` Get by ID

```http
https://api.moltin.com/v2/customers/:id
```

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the requested Customer. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token used to access a customer implicitly. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  If there is no customer token the grant type must be `client_credentials`. |

## Without Customer Token

### Request example : Curl

```bash
curl -X GET https://api.moltin.com/v2/customers/:id \
     -H "Authorization: Bearer XXXX" \
```

### Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
Moltin.Customers.Get(id).then(customer => {
  // Do something
})
```

## With customer token

### Request example : Curl

```bash
curl -X GET https://api.moltin.com/v2/customers/:id \
     -H "X-Moltin-Customer-Token: XXXX"
     -H "Authorization: Bearer XXXX"
```

### Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const customerId = 'XXXX'
const customerToken = 'XXXX'
Moltin.Customers.Get({
  id: customerId,
  token: customerToken
}).then(customer => {
  // Do something
})
```

## Response

`200 OK`

```json
{
    "data": {
        "type": "customer",
        "id": "a23cc59d-a6c2-4c14-89c7-80fd7e4fc6c0",
        "name": "Ron Swanson",
        "email": "ronwanson@example.com",
        "password": true
    }
}
```
