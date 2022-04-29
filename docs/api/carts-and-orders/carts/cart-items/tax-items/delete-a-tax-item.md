---
id: delete-a-tax-item
title: Delete a Tax Item
sidebar_label: Delete a Tax Item
---

## `DELETE` Delete by ID

```http
https://api.moltin.com/v2/carts/:cartID/items/:itemID/taxes/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the Tax Item to delete. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`204 No Content`


```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/carts/:cartID/items/:itemID/taxes/:taxItemID \
     -H "Authorization: Bearer XXXX"
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
  .delete(`carts/${reference}/items/${itemId}/taxes/${taxItemID}`)
  .then(items => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
