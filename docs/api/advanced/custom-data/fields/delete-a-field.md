---
id: delete-a-field
title: Delete a Field
sidebar_label: Delete a Field
---

## `DELETE` Delete a Field

```http
https://api.moltin.com/v2/fields/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID fir the field you are requesting to be deleted. |

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
curl -X DELETE https://api.moltin.com/v2/fields/:id \
    -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const fieldId = 'xx'
const data = {
  id: '{fieldId}',
  name: 'Average Product Rating'
}
Moltin.Fields.Delete('{fieldId}').then(response => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
