---
id: update-a-product-variation
title: Update a Product Variation
sidebar_label: Update a Product Variation
---


## `PUT` Update a Product Variation

```http
https://api.moltin.com/v2/variations/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the variation you want to update. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the variation being updated. |
| `type` | Required | `string` | Represents the type of object being created. \(should be product-variation\). |
| `name` | Required | `string` | A human readable name for this variation. |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "type": "product-variation",
        "id": "1838ded2-3726-4288-bd82-7c4f14376aac",
        "name": "color"
    }
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/variations/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "product-variation",
        "id": "XXXX",
        "name": "Color schemes"
      }
    }'

```

<!--END_DOCUSAURUS_CODE_TABS-->
