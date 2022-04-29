---
id: create-a-customer
title: Create a Customer
sidebar_label: Create a Customer
---

## `POST` Create a customer

```http
https://api.moltin.com/v2/customers
```

Creates the customer.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Represents the type of object being returned. |
| `name` | Required | `string` | The full name of the customer. |
| `email` | Required | `string` | The customer email. |
| `password` | Optional | `string` | The customer password. |

## Request Example

### Request example : Curl

```bash
curl -X POST https://api.moltin.com/v2/customers \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "type": "customer",
       "name": "Ron Swanson",
       "email": "ron@swanson.com",
       "password": "mysecretpassword"
     }
   }'
```

### Request example : Javascript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const customer = {
    name: "Ron Swanson",
    email: "ron@swanson.com",
    password: "mysecretpassword",
}
Moltin.Customers.Create(customer).then(customer => {
  // Do something
})
```

## Response

`201 Created`


```json
{
    "data": {
        "type": "customer",
        "id": "fc4679bf-f8a8-4029-bc67-945f74b756a0",
        "name": "Ron Swanson+6",
        "email": "ron+6@swanson.com",
        "password": true
    }
}
```
