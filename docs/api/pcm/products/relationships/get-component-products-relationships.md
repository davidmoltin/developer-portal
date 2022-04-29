---
id: get-component-products-relationships
title: Get Component Products Relationships
sidebar_label: Get Component Products Relationships
---

## `GET` Component Products Relationships

```http
https://api.moltin.com/pcm/products/:productId/relationships/component_products
```

Returns a list of component products in a product bundle. If a product has no component products (in other words, is not a product bundle), an empty array is returned.

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product bundle. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

## Request Example

```bash
curl GET 'https://api.moltin.com/pcm/products/00efcc23-9bab-4bc7-9272-6b95111814e8/relationships/component_products' \
--header 'Authorization: Bearer XXXX'
```

## Response Example

`201 OK`

```json
{
  "data": [
    {
      "type": "product",
      "id": "1aea6f97-f0d9-452c-b3c1-7fb5629ead82"
    },
    {
      "type": "product",
      "id": "0192ccdd-6d33-4898-87d7-c4d87f2bf8ea"
    },
    {
      "type": "product",
      "id": "de691397-2320-48fb-af7b-8b17d27a34a4"
    },
    {
      "type": "product",
      "id": "d7b79eb8-19d8-45ea-86ed-2324a604dd9c"
    },
    {
      "type": "product",
      "id": "baaebdd6-490e-4834-a4a5-307602f70ea0"
    }
  ]
}
```

## Related Resources

### Concept

- [Bundles - Product Content Management](../../../../concepts/pcm-bundles.md)

### API

- [Products API](../../catalogs/releases/index.md)
- [Bundles API](../bundles/create-a-bundle.md)
