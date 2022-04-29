---
id: braintree-payments
title: Braintree Payments
sidebar_label: Braintree
---

The Braintree integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- `refund`

## `POST` Pay by Customer ID

```http
https://api.moltin.com/v2/orders/:orderId/payments
```

This method allows you to bill a specific Braintree customer. Braintree is the default billing method in the customer’s account.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | `string` | The UUID of the order you want to pay for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `options.custom_fields` | Optional | `string` | Available for preconfigured custom fields in Braintree. |
| `payment` | Required | `string` | The Braintree Customer ID that you want to bill. |
| `method` | Required | `string` | `purchase` is the only payment method for Braintree. |
| `gateway` | Required | `string` | You use `braintree` in this case. |


<!-- Response -->

`201 Created`

Returns the updated transaction if the payment is successful

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "braintree",
        "gateway": "braintree",
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
curl -X POST https://api.moltin.com/v2/orders/:order_id/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
  "data": {
    "gateway": "braintree",
    "method": "purchase",
    "payment": BRAINTREE_CUSTOMER_ID
  }
}'
```

<!--JavaScript SDK-->

```javascript
Moltin.Orders.Payment('orderId', {
  gateway: "braintree",
  method: "purchase",
  payment: BRAINTREE_CUSTOMER_ID
}).then(() => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `POST` Pay by Token

```http
https://api.moltin.com/v2/orders/:orderId/payments
```

This endpoint allows you to pay for an order with a specific Braintree Payment Method Token. This is similar to the Customer ID payment type, but you can define a specific payment source to charge.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | `string` | The UUID of the order you want to pay for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `gateway` | Required | `string` | You use `braintree` in this case. |
| `method` | Required | `string` | `purchase` is the only payment method for Braintree. |
| `payment` | Required | `string` | The payment method token to charge. |
| `options.payment_method_token` | Required | `string` | You use `true` in this case. |
| `options.custom_fields` | Optional | `string` | Available for preconfigured custom fields in Braintree. |


<!-- Response -->

`201 Created`

Returns the updated transaction if the payment is successful.

```bash
{
  "data": {
    "id": "5c3eeef0-a5f4-4d04-b990-822521e8604d",
    "type": "transaction",
    "reference": "cz7dekqq",
    "gateway": "braintree",
    "amount": 10000,
    "currency": "GBP",
    "transaction-type": "purchase",
    "status": "complete",
    "relationships": {
      "order": {
        "data": {
          "type": "order",
          "id": "551ba7c2-7658-4abe-a530-6de0f6095010"
        }
      }
    },
    "meta": {
      "display_price": {
        "amount": 10000,
        "currency": "GBP",
        "formatted": "£100.00"
      },
      "created_at": "2019-07-02T10:05:42.11Z"
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/orders/:order_id/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
  "data": {
    "gateway": "braintree",
    "method": "purchase",
    "payment": BRAINTREE_PAYMENT_METHOD_TOKEN,
    "options": {
        "payment_method_token": true
    }
  }
}'
```

<!--JavaScript SDK-->

```javascript
Moltin.Orders.Payment('orderId', {
  gateway: "braintree",
  method: "purchase",
  payment: BRAINTREE_CUSTOMER_ID,
  options: {
      payment_method_token: BRAINTREE_PAYMENT_METHOD_TOKEN
  }
}).then(() => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `POST` Pay by Nonce

```http
https://api.moltin.com/v2/orders/:orderId/payments
```

This endpoint allows you to pay for an order with a previously created Braintree
Payment Method Nonce.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | `string` | The UUID of the order you want to pay for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `gateway` | Required | `string` | You use `braintree` in this case. |
| `method` | Required | `string` | `purchase` is the only payment method for Braintree. |
| `payment` | Required | `string` | The Braintree Payment Nonce ID. |
| `options.payment_method_nonce` | Required | `boolean` | Set this to `true`. |
| `options.custom_fields` | Optional | `string` | Available for preconfigured custom fields in Braintree. |


<!-- Response -->

`201 Created`

Returns the updated transaction if the payment is successful.

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "braintree",
        "gateway": "braintree",
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

<!--cUrl-->

```bash
curl -X POST https://api.moltin.com/v2/orders/:order_id/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
  "data": {
    "gateway": "braintree",
    "method": "purchase",
    "payment": BRAINTREE_PAYMENT_NONCE,
    "options": {
        "payment_method_nonce": true
    }
  }
}'
```

<!--END_DOCUSAURUS_CODE_TABS-->
