---
id: index
title: Categories
sidebar_label: Categories
---

:::tip An enhanced service is available!
If you are creating a new store, use the Product Content Management APIs instead of this API. For information about Product Content Management and links to the APIs, see [Product Content Management](../../../concepts/product-content-management.md). For information about services that are superseded by newer services, see [Legacy Services](../../../api/index.md#legacy-services).
:::

Categories allow you to organize your Products into hierarchical groups. That means these groups can also contain other Categories, which can then be viewed in a tree structure.

## The Category object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this category. |
| `type` | `string` | Represents the type of object being returned. |
| `name` | `string` | The name of the category. |
| `slug` | `string` | A unique slug identifier for the category. |
| `description` | `string` | Any description for this category. |
| `status` | `string` | `live` or `draft`depending on the category status. |
| `meta` | `object` | The [meta object](#the-meta-object). |
| `relationships` | `object` | The [relationships object](#the-relationships-object). |

<!--Sample Object-->

```javascript
{
  "data": {
    "id": "39a13b7e-f2d3-47a5-9bc5-1e98b198748c",
    "type": "category",
    "name": "Clothing",
    "slug": "clothing",
    "description": "Browse our clothing line",
    "status": "live"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## The `meta` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.timestamps` | `object` | Timestamps for this category. |
| `meta.timestamps.created_at` | `string` | The creation date of this category. |
| `meta.timestamps.updated_at` | `string` | The updated date of this category. |

## The `relationships` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `relationships.products` | `array[object]` | An array of products for this category. |
| `relationships.products.data` | `array[object]` | An array of relationships from this category to products resources. |
| `relationships.products.data.type` | `string` | Always `product` |
| `relationships.products.data.id` | `string` | the unique identifier of the related product. |

## Filtering

The following attributes are available for [filtering](../../basics/filtering.md) categories.

| Attribute | Type | **Operators** | **Example** |
| :--- | :--- | :--- | :--- |
| `name` | `string` | `eq` / `like` | `eq(name,Shoes)` |
| `slug` | `string` | `eq` / `like` | `like(name,Sh*)` |
| `status` | `boolean` | `eq` | `eq(status,live)` |
