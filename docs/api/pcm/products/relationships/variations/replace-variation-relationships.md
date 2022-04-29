---
id: replace-variation-relationships
title: Replace Variation Relationships
sidebar_label: Replace Variation Relationships
---

## `PUT` Replace Variations Relationship(s)

```http
https://api.moltin.com/pcm/products/:productId/relationships/variations
```

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/pcm/products/:productId/relationships/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "product-variation",
          "id": "3ab3deca-1f11-47b7-a409-24ea3234d72c"
        },
        {
          "type": "product-variation",
          "id": "7c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
      ]
    }'
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product for which you want to update the variation relationship. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | The type of resource object. You must use `product-variation`.|
| `data[].id` | Required | `string` | The ID of the product variation. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`204 No Content`

<!--END_DOCUSAURUS_CODE_TABS-->
