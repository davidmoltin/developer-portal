---
id: hierarchy
title: Product Hierarchy Configurations
sidebar_label: PCM Products Hierarchy
---

## Hierarchies

A hierarchy is a tree structure with a root node and descendant nodes. A product can belong to multiple nodes in multiple hierarchies. When you create a catalog, you specify one or more hierarchies. Any products associated with those hierarchies are included in the catalog. If your store supports multiple languages, you can localize new and existing hierarchies and nodes.

The following example of *Elpa basketball shoe for men* shows different hierarchies and nodes that the product might be in:

- Brands > **Elpa**
- Shoppers > **Men**
- Shoes > Sports > **Basketball**

The root of a hierarchy specifies the aspect of the product data that the hierarchy displays. For example, root can be categories, brands, types, or manufacturers of the products. You cannot assign products to a root node.

A node in a hierarchy contains products grouped in a specific theme, such as a products from a specific brand. You can set a relationship between a product and a hierarchy.

For more information about hierarchies in Product Content Management, see [PCM Hierarchies](../../concepts/hierarchies.md).

!oembed[Configuring Hierarchies in Elastic Path Commerce Manager](https://share.vidyard.com/watch/h3XRDBYmn9mDByYkFbsj1S?)

### Hierarchies and catalog releases

A catalog configuration includes one or more hierarchies of products. Any products associated with those hierarchies are included in the catalog. When you publish the target catalog, the active products in the hierarchies appear in the catalog release. If you update a hierarchy to add, move, or delete nodes, you must republish the catalog for the changes to appear in the storefront.

### Creating hierarchies

Create a hierarchy and then create the nodes. Each node can have one parent and multiple children. By default, if you do not specify a parent node for a node, root node is set as the parent of the node by default.

1. In the **Product Content Management > Configurations** page, click the **Hierarchy** tab.
1. In the **Hierarchy** tab, click **Add Hierarchy**.
1. Enter the following information for the hierarchy:

    - **Name**
    - **Description**
    - **Slug**

1. Click **Save**.

#### Next step

- Create nodes in the hierarchy.

### Creating nodes in a hierarchy

You can create child nodes only after creating a parent node. Each node can have one parent and multiple children. However, you can have more than one parent node in a hierarchy.

1. To create nodes in a hierarchy, click the hierarchy.
1. In the **All Nodes** section, click **Create Parent node**.
1. In the **Create Node** window, enter the following details for the node:

    - **Name**
    - **Description**
    - **Slug**

1. Click **Create**.
1. To create a child node within a parent node, click the **>** icon next to the name of the parent node.
1. Click **Create Child Node**.
1. Repeat step 3.
1. Click **Create**.
1. Click **Save**.

#### Next step

- Add products to the nodes.

#### Adding products to a node

1. To add products to a node in a hierarchy, click the hierarchy.
1. In the **All Nodes** window, click a node.
1. In the **Add SKUs field**, enter a SKU number to search for a product.
    Product corresponding to the SKU number is displayed.
1. To add the product to the node, click the **+** icon next to the product image.

    The product gets added to the node and is displayed in the list of products associated with the node.

#### Editing nodes

1. In the **All Nodes** section, click the node that you want to edit.
1. Update the following information as required:

    - **Name**
    - **Parent Node**
    - (Optional) **Description**
    - **Slug**
    - **Products**

      You can change the parent node by selecting a node from the node list.
1. Click **Save**.

### Editing hierarchies

Ensure that you republish the catalog release after editing hierarchies to reflect the changes in the storefront.

1. In the **Product Content Management > Configurations** page, click **Hierarchy** tab.
1. Click the hierarchy that you want to edit.
1. Update the details as required.
1. Click **Save**.

For the changes to appear in the storefront, you must republish the affected catalogs.

### Deleting hierarchies

When you delete a hierarchy, the hierarchy and all its descendant nodes are deleted from the database. The products that were associated with the hierarchy remain in the database and can be used with other hierarchies.

1. In the **Product Content Management > Configurations** page, click **Hierarchy** tab.
1. Select the checkboxes of the hierarchies that you want to delete.
1. In the **Action** drop-down menu, click **Delete**.

You can also click the **...** icon in a hierarchy listing and click **Delete** to delete that hierarchy.

:::important
The updates in hierarchies do not appear in the storefront until you republish the affected catalog releases.
:::

## Related Resources

### Concepts

- [Product Content Management Hierarchies](../../concepts/hierarchies.md)

### APIs

- [Product Content Management Hierarchies API](../../api/pcm/hierarchies/index.md)
- [Create a hierarchy](../../api/pcm/hierarchies/create-a-hierarchy.md)

### Demos

- [Understanding Hierarchies](https://share.vidyard.com/watch/TN8pUPc6eyZQWHDaqZSRGn?)
