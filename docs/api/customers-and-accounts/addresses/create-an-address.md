---
id: create-an-address
title: Create an Address
sidebar_label: Create an Address
---

## `POST` Create an Address

```http
https://api.moltin.com/v2/customers/:customerId/addresses
```

OR

```http
https://api.moltin.com/v2/accounts/:accountId/addresses
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `customerId` | Required (for customer addresses) | `string` | The **ID** for the customer you are adding an address for. |
| `accountId` | Required (for account addresses) | `string` | The **ID** for the account you are adding an address for. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Customer-Token` | Optional | `string` | A customer token used to access customer addresses implicitly. |
| `EP-Account-Management-Authentication-Token` | Optional | `string` | An account management authentication token that identifies the authenticated account member. |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Represents the type of object being returned. |
| `first_name` | Required | `string` | The first name of the recipient on this address. |
| `last_name` | Required | `string` | The last name of the recipient on this address. |
| `name` | Optional | `string` | The name under which this address is saved. You can display this name to the customer when you ask them to select from their saved addresses. |
| `phone_number` | Optional | `string` | A phone number for this address. |
| `instructions` | Optional | `string` | Any delivery instructions for this address. |
| `company_name` | Optional | `string` | The company name at this address. |
| `line_1` | Required | `string` | The first portion of the address, usually the street address. |
| `line_2` | Optional | `string` | The second portion of the address, usually an apartment or unit number. |
| `city` | Optional | `string` | The city for this address. |
| `county` | Required | `string` | The county for this address. |
| `postcode` | Required | `string` | The ZIP Code, Postcode, or other postal reference string for this delivery address. |
| `country` | Required | `string` | A two digit code for the country this address is in, expressed as per the ISO 3166-2 standard. |


## Create Customer Address With Customer Token

### Request example : Curl

```bash
curl -X POST https://api.moltin.com/v2/customers/:customerId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "X-Moltin-Customer-Token: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "address",
         "name": "Home",
         "first_name": "Ron",
         "last_name": "Swanson",
         "company_name": "",
         "phone_number": "(555) 555-1234",
         "line_1": "1 Sunny Street",
         "line_2": "Sunny Place",
         "city": "Sunny Town",
         "postcode": "SU33 1YY",
         "county": "Sunnyville",
         "country": "GB",
         "instructions": "Leave in the shed"
       }
     }'
```

### Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
    client_id: 'X',
})
const customer = 'XXXX'
const address = {
    name: "Home",
    first_name: "Ron",
    last_name: "Swanson",
    company_name: "",
    phone_number: "(555) 555-1234",
    line_1: "1 Sunny Street",
    line_2: "Sunny Place",
    city: "Sunny Town",
    postcode: "SU33 1YY",
    county: "Sunnyville",
    country: "GB",
    instructions: "Leave in the shed"
}
// Create a customer address
const customerToken = 'XXXX'
Moltin.CustomerAddresses.Create({
    customer: customer,
    body: address,
    token: customerToken
}).then(address => {
    // Do something
})
```

## Create Customer Address Without Customer Token

### Request example : Curl

```bash
curl -X POST https://api.moltin.com/v2/customers/:customerId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "address",
         "name": "Home",
         "first_name": "Ron",
         "last_name": "Swanson",
         "company_name": "",
         "phone_number": "(555) 555-1234",
         "line_1": "1 Sunny Street",
         "line_2": "Sunny Place",
         "city": "Sunny Town",
         "postcode": "SU33 1YY",
         "county": "Sunnyville",
         "country": "GB",
         "instructions": "Leave in the shed"
       }
     }'
```

### Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
    client_id: 'X',
    client_secret: 'X'
})
const customer = 'XXXX'
const address = {
    name: "Home",
    first_name: "Ron",
    last_name: "Swanson",
    company_name: "",
    phone_number: "(555) 555-1234",
    line_1: "1 Sunny Street",
    line_2: "Sunny Place",
    city: "Sunny Town",
    postcode: "SU33 1YY",
    county: "Sunnyville",
    country: "GB",
    instructions: "Leave in the shed"
}
// Create a customer address
const customerToken = 'XXXX'
Moltin.CustomerAddresses.Create({
    customer: customer,
    body: address,
}).then(address => {
    // Do something
})
```

## Create Account Address With Account Token

### Request example : Curl

```bash
curl -X POST https://api.moltin.com/v2/accounts/:accountId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "Ep-Account-Management-Authentication-Token: XXXX"
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "address",
         "name": "Home",
         "first_name": "Ron",
         "last_name": "Swanson",
         "company_name": "",
         "phone_number": "(555) 555-1234",
         "line_1": "1 Sunny Street",
         "line_2": "Sunny Place",
         "city": "Sunny Town",
         "postcode": "SU33 1YY",
         "county": "Sunnyville",
         "country": "GB",
         "instructions": "Leave in the shed"
       }
     }'
```

### Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
    client_id: 'X',
})
const account = 'XXXX'
const address = {
    name: "Home",
    first_name: "Ron",
    last_name: "Swanson",
    company_name: "",
    phone_number: "(555) 555-1234",
    line_1: "1 Sunny Street",
    line_2: "Sunny Place",
    city: "Sunny Town",
    postcode: "SU33 1YY",
    county: "Sunnyville",
    country: "GB",
    instructions: "Leave in the shed"
}

// Create an account address
const accountToken = 'XXXX'
Moltin.AccountAddresses.Create({
    account: account,
    body: address,
    token: accountToken
}).then(address => {
    // Do something
})
```

## Create Account Address Without Account Token

### Request example : Curl

```bash
curl -X POST https://api.moltin.com/v2/accounts/:accountId/addresses \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "address",
         "name": "Home",
         "first_name": "Ron",
         "last_name": "Swanson",
         "company_name": "",
         "phone_number": "(555) 555-1234",
         "line_1": "1 Sunny Street",
         "line_2": "Sunny Place",
         "city": "Sunny Town",
         "postcode": "SU33 1YY",
         "county": "Sunnyville",
         "country": "GB",
         "instructions": "Leave in the shed"
       }
     }'
```

### Request example : JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
    client_id: 'X',
    client_secret: 'X'
})
const account = 'XXXX'
const address = {
    name: "Home",
    first_name: "Ron",
    last_name: "Swanson",
    company_name: "",
    phone_number: "(555) 555-1234",
    line_1: "1 Sunny Street",
    line_2: "Sunny Place",
    city: "Sunny Town",
    postcode: "SU33 1YY",
    county: "Sunnyville",
    country: "GB",
    instructions: "Leave in the shed"
}

// Create an account address
Moltin.AccountAddresses.Create({
    account: account,
    body: address,
}).then(address => {
    // Do something
})
```

## Response

`201 Created`


```json
{
  "id": "5f8da740-6680-463e-b31c-190b2db4bf9d",
  "type": "address",
  "name": "Home",
  "first_name": "Ron",
  "last_name": "Swanson",
  "company_name": "",
  "phone_number": "(555) 555-1234",
  "line_1": "1 Sunny Street",
  "line_2": "Sunny Place",
  "city": "Sunny Town",
  "postcode": "SU33 1YY",
  "county": "Sunnyville",
  "country": "GB",
  "instructions": "Leave in the shed",
  "links": {
    "self":
      "https://api.moltin.com/v2/addresses/5f8da740-6680-463e-b31c-190b2db4bf9d"
  },
  "meta": {
    "timestamps": {
      "created_at": "2018-05-04T15:20:09.734Z",
      "updated_at": "2018-05-04T15:20:09.734Z"
    }
  }
}
```
