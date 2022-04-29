---
id: update-product-variation-option
title: Update Product Variation Option
sidebar_label: Update Product Variation Option
---


## `PUT` Update a Product Variation Option

```http
https://api.moltin.com/v2/variations/:variationId/options/:optionId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `optionId` | Required | `string` | The ID of the option. |
| `variationId` | Required | `string` | The ID of the variation belonging to this option. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the option. |
| `name` | Optional | `string` | A human readable description of the option. |
| `description` | Optional | `string` | A human readable description of the option. |
| `type` | Optional | `string` | Represents the type of the object being created.  (should be option). |


<!-- Response -->

`200 OK`

```json
{
  "data":{
    "id":"1feab4d8-25b3-40d3-8843-8056713dadfc",
    "type":"option",
    "description":"Our other most popular color",
    "name":"Green",
    "relationships":{
      "modifiers":{
        "data":[
          {
            "type":"sku-builder",
            "id":"a43593a6-92fe-4953-bf4e-a99524918839"
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
curl -X PUT https://api.moltin.com/v2/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options/39148bc3-3028-4196-9350-1b4ac927c9d6 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-type: application/json" \
     -d $'{
        "data": {
            "id": "39148bc3-3028-4196-9350-1b4ac927c9d6",
            "type": "option",
            "name": "Green",
            "description": "Our other most popular color"
        }
    }
```

<!--END_DOCUSAURUS_CODE_TABS-->
