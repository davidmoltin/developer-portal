---
id: get-a-product-variation
title: Get a Product Variation
sidebar_label: Get a Product Variation
---

## `GET` Get a product variation

```http
https://api.moltin.com/v2/variations/:id
```

Use this endpoint to retrieve a single product variation

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the variation requested. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Query Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `include` | Required | `string` | `options` |


<!-- Response -->

`200 OK`

```json
{
    "data": {
        "type": "product-variation",
        "id": "1838ded2-3726-4288-bd82-7c4f14376aac",
        "name": "Paint color"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/variations/:id \
     -H "Authorization: Bearer XXXX"

```

<!--END_DOCUSAURUS_CODE_TABS-->
