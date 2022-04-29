---
id: replace-main-image-relationship
title: Replace Main Image Relationship
sidebar_label: Replace Main Image Relationship
---

## `PUT` Replace Main Image Relationship(s)

```http
https://api.moltin.com/pcm/products/:productId/relationships/main_image
```

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/pcm/products/:productId/relationships/main_image \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "file",
          "id": "3ab3deca-1f11-47b7-a409-24ea3234d72c"
        }
    }'
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

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of resource object. You must use `file`.|
| `id` | Required | `string` | The ID of the new image file. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`204 No Content`

<!--END_DOCUSAURUS_CODE_TABS-->

