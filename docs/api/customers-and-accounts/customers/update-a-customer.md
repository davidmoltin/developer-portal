---
id: update-a-customer
title: Update a Customer
sidebar_label: Update a Customer
---

## `PUT` Update by ID

```http
https://api.moltin.com/v2/customers/:customerId
```

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `customerId` | Required | `string` | The ID for the customer requested. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token used to access customer implicitly. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. If there is no customer token the grant type must be `client_credentials.` |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of object being returned. |
| `name` | Optional | `string` | The full name of the customer. |
| `email` | Optional | `string` | The customer email. |
| `password` | Optional | `string` | The customer password. |

## Request Examples

### Request example : Curl

```bash
curl -X PUT https://api.moltin.com/v2/customers/:customerId \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "type": "customer",
       "email": "ron@swanson.com"
     }
}'
```

### Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
var customerId = 'XXXX'
var customer = {
    email: "ron@swanson.com"
}
Moltin.Customers.Update(customerId, customer).then((response) => {
  // Do something
});
```

## With customer token

### Request example : Curl

```bash
curl -X PUT https://api.moltin.com/v2/customers/:id \
     -H "X-Moltin-Customer-Token: XXXX"
     -H "Authorization: Bearer XXXX"
     -d $'{
     "data": {
       "type": "customer",
       "email": "ron@swanson.com"
     }
}'
```

## Without customer token

### Request example : Curl

```bash
curl -X PUT https://api.moltin.com/v2/customers/:id \
     -H "Authorization: Bearer XXXX"
     -d $'{
     "data": {
       "type": "customer",
       "email": "ron@swanson.com"
     }
}'
```

### Response

`200 OK`


```json
{
    "data": {
        "type": "customer",
        "id": "b57022cf-c80e-4b85-9fd1-5af3156d8adf",
        "name": "George example",
        "email": "ron@swanson.com",
        "password": true
    }
}
```
