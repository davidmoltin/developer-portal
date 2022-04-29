---
id: get-a-cart
title: Get a Cart
sidebar_label: Get a Cart
---

:::note
The default cart name is `Cart`. However, you can update the cart name as required. Ensure that the string length of the name is greater than or equal to one. Follow the safe character guidelines for name and description naming. For more information about cart ID naming requirements, see the [Safe Characters](../../basics/safe-characters.md) section.
:::

## `GET` Get a Cart by reference

```http
https://api.moltin.com/v2/carts/:reference
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The system generated ID for the cart that the customer created.|

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Query Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `include` | Optional | `string` | Comma-delimited string of entities that can be included - valid options: `items`. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "360acb59-3fb7-4150-8066-ea54e850015b",
        "type": "cart",
        "links": {
            "self": "https://api.moltin.com/carts/360acb59-3fb7-4150-8066-ea54e850015b"
        },
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
                "updated_at": "0001-01-01T00:00:00Z"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

You can easily get a new or existing cart by providing the unique cart reference in the request.

:::warning
An empty cart is returned for any carts that don’t currently exist. For more information about the cart items object, see [Get Cart Items](cart-items/get-cart-items.md#get-get-cart-items-by-cart-reference).
:::

:::note
We don’t handle creating cart references. **You need to create your own.**
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/carts/:reference \
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
  .Get()
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
  .get(`carts/${reference}`)
  .then(cart => {
    // Do something...
  })
  .catch(console.error)
```

You can import `createCartIdentifier` from `@moltin/request` to create a Cart ID.

```javascript
const { MoltinClient, createCartIdentifier } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X'
})
const cartId = createCartIdentifier()​
client
  .get(`carts/${cartId}`)
  .then(cart => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
