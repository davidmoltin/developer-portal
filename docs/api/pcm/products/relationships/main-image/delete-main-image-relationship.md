---
id: delete-main-image-relationship
title: Delete Main Image Relationship
sidebar_label: Delete Main Image Relationship
---

## `DELETE` Delete Main Image Relationship(s)

```http
https://api.moltin.com/pcm/products/:productId/relationships/main_image
```
<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/products/:productId/relationships/main_image \
     -H "Authorization: Bearer XXXX" \
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product from which you want to remove the main image.|

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`204 No Content`

<!--END_DOCUSAURUS_CODE_TABS-->
