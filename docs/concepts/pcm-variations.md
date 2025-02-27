---
id: pcm-variations
title: PCM Variations and Modifiers
sidebar_label: PCM Product Variations
---

You can create and view product variations for your store with PCM product variations. For example, a product has two variations size and color. The size variation has three options, such as small, medium, and large and the color variation has three options, such as green, red, and blue. This creates a variation matrix with nine possible unique combinations or child products as shown in the following example:

![The sizes are across the top row and the colors are in the first column.](assets/product-variations-1.png)

You can create additional variations or options and attach them to a product to increase the number of combinations. Using the previous example, if you add a third variation with three options, you can build child products with 27 unique combinations of variations and options.

:::note
Currently, you can only have maximum 10,000 unique combinations of options for the variations for product.
:::

## Reusability

Variations are reusable, and you can attach the same variation to any number of products. You can also create a link between the existing variation and a new product. The following scenario provides an example:

1. Create a variation `shoe size` and add five options in the variation.
1. Create a product `shoe 1` and link the variation `shoe size` to the product.
1. Create second product, `shoe 2` and link the variation `shoe size` to this product as well.
1. Create a third product `shoe 3` and do not link any variation to this product.

`shoe 1` and `shoe 2` inherit the properties of `shoe size` variation, and you can build the child products with the options. However, you cannot build child products for `shoe 3` unless you assign a variation with at-least one option to the product.

## Product Modifiers

Use modifiers to change the properties of child products that are inherited from a base product. With modifiers, you only need to have one base product with a variation attached to the product.

Modifiers attached to a variation option are applied to a base product to create child products. For example, instead of creating three base products for three different shirt colors, you can do the following:

1. Create a base product, *shirt*, with the variation, *color*, attached to it.
1. Create three options for the *color* variation.
1. Create a modifier for each option to change the properties of each child product. For example, attach a *description append* modifier to each option so that each child product has different description based on the color of the child product.
1. Build the child products.

This screenshot provides an example of a child product of *shirt* which has a specific description associated with it because of the *description append* modifier setting for the option *yellow*:

![Child products with different descriptions](assets/modifier-description-append.png)

## Price Modifiers

You can use price modifiers to change the price property of child products. By default, child products inherit the same price as their base products. Using price modifiers, you can enable child products to inherit a different price. This enables you to configure the price of child products, for example, to be lower than its base product, without having to individually update the price of your child products. There are three types of price modifier.

Modifier | Data Type | Effect |
| :--- | :--- | :--- |
| `price_increment` | `string` | Increases the price of a product. |
| `price_decrement` | `string` | Decreases the price of a product. |
| `price_equals` | `string` | Sets the price of a product to the amount you specify. |

The following is an overview of the steps you need to follow to use price modifiers.

1. Create a price modifier. You must give the price modifier a unique name, for example, tax_modifier. For more information, see [Create a Price Modifier](../api/pcm/pricebooks/create-a-price-modifier.md)
1. Create a product modifier that uses the same name as the price modifier. For more information, see [Create Modifiers](../api/pcm/products/options/modifiers/modifier-crud.md).
1. Build your child products with the new product modifier. For more information, seeee [Build Child Products](../api/pcm/products/build-child-products.md).

## Related Resources

### Concepts

- [PCM Products](products-pcm.md)

### APIs

- [PCM Products API](../api/pcm/products/index.md)
- [Create Variations](../api/pcm/products/variations/create-variation.md)
- [Create Modifiers](../api/pcm/products/options/modifiers/modifier-crud.md)
- [Build Child Products](../api/pcm/products/build-child-products.md)

### How-to guides

- [Generate product variations](../developer/how-to/generate-pcm-variations.md)
