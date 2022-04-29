---
id: get-product-file-relationships
title: Get Product-File Relationships
sidebar_label: Get Product-File Relationships
---

## `GET` Get Product-File Relationships

```http
https://api.moltin.com/pcm/products/:productId/relationships/files

```
<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/files \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

<!--END_DOCUSAURUS_CODE_TABS-->

This request retrieves all files that are associated with the specified product.

<!--DOCUSAURUS_CODE_TABS-->
<!-- Response -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->
