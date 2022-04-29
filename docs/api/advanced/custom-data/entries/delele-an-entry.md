---
id: delete-an-entry
title: Delete an Entry
sidebar_label: Delete an Entry
---

## `DELETE` Delete an Entry

```http
https://api.moltin.com/v2/flows/:slug/entries/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the entry you are requesting to delete. |
| `slug` | Required | `string` | The slug for the Flows you are requesting entries for. |

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
curl -X DELETE https://api.moltin.com/v2/flows/:flowSlug/entries/:entryId \
    -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const flowSlug = 'XXXX'
const entryId = 'XXXX'
Moltin.Flows.DeleteEntry(flowSlug, entryId).then(entry => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
