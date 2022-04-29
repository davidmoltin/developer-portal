---
id: paypal-express-payments
title: PayPal Express Payments
sidebar_label: PayPal Express
---

The PayPal Express integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- `refund`

## Step 1: `POST` Initialize payment

```http
https://api.moltin.com/v2/orders/:orderId/payments
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order you want to pay for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `method` | Required | `string` | The method value, such as `purchase` or `authorize`. |
| `gateway` | Required | `string` | Use the value `paypal_express`. |
| `options.return_url` | Required | `string` | The callback URL for PayPal to redirect the user in the case of approved payment. |
| `options.cancel_return_url` | Required | `string` | The callback URL for PayPal to redirect user in the case a cancelled payment. |
| `options.address_override` | Recommended | `integer` | Use the value `0`.  This parameter does not allow the user to change their shipping address when going through the PayPal checkout. |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "EC-xxxxxxxxxxxx",
        "gateway": "paypal_express",
        "amount": 100,
        "currency": "USD",
        "transaction_type": "authorize",
        "status": "pending",
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
            "timestamps": {
              "created_at": "2020-05-25T20:58:57Z",
              "updated_at": "2020-05-25T13:59:01-07:00"
            }
        },
        "client_parameters": {
          "token": "EC-xxxxxxxxxxxx",
          "redirect_url": "https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-xxxxxxxxxxxx"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
          "gateway": "paypal_express",
          "method": "authorize",
          "options" : {
            "return_url": "https://frontend.mystore.com/payment-approved",
            "cancel_return_url": "https://frontend.mystore.com/payment-cancelled",
            "address_override": 0
          }
        }
      }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const id = 'XXXX'
const payment = {
  gateway: 'paypal_express',
  method: 'authorize',
  options: {
    return_url: "https://frontend.mystore.com/payment-approved",
    cancel_return_url: "https://frontend.mystore.com/payment-cancelled",
    address_override: 0
  }
}
Moltin.Orders.Payment(id, payment).then(() => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Step 2: `POST` Complete the payment

```http
https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/confirm
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |
| `transactionId` | Required | `string` | The Universally Unique Identifier (UUID) of the transaction that was created in the previous step. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `method` | Required | `string` | The method value, such as `purchase` or `authorize`. |
| `gateway` | Required | `string` | Use the value `paypal_express`. |
| `payment` | Required | `string` | The PayerID URL parameter from the callback. |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxxxxx",
        "gateway": "paypal_express",
        "amount": 100,
        "currency": "USD",
        "transaction-type": "authorize",
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
            "timestamps": {
              "created_at": "2020-05-25T20:58:57Z",
              "updated_at": "2020-05-25T13:59:01-07:00"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/confirm \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
          "gateway": "paypal_express",
          "method": "purchase",
          "payment" : "xxxxxxxxxxx"
        }
      }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Step 3: `POST` Capture the payment authorization

```http
https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/capture
```

Use this endpoint to capture a transaction initiated by the shopper. Usually capture does not occur at the same time as authorization. For more information, see the [Capture](./index.md#capture) section.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |
| `transactionId` | Required | `string` | The Universally Unique Identifier (UUID) of the `authorize` transaction that was created in the previous step. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

<!-- Response -->

`201 Created`


```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxxxxx",
        "gateway": "paypal_express",
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
            "timestamps": {
              "created_at": "2020-05-25T20:58:57Z",
              "updated_at": "2020-05-25T13:59:01-07:00"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/transactions/:transactionId/capture \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
