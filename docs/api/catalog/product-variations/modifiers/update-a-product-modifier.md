---
id: update-a-product-modifier
title: Update a Product Modifier
sidebar_label: Update a Product Modifier
---


## `PUT` Update a product modifier

```http
https://api.moltin.com/v2/variations/:variationId/options/:optionId/modifiers/:modifierId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `variationId` | Required | `string` | The ID of the variation belonging to this modifier. |
| `optionId` | Required | `string` | The ID of the option belonging to the modifier. |
| `modifierId` | Required | `string` | The ID of the modifier to be updated. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier for this modifier. |
| `type` | Optional | `string` | Represents the type of object being updated (should be **modifier**). |
| `modifier_type` | Optional | `string` | `price_increment`, `price_decrement`, `price_equals`, `sku_builder`, `slug_builder`, `description_equals`, `description_prepend`, `description_append`, `commoditytype`, `name_equals`, `name_prepend`, `name_append`, `slug_equals`, `slug_prepend`, `slug_append`, `sku_equals`, `sku_prepend`, `sku_append`, `status` |
| `value` | Optional | `string` | A payload specific to the type of modifier. |


<!-- Response -->

`200 OK`

```json
{
    "data": {
    	"type": "product-variation",
        "id": "0c02ca9f-27be-48a8-89d9-cd7c30699343",
        "name": "color",
        "options": [
            {
            	"id": "9000b3bb-4626-4521-9b1a-e89def0ca44a",
            	"name": "Blue",
                "description": "Our second most popular color",
                "modifiers": [
                    {
                        "id": "74004ddf-4521-4d4b-8c86-04fcd45294b0",
                        "type": "name_equals",
                        "value": "Updated product name"
                    }
                ]
            }
        ],
        "relationships": {
            "options": {
                "data": [
                    {
                        "id": "9000b3bb-4626-4521-9b1a-e89def0ca44a",
                        "type": "option"
                    }
                ]
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/variations/:variationId/options/:optionId/modifiers/:modifierId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "modifier",
        "id": "MODIFIER_ID",
        "modifier_type": "name_equals"
        "value": "Updated product name"
      }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
