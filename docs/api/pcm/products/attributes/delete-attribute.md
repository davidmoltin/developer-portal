---
id: delete-attribute
title: Delete an Attribute
sidebar_label: Delete an Attribute
---

## `DELETE` Delete an Attribute

```http
https://api.moltin.com/v2/fields/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier for the attribute that you want to delete. |

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

<!--END_DOCUSAURUS_CODE_TABS-->
