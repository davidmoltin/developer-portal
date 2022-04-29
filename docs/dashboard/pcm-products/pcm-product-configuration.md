---
id: pcm-product-configuration
title: Configuring Products in Product Content Management
sidebar_label: Product Configuration
---

## Creating Products

### Prerequisite

- Ensure that you have [created at least one price book](../pcm-pricebooks.md#creating-price-books).

### Best practises

- [Create at least one template with attributes](../configuration/templates.md) before creating a product.
- [Create at least one variation with options and required modifiers to build child products](../configuration/variations.md) before creating a product.

The following steps provide a high-level procedure to complete a product configuration:

1. In the **Product Content Management > Products** page, click [**Add Product**](#step 1---adding-product-details).
1. In the **Product Details** tab, enter the product details.
1. In the **Product Templates** tab, add [templates](../configuration/templates.md) for the product.
1. In the **Pricing** tab, configure the [pricing settings](../pcm-pricebooks.md#creating-price-books) for the product.
1. In the **Variations** tab, associate [variations](../configuration/variations.md) with the product and [build child products](#step-4---assigning-variations-and-building-child products) with the variations and options.
1. In the **Inventory** tab, manage the product inventory.
1. In the **Media Management** tab, upload the product images.

You can use **Back** and **Next** buttons to navigate through the tabs and the **Save & Exit** button to save the changes and exit the window any time.

The following procedures provides detailed instruction on completing each step in the [Creating Products](#creating-products) section.

### Step 1 - Adding product details

1. In the **Product Details** tab, enter the following details:

    - **Name**: A name for the product.
    - (Optional) **Description**: A description for the product.
    - **SKU Number**: The SKU number of the product.
    - **Slug**: A label for the product that is used in the URL paths. A slug can contain any combination of letters, numbers, periods, hyphens, and underscores. No spaces or other characters are allowed. By default, the product name is used as the slug.
    - **Select physical or digital**: The type of commodity.
    - (Optional) **MPN**: Manufacture Part Number (MPN).
    - (Optional) **UPC/EAN**: Universal Product Code (UPC) or European Article Number (EAN) used to scan a product in a Point of Sale (POS) system.

1. Click the **Product Status** toggle and set the product status.
1. Click **Next**.

### Step 2 - Adding templates to the product

Ensure that at least one template is available.

1. In the **Product Templates** tab, click **Add Templates**.

    The [templates] available for the product are listed.

1. To add a template to the product, click **+** in the template listing.

    All templates added to the product are displayed in the **Templates list** table. This page also provides details of the templates, such as the name and values of the attributes in the templates.

1. Click **Next** or **Save & Exit**.

### Step 3 - Configuring product price

Use this procedure to configure product pricing details, such as price books associated with the product, sale price and volume price, for a product. You can use volume pricing feature to set a different unit price for the product when shoppers make volume purchase of the product. You can select a price book for the product pricing and specify the new unit price offered when a minimum specified quantity is bought.

You can use the sale price feature and enable selling the product for a sale price during a specific period.

#### Procedure

1. In the **Pricing > Price Books** tab:

    1. To associate the product with a price book, in the **Select Price Book** field, select a price book.
    2. Enter the amount in the available currencies.

          You can configure currencies in [Settings > Currencies](../settings/currencies.md).
    3. Click **Save**.
1. In the **Advanced Pricing** tab, do the following:

    1. To specify the minimum purchase quantity available for the volume pricing, in the **Volume Pricing** section, select a price book and enter the minimum purchase quantity.
    1. To specify sale price for the product, in the **Sale Price** section, select a price book and duration and enter a sale name.

1. Click **Next** or **Save & Exit**.

### Step 4 - Assigning variations and building child products

- Ensure that at least one variation with at least one option is available.
- Ensure that both variation and all option names contain only uppercase and lower case letters, digits from 0 to 9, underscore (_), or hyphen (-) and does not contain any other special characters.
You can build the child products only if all variations and the options are named appropriately.

1. In the **Variations** tab, click **Associate Variation**.
1. From the **Variation** drop down menu:
    1. Select a variation.
    1. Click **Associate to Product**.

    All options within the selected variation are displayed in the **Variation Options** field.
1. Repeat step 2 and assign all required variations to the product.
1. To add child products, click **Child Products**.

    The **Child Products** tab is displayed with a list of existing child products, if any.
1. Click **Build Child Products**.

    Child products are generated by combining the variations and the options within each variation. If you click **Build Child Products** without assigning a variation to the product, a message prompting you to select a variation is displayed.

For example, assign the following variations for the product, _shirt_:

| Variation | Option |
|-----|------|
| size | small, medium, large |
| color | green, yellow, red |

When you build the child products, products with the following SKU are created:

![Child products](assets/build-child-product.png)

The child products are indicated with the **Child** type. After deleting variations and options, you must rebuild the child products for the changes to take effect.

### Step 5 - Managing product inventory

Inventory is the quantity of each product that you have in stock.

1. In the **Inventory** tab, click **Manage inventory**.

    The following details are displayed:

    - **Product Name**
    - **SKU**
    - **In stock**
    - **Allocated**: The amount of reserved product in stock.
    - **Available**: The amount of product available in the stock minus allocated product. (Available = Total - Allocated).
1. In the **Manage inventory > Actions** field, select one of the following options, and in the **Qty** field, enter the appropriate quantity:

    - **Allocate** : Reserves a number of inventory items so that you cannot sell the allocated items.
    - **Deallocate** : Reduces the number of allocated items so that you can sell the items again.
    - **Increment** : Adds stock to the total inventory.
    - **Decrement** : Reduces the specified quantity from the total inventory.

    After you update the stock, the activity is added to the log and the **Inventory log** tab displays the details of each activity.
1. Click **Next** or **Save & Exit**.

### Step 6 - Managing product media

1. To add a media for the product, in the **Media Management** tab, do one of the followings:

    - Drag and drop the file from your local directory.
    - Click **Choose File** and browse and add the file.
    - In the **add by URL** field, add the URL for the media.

1. Click **Done**.

    You can add multiple media for a product. All media that you upload are listed in the **Media upload** table.
1. To assign an image as the main image for the product, select the **Use as main image** field next to the image name.
1. Click **Next** or **Save & Exit**.

## Editing Products

After editing a bundle, ensure that you republish all catalogs that contain the bundle to reflect the changes.

1. In the **Product Content Management > Products** page, do one of the following:

    - Double click the bundle product.
    - Click the **...** icon and click **Edit**.

1. Update the details as required.

    For the changes to appear in the store, republish the catalogs that contains hierarchies with this product.

## Viewing Product Details

1. In the **Product Content Management > Products** page, click a product.

    The following details about the product are displayed:

    - **Name**: The name for the product.
    - **Slug**: The label for the product that is used in the URL paths. By default, the product name is used as the slug.
    - **SKU Number**: The SKU number of the product.
    - **Type** : The type of the product. The type **Product** indicates that the product is a parent product, and the type **Child** indicates that the product is a child product of a product.
    - **Status** : The status of the product, such as **Draft** of **Live**.

1. Click the **Product Status** toggle and set the product status.

## Deleting Products

Deleting a product removes the product information and the associated media files from the database. However, the product references are not deleted from the price books that consist of the product information. You must republish the catalog to update the catalog release with the changes. If you want to keep your hierarchies and price books up to date, remove the deleted products from those resources.

Even after deleting a product, an order history that has the product still keeps the product information of the deleted product, such as, the product SKU, product ID, and price. However, clicking the product does not take shopper to product details.

- In the **Product Content Management > Products** page, click the **...** icon and click **Delete**.

:::tip
To remove products from the catalog and still keep them in the database for audit purposes, set the product status to draft instead of deleting it. Additionally, remove the product from hierarchies, and republish the affected catalogs so that it does not appear in the storefront.
:::

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
