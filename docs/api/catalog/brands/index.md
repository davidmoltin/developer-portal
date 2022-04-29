---
id: index
title: Brands
sidebar_label: Brands
---

:::tip An enhanced service is available!
If you are creating a new store, use the Product Content Management APIs instead of this API. For information about Product Content Management and links to the APIs, see [Product Content Management](../../../concepts/product-content-management.md). For information about services that are superseded by newer services, see [Legacy Services](../../../api/index.md#legacy-services).
:::

The Brands API allows you to organize products into hierarchical groups. Where a shoe product might be in the category `Shoes`, the individual product might also be in the brand `Nike`.

## The Brand object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this brand. |
| `type` | `string` | The `type` represents the object being returned. |
| `name` | `string` | The name of the brand. |
| `slug` | `string` | A unique slug for the brand. |
| `description` | `string` | A description for the brand. |
| `status` | `string` | `live` or `draft` depending on the brand status. |
| `meta` | `object` | The [meta object](#the-meta-object). |
| `relationships` | `object` | The [relationships object](#the-relationships-object). |

<!--Sample Response-->

```json
{
  "data": {
    "id": "9185d4ff-a484-408b-8c1a-d4de1ca20736",
    "type": "brand",
    "name": "Cool Clothing",
    "slug": "cool-clothing",
    "description": "Cool clothing make cool clothes!",
    "status": "live",
    "meta": {
      "timestamps": {
        "created_at": "2018-04-05T08:48:39+00:00",
        "updated_at": "2018-04-27T13:47:36+00:00"
      }
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## The `meta` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.timestamps` | `object` | Timestamps for this brand. |
| `meta.timestamps.created_at` | `string` | The creation date of this brand. |
| `meta.timestamps.updated_at` | `string` | The updated date of this brand. |

## The `relationships` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `relationships.products` | `array[object]` | An array of products for this brand. |
| `relationships.products.data` | `array[object]` | An array of relationships from this brand to products resources. |
| `relationships.products.data.type` | `string` | Always `product` |
| `relationships.products.data.id` | `string` | The unique identifier of the related product. |

## Filtering

The following attributes are available for [filtering](../../basics/filtering.md) brands.

| Attribute | Type | **Operators** | **Example** |
| :--- | :--- | :--- | :--- |
| `name` | `string` | `eq` / `like` | `eq(name,'Nike')` |
| `slug` | `string` | `eq` / `like` | `like(name,'ni*')` |
| `status` | `string` | `eq` | `eq(status,live)` |
