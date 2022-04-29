---
id: bundle-configuration
title: Bundles in Product Content Management
sidebar_label: Product Bundles
---
## Creating Bundles

Elastic Path Commerce Cloud supports two types of bundles, bundles with SKU and bundle without SKU.

With bundles, your store can offer your customers a discounted price for a group of products when a customer buys those products together. For example, a customer can purchase the newest *Playtend* video game for the original price or buy the whole franchise series for a sales price. Sale prices depend on the type of bundle. A bundle must contain at-least two products. A bundle with a single option must contain minimum two quantity of the same option or you must add two options to the bundle.

A bundle with SKU must have a SKU and price associated with the bundle.

The price of a bundle without SKU is based on the sum of each component product price, without sale pricing. Ensure that you set a price for each product within the bundle. If a component product does not have a price, the bundle price cannot be set and customers cannot purchase the bundle. You must also create components and options before saving a bundle without SKU.

:::note
The **Variations** tab is disabled for bundles. If you want to convert a product to bundle, ensure that all variations associated withe product are deleted before you enable the **Product Bundle** toggle.
:::

### Before you begin

- Ensure that you have created at least one price book.
- Ensure that all products that you want add in the bundle are created with the required details.

:::important
An error is returned if you save a bundle without SKU before adding components and options in the bundle. A bundle with a single option must contain minimum two quantity of the same option or you must add two options to the bundle.
:::

### Procedure

1. In the **Product Details** tab, enter the following details:

    - **Name**: Name for the bundle.
    - (Optional) **Description**: A description for the bundle.
    - (Optional) **SKU Number**: The SKU of the product. You need not enter this value for a bundle without SKU.
    - **Slug**: A label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. No spaces or other characters are allowed. By default, the product name is used as the slug.
    - (Optional) **MPN**: Manufacture Part Number (MPN).
    - (Optional) **UPC/EAN**: Universal Product Code (UPC) or European Article Number (EAN) used to scan a product in a Point of Sale (POS) system.

1. To create a bundle, click the **Product Bundle** toggle and enable bundle status.
1. Click the **Product Status** toggle and set the product status.
1. In the **Select physical or digital**, select the type of commodity.
1. In the **Components & Options** tab, click **Add Component**.
1. In the **Component Name** field, enter a name for the component.

    Repeat this step to create as many components as required. All components are listed in the **Components & Options** table.
1. To add options in a component, click the **...** icon in the **Actions** field in the corresponding component row.
1. Click **Add options**

    All products available to add as options are listed in a table with the following details:

    - **Image** : Displays image associated with the option, if any.
    - **Product Name**: Specifies the name of the option.
    - **SKU**: Specifies the SKU of the option.
    - **Variant Type** : Specifics whether the option is a parent product or a child product.
    - **Product Status**: Specifics whether the option is in live state or draft state.

1. To add an option to the component, click the **+** icon in the option row.
    All options for a specific component are listed in table with a title **Options for (component name)**. You can add as many options you want. You can also filter the options products by **SKU**, **Product Name**, and **Product status**, or search for a specific product by SKU.
1. To add options to other components, repeat the previous step 8 and 9.
1. Click **Next** or **Save & Exit**.

### Adding templates to a bundle

Ensure that at least one template is available in the store.

1. In the **Product Templates** tab, click **Add Templates**.

    The templates available for the bundle are listed.

1. To add a template to the bundle, click **+** in the template listing.

    All templates added to the bundle are displayed in the **Templates list** table. This page also provides details of the templates, such as the name and values of the attributes in the templates.

1. Click **Next** or **Save & Exit**.

### Configuring bundle price for a bundle with SKU

Use this procedure to configure pricing details, such as price books associated with the product and sale price, for a bundle with SKU. You can use the sale price feature and enable selling the bundle for a sale price during a specific period.

1. In the **Pricing > Price Books** tab:

    1. To associate the bundle with a price book, in the **Select Price Book** field, select a price book.
    1. Enter the price in the available currencies.

          You can configure currencies in [Settings > Currencies](../settings/currencies.md).
    1. Click **Save**.

1. In the **Advanced Pricing > Sale Price** field, do the following:

    1. Select a price book.
    1. Set a duration for the sale.
    1. Enter a name for the sale.

