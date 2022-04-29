---
id: remove-cart-item
title: Remove Cart Item
sidebar_label: Remove Cart Item
---

You can easily remove items from the Cart. A successful Cart item removal request returns the [cart items](index.md).

## `DELETE` Remove Item from Cart

```http
https://api.moltin.com/v2/carts/:reference/items/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `reference` | Required | `string` | A unique reference for the cart created by you. |
| `id` | Required | `string` | The unique identifier for this cart item. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


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
            "created_at": "2018-05-08T10:25:40.02Z",
            "updated_at": "2018-05-08T10:25:40.02Z",
            "expires_at": "2018-05-20T10:25:40.02Z"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/carts/:reference/items/:id \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const reference = 'XXXX'
const itemId = 'XXXX'
Moltin.Cart(reference)
  .RemoveItem(itemId)
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
const itemId = 'XXXX'
client
  .delete(`carts/${reference}/items/${itemId}`)
  .then(items => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
