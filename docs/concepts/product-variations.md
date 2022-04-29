---
id: product-variations
title: Product variations and modifiers
sidebar_label: Product variations
---

Variations allow you to generate child products on a product based with a number of options. In the following example, we have a size variation with three options (small, medium and large) and a color variation with three options (green, red and blue). This creates a variation matrix with nine possible unique combinations or "child products".

![The sizes are across the top row and the colors are in the first column.](assets/product-variations-1.png)

It’s possible to create many more variations and options than the simple previous example. The limit is currently set to 250 possible unique combinations. Creating additional variations or options and attaching them to a product exponentially increases the number of unique combinations. For example, adding a third variation with three options to the previous example would mean 3x3x3, a total of 27 unique child products would be created.

## Re-usability

Variations are also re-usable, so you can attach the same variation to any number of products. In the following example we have a shoe size variation with five options. This variation has been linked to the two shoe products that should inherit this property. The T-shirt product is not linked to the Shoe Size variation. This means you won’t have to recreate a new size variation every time you add a new shoe. You can create a link between the existing variation and the new product.

![The shoe size variation can be reused when you add new shoes to your catalog.](assets/product-variations-2.png)

## Product modifiers

Modifiers augment the properties of a base product by creating a collection of child products. They help you keep your stock organized. For instance, instead of creating 3 different base products for three different shirt colors, you’ll have one base product with a variation using 3 colors. A modifier then decides how to change the child product’s properties, for instance you could have three different descriptions for each child product based on the color.

## Setup summary

The process to use and set up variations on your product catalog is fairly linear. The following diagram highlights the first-time setup process. In short, you want a base product to have variations, options, and modifiers defined. Then, link the product to the variations, and run the build endpoint to generate the variation matrix of child products.

![Workflow for the first time set up.](assets/product-variations-3.png)

## Related Resources

### Concepts

- [Products](products.md)

### APIs

- [Product Variation API](../api/catalog/product-variations/index.md)
- [Product Modifiers API](../api/catalog/product-variations/modifiers/index.md)

### How-to guides

- [Generate product variations](../developer/how-to/generate-product-variations.md)
- [Create product modifiers](../developer/how-to/create-product-modifiers.md)
