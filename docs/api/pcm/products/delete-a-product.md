---
id: delete-a-product
title: Delete a Product
sidebar_label: Delete a Product
---

## `DELETE` Delete a Product

```http
https://api.moltin.com/pcm/products/:productId
```

Deletes the specified product.

:::note
You cannot delete a product if it is a part of a bundle. You must first delete the bundle before you delete the product.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Body**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

<!-- Response -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/products/6616b002-ef08-4661-a969-5278344dcf67 \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
