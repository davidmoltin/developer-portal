---
id: catalog-configuration
title: Catalog Configurations
sidebar_label: Catalog Configurations
---

A catalog can have one or more hierarchies of products. The hierarchies contain all the products that you want to display in your store. Optionally, a catalog can have one price book associated with it. If no price book is assigned to a catalog, the products are displayed without prices. This feature can be used when you want customers to contact you for the pricing information.

## Creating Catalogs

### Before you begin

- Create the hierarchies and price book you want to use in the catalog.

1. In the **Product Content Management > Catalogs** page, click **Add Catalog**.
1. In the **Name** field, enter a name for the catalog.
1. (Optional) In the **Description** field, enter a description for the catalog.
1. In the **Price book** field, select a price book.
1. In the **hierarchy** field, select the hierarchies you want to add to the the catalog.
    You can add more than one hierarchy to a catalog.
1. Click **Save**.

## Publishing Catalogs

You must not publish a catalog before creating the catalog with the required settings. After publish, a catalog release is created, which is displays the products in the storefront.

1. In the **Product Content Management > Catalogs** page, double-click a catalog.
1. Ensure that all required configurations are made.
1. Click **Publish**.

You can also click the **...** icon in the catalog listing and click **Publish** to publish a catalog.

## Editing Catalogs

Whenever you make changes in a catalog or any of the components in a catalog, such as, hierarchies or products, you must republish the catalog for the changes to appear in the storefront.

1. In the **Product Content Management > Catalogs** page, double-click a catalog.
1. Click the **...** icon in the catalog listing and click **Edit**.
1. You can filter the products. For example, if you are adding a new product to a catalog, you can filter using the **SKU**, **Product Name** or **Product Status**.

    1. Click **Filters**.
    1. In **SKU**, type SKU that you want to filter your products on. The SKU must match or no results are returned.
    1. In **Product  Name**, type the product name you want to filter on. The product name must match or no results are returned.
    1. From **Product Status** drop-down list, select `Live` or `Draft`, depending on your requirements.
    1. Once you have configured your filter, click **Apply Filters**. **Filters** is updated to show that your filter is applied.
        ![Filters Applied](assets/filters.PNG)
    1. You can remove your filters at any time either by removing an individual filter or clicking **Clear All** to remove all filters.

1. Once you have finished making the required changes, do one of the following:

    - If you do not want to publish the changes, click **Save**.
    - To publish the changes to the catalog release, click **Publish**.

## Deleting Catalogs

When you delete a catalog, the catalog configuration and all its releases are deleted. The hierarchies, products, and price book remain in the database.

1. To delete a catalog, in the **PCM > Catalogs** page, do one of the following:

    - Click the **...** icon in the catalog listing and click **Delete**.
    - Select the checkbox in the catalog listing and click **Actions > Delete**.

1. To delete more than one catalogs, do the following:
    1. Select the checkbox in the catalog listings of the catalogs that you want to delete.
    1. Click **Actions > Delete**.

## Related Resources

### Commerce Manager

- [Catalog Rules](catalog-rules.md)

### Concepts

- [Catalogs](../../concepts/catalogs.md)
- [Catalog Rules](../../concepts/catalog-rules.md)

### APIs

- [Catalogs APIs](../../api/pcm/catalogs/index.md)
- [Catalog Rules APIs](../../api/pcm/catalogs/rules/create-a-catalog-rule.md)

### Demos

- [Understanding Catalogs in Product Content Management](https://share.vidyard.com/watch/NuaWW4decikrcmMAFoWPSd?)
-[Configuring Catalogs & Catalog Rules in Commerce Manager](https://share.vidyard.com/watch/LGwm63Use3BWuT6tkbkn4Z?)
