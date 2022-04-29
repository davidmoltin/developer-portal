---
id: products-pcm
title: PCM Products
sidebar_label: PCM Products
---

Products are the items or services that you might want to sell in your store. In Product Content Management, a product has a name, description, ID, and SKU. Products can also have additional attributes and associated rich media assets, such as product images or a file containing additional product details. If your store supports multiple languages, you can localize product names and descriptions.

Product data is stored in a database. After you add products, you can update product information, add images and other assets, and associate products with one or more hierarchy nodes. You can export the updated product information back to other business systems so that your organization sees a consistent view of products.

While defining products, the products are in a draft state. Your organization can develop the criteria and business processes to help determine when a product is ready to go live and appear in a catalog.

To appear in a [catalog](catalogs.md), a product must meet the following criteria:

- The product is live.
- The product is associated with at least one hierarchy.
- The catalog references a hierarchy that includes the product.

:::note
The PCM Products API replaces the v2 Products API. You can only use either `V2/products` or `PCM/products` resources to add products in the same store, not both.
:::

## Product Templates

Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a *Book* template might contain the attributes, such as *ISBN*, *Author*, *Number of pages*, *Year Published*, or *Condition (New/Used)*.

## Product Attributes

Use attributes to define the characteristics of products in a store. For example, you can assign attributes such as, *care instructions* or *fabric*, to a shirt. When a shopper searches for a specific item, attributes help stores to return the products that match the search criteria. For example, when a shopper searches for a large blue shirt, all shirts that are large and blue are returned as the search result.

For more information about adding attributes, see [Add custom data to PCM products](https://documentation.elasticpath.com/commerce-cloud/docs/developer/how-to/add-custom-data-pcm-products.html).

## Localization

PCM supports localization of products and hierarchies. If your store supports multiple languages, you can localize product names and descriptions. Elastic Path Commerce Cloud supports all languages in [Unicode 14.0 Character Code Charts](http://www.unicode.org/charts/index.html).

## Related resources

### Concepts

- [Catalogs](catalogs.md)
- [Price Books](price-books.md)

### APIs

- [PCM Products API](../api/pcm/products/index.md)

### Commerce Manager

- [PCM Products](../dashboard/pcm-products/pcm-products.md)
- [PCM Configurations](../dashboard/configuration/pcm-configurations.md)

### Demos

- !oembed[PCM products](https://share.vidyard.com/watch/1r1Fk76EU6dsCkMitNeM7r?)
