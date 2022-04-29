---
id: authorize.net-payments
title: Authorize.net Payments
sidebar_label: Authorize.net
---

The Authorize.net integration supports the following payment methods:

- `authorize`
- `capture`
- `purchase`
- `refund`

## `POST` Pay by token

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
| `payment` | Required | `string` | The Authorize.net customer profile ID. |
| `method` | Required | `string` | `purchase`, `authorize`, `capture` |
| `gateway` | Required | `string` | You use `authorize_net` in this case. |
| `options.customer_payment_profile_id` | Required | `string` | The Authorize.net customer payment profile ID. |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxx",
        "gateway": "authorize_net",
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


```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
          "gateway": "authorize_net",
          "method": "purchase",
          "payment": "xxx",
          "options": {
            "customer_payment_profile_id": "xxx"
          }
        }
      }'
```
