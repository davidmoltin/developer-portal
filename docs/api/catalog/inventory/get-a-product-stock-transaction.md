---
id: get-a-product-stock-transaction
title: Get single Stock Transaction
sidebar_label: Get single Stock Transaction
---

## `GET` Get single Stock Transaction

```http
https://api.moltin.com/v2/inventories/:productId/transactions/:transactionId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID for the product you’re performing this action on. |
| `transactionId` | Required | `string` | The ID for the transaction created on the product. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |


<!-- Response -->

`200 OK`

Inside the response, you will get the specific stock transactions.

```json
{
  "data": {
      "id": "4638fc99-faec-416c-94e0-c3e0d11af436",
      "type": "stock-transaction",
      "action": "increment",
      "product_id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
      "quantity": 1,
      "timestamps": {
          "created_at": "2018-03-07 14:34:32 +0000 UTC"
      }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/inventories/:productId/transactions/:transactionId \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
