---
id: delete-a-product-variation
title: Delete a Product Variation
sidebar_label: Delete a Product Variation
---


## `DELETE` Delete a product variation

```http
https://api.moltin.com/v2/variations/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the variation you want to delete. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer used to access the API. |


<!-- Response -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/variations/:id \
     -H "Authorization: Bearer XXXX"

```

<!--END_DOCUSAURUS_CODE_TABS-->
