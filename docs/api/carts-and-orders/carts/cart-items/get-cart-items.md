---
id: get-cart-items
title: Get Cart Items
sidebar_label: Get Cart Items
---

:::note
If a Cart does not exist with a provided reference, one is created and an empty cart items array is returned.
:::

## `GET` Get Cart Items by Cart reference

```http
https://api.moltin.com/v2/carts/:reference/items
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `reference` | Required | `string` | A custom reference for this cart created by you. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Query Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `include` | Optional | `string` | `tax_items` |


<!-- Response -->

`200 OK`


```json
{
    "data": [],
    "meta": {
        "display_price": {
            "with_tax": {
                "amount": 0,
                "currency": "",
                "formatted": "0"
            },
            "without_tax": {
                "amount": 0,
                "currency": "",
                "formatted": "0"
            }
        },
        "timestamps": {
            "created_at": "0001-01-01T00:00:00Z",
            "updated_at": "0001-01-01T00:00:00Z",
            "expires_at": "0001-01-20T00:00:00Z"
        }
    }
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/carts/:reference/items \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const reference = 'XXXX'
Moltin.Cart(reference)
  .Items()
  .then(cart => {
    // Do something
  })
```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X'
})
const reference = 'XXXX'
client
  .delete(`carts/${reference}/items`)
  .then(itemst => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
