---
id: generate-pcm-variations
title: Create Child Products Using Variations and Modifiers
sidebar_label: Create Child Products Using Variations
---

With product variations in Product Content Management, you can create product variations and different options for each variation and use both to create child products for a product. Each child product is a unique combination of options associated with the product. This topic describes creating product variations, options, and how to build child products with those variations and options. This topic also provides information on checking the status of the request to create child products.

## Creating Child Products for a Product

This procedure provides instructions to create child products for the product *shirt* with variation *Shirt Size* that has the options *Small*, *Medium*, and *Large*. This example also provides instructions to create a modifier to append the value of each option to its child product slug.

Re-building child products after adding or removing a new variation changes the total number of child products that you can generate from a base product. When you rebuild the child products after updating variations associated with the base product, all existing child products that belong to a base product are deleted and new child products are created with new product IDs. However, re-building child products after adding or removing an option does not change the existing product IDs.

### Before you begin

Ensure that you have the following:

- A Commerce Cloud account.
- The [client ID and client secret](https://dashboard.elasticpath.com/app) of your store.
- An [access token](get-access-token.md).

:::note

If you don’t have an access token, make the following request to get the access token:

```sh
curl -X POST https://api.moltin.com/oauth/access_token \
     -d "client_id=XXXX" \
     -d "client_secret=XXXX" \
     -d "grant_type=client_credentials"
```

:::

### Procedure - API

1. [Create the product](../../api/pcm/products/create-a-product.md).

1. Create the product variation `Shirt Size` using the following request:

    ```sh
    curl -X POST https://api.moltin.com/pcm/variations \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
          "data": {
              "type": "product-variation",
              "attributes": {
                  "name": "Shirt Size"
              }
          }
        }'
    ```

    This request creates the variation and returns the variation ID. Ensure that you make a note of the variation ID. For more information about creating variations, see the [Create Variations](../../api/pcm/products/variations/create-variation.md) section.

1. Create the variation options by doing the following:

    1. Create the option *small* by making the following request:

        ```sh
          curl -X POST https://api.moltin.com/pcm/variations/:variationId/options \
               -H "Authorization: Bearer XXXX" \
               -H "Content-Type: application/json" \
               -d $'{
                  "data": {
                      "type": "product-variation-option",
                      "attributes": {
                          "name": "Small",
                          "description": "Size small"
                      }
                  }
              }'
          ```

        Replace the `:variationId` with variation ID generated in the response of Step 1. For more information on creating options, see the [Create Options](../../api/pcm/products/options/create-option.md) section.
    1. Repeat step 1 twice to create the options `Large` and `Medium`.

1. To define how the child product varies from the base product:

    1. Create modifiers for your options as in the following example:

    ```sh
    curl -X POST https://api.moltin.com/pcm/variations/:variationId/options/:optionID/modifiers \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
              "data": {
                  "type": "product-variation-modifier",
                  "attributes": {
                     "type": "slug_append",
                     "value": "-small"
                  }
           }
    }'
    ```

    1. Repeat step 1 and create modifier for each option, such as `-medium` and `-large`, as required.

        If you do not provide modifiers for SKU and slug in an option, the default modifier `sku_append` is used for SKU and `slug_append` is used for slug. For more information about modifiers, see the [Modifiers API](../../api/pcm/products/options/modifiers/modifiers.md) section.

1. To associate base product with a variation:
    1. Make the following request:

        ```sh
        curl -X POST \
          https://api.moltin.com/pcm/products/:productId/relationships/variations \
          -H "Authorization: Bearer XXXX" \
          -H 'content-type: application/json' \
          -d '{
             "data": [ {
                 "type": "product-variation",
                 "id": "{{variationID}}"
              }]
         }'
         ```

         Use ID of the base product for `productId` and the ID of the variation that you want to associate with the product for `variationID`.
    1. Associate more products with the variation as required.

1. Build child products by making the following request:

    ```sh
    curl -X POST https://api.moltin.com/pcm/products/:productId/build/ \
         -H "Content-Type: application/json" \
         -H "Authorization: Bearer XXXX"
    ```

    For `productId`, use the ID of the base product.

### Procedure - Commerce Manager

1. Follow the instructions in the [Create variations](../../dashboard/configuration/variations.md#creating-variations) section and create the following options in the *Shirt Size* variation:

    - *Large*
    - *Medium*
    - *Small*
1. Create **SKU** modifier and provide the following values for the **append** field:

    - *-large* for *Large* option.
    - *-medium* for *Medium* option.
    - *-small* for *Small* option.

1. [Create a product](../../dashboard/pcm-products/pcm-products.md) with the name *Shirt*.
1. Associate the product with the variation and build the child products by following the instructions in the [Assigning variations and building child products](../../dashboard/pcm-products/pcm-product-configuration.md#step-4---assigning-variations-and-building-child-products) section.

## View the Child Products Associated with a Base Product using API

1. To view all child products associated with a base product, make the following request:

    ```sh

    curl -X GET https://api.moltin.com/pcm/products/:{{productID}}/children \
         -H "Authorization: Bearer XXXX" \

    ```

  You can navigate through the list using the pagination query parameters, `page[limit]` and `page[offset]`. For more information, see the [pagination](../../api/basics/pagination.md) section.

## Adding a Child Product to the Cart Using API

To add a product defined by a variation to a cart and to checking it out, ensure that you use the child product ID, not the product ID of the base product.

1. To view the products variation relationships within the base product object, make the following request:

    ```sh
    curl -X GET https://api.moltin.com/pcm/products/::productId \
         -H "Authorization: Bearer XXXX" \
    ```

Whenever you update variations, options, or modifiers associated with a product, make a request to the `pcm/products/:productId/build/` endpoint to update the child products with the updated information.


## Related Resources

### Concepts

- [PCM Products](../../concepts/products-pcm.md)
- [PCM Variations](../../concepts/pcm-variations.md)

### APIs

- [PCM Products API](../../api/pcm/products/index.md)
- [Product Variation API](../../api/pcm/products/variations/create-variation.md)
- [Product Modifiers API](../../api/pcm/products/options/modifiers/modifiers.md)
