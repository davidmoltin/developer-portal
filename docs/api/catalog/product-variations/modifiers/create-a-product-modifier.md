---
id: create-a-product-modifier
title: Create a Product Modifier
sidebar_label: Create a Product Modifier
---


## `POST` Create a new product modifier

```http
https://api.moltin.com/v2/variations/:variationId/options/:optionId/modifiers
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `variationId` | Required | `string` | The ID of the variation belonging to this modifier. |
| `optionId` | Required | `string` | The ID of the option belonging to the modifier. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | `string` | Represents the type of object being created (should be **modifier**). |
| `modifier_type` | Optional | `string` | `price_increment`, `price_decrement`, `price_equals`, `sku_builder`, `slug_builder`, `description_equals`, `description_prepend`, `description_append`, `commoditytype`, `name_equals`, `name_prepend`, `name_append`, `slug_equals`, `slug_append`, `sku_equals`, `sku_prepend`, `sku_append`, `status` |
| `value` | Optional | `string` | A payload specific to the type of modifier. |


<!-- Response -->

`201 Created`

```json
{
  "data": {
    "type": "modifier",
    "id": "280c4b95-2c1d-4d26-938b-b581be4b4005",
    "modifier_type": "name_equals",
    "value": "Updated product name"
  }
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/variations/:variationId/options/:optionId/modifiers \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "modifier",
        "modifier_type": "name_equals",
        "value": "Updated product name"
      }
    }

```

<!--END_DOCUSAURUS_CODE_TABS-->
