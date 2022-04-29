---
id: delete-product-prices
title: Delete Product Prices from a Price Book
sidebar_label: Delete Product Prices
---

## `DELETE` a Product Price from a Price Book

```http
https://api.moltin.com/pcm/pricebooks/:id/prices/:priceId
```

Deletes a product price (`:priceId`) from the specified price book (`:id`).

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book. |
| `priceId` | Required | `string` | The unique identifier of the product price. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

<!-- Response - PCM -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609/prices/76c78677-a22a-4104-8fb7-11f1cfc3b146 \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
