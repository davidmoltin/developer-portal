---
id: delete-a-product-modifier
title: Delete a Product Modifier
sidebar_label: Delete a Product Modifier
---

## `DELETE` Delete a product modifier

```http
https://api.moltin.com/v2/variation/:variationId/options/:optionId/modifiers/:modifierId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `variationId` | Required | `string` | The ID of the variation belonging to this modifier. |
| `optionId` | Required | `string` | The ID of the option belonging to the modifier. |
| `modifierId` | Required | `string` | The ID of the modifier to be deleted. |

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
curl -X DELETE https://api.moltin.com/v2/variation/:variationID/option/:optionId/modifiers/:modifierId \
     -H "Authorization: Bearer XXXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
