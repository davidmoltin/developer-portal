---
id: cybersource-payments
title: CyberSource Payments
sidebar_label: CyberSource
---

The CyberSource integration supports the following payment methods:

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

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `payment` | Required | `string` | The CyberSource token. |
| `method` | Optional | `string` | Enter `purchase` or `authorize`. |
| `gateway` | Optional | `string` | Enter `cyber_source`. |

<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "xxx",
        "gateway": "cyber_source",
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

<!-- cURL -->

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
          "gateway": "cyber_source",
          "method": "purchase",
          "payment": ";;;;;;11234FS5353FGFRSS2562"
        }
      }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Using Merchant Defined Fields

```bash
curl -X POST https://api.moltin.com/v2/orders/:orderId/payments \
     -H "Authorization: Bearer XXXX" \
     -d $'{
    "data": {
        "gateway": "cyber_source",
        "method": "purchase",
        "payment": ";;;;;;A4A0599983621A96E05341588999E7DA"
        "options": {
            "mdd_field_1": "one thing",
            "mdd_field_2": "and another",
            "mdd_field_3": "and even more",
            "mdd_field_4": "and on.."
        }
    }
}'
```
