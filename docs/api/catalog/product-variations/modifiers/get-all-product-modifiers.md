---
id: get-all-product-modifiers
title: Get all Product Modifiers
sidebar_label: Get all Product Modifiers
---

## `GET` Get all Product Modifiers

```http
https://api.moltin.com/v2/variations/:variationId/options/:optionId/modifiers
```

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
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`

All modifiers successfully retrieved.

```json
{
    "data": [
        {
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
        },
        {
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
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/variations/:variationId/options/:optionId/modifiers \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
