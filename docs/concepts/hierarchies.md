---
id: hierarchies
title: PCM Hierarchies
sidebar_label: PCM Hierarchies
---

Use hierarchies to organize your products. A hierarchy is a tree structure with a root node and descendant nodes. Define hierarchies that work for the products in your store. A product can belong to multiple nodes in multiple hierarchies. If your store supports multiple languages, you can localize new and existing hierarchies and nodes.

For example, a Nike basketball shoe for men might belong to the following hierarchies and nodes:

- Brands > **Nike**
- Shoppers > **Men**
- Shoes > Sports > **Basketball**

Hierarchies determine which products are included in a catalog. When you create a catalog, you specify one or more hierarchies. Any products associated with those hierarchies are included in the catalog. Front-end developers use the hierarchies to create and populate navigation menus in a storefront.

:::note
The PCM Hierarchies API replaces the v2 Brands, Categories, and Collection APIs.
:::

## Localization

PCM supports localization of products and hierarchies. If your store supports multiple languages, you can localize product names and descriptions. Elastic Path Commerce Cloud supports all languages in [Unicode 14.0 Character Code Charts](http://www.unicode.org/charts/index.html).

## Related concepts

- [PCM Products](products-pcm.md)
- [Catalogs](catalogs.md)

## APIs

- [PCM Hierarchies API](../api/pcm/hierarchies/index.md)
