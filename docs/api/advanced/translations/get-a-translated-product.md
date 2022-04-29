---
id: get-a-translated-product
title: Get a Translated Product
sidebar_label: Get a Translated Product
---

## `GET` Get a translated Product by ID

```http
https://api.moltin.com/v2/products/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the product. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Language` | Optional | `string` | The language code as defined in project settings. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
  "data": {
    "type": "product",
    "id": "6837058c-ae42-46db-b3c6-7f01e0c34b40",
    "name": "nombre del producto",
    "description": "descripción del producto.",
    // ...
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products/:id \
    -H "Authorization: Bearer XXXX" \
    -H "X-Moltin-Language: es"
```

<!--END_DOCUSAURUS_CODE_TABS-->
