---
id: catalog
title: Catalog (Legacy)
sidebar_label: Catalog (Legacy)
---
You can manage products and their associated attributes on the **Catalog > Products** page.

For a conceptual overview of products in Commerce Cloud, see [Products](../concepts/products.md).

## Sorting, filtering, and searching products

You can sort the list by **SKU**, **Name**, or **Status**.

You can filter the list to show only **Live** or **Draft** products.

You can use **Advanced Search** to enter a field to search on (Description, Name, SKU, and so on) and a value to search. For some advanced search types, you can choose between an **is equal to** and a **contains** search operator.

## Creating products

1. On the **Products** tab, select **+New Product**.
1. On the **Create New Product** page, enter the following:

    **Product Details**
     | Name | Details |
     | :------------- | :------------- |
     | **Name** | A name for this product. |
     | **Slug** | A unique slug for this product. |
     | **Description** | A description of the product. |
     | **Status** | Draft (cannot be seen by customers) or Live on your site. |
     | **Commodity type** | Physical or virtual. |

     **Inventory Management**
     | Name | Details |
     | :------------- | :------------- |
     | **SKU** | A unique SKU for this product. |
     | **Manage stock** | Select to manage stock within Commerce Cloud. See the following note. |
     | **Stock** | Enter an initial stock value. |
     | **Weight** | To manage product weight, enter a value for weight in grams, kilograms, ounces, or pounds. After a value is entered in any **Weight** tab, the rest of the values are calculated for you. |

:::note
If stock is not being managed by Commerce Cloud, the store assumes that stock is available.
:::

### Adding pricing

Before you begin, set up the currencies for your store on the **Settings > Currencies** page. For more information, see [Settings](./settings/currencies.md).

1. In the **Pricing** area, add a new price.
1. In the dialog box that opens, enter an amount without a decimal place.

    For example, if your product costs $2.98 in US dollars, enter `298`.

1. Select whether tax is included in the price.
1. Select a currency.
1. Select **Save**.

After you have created the product, you can add more product details, such as images, inventory, and so on.

### Adding a product image

Images and all other files can be managed from the **Files** page in Commerce Manager. For more information, see [Files](./files.md).

1. From the catalog list, select a product.
1. In the **Details** tab, select **Upload** and select a local image file.

### Recording an inventory transaction

For a conceptual overview of how inventory is managed in Commerce Cloud, see [Inventory](../concepts/inventory.md).

A record of inventory transactions is kept for you in the **Inventory Transactions** tab. Each transaction is identified with an appropriate symbol, number, and date.

1. Select **Record a new transaction**.
1. In the dialog box that opens, enter a quantity of inventory affected and an action:

     | Action | Description |
     | :------------- | :------------- |
     | **allocate** | Reserves a number of inventory items so that they cannot be sold. |
     | **deallocate** | Reduces the number of reserved items. |
     | **increment** | Adds to the total inventory. |
     | **decrement** | Reduces the total inventory. |

### Linking brands, collections, and categories

To create a brand, collection, or category, see [Managing brands, collections, and categories](#managing-brands-collections-and-categories).

For a conceptual overview of brands, collections, and categories, see [Products](../concepts/products.md).

1. Select the **Brands**, **Collections**, or **Categories** header.
1. Select **Add a new brand relationship**, **Add a new collection relationship**, or **Add a new category relationship**.
1. Select the brand, collection, or category you want to link to.

### Adding and linking files

Files can be managed and deleted from the **Files** page in Commerce Manager. For more information, see [Files](./files.md).

1. Select the **Files** header.
1. Select **Add a new file**.
1. Select a file to add.
1. Decide whether you want to make the file public.
1. Select **Upload**.

## Creating child products

For a conceptual overview of child products and product variations, see [Product variations and modifiers](../concepts/product-variations.md).

### Creating variations

*Variations* allow you to generate child products from a product. For example, if you are selling shoes, shoe *size* and *color* are each a separate variation. The variation options then interact to form an array of child products.

1. Select the **Variations** tab.
1. Select **New Variation**.
1. Enter a name for the variation and select **Save**.

### Creating options

After you have created the variation, you can add variation *options*. Options are the specific values for each variation. For example, for shoe size variation, the options are sizes 7-12, and for the shoe color variation, the options are blue, black, and gray.

1. In the **Product Variations** list, open the plus sign (+) to the left of the variation name.
1. Under **Variation Options**, select **New option**.
1. In the dialog box that opens, enter a name and description for the variation option.

### Creating modifiers

After you have created a variation option, you must add one or more *modifiers*. Modifiers overwrite, change, or add to attributes of the child products, to make sure each child product has a unique value for name, SKU, and slug. You can change the price as well.

1. Select **New modifier**.
1. Select the kind of modifier you want to create:

    | Type of modifier | Description    |
    | :------------- | :------------- |
    | **basic**      | You can overwrite or modify the name, SKU, or slug of the generated child products by doing one of the following:
    | | *Appending* a string. For example, use **name_append** to add a string to the end of the **name**.
    | | *Prepending* a string. For example, use **name_prepend** to add a string to the start of the **name**.
    | |  *Replacing* the string. For example, use  **name_equals** to give the child product a new **name**. |
    | **SKU builder** | Use **Seek** to enter a search string for the find and replace action on the parent product SKU, and use **Set** for the replacement string. |
    | **slug builder** | Use **Seek** to enter a search string for the find and replace action on the parent product slug, and use **Set** for the replacement string. |
    | **price increment** | You can increase the price of the child products. Enter a value to increment for each listed currency. Select **Includes tax** if tax is included.|
    | **price decrement** | You can decrease the price of the child products. Enter a value to decrement for each listed currency. Select **Includes tax** if tax is included.|
    | **price equals** | You can change the price of the child products. Enter a value for each listed currency. Select **Includes tax** if tax is included. |

1. Repeat the preceding steps until you have created all the necessary modifiers for your child products.

### Generating child products

1. Select the **Child products** tab.
1. Select **Build child products**.

If you have created your product variations, options, and modifiers correctly, the correct child products are generated and appear in a list.

### Managing child products

You can modify each child product by selecting the eye symbol next to their listing in the **Child products** tab. You can also select the name of the child product in the main **Products** list.

You can modify child products just as you would non-child products; that is, manage the product inventory, pricing, links to brands, categories, and so on.

## Managing brands, collections, and categories

You can view your brands, collections, or categories in the **Catalog > Brands**, **> Collections**, or **> Categories** tab. You can sort these lists by **Name** or **Description**.

You can filter the list by which brands, collections, or categories are live and which are still in draft. Additionally, you can use an **Advanced filter** to filter these lists by **Name**, **Slug**, or **Status**.

### Creating brands

1. On the **Brands** tab, select **+New Brand**.
1. On the **Create New Brand** page, enter values for **Name**, **Slug**, **Status**, and **Description**.

### Creating collections

1. On the **Collections** tab, select **+New Collection**.
1. On the **Create New Collection** page, enter values for **Name**, **Slug**, **Status**, and **Description**.

### Creating categories

1. On the **Categories** tab, select **+New Category**.
1. On the **Create New Category** page, enter values for **Name**, **Slug**, **Status**, and **Description**.
