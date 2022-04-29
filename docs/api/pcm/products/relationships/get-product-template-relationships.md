---
id: get-product-template-relationships
title: Get Product-Template Relationships
sidebar_label: Get Product-Template Relationships
---

## `GET` Get Product-Template Relationships

```http
https://api.moltin.com/products/:productId/relationships/templates
```

Retrieves the templates that are associated with the specified product.

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

<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/templates \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
