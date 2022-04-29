---
id: create-product-file-relationships
title: Create Product-File Relationships
sidebar_label: Create Product-File Relationships
---

## `POST` Create Product-File Relationships

```http
https://api.moltin.com/pcm/products/:productId/relationships/files
```

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/files \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": [
            {
            "type": "file",
            "id": "string"
            }
        ]
     }'
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

**Body**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of the resource object. You must use `file`. |
| `id` | Required | `string` | The unique identifier of the file. |

<!--END_DOCUSAURUS_CODE_TABS-->

This request creates relationships between the specified product and the files. The files are appended to the list of related files. Duplicate files are ignored.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response-->

`201 Created`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->
