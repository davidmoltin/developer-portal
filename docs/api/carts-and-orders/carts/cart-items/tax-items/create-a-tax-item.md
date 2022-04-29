---
id: create-a-tax-item
title: Create a Tax Item
sidebar_label: Create a Tax Item
---

:::warning
Please note there is a soft limit of 5 unique tax items per cart item at any one time.
:::

## `POST` Create a Tax Item

```http
https://api.moltin.com/v2/carts/:cartID/items/:itemID/taxes
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | This represents the type of object being returned. |
| `name` | Optional | `string` | The name of the tax item. |
| `jurisdiction` | Optional | `string` | The relevant tax jurisdiction. |
| `code` | Optional | `string` | A unique tax code in this jurisdiction. |
| `rate` | Required | `float` | The tax rate represented as a decimal (12.5% -> 0.125). |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "id": "003e2458-3415-4fd2-a10c-ed422bfac4bb",
        "type": "tax_item",
        "name": "Tax Name",
        "jurisdiction" : "UK",
        "code": "MYTAX01",
        "rate": 0.2
    }
}

```

`422 Unprocessable Entity`

In this example, we skip passing `name` to fail validation.

```json
{
    "errors": [
        {
            "title": "Failed Validation",
            "detail": "The data.name field is required."
        }
    ]
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:cartID/items/:itemID/taxes \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer XXXX" \
    -d $'{
        "data": {
            "type": "tax_item",
            "name": "Tax Name",
            "jurisdiction" : "UK",
            "code": "MYTAX01",
            "rate": 0.2
        }
    }'

```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
​
const client = new MoltinClient({
  client_id: 'X',
  client_secret: 'X'
})
const reference = 'XXXX'
const itemId = 'XXXX'
const taxItemID = 'XXXX'
client
  .post(`carts/${reference}/items/${itemId}/taxes/${taxItemID}`, {
    type: "tax_item",
    name: "Tax Name",
    jurisdiction : "UK",
    code: "MYTAX01",
    rate: 0.2
  })
  .then(items => {
    // Do something...
  })
  .catch(console.error)

```

<!--END_DOCUSAURUS_CODE_TABS-->
