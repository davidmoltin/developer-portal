---
id: index
title: Catalog Releases Overview
sidebar_label: Catalog Releases Overview
---

Publishing a catalog creates a release of that catalog that you can use in a storefront or other shopper experience. You can retrieve the hierarchies and the products associated with a catalog release. Use the Catalog View API to publish a catalog and to retrieve information.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

If you defined catalog rules and you want to retrieve a published catalog for a particular channel or a user-defined tag, you must set the appropriate headers in the request:

- `EP-Channel` - The channel, such as website or mobile app. Corresponds to the `channel` attribute in a [Rule object](../index.md#the-rule-object).
- `EP-Context-Tag` - A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a [Rule object](../index.md#the-rule-object).

## The Release object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A unique identifier for the node. |
| `type` | `string` | The type of object being returned. Always: `release`. |
| `attributes.name` | `string` | The name of the release. |
| `attributes.description` | `string` | A description of the node, such as the name of a category. |
| `attributes.published_at` | `string($date-time)` | The date and time the release was published. |
| `attributes.hierarchy_ids` | `[array]` | An array of references to the hierarchies in the release. |

