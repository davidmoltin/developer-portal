---
id: delete-product-variation-option
title: Delete Product Variation Option
sidebar_label: Delete Product Variation Option
---


## `DELETE` Delete a Product Variation Option

```http
https://api.moltin.com/v2/variation/:variationId/options/:optionId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `optionId` | Required | `string` | The ID of the option. |
| `variationId` | Required | `string` | The ID of the variation belonging to the option. |

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
curl -X DELETE https://api.moltin.com/v2/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options/39148bc3-3028-4196-9350-1b4ac927c9d6 \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
