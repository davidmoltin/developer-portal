---
id: create-a-product-variation
title: Create a Product Variation
sidebar_label: Create a Product Variation
---


## `POST` Create a product variation

```http
https://api.moltin.com/v2/variation
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Represents the type of object being created. \(should be product-variation\). |
| `name` | Required | `string` | A human readable name for this variation. |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "type": "product-variation",
        "id": "615e4e5a-e43d-4679-9900-191af4724f6d",
        "name": "Paint color"
    }
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "product-variation",
        "name": "Paint color"
      }
    }'

```

<!--END_DOCUSAURUS_CODE_TABS-->
