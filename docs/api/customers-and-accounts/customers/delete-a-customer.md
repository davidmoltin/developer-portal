---
id: delete-a-customer
title: Delete a Customer
sidebar_label: Delete a Customer
---

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/customers/:id
```

Deletes a customer by ID.

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the Customer to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token used to access customer implicitly. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  If there is no customer token the grant type must be `client_credentials`. |

## Delete by ID

### Request example : Curl

```bash
curl -X DELETE https://api.moltin.com/v2/customers/:id \
     -H "Authorization: Bearer XXXX"
```

### Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
Moltin.Customers.Delete(id).then(response => {
  // Do something
})
```

## Delete With Customer Token

### Request example : Curl

```bash
curl -X DELETE https://api.moltin.com/v2/customers/:id \
     -H "X-Moltin-Customer-Token: XXXX"
     -H "Authorization: Bearer XXXX"
```

## Delete Without Customer Token

### Request example : Curl

```bash
curl -X DELETE https://api.moltin.com/v2/customers/:id \
     -H "Authorization: Bearer XXXX"
```

### Response

`204 No Content`
