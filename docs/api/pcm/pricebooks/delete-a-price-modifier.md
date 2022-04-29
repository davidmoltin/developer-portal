---
id: delete-a-price-modifier
title: Delete a Price Book Modifier
sidebar_label: Delete a Price Book Modifier
---

## `Delete` a Price Book Modifier

```http
https://api.moltin.com/pcm/pricebooks/:pricebookId/modifiers/:modifierId
```

Deletes the specified price book modifier.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the price book. |
| `modifierId` | Required | `string` | The ID of the modifier that you want to delete. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://api.moltin.com//pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/54323af0-2b82-4d8a-97dc-eae178b82b0a
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`

## Related Resources

### Concepts

- [PCM Products](../../../concepts/products-pcm.md)

### APIs

- [PCM Products API](../../../api/pcm/products/index.md)
- [Create Variations](../../../api/pcm/products/variations/create-variation.md)
- [Create Modifiers](../../../api/pcm/products/options/modifiers/modifier-crud.md)
- [Build Child Products](../../../api/pcm/products/build-child-products.md)

### How-to guides

- [Generate product variations](../../../developer/how-to/generate-pcm-variations.md)
