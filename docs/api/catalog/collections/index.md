---
id: index
title: Collections
sidebar_label: Collections
---

:::tip An enhanced service is available!
If you are creating a new store, use the Product Content Management APIs instead of this API. For information about Product Content Management and links to the APIs, see [Product Content Management](../../../concepts/product-content-management.md). For information about services that are superseded by newer services, see [Legacy Services](../../../api/index.md#legacy-services).
:::

Collections allow you to organize your products into hierarchical groups. Where a dress product might be in the category `Clothing`, the individual product might also be in the collection `Summer`.

## The Collection object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this collection. |
| `type` | `string` | Represents the type of object being returned. |
| `name` | `string` | The name of the collection. |
| `slug` | `string` | A unique slug identifier for the collection. |
| `description` | `string` | Any description for this collection. |
| `status` | `string` | `live` or `draft`depending on the collection status. |
| `meta` | `object` | The [meta object](#the-meta-object). |
| `relationships` | `object` | The [relationships object](#the-relationships-object). |

<!--Sample Object-->

```javascript
{
    "data": {
        "id": "12912957-4159-4eea-b1c4-685876588300",
        "type": "collection",
        "status": "live",
        "name": "Top Picks",
        "slug": "top_picks",
        "description": "Top Picks Collection",
        "meta": {
            "timestamps": {
                "created_at": "2017-06-26T11:18:05+00:00",
                "updated_at": "2018-04-04T10:56:47+00:00"
            }
        },
        "relationships": {
            "products": {
                "data": [
                    {
                        "type": "product",
                        "id": "36c21093-8996-4a9d-aacb-bf061f0769ed"
                    },
                    {
                        "type": "product",
                        "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df"
                    },
                    {
                        "type": "product",
                        "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe"
                    },
                    {
                        "type": "product",
                        "id": "001b9188-3959-4269-aaf6-e4a74f8607b8"
                    },
                    {
                        "type": "product",
                        "id": "a6fa6cbe-a718-45ab-ae1e-883c5a72ee61"
                    }
                ]
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## The `meta` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.timestamps` | `object` | Timestamps for this collection. |
| `meta.timestamps.created_at` | `string` | The creation date of this collection. |
| `meta.timestamps.updated_at` | `string` | The updated date of this collection. |

## The `relationships` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `relationships.products` | `array[object]` | An array of products for this collection. |
| `relationships.products.data` | `array[object]` | An array of relationships from this collection to products resources. |
| `relationships.products.data.type` | `string` | Always `collection` |
| `relationships.products.data.id` | `string` | The unique identifier of the related product. |

## Filtering

The following attributes are available for [filtering](../../basics/filtering.md) collections.

| Attribute | Type | **Operators** | **Example** |
| :--- | :--- | :--- | :--- |
| `name` | `string` | `eq` / `like` | `eq(name,Summer)` |
| `slug` | `string` | `eq` / `like` | `like(name,Summer*)` |
| `status` | `boolean` | `eq` | `eq(status,live)` |
