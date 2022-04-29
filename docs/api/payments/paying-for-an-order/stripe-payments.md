---
id: stripe-payments
title: Stripe Payments
sidebar_label: Stripe
---

The Stripe integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- `refund`

## `POST` Pay by token or source

```http
https://api.moltin.com/v2/orders/:orderId/payments
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `options.idempotency_key` | Optional | `string` | The option to send a Stripe Idempotency Key. |
| `options.receipt_email` | Optional | `string` | The option to provide an email for Stripe receipts. Specify `live` mode to access this feature. |
| `payment` | Required | `string` | The Stripe token or source. |
| `options.customer` | Optional | `string` | The Stripe customer ID. This is required if you are sending a source. |
| `method` | Required | `string` | The required method, such as `purchase` or `authorize`. |
| `gateway` | Required | `string` | Specify `stripe` for the required gateway. |

<!-- Response -->

`201 Created`

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "stripe",
        "gateway": "stripe",
        "amount": 100,
        "currency": "USD",
        "transaction-type": "purchase",
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

<!--END_DOCUSAURUS_CODE_TABS-->

:::note
If you are passing a `source` instead of a `token`, you must also include the Stripe customer ID in the request.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
          "gateway": "stripe",
          "method": "purchase",
          "payment": "tok_visa",
          "options": {
            "receipt_email": "john@example.com"
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
  gateway: 'stripe',
  method: 'purchase',
  payment: 'tok_visa'
}
Moltin.Orders.Payment(id, payment).then(() => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

:::warning
We recommend that you use the token or source with Stripe payments. For more information about generating a token on the client-side, see the Stripe Elements documentation.
:::

## `POST` Pay by Stripe Connect

```http
https://api.moltin.com/v2/orders/:orderId/payments
```

Elastic Path Commerce Cloud also supports Stripe Connect. To access Stripe Connect, pass a destination through the options object.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The UUID of the order that you want to pay for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `options.destination` | Optional | `string` | The Stripe Connect Account ID. |
| `options.receipt_email` | Optional | `string` | The option to provide an email for Stripe receipts. Specify `live` mode to access this feature. |
| `payment` | Required | `string` | The Stripe token or source. |
| `method` | Required | `string` | The required method, such as, `purchase`, `authorize` or `capture`. |
| `gateway` | Required | `string` | Specify `stripe` for the required gateway. |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "stripe",
        "gateway": "stripe",
        "amount": 100,
        "currency": "USD",
        "transaction-type": "purchase",
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

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
          "gateway": "stripe",
          "method": "purchase",
          "payment": "tok_visa",
          "options": {
            "destination": "acct_XXX",
            "receipt_email": "john@example.com"
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
  gateway: 'stripe',
  method: 'purchase',
  payment: 'tok_visa'
  options: {
    destination: 'acct_XXX'
  }
}
Moltin.Orders.Payment(id, payment).then(() => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
