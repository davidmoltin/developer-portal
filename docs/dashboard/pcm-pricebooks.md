---
id: pcm-pricebooks
title: Product Content Management Price Books
sidebar_label: PCM Price Books
---

A price book contains the prices for the products in a catalog. Catalogs with the same hierarchies of products can be associated with different price books. For more information about price books in Product Content Management, see the [PCM Price Books](../concepts/price-books.md) section.

With price books, you can sell the same set of products with different pricing by creating multiple price books for the same products. Use different pricing for the same products in the storefront by using catalogs with different price books, but the same hierarchy. With catalog rules, you can specify when to display these catalogs based on the shopper context. For more information, see [Catalogs](../concepts/catalogs.md) and [Catalog Rules](../concepts/catalog-rules.md) sections.

## Creating Price Books

Create a price book. Add a product by SKU and then add prices in each currency supported in the store. You can add currencies in the Settings page.

1. In the **Product Content Management > Price Books** page, click **Add Price Book**.
1. In the **Name** field, enter a name for the price book.
1. (Optional) In the **Description** field, enter a description for the price book.
1. Click **Save**.

You can add products and price only after creating a price book.

## Adding products and price to a price book

1. To add products and prices to a price book, in the **Product Content Management > Price Books** page, double-click the price book.
1. To add a product to the price book, in the **Add SKUs** field, do one of the following:

    - Enter the SKU number and search for the product.
    - Select a product from the list.

1. To add the product, click the **+** icon.
    The products added are displayed in a table with an option to enter price in available currencies.
1. Enter the price for the product in appropriate currency.
    You can add currencies as required by updating the [settings](settings/currencies.md).
1. Click **Save**.

## Updating price books and prices

1. In the **Product Content Management > Price Books** page, do one of the following:

    - Click a price book.
    - Click the **...** icon in the price book listing and click **Edit**.

1. Update the details as required.
1. Click **Save**.

You can use the **x** icon next in the product listing to delete a product and related information from the price book.

### Next step

- Publish the catalog to apply the changes in the storefront.

## Deleting Price Books

Deleting a price book deletes the product prices in the price book. However, it does not delete the products. The pricing details in the orders referring to the deleted price book are also not deleted.

1. To delete a price book, in the **PCM > Price Books** page, do one of the following:

    - Click the **...** icon in the price book listing and click **Delete**.
    - Select the checkbox in the price book listing and click **Actions > Delete**.

2. To delete more than one price book, do the following:

    1. Select the checkbox in the price book listing of the price books that you want to delete.
    1. Click **Actions > Delete**.

### Next step

- Publish the catalog to apply the changes in the storefront.

## Related Resources

### Concepts

- [Products](../concepts/products-pcm.md)
- [PCM Price Books](../concepts/price-books.md)
- [Catalogs](../concepts/catalogs.md)
- [Catalog Rules](../concepts/catalog-rules.md)

### APIs

- [Price Book APIs](../api/pcm/pricebooks/index.md)
- [Catalog Rules APIs](../api/pcm/catalogs/rules/create-a-catalog-rule.md)

### Demo

- [Understanding Price Books](https://share.vidyard.com/watch/v5h9wSgSfP7gw1EXfQ1ySB?)
- [Creating a Price Book in Commerce Manager](https://share.vidyard.com/watch/HuuqRPp6SrYbSkDeZ8QznR?)
