---
id: update-inventory
title: Update Inventory
sidebar_label: Update Inventory
---

## Action types

| Type | Description |
| :--- | :--- |
| `increment` | Use this when you receive stock from a supplier, making products available for purchase. |
| `decrement` | Use this when you want to remove stock from product inventory. |
| `allocate` | Use this when you want to allocate stock, normally to a reseller who sells on the stock. |
| `deallocate` | Use this when you want to deallocate any previously allocated stock. |

## `POST` Create a Stock Transaction for a Product

```http
https://api.moltin.com/v2/inventories/:productId/transactions
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID for the product you’re performing this action on. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | `integer` | The amount of stock affected by this transaction. |
| `action` | Required | `string` | `increment`, `decrement`, `allocate`, `deallocate`. |
| `type` | Required | `string` | Always `stock-transaction`. |

<!-- Response -->

`200 OK`

Example response body:

You get the following response for any of the `action` types.

```json
{
  "data": {
    "id": "da9a0008-d2c4-4a17-bbc6-5e0b2f9430aa",
    "type": "stock-transaction",
    "action": "increment",
    "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
    "quantity": 10,
    "timestamps": {
      "created_at": "2018-05-01 10:10:57 +0000 UTC"
    }
  }
}
```

`422: Unprocessable Entity`

You get the following error if you try to perform an action with incorrect amounts.

```json
{
  "errors": [
    {
      "status": 422,
      "title": "Cannot complete request",
      "detail":
        "Your request could not be completed due to insufficient stock levels"
    }
  ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/inventories/:productId/transactions \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "stock-transaction",
         "action": "increment",
         "quantity": 10
       }
     }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const productId = 'XXXX'
const quantity = 10
Moltin.Inventories.IncrementStock(productId, quantity).then(transaction => {
  // Do something
})
Moltin.Inventories.DecrementStock(productId, quantity).then(transaction => {
  // Do something
})
Moltin.Inventories.AllocateStock(productId, quantity).then(transaction => {
  // Do something
})
Moltin.Inventories.DeallocateStock(productId, quantity).then(transaction => {
  // Do something
})
```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X',
  client_secret: 'X'
})
const productId = 'XXXX'​
client
  .post(`inventories/${productId}/transactions`, {
    type: "stock-transaction",
    action: "increment",
    quantity: 10
  })
  .then(inventory => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
