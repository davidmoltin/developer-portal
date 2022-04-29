---
id: update-a-tax-item
title: Update a Tax Item
sidebar_label: Update a Tax Item
---

## `PUT` Update a Tax Item

```http
https://api.moltin.com/v2/carts/:cartID/items/:itemID/taxes/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | ID of the Tax Item to update. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authentication` | Required | `string` | Authentication token to track down who is emptying our stocks. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | This represents the type of the object being returned. |
| `name` | Optional | `string` | A new name for the tax. |
| `jurisdiction` | Optional | `string` | A new jurisdiction for this tax. |
| `code` | Optional | `string` | A new unique code for the tax in this jurisdiction. |
| `rate` | Optional | `number` | A new tax rate, represented as a decimal (12.5% -> 0.125). |


<!-- Response -->

`200 OK`

Tax item successfully updated.

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

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/carts/:cartID/items/:itemID/taxes/:taxID \
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
  .put(`carts/${reference}/items/${itemId}/taxes/${taxItemID}`, {
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
