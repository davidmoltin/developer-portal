---
id: create-product-template-relationships
title: Create Product-Template Relationships
sidebar_label: Create Product-Template Relationships
---

## `POST` Create Product-Template Relationships

```http
https://api.moltin.com/pcm/products/:productId/relationships/templates
```
<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/relationships/templates \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": [
            {
            "type": "template",
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
| `type` | Required | `string` | Always: `template` |
| `id` | Required | `string` | The unique identifier of a flow. |

<!--END_DOCUSAURUS_CODE_TABS-->

This request creates relationships between the specified product and the templates.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`201 Created`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->
