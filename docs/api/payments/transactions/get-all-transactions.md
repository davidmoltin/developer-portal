---
id: get-all-transactions
title: Get all Transactions
sidebar_label: Get all Transactions
---

## `GET` Get all transactions

```http
https://api.moltin.com/v2/orders/:orderId/transactions
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order you require transactions for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": [
        {
            "id": "015a3452-29a2-45b4-8b0d-0d697b224d45",
            "type": "transaction",
            "reference": "manual",
            "gateway": "manual",
            "amount": 19000,
            "currency": "USD",
            "transaction_type": "capture",
            "status": "complete",
            "relationships": {
                "order": {
                    "data": {
                        "type": "order",
                        "id": "24f17926-af4b-439c-ae3c-13aa371bce77"
                    }
                }
            },
            "meta": {
                "display_price": {
                    "amount": 19000,
                    "currency": "USD",
                    "formatted": "$190.00"
                },
				"timestamps": {
					"created_at": "2018-12-17T16:19:53.379Z",
					"updated_at": "2018-12-17T16:19:53.379Z"
				}
            }
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/orders/:orderId/transactions \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
Moltin.Orders.Transactions(id).then(transactions => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
