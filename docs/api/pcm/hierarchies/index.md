---
id: index
title: PCM Hierarchies API
sidebar_label: Hierarchies API
---

Once you have created your products, (for more information, see [PCM Products API](../../pcm/products/index.md)), you can use the Hierarchies API to organize your products into categories and sub-categories. You can do this by creating hierarchies. A hierarchy is a tree structure that consists of a root node with 1 or more children nodes. Each child node can also have one or more children nodes, and so on, creating a parent-child relationship between nodes.

![Hierarchy Nodes](assets/heirarchynodes.png)

- You can duplicate hierarchies. This enables you to quickly and easily create multiple hierarchies with similar nodes. For more information, see [Duplicate a Hierarchy](duplicate-a-hierarchy.md).
- You can move an existing node to a different location within the same hierarchy by changing its parent node. If the node has child nodes, they retain their relationship with the moved node. In other words, the node and all its children move to the new location in the hierarchy. For more information, see [Create a Node in a hierarchy](../../pcm/hierarchies/nodes/create-a-hierarchy-node.md).
- Sibling nodes are nodes with the same parent. Sibling nodes must have unique names and unique slugs.
- Nodes that are in different locations in a hierarchy, or across multiple hierarchies, do not need unique names and slugs.

For example, a department store may have a hierarchy for major appliances.

![Hierarchy Example](assets/hierarchexample.png)

- If you moved the **Electric Ranges** node to the **Built-in** node, all the children of the **Electric Ranges** node also move to the **Built-in** node.
- The nodes **Electric Ranges** and **Gas Ranges** are siblings. They must have unique names and slugs.
- The **Double Oven** nodes can have the same name because they have different parents.

You can create the **Major Appliances** hierarchy by performing the following steps.

1. Using [Create a Hierarchy](create-a-hierarchy.md), create a hierarchy whose name is **Major Appliances**. Each hierarchy has a hierarchy ID. In other words, the hierarchy ID is the ID of the root node.
1. Using [Create a Node in a hierarchy](../../pcm/hierarchies/nodes/create-a-hierarchy-node.md), create the following child nodes. When you create a node in a hierarchy, by default, the node is a child of the root node.
   - **Ranges**
   - **Refrigerators**
   - **Dishwashers**
1. Using [Create a Node in a hierarchy](../../pcm/hierarchies/nodes/create-a-hierarchy-node.md), create the **Electric Ranges** node, specifying **Ranges** as the parent node.
1. Using [Create a Node in a hierarchy](../../pcm/hierarchies/nodes/create-a-hierarchy-node.md), create the following nodes, specifying **Electric Ranges** as the parent node.
   - **Electric Ranges 24ˮ**
   - **Electric Ranges 30ˮ**
   - **Double Oven**
1. Using [Create a Node in a hierarchy](../../pcm/hierarchies/nodes/create-a-hierarchy-node.md), create the **Gas Ranges** node, specifying **Ranges** as the parent node.
1. Using [Create a Node in a hierarchy](../../pcm/hierarchies/nodes/create-a-hierarchy-node.md), create the following nodes, specifying **Gas Ranges** as the parent node.
    - **Gas Ranges 24ˮ**
    - **Gas Ranges 30ˮ**
    - **Gas Ranges 32"**
    - **Double Oven**
1. Using [Create a Node in a hierarchy](../../pcm/hierarchies/nodes/create-a-hierarchy-node.md), create the following nodes, specifying **Dishwashers** as the parent node.
    - **Built-in**
    - **Standalone**
After you define hierarchies, you can associate products with nodes. A product can belong to multiple nodes within a hierarchy and across hierarchies. You cannot associate a product with the root node. For more information, see [Create Node Product Relationships](../../pcm/hierarchies/relationships/create-node-product-relationships.md).

## The Hierarchy Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | Always: `hierarchy` |
| `id` | `string` | The generated unique identifier for the hierarchy. |
| `attributes.name` | `string` | The name of the hierarchy, such as `Major Appliances`. |
| `attributes.description` | `string` | A description of the hierarchy. |
| `attributes.slug` | `string` | A unique slug for the hierarchy. |

## The Node Object

| Name | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | Always: `node` |
| `id` | `string` | The generated unique identifier for the node. |
| `attributes.name` | `string` | The name of the node, such as `Ranges` or `Refrigerators`. Names must be unique among sibling nodes in the hierarchy. Otherwise, a name can be non-unique within the hierarchy and across multiple hierarchies. |
| `attributes.description` | `string` | A description of the node. |
| `attributes.slug` | `string` | A slug for the node. Slugs must be unique among sibling nodes in the hierarchy. Otherwise, a slug can be non-unique within the hierarchy and across multiple hierarchies. |

## Related Resources

### Concepts

- [PCM Hierarchies](../../../concepts/hierarchies.md)

### API

- [PCM Products API](../../pcm/products/index.md)
- [Node Product Relationships API](../../pcm/hierarchies/relationships/create-node-product-relationships.md)
