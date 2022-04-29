---
id: capture-a-transaction
title: Capture a Transaction
sidebar_label: Capture a Transaction
---

## `POST` Capture a transaction

```http
https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/capture
```

Use this endpoint to capture a previously authorized payment. In this step you can also pass in a custom reference, such as the payment reference from your chosen gateway.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `transactionId` | Required | `string` | The UUID of the transaction to capture. |
| `orderId` | Required | `string` | The UUID of the order. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `custom_reference` | Optional | `string` | A custom reference you can use to identify this transaction. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "bcafac29-c8ca-4293-822c-d1213e085c7c",
        "type": "transaction",
        "reference": "manual",
        "custom_reference": "my_custom_reference",
        "gateway": "manual",
        "amount": 60000,
        "currency": "GBP",
        "transaction_type": "capture",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "239f104c-0b56-433c-a5f8-b73349196269"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 60000,
                "currency": "GBP",
                "formatted": "£600.00"
            },
            "timestamps": {
                "created_at": "2020-02-17T13:24:42Z",
                "updated_at": "2020-02-17T13:24:45Z"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/transactions/:transaction_id/capture \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->

