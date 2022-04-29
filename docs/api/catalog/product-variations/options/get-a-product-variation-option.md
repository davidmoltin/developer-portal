---
id: get-a-product-variation-option
title: Get a Product Variation Option
sidebar_label: Get a Product Variation Option
---


## `GET` Get a Product Variation Option

```http
https://api.moltin.com/v2/variations/:variationId/options/:optionId
```

Use this endpoint to retrieve a single variation option.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `variationId` | Required | `string` | ID of the variation. |
| `optionId` | Required | `string` | ID of the option. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | Bearer token used to access the API. |


<!-- Response -->

`200 OK`

Single option successfully retrieved.

```json
{
  "data": {
    "type": "option",
    "id": "aabc3e8e-c6a6-42aa-a64b-9a7dbefedd9f",
    "name": "Blue",
    "description": "Our most popular color",
    "relationships": {
      "modifiers": {
        "data": []
      }
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/variations/:id/options/:Id \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
