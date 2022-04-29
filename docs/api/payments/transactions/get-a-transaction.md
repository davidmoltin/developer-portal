---
id: get-a-transaction
title: Get a Transaction
sidebar_label: Get a Transaction
---

## `GET` Get a single transaction

```http
https://api.moltin.com/v2/orders/:orderId/transactions/:transctionId \
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you require transactions for. |
| `transactionId` | Required | `string` | The UUID of the transaction. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
            "id": "d9040c70-f7f3-4b7d-8422-09db00dd2da6",
            "type": "transaction",
            "reference": "manual",
            "gateway": "manual",
            "amount": 19000,
            "refunded_amount": 0,
            "currency": "USD",
            "transaction_type": "purchase",
            "status": "complete",
            "relationships": {
                "order": {
                    "data": {
                        "type": "order",
                        "id": "082a654a-8b8d-41cd-ba2a-e499a8e1e35d"
                    }
                }
            },
            "meta": {
                "display_price": {
                    "amount": 19000,
                    "currency": "USD",
                    "formatted": "$190.00"
                },
                "display_refunded_amount": {
                    "total": {
                        "amount": 0,
                        "currency": "USD",
                        "formatted": "$0.00"
                    }
                },
                "timestamps": {
                    "created_at": "2020-08-18T18:36:44Z",
                    "updated_at": "2020-08-18T18:36:45Z"
                }
            }
        }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/orders/:orderId/transactions/:transctionId \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
