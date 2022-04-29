---
id: product-content-management
title: Product Content Management
sidebar_label: Product Content Management
---

Product Content Management (PCM) manages product information, hierarchies, and price books. Ideally, Product Content Management becomes the single source of truth for product data across your organization.

In Elastic Path Commerce Cloud, the product data is stored separately from pricing, catalogs, and inventory. This separation means that you retrieve all product data only when you are managing product data and assets. Otherwise, when setting prices or managing inventory, you retrieve a reference to the product rather than the entire product, which makes the response times very fast.

You also have the flexibility to create catalogs for different scenarios by combining hierarchies of products with a price book. Scenarios might include:

- **Multiple geographical regions**. Display different catalogs in different regions with suitable pricing or combine product hierarchies from two different regions to display in a third region.
- **Multiple channels**. Display different catalogs based on how a shopper accesses your store, such as through a mobile app or a web storefront.
- **Direct to business versus direct to customers**. Offer different products and prices for business customers versus retail customers.
- **Preferred customers**. Offer special pricing to preferred customers while displaying a standard price catalog to all other shoppers.
- **Reward programs**. Enable reward programs where catalog prices drop after a certain spending level is reached.
- **Product sales**. Offer sale items for a limited time.

Scenarios are created by defining the context within which a catalog is displays. Contexts can be a customer ID, a channel, or any other user-defined tag that can be passed to the APIs from the front-end shopper experiences.

## Related resources

### Concepts

- [Catalogs](catalogs.md)
- [Catalog Rules](catalog-rules.md)
- [PCM Hierarchies](hierarchies.md)
- [PCM Products](products-pcm.md)
- [Price Books](price-books.md)

### APIs

- [Catalog View API](../api/pcm/catalogs/index.md)
- [PCM Hierarchies API](../api/pcm/hierarchies/index.md)
- [PCM Products API](../api/pcm/products/index.md)
- [Price Books API](../api/pcm/pricebooks/index.md)

### How-to guides

- [Getting Started with PCM](../developer/how-to/get-started-pcm.md)

### Demos

!oembed[PCM products](https://share.vidyard.com/watch/1r1Fk76EU6dsCkMitNeM7r?)
