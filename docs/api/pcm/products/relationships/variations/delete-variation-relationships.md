---
id: delete-variation-relationships
title: Delete Variation Relationships
sidebar_label: Delete Variation Relationships
---

## `DELETE` Delete Variations Relationship(s)

```http
https://api.moltin.com/pcm/products/:productId/relationships/variations
```

:::note
You can only delete a relationship that is not in use. If the variation relationship is still in use, a `422 Failed Validation` error message is returned.
:::


<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/products/:productId/relationships/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "product-variation",
          "id": ""2950cae3-1050-4c43-9fbd-2aa60dc5c249""
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
| `productId` | Required | `string` | The ID of the product you want to relate to the variation(s). |

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
