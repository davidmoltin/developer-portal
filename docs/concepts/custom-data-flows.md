---
id: custom-data-flows
title: Custom data (Flows)
sidebar_label: Custom data (Flows)
---

You can define custom data fields for the resources that you use in your store, such as adding more fields to the `customer` resource. You can also create new resources, such as a `wishlist` resource to support wishlists in your store. With Flows, you can apply Commerce Cloud to almost any use case.

:::important
If you store any sensitive Personal Identifiable Information (PII) or non-public data on your site, ensure that you do not use this data in flows to avoid potential access to the data. For more information, see [Permissions](../api/basics/authentication/permissions.md).
:::

## Flows taxonomy

Fields and Entries are an integral part of Flows. A Flow describes a collection of Fields. A Field represents a single field of data. An Entry is a specific instance of a Flow, and is associated with a specific instance of an entity, such as a single product. Entries for core Flows (existing resources) are managed automatically for you.

In database terms, you can think of Flows as tables, Fields as columns, and Entries as database records.

## Scenarios

There are two scenarios for using Flows:

- Extend an existing resource, such as products, customers, and orders.
- Create a new resource, such as a blog, wishlist, or customer review.

### Extend an existing resource

The most common usage of the Flows API is to extend existing resources, such as `products`, `customers`, and `orders`. These types of resources are called core Flows and are handled differently than non-core Flows. For more information and a list of core Flows, see the Custom Data (Flows) API reference.

For example, you can extend the `products` resource to store custom data, such as a `manufactured_date` field for products. Or you might want to add a `color` field to store a string that contains a hexadecimal color to use when displaying the product on the user interface.

### Create a new resource

You can create new resources to support product reviews, want lists, blog articles, staff profile pages, and many more. These non-core Flows are referred to as custom Flows.

## Related concepts

- [Products](products.md)
- [Customers](customers.md)
- [Orders](orders.md)
- [Integrations)](integrations.md)

## Related APIs

- [Custom Data (Flows) API](../api/advanced/custom-data/index.md)

## How-to guides

- [Extend any resource](../developer/how-to/extend-any-resource.md)
- [Extend product resources](../developer/how-to/extend-product-resources.md)
- [Extend customer resources](../developer/how-to/extend-customer-resources.md)
- [Extend cart and order resources](../developer/how-to/extend-cart-and-order-resources.md)
- [Create a blog resource](../developer/how-to/create-a-blog-resource.md)
- [Create a wishlist resource](../developer/how-to/create-a-wishlist-resource.md)
