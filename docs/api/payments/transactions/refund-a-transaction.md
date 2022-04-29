---
id: refund-a-transaction
title: Refund a Payment
sidebar_label: Refund a Payment
---

There are two ways to refund; through your payment gateway and mark it refunded in Commerce Manager, or directly through Commerce Manager or API.

- **Mark as Refunded**: You can manually mark a transaction as refunded. Before you can mark the order as refunded, you need to handle the actual refund on your side with your payment provider.
- **Refund** through Commerce Cloud: You can process a full or partial refund to a supported payment provider directly from Commerce Manager or API by providing the refund amount. When you start the refund process, the request is directly sent to the payment gateway.

## `POST` Refund a Full Payment

```http
https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/refund
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `transactionId` | Required | `string` | The UUID of the transaction you want to refund. |
| `orderId` | Required | `string` | The UUID of the order. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name     | Required | Type      | Description                                                                                                                                                                                                                                                                                                                                              |
|----------|----------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `amount` | Optional | `integer` | The amount value to be refunded. If this field is not provided, it will be considered as manual refund (Mark as Refunded) and the refund process must be manually handled via payment provider. If the amount value is same as payment value, then it will be treated as a full refund and sent to the payment provider to process refund automatically. |

<!--Response-->

`200 OK`

```json
{
    "data": {
        "id": "6112f8b0-ce4e-4ef8-a117-cb741654efa5",
        "type": "transaction",
        "reference": "B8PP0D6ABE57",
        "gateway": "<Your payment provider>",
        "amount": 10000,
        "refunded_amount": 10000,
        "refund_mechanism": "automatic",
        "currency": "USD",
        "transaction_type": "refund",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "1b031452-b048-43b9-a06c-feafe6e4bc31"
                }
            },
            "timestamps": {
                "created_at": "2020-07-03T21:07:45Z",
                "updated_at": "2020-07-03T14:09:12-07:00"
            }
        },
        "meta": {
            "display_price": {
                "amount": 10000,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "display_refunded_amount": {
                "total": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                }
            },
            "timestamps": {
                "created_at": "2020-07-03T21:10:14Z",
                "updated_at": "2020-07-03T14:11:59-07:00"
            }
        },
        "meta": {
            "display_price": {
                "amount": 10000,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "display_refunded_amount": {
                "total": {
                    "amount": 10000,
                    "currency": "USD",
                    "formatted": "$100.00"
                }
            },
            "timestamps": {
                "created_at": "2020-07-03T21:10:14Z",
                "updated_at": "2020-07-03T14:11:59-07:00"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- cURL - Mark as Refunded (manual)-->
When you manually mark as refunded, you do not need to provide any request body.

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/refund \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

<!-- cURL - Full Refund (automatic) -->
When you want to full refund the payment via payment provider automatically, you need to provide the amount value in request body.

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/refund \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
            "data": {
            "amount": <Total of captured amount>,
          }
        }'
```

<!-- cURL - Optional Parameters -->

>**Note**: Ensure that you use the correct `option` parameter for your payment provider. For example, PayPal Express uses the `note` parameter where you can provide comments about the refund.

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/refund \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
            "data": {
            "amount": <Total of captured amount>,
            "options": {
                "note": "PayPal Express users"
          }
        }'
```

<!--END_DOCUSAURUS_CODE_TABS-->


## `POST` Refund a Partial Payment

```http
https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/refund
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `transactionId` | Required | `string` | The UUID of the transaction you want to refund. |
| `orderId` | Required | `string` | The UUID of the order. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name     | Required | Type      | Description                                                                                                                                                              |
|----------|----------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `amount` | Required | `integer` | The amount value to be refunded. Partial refund requires the amount value to be specified. The request will be sent to the payment provider and processed automatically. |


<!--Response-->

`200 OK`

```json
{
    "data": {
        "id": "d1e0b7db-3112-47ee-aaf9-c96d6a94bbcc",
        "type": "transaction",
        "reference": "B8PP0D6494BD",
        "gateway": "<Your payment provider>",
        "amount": 10000,
        "refunded_amount": 5000,
        "refund_mechanism": "automatic",
        "currency": "USD",
        "transaction_type": "refund",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "09a46cb9-4eb7-49c9-97f1-e0c8085017a6"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 10000,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "display_refunded_amount": {
                "total": {
                    "amount": 5000,
                    "currency": "USD",
                    "formatted": "$50.00"
                }
            },
            "timestamps": {
                "created_at": "2020-06-26T23:06:02Z",
                "updated_at": "2020-06-26T23:06:50Z"
            }
        }
      }
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- cURL -->

>**Note**: Ensure that you list the amount of the refund in cents. For example, for a refund of $10.00, put `1000`. Also ensure that you use the correct `option` parameter for your payment provider. For example, PayPal Express uses the `note` parameter where you can provide comments about the refund.

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/refund \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $' {
            "data": {
            "amount": 5000,
            "options": {
                "note": "PayPal Express users"
           }
        }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
