---
id: create-product-modifiers
title: Create product modifiers
sidebar_label: Create product modifiers
---

We’ll discuss the most commonly used scenarios for applying modifiers, which is on products themselves and their prices.

## Key points about modifiers

- Modifiers attached to a variation option are applied to a base product to create child products.
- The maximum number of child products generated from a base product cannot exceed 200.
- You can only pass one modifier at a time. This is added to a collection of modifiers that have already been created for that particular variation option.
- At minimum, a variation option must have a `sku` and a `slug` modifier.

## Prerequisites

If you want to follow along, you need the following items:

- A Commerce Cloud account
- An [access token](get-access-token.md)

## Scenarios

1. Scenario 1: Adding a color modifier
2. Scenario 2: Adding product price modifiers
3. Scenario 3: Adding product SKU/Slug builder modifiers


## Adding a color modifier

Product modifiers create the variation products (child products) from the base product by augmenting different properties of that base product.

After a `modifier_type` and its `value` has been specified, these define how that property changes as the child products are built.

In the following example, we are adding a `slug_append : -green` property-value pair to the already existing collection of color modifiers that have been added to a variation, `shirt-color`.

```sh
curl -X POST https://api.moltin.com/v2/variations/:variationId/options \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "modifier",
          "modifier_type": "slug_append",
          "value": "-green"
  }
}'
```

## Adding product price modifiers

Price modifiers help adjust the price of a product. As this kind of modifier deals with prices, the value of this modifier must be a collection of currency values (similar to that when specifying a product price).

While the modifier can have any number of currencies applied to it, only the currencies specified on the actual base product are subjected to any modifiers. Use Commerce Manager or API to specify the base product price.

For example:

If you have `USD` and `GBP` values on a base product, and apply a modifier that alters `GBP`, `AUD`, and `EUR`, the only currency value affected is `GBP`. The `USD` value remains the same, and no other currencies are set on the variation product.

```sh
curl -X POST https://api.moltin.com/v2/variations/:variationId/options \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "product-modifier",
          "modifier_type": "price_increment",
          "value": [
          {
              "currency": "GBP",
              "amount": 1000,
              "includes_tax": true
          },
          {
              "currency": "USD",
              "amount": 1500,
              "includes_tax": false
          },
          {
              "currency": "EUR",
              "amount": 1200,
              "includes_tax": true
          },
          {
              "currency": "AUD",
              "amount": 2000,
              "includes_tax": false
          }
      ]
    }
}'
```

## Adding product SKU/Slug builder modifiers

Each variation must have at minimum `sku` and `slug` modifiers defined. These are mandatory, as they make each variation unique as a value.

### Simple unique SKUs/Slugs

By using the append method, it’s possible to construct unique child products SKUs or slugs quickly.

![Construct unique child products.](assets/product-modifiers.png)

### Controlling unique SKUs/Slugs

If you need more control over your SKUs and slugs it is possible to use the "seek" and "set" method. The value of the modifier must contain two property-value pairs: `"seek": "XXX"` and `"set" : "YYY"`. In order for this kind of modifier to participate in the variation products building process, the base product should have a SKU/slug set with a placeholder like: `{XXX}`. The modifier works by replacing the placeholder with the value you want to set. You should only specify the contents of the { } in the `seek` property - the modifier takes care of the rest.

For example:

- BaseProduct SKU: `BP01-{color}-{SIZE}`
- Modifier1: `{"seek":"color", "set":"BLU"}`
- Modifier2: `{"seek":"color", "set":"RED"}`
- ModifierA: `{"seek":"SIZE", "set":"LG"}`
- ModifierB: `{"seek":"SIZE", "set":"SM"}`

The previous modifiers applied via variations for size and color would produce the following SKUs in the corresponding variation product:

`BP01-BLU-LG`, `BP01-BLU-SM`, `BP01-RED-LG`, `BP01-RED-SM`

You could create the same via `sku_append` modifier using values like `-RED` and `-LG`. The advantage of the builder modifiers is that they are agnostic of the order the modifiers are applied.

## Further reading

- [Products](../../concepts/products.md)
- [Product variations and modifiers](../../concepts/product-variations.md)
- [Product Variations Modifiers API](../../api/catalog/product-variations/modifiers/index.md)
- [Generate product variation](generate-product-variations.md)
