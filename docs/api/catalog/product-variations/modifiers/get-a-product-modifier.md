---
id: get-a-product-modifier
title: Get a Product Modifier
sidebar_label: Get a Product Modifier
---

## `GET` Get a Product Modifier

```http
https://api.moltin.com/v2/variations/:variationId/options/:optionId/modifiers/:modifierId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `variationId` | Required | `string` | ID of the variation. |
| `optionId` | Required | `string` | ID of the option. |
| `modifierId` | Required | `string` |  ID of the modifier. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

A single modifier successfully retrieved.

```json
{
    "data": {
        "id": "aabc3e8e-c6a6-42aa-a64b-9a7dbefedd9f",
        "type": "modifier",
        "modifier_type": "price_increment",
        "value": [
            {
                "currency": "FJT",
                "amount": 46008803,
                "includes_tax": false
            },
            {
                "currency": "YZK",
                "amount": 4011039,
                "includes_tax": false
            }
        ]
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/variations/:variationId/options/:optionId/modifiers/:modifierId \
     -H "Authorization: Bearer XXXX"

```

<!--END_DOCUSAURUS_CODE_TABS-->
