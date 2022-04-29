---
id: get-all-inventory
title: Get all Inventory
sidebar_label: Get all Inventory
---

## `GET` Get Stock for all Products

```http
https://api.moltin.com/v2/inventories
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Query Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `page[limit]` | Optional | `string` | The number of items to return per page. |
| `page[offset]` | Optional | `string` | The number of records to offset the results by. |


<!-- Response -->

`200 OK`

```json
{
  "data": [
    {
      "id": "95ff4acc-9d8e-4a8e-be3a-61b174b20c2b",
      "type": "stock",
      "total": 100,
      "available": 100,
      "allocated": 0
    },
    {
      "id": "db33dc42-6a08-4929-8e85-8e1ea619c832",
      "type": "stock",
      "total": 100,
      "available": 100,
      "allocated": 0
    },
    {
      "id": "721fcb79-37d9-4328-b69d-bab7b73d7770",
      "type": "stock",
      "total": 100,
      "available": 100,
      "allocated": 0
    }
  ],
  "links": {
    "current":
      "https://api.moltin.com/v2/inventories?page[offset]=0&page[limit]=50",
    "first":
      "https://api.moltin.com/v2/inventories?page[offset]=0&page[limit]=50",
    "last":
      "https://api.moltin.com/v2/inventories?page[offset]=0&page[limit]=50"
  },
  "meta": {
    "results": {
      "total": 3,
      "all": 3
    },
    "page": {
      "limit": 100,
      "offset": 0,
      "current": 1,
      "total": 1
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

:::note
You can use pagination with this resource. For more information, see [pagination](../basics/pagination.md).
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/inventories \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Inventories.All().then(inventories => {
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
​
client
  .get('inventories')
  .then(inventories => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
