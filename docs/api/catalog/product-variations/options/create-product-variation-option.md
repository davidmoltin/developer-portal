---
id: create-product-variation-option
title: Create Product Variation Option
sidebar_label: Create Product Variation Option
---


## `POST` Create a Product Variation Option

```http
https://api.moltin.com/v2/variations/:id/options
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the variation belonging to this option. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Represents the type of the object being created. (should be `option`). |
| `name` | Required | `string` | A human readable name for this variation option. |
| `description` | Required | `string` | A human readable description of the option. |

<!-- Response -->

`201 Created`

```json
{
  "data":{
    "type":"option",
    "id":"615e4e5a-e43d-4679-9900-191af4724f6d",
    "name":"Paint color",
    "description":"Our most popular color",
    "relationships":{
      "modifiers":{
        "data":[
          {
            "type":"sku-builder",
            "id":"aabc3e8e-c6a6-42aa-a64b-9a7dbefedd9f"
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
curl -X POST https://api.moltin.com/v2/variations/:variationId/options \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "description": "Our most popular color",
		    "name": "Blue",
		    "type": "product-variation-option"
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
