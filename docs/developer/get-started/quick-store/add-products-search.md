---
id: add-products-search
title: Add products and enable search
sidebar_label: Add products and enable search
---

Now that you have a branded storefront, you can start adding products and activating search.

## Add products (required)

To make the storefront useful, you need to define some products so that you can search for them and add them to a cart. Currently, you must add products through Commerce Manager or through the API.

To learn how to add products from Commerce Manager, see [Catalog](../../../dashboard/catalog.md).

For information about adding products from the API, start from the [Products](../../../concepts/products.md) key concept and navigate to the related API topics.

:::note
Site navigation in the storefront is created by the categories that each product is associated with. Make sure to add your categories and associate them with products. For more information, see [Categories](../../../api/catalog/categories/index.md).
:::

## Enable product search with Algolia (optional)

You have already configured the storefront with your Algolia secrets. To enable product search, share your product catalog with Algolia. Elastic Path offers a script that you can use to push the catalog from Elastic Path Commerce Cloud to Algolia.

1. Go to the [catalog syndication open source project](https://github.com/elasticpath/catalog-syndication).
1. Follow the instructions in the [README file](https://github.com/elasticpath/catalog-syndication/blob/master/README.md#start-running-the-utilities).
