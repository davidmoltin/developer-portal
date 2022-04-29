---
id: templates
title: Product Templates Attributes
sidebar_label: PCM Templates and Attributes
---

## Templates

Templates are a collection of attributes. Attributes are grouped together to match a particular product type or to provide an input for other purposes, such as Search Engine Optimization (SEO) or product specification. For example, a *Book* template might contain the attributes, such as *ISBN*, *Author*, *Number of pages*, *Year Published*, or *Condition (New/Used)*.

You can only assign one template to an attribute. If you want to assign an attribute to more than one template, you must create the attribute again and assign to the templates as required.

:::note
You must create a template before creating attributes. We recommend deleting all attributes assigned to a template before deleting the template. You cannot assign a new template to the attributes or use the attributes after deleting the template.
:::

### Creating templates

1. In the **Product Content Management > Configurations** page, click **Templates** tab.
1. Click **Add Template**.
1. Enter the following details:

    - **Name**
    - **Slug**
    - **Description**

1. To change the status, click the **Status** toggle.

    You can set either **Live** or **Draft** status for the template.
1. Click **Save**

### Viewing and editing templates

1. In the **Product Content Management > Configurations** page, click **Templates** tab.
1. Click a template.
1. View or update the following details as required:

    - **Name**
    - **Slug**
    - **Description**
    - **Status**

    All attributes assigned to the template are displayed in a table. However, you can only view the attributes list, you cannot update or delete the table. If you want to remove an attribute from the template, unassign the template in the attribute settings.

1. Click **Save**

### Deleting templates

We recommend deleting all attributes assigned to a template before deleting the template. You cannot assign a new template to the attributes or use the attributes after deleting the template.

1. In the **Product Content Management > Configurations** page, click **Templates** tab.
1. In the **Actions** field, click the **...** icon.
1. Click **Delete**.

    A dialog box with the following message is displayed:
    *The template will no longer be available to use or to associate attributes to. Are you sure that you want to delete the template **template name**.*
1. Click **Delete**.

## Attributes

Use attributes to define the characteristics of products in a store. For example, you can assign attributes such as, color and size, to a shirt. When a shopper searches for a specific item, attributes help stores to return the products that match the search criteria. For example, when a shopper searches for a large blue shirt, all shirts that are large and blue are returned as the search result.

In attributes configuration, you can specify whether an attribute is required. For example, you can set *size* attribute as required for a T-shirt and *color* attribute as optional. This feature helps to avoid using all attributes in a flow if those attributes in the flow are not necessary for the product. With this option, you can set attributes that you don’t need for a specific product as optional and still use the template. For example, if the template has 50 attributes, and you need only three attributes for a single product, you can set all attributes except the ones you need as optional. This helps to avoid returning product with all attributes when you search for it.

### Creating attributes

#### Before you begin

- Ensure that at least one template is created.

#### Procedure

1. In the **Product Content Management > Configurations** page, click **Attributes** tab.
1. Click **Add Attribute**.
1. In the **Name** field, enter a name for the attribute.
1. To mark an attribute as required, click the **Required Attribute** toggle.
1. To set the status of an attribute to *Live*, click the **Attribute Status** toggle.
1. In the **Description** field, enter a description for the attribute.
1. In the **Slug** field, enter a unique slug for the attribute.

    These slugs are shown in the results when you search for a product with attributes.
1. (Optional) In the **Default Value** field, enter a default value.

You can set this value to use when a user does not provide a value for the attribute and the attribute value is required.

1. In the **Field Type** field, select one of the following options:

    - **Boolean**
    - **Float**
    - **Integer**
    - **Date**
    - **String**

1. In the **Template** field, select a template.
  You can link an attribute to only one template.
1. In the **Order** field, specify the order in which this attribute is returned relative to the rest of the flow fields.
1. Click **Save**.

### Editing attributes

Ensure that you republish the catalog release after editing hierarchies to reflect the changes in the storefront.

:::important
You cannot update the **Field Type** or **Template** settings associated with an attribute after creating the attribute.
:::

1. In the **Product Content Management > Configurations** page, click **Attributes** tab.
1. Double-click the attribute that you want to edit.
1. Update the details as required.
1. Click **Save**.

For the changes to appear in the storefront, you must republish the affected catalogs.

### Deleting attributes

1. In the **Product Content Management > Configurations** page, click **Attributes** tab.
1. Select the checkboxes of the attributes that you want to delete.
1. In the **Action** drop-down menu, click **Delete**.

You can also click the **...** icon in an attribute listing and click **Delete** to delete that attribute.

## Related Resources

### Concepts

- [Product Templates](../../concepts/products-pcm.md#product-templates)
- [Product Attributes](../../concepts/products-pcm.md#product-attributes)
- [Price books](../../concepts/price-books.md)
- [Catalog](../../concepts/catalogs.md)

### APIs

- [Create a template](../../api/pcm/products/templates/create-a-template.md)
- [Create an attribute](../../api/pcm/products/attributes/create-attribute.md)

### Demos

- [Understanding Attributes and Templates](https://share.vidyard.com/watch/gGq3m4uK7wqKcjrbyos5My?)
