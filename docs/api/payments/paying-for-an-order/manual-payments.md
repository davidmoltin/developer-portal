---
id: manual-payments
title: Manual Payments
sidebar_label: Manual Payments
---

By default, Elastic Path Commerce Cloud supports payment gateways using the Manual Payments integration. This integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- [`refund`](../transactions/refund-a-transaction.md)

:::important
If the total amount to pay for an order is zero, third-party payment gateways, such as Stripe, does not process the payment and returns an error asking the shopper to increase the amount to a value greater than or equal to 1. You must use configure manual payment to process this transaction in your store.
:::

## `POST` Initialize the payment

Use the following endpoint for shoppers to start an authorization or purchase transaction:

```http
https://api.moltin.com/v2/orders/:orderId/payments
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | Specifies the Universally Unique Identifier (UUID) of the order that you want to pay for. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `method` | Required | `string` | Specifies the transaction method, such as `purchase` or `authorize` |
| `gateway` | Required | `string` | Specifies the type of payment gateway. Use `manual` for the manual payment gateway. |

### Request examples

#### Curl

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "gateway": "manual",
         "method": "authorize"
       }
     }'
```

#### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const orderId = 'XXXX'
const payment = {
  gateway: 'manual',
  method: 'authorize'
}
Moltin.Orders.Payment(orderId, payment).then(() => {
  // Do something
})
```

#### Response

`201 Created`


```json
{
  "data": {
    "id": "180e3f07-d08a-470a-a577-a0118e0ddfaa",
    "type": "transaction",
    "reference": "manual",
    "gateway": "manual",
    "amount": 10000,
    "refunded_amount": 0,
    "currency": "USD",
    "transaction_type": "authorize",
    "status": "complete",
    "relationships": {
      "order": {
        "data": {
          "type": "order",
          "id": "a94b459a-c0cb-4a87-b342-8d997a1ff291"
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
          "amount": 0,
          "currency": "USD",
          "formatted": "$0.00"
        }
      },
      "timestamps": {
        "created_at": "2021-01-29T06:19:03Z",
        "updated_at": "2021-01-29T06:19:03Z"
      }
    }
  }
}
```

## `POST` Capture Transaction

Use the following endpoint to capture a transaction initiated by a shopper:

```http
https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/capture
```

Usually, capture does not occur at the same time as authorization. For more information, see the [Capture](./index.md#capture) section.

:::warning
The `capture` method requires [client_credentials](../../basics/authentication/client-credential-token.md#post-create-a-client-credential-token) authentication.
:::

### Parameters

#### Path parameters

|  Name | Required | Type | Description |
| --- | --- | --- | --- |
| `transactionId` | Required | `string` | The UUID of the previously-authorized transaction. |
| `orderId` | Required | `string` | The UUID of the order that you want to capture. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `method` | Required | `string` | The payment method. Use `capture` for this request.|
| `gateway` | Required | `string` | The type of payment gateway. Use `manual` for the manual payment gateway.  |

### Request examples

#### Curl

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/capture \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "gateway": "manual",
         "method": "capture"
       }
     }'
```

#### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const orderId = 'XXXX'
const transactionId = 'XXXX'
Moltin.Transactions.Capture({
  order: orderId,
  transaction: transactionId
}).then(() => {
  // Do something
})
```

#### Response

`201 Created`


```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "manual",
        "gateway": "manual",
        "amount": 100,
        "currency": "USD",
        "transaction-type": "capture",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 100,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "created_at": "2019-01-31T17:20:39.378Z"
        }
    }
}
```
