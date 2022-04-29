---
id: get-main-image-relationship
title: Get Main Image Relationship
sidebar_label: Get Main Image Relationship
---

## `GET` Get Main Image Relationship(s)

```http
https://api.moltin.com/pcm/products/:productId/relationships/main_image
```

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/products/:productId/relationships/main_image \
     -H "Authorization: Bearer XXXX" \
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the main image. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`200 OK`

```json
{
  "data": [
    {
      "type": "file",
      "id": "file-1"
    }
  ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
