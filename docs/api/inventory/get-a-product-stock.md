---
id: get-a-product-stock
title: Get a Productʼs Stock
sidebar_label: Get a Productʼs Stock
---

## `GET` Get Stock by Product ID

```http
https://api.moltin.com/v2/inventories/:productId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID for the product you require stock. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

```json
{
  "data": {
    "id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
    "type": "stock",
    "total": 20,
    "available": 20,
    "allocated": 0
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/inventories/:productId \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const productId = 'XXXX'
Moltin.Inventories.Get(productId).then(inventories => {
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
  .get(`inventories/${productId}`)
  .then(inventory => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