1. Click **Next** or **Save & Exit**.

### Configuring bundle price for a bundle without SKU

The total price of a bundle without SKU is the sum of the options in the components including the sale price.

- Ensure that each option within the bundle has an associated price book.

The **Pricing > Sale Price of Options** tab displays all options that are set with a sale price.

1. In the **Pricing > Price Books > Find an option to add a sale price** tab, click the **+** icon.
1. To add a sale price to an option, in the **Action** column, click the **+** icon.

    The **Add Sale Price** tab is displayed.
1. Click the **+ Add Sale Price** and do the following:

    1. To associate the option with a price book, in the **Select Price Book** field, select a price book.
    1. Enter the required settings.

    For more information, see the [Pricebooks](../pcm-pricebooks.md#) and [Settings > Currencies](../settings/currencies.md) sections.
    1. Click **Add Sale**.

    The total bundle price is calculated depending on the price of the options including the sale price.

1. Click **Next** or **Save & Exit**.

### Managing product inventory

You can track the number of bundles by SKU, if you set the number of bundles available in store. If the bundle inventory is tracked based on the availability of individual items in the bundle, the maximum number of bundles you can sell is equal to the number of the option that is least available.

You cannot track the inventory of a bundle without SKU. However, you can track the inventory based on the availability of individual items.

1. In the **Inventory** tab, click **Manage inventory**.

    The following details are displayed:

    - **Product Name**
    - **SKU**
    - **In stock**
    - **Allocated**: The amount of reserved product in stock.
    - **Available**: The amount of product available in the stock minus allocated product, where **Available** = **Total** - **Allocated**.
1. In the **Manage inventory > Actions** field, select one of the following options, and in the **Qty** field, enter the appropriate quantity:

    - **Allocate** : Reserves a number of inventory items so that you cannot sell the allocated items.
    - **Deallocate** : Reduces the number of allocated items so that you can sell the items again.
    - **Increment** : Adds stock to the total inventory.
    - **Decrement** : Reduces the specified quantity from the total inventory.

    After you update the stock, the activity is added to the log and the **Inventory log** tab displays the details of each activity.
1. Click **Next**.

### Managing product media

1. To add a media for the bundle, in the **Media Management** tab, do one of the following:

    - Drag and drop the file from your local directory.
    - Click **Choose File** and browse and add the file.
    - In the **add by URL** field, add the URL for the media.

1. Click **Done**.

    You can add multiple media for a product. All media that you upload are listed in the **Media upload** table.
1. To assign an image as the main image for the product, select the **Use as main image** field next to the image name.
1. Click **Save**.

## Editing Bundles

After editing a bundle, ensure that you republish all catalogs that contain the bundle to reflect the changes.

1. In the **Product Content Management > Products** page, do one of the following:

    - Double click a product.
    - Click the **...** icon and click **Edit**.

1. Update the details as required.
    For the changes to appear in the store, republish the catalogs that contain hierarchies with this product.

## Deleting Bundles

Deleting a bundle removes bundle information and the associated media files from the database. However, the product options in the bundle are not deleted from the database. You must republish the catalog to update the catalog release with the changes. If you want to keep your hierarchies and price books up to date, remove the deleted bundles from those resources.

Even after deleting a bundle, an order history that has the bundle still keeps the product information of the deleted bundle, such as, the product SKU, product ID, and price. However, clicking the product does not take a shopper to product details.

- In the **Product Content Management > Products** page, click the **...** icon and click **Delete**.

:::tip
If you want to remove bundle products from a catalog, but still want to keep them in the database for audit purposes, set the product status to **Draft** instead of deleting it. Additionally, remove the product from hierarchies, and republish the affected catalogs so that it does not appear in the storefront.
:::

## Related Resources

### Concepts

- [Bundles - Product Content Management](../../concepts/pcm-bundles.md)
- [Product Templates](../../concepts/products-pcm.md#product-templates)
- [Product Attributes](../../concepts/products-pcm.md#product-attributes)
- [Product Hierarchies](../../concepts/hierarchies.md)
- [Price books](../../concepts/price-books.md)
- [Catalog](../../concepts/catalogs.md)

### APIs

- [PCM](../../api/pcm/catalogs/releases/index.md)
- [Products](../../api/pcm/products/index.md)
