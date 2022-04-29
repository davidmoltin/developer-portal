---
id: get-a-product-stock-transactions
title: Get a Productʼs Stock Transactions
sidebar_label: Get a Productʼs Stock Transactions
---

## `GET` Get All Product Stock Transactions

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


<!-- Response -->

`200 OK`

Inside the response, you get all stock transactions, including the initial stock amount on product create.

```json
{
  "data": [
    {
      "id": "0b0e5be3-b88b-4574-8316-f2871a803a8a",
      "type": "stock-transaction",
      "action": "create",
      "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
      "quantity": 1,
      "timestamps": {
        "created_at": "2018-02-05 14:00:11 +0000 UTC"
      }
    },
    {
      "id": "4638fc99-faec-416c-94e0-c3e0d11af436",
      "type": "stock-transaction",
      "action": "increment",
      "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
      "quantity": 1,
      "timestamps": {
        "created_at": "2018-03-07 14:34:32 +0000 UTC"
      }
    },
    {
      "id": "2edaa5f6-45fe-4272-96d4-3c745f80c26d",
      "type": "stock-transaction",
      "action": "decrement",
      "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
      "quantity": 1,
      "timestamps": {
        "created_at": "2018-03-07 14:44:21 +0000 UTC"
      }
    }
  ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/inventories/:productId/transactions \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const productId = 'XXXX'
Moltin.Inventories.GetTransactions(productId).then(transactions => {
  // Do something
})
```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X'
})
const productId = 'XXXX'​
client
  .get(`inventories/${productId}/transactions`)
  .then(inventory => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
