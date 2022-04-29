---
id: delete-a-template
title: Delete a Template
sidebar_label: Delete a Template
---

## `DELETE` Delete a Template

```http
https://api.moltin.com/v2/flows/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | Specifies the ID for the template you want to delete. |

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
curl -X DELETE https://api.moltin.com/v2/flows/:id \
    -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const flowId = 'XXX'
Moltin.Flows.Delete(flowId).then(flow => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
