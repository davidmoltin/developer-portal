---
id: cardconnect-payments
title: CardConnect Payments
sidebar_label: CardConnect Payments
---

The [CardConnect](https://cardconnect.com) integration supports the following payment methods:

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
| `orderId` | Required | `string` | The Universally Unique Identifier (UUID) of the order that you want to pay for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `gateway` | Required | `string` | Enter `card_connect`. |
| `method` | Required | `string` | Enter `purchase`, `authorize`, `capture` or `refund`. |
| `payment` | Required | `string` | Enter `account_id`, `profile_id` from CardPointe API. For example, 1&#124;16178397535388255208. |

<!-- Response -->

`201 Created`

```json
{
    "data": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "type": "transaction",
        "reference": "card_connect",
        "gateway": "card_connect",
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
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "gateway": "card_connect",
        "method": "purchase",
        "payment": "1|16178397535388255208"
      }
    }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const orderId = 'XXXX'
Moltin.Orders.Payment(orderId, {
  gateway: 'card_connect',
  method: 'purchase',
  payment: '1|16178397535388255208'
}).then(() => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
