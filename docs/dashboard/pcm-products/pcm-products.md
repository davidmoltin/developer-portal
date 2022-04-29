---
id: pcm-products
title: Product Content Management Products and Catalogs
sidebar_label: PCM Products
---

## Overview

Products contain details, such as, the name, description, and SKU. Products are listed in a catalog using hierarchies. These catalogs then display the product in the storefront, such as a website. In Elastic Path Commerce Manager, you can also associate attributes with products using templates. However, product information does not contain pricing details. Pricing details for the products are managed in price books. For more information about products in Product Content Management, see the [PCM Products](../../concepts/products-pcm.md) section. <!-- A link to How to configure catalogs should be linked in here.-->

## Product Status and Catalog Releases

For a product to appear in the store, the product must be in the active state and belong to at least one hierarchy within the target catalog. By default, a product is created in the draft state. This is to ensure that the product details are reviewed and approved before publishing it. When you publish a catalog, only the active products appear in the catalog release. If you change the product status and want it to reflect in the catalog release, you must republish the catalog release.

## Searching Products by SKU

You can search products using **SKU**.

1. Click **Products**.
1. In **Search by SKU**, start typing your search criteria. The products that contain the criteria you have entered are automatically displayed. Wildcard characters are supported. For example, `*34` displays all products ending in **34**.

## Filtering Products

You can filter your products. You can filter using the **SKU**, **Product Name** or **Product Status**.

Filters are cumulative, meaning you can apply multiple filters to narrow down your results. For example, you might want to search for SKUs that contain **104347** and whose status is `Live`.

1. Click **Products**.
1. Click **Filters**.
1. In **SKU**, type the filter criteria you want to filter on. Elastic Path Commerce Cloud checks to see if any SKUs contain the specified filter criteria.
1. In **Product  Name**, type the product name you want to filter on. The product name must match exactly or no results are returned.
1. From **Product Status** drop-down list, select `Live` or `Draft`, depending on your requirements.
1. Once you have configured your filter, click **Apply Filters**. **Filters** is updated to show that your filter is applied.

    ![Filters Applied](assets/filters.PNG)

1. You can remove your filters at any time either by removing an individual filter or clicking **Clear All** to remove all filters.

## Related Resources

### Concepts

- [Product Templates](../../concepts/products-pcm.md#product-templates)
- [Product Attributes](../../concepts/products-pcm.md#product-attributes)
- [Product Hierarchies](../../concepts/hierarchies.md)
- [PCM Variations](../../concepts/pcm-variations.md)
- [Price books](../../concepts/price-books.md)
- [Catalog](../../concepts/catalogs.md)

### APIs

- [PCM](../../api/pcm/catalogs/releases/index.md)
- [Create a template](../../api/pcm/products/templates/create-a-template.md)
- [Create an attribute](../../api/pcm/products/attributes/create-attribute.md)
- [Create a hierarchy](../../api/pcm/hierarchies/create-a-hierarchy.md)
- [Create a variation](../../api/pcm/products/variations/create-variation.md)
- [Products](../../api/pcm/products/index.md)
- [Build child products](../../api/pcm/products/build-child-products.md)

### Demos

- [PCM products](https://share.vidyard.com/watch/1r1Fk76EU6dsCkMitNeM7r?)
- [Configuring a product](https://share.vidyard.com/watch/1TvSjFJ1fBwscvDmfkSB8T?)
- [Configuring sale price](https://share.vidyard.com/watch/VLyMmZT5sHWANHXvBAHFWn?)
