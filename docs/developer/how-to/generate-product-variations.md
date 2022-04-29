---
id: generate-product-variations
title: Generate product variations
sidebar_label: Generate product variations
---

Product variations allow you to generate child products on a product parent with a number of options.

## Prerequisites

If you want to follow along, you need the following items:

- A Commerce Cloud account and the Client ID and Client Secret of your store
- Basic understanding of object-oriented programming or JavaScript
- An [access token](get-access-token.md)

## Step-by-step walkthrough

In this scenario, we build a product size variation with small, medium, and large size options.

1. Create a product variation.
2. Create a product option.
3. Create modifiers for your options to determine how the child products vary from the base product.
4. Create the Product relationships to link the variations with the base product.
5. Build child variations.

### Create a product variation

A typical example of a product variation is product size. You could foresee needing a small, medium, and large variation for a shirt.

```sh
curl -X POST https://api.moltin.com/v2/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "product-variation",
        "name": "Shirt Size"
      }
    }'
```

### Create a product option

Product options are the actual variation options that you want to make available for your project. This is where you can outline the size you want to offer, such as small, medium, or large.

Within our ecosystem, a variation is simply a container for a number of options.

```sh
curl -X POST https://api.moltin.com/v2/variations/:variationId/options \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "option",
            "name": "Small",
            "description": "Size small"
        }
    }'
```

Replace `variationId` with the ID that you generated for the product variation.

Repeat for every variation you want to add, such as small, medium, and large options (see the Response tab for details).

### Create modifiers for your options

Modifiers determine how the built child products vary from the base product. The minimum requirement is that each variation option must have both a `SKU` and a `slug` modifier(`_append`, `_prepend`, `_equals`). This is because these properties must be unique across your product range.

Repeat the step for every option you want to add a modifier to.

```sh
curl -X POST https://api.moltin.com/v2/variations/:variationId/options/:optionID/modifiers \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
          "data": {
              "type": "modifier",
              "modifier_type": "slug_append",
              "value": "-small"
  }
}
```

In the previous example, we added small, medium, and large options, and slug and SKU modifiers (see the Response tab for details).

### Create the Product Relationships

Now, we need to allocate the variations to the base product. In this example, this would be the shirt.

Repeat this for every product you want to relate to this variation.

```sh
curl -X POST \
  https://api.moltin.com/v2/products/:productId/relationships/variations \
  -H "Authorization: Bearer XXXX" \
  -H 'content-type: application/json' \
  -d '{
     "data": [ {
        "type": "product-variation",
         "id": "VARIATION-ID"
      }]
 }'
 ```

- Replace `productId` with the ID of the base product.
- Replace `variationId` with the ID for the product variation you created.

### Build Child Variations

Now that the variation is set up and it has products assigned to it, you need to trigger the process that compiles and creates the child variations.

Replace `parentId` with the ID of the base product.

```sh
curl -X POST https://api.moltin.com/v2/products/:parentId/build/ \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer XXXX"
```

#### Child Variations in use

For adding a product defined by a variation to a cart or checking it out, make sure to use the child product ID, not the product ID. You can view your products variation relationships within the product object.

```sh
curl -X GET https://api.moltin.com/v2/products/:id \
     -H "Authorization: Bearer XXXX" \
```

#### Rebuilding Child Products

You can hit the product/build endpoint at any time, whether you already generated child products or not. It performs a rebuild of your child products for you. If you have not updated any variations, options or modifiers, the resulting child products are exactly the same as before.

If you have updated any variations, options, or modifiers, then your old child products are replaced with new ones based on the alterations made.

## Further reading

- [Products](../../concepts/products.md)
- [Products API](../../api/catalog/products/index.md)
- [Product Variations API](../../api/catalog/product-variations/index.md)
- [Product Variations Options API](../../api/catalog/product-variations/options/index.md)
- [Product Variations Modifiers API](../../api/catalog/product-variations/modifiers/index.md)
