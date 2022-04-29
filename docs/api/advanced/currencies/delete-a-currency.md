---
id: delete-a-currency
title: Delete a Currency
sidebar_label: Delete a Currency
---

:::warning
You can’t delete a **default currency**
:::

## `DELETE` Delete a Currency by ID

```http
https://api.moltin.com/v2/currencies/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the Currency to delete. |

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
curl -X DELETE https://api.moltin.com/v2/currencies/:id \
     -H "Authorization: Bearer XXXX"

```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
Moltin.Currencies.Delete(id).then(response => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
