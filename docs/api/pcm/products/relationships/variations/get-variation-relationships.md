---
id: get-variation-relationships
title: Get Variation Relationships
sidebar_label: Get Variation Relationships
---

## `GET` Get Variations Relationship(s)

```http
https://api.moltin.com/pcm/products/:productId/relationships/variations
```

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/products/:productId/relationships/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product of which you want to retrieve the relationships. |

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
      "type": "product-variation",
      "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249"
    }
  ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
