---
id: modifiers
title: Modifiers Overview
sidebar_label: Modifiers
---

Product Content Management (PCM) modifiers help augment the properties of a product variation by creating an array of child products. For each product, you can specify a modifier type and the value to define how that property changes the variation options when you build child products.

## Modifier Types

You can specify different modifiers for different options in a variation. When you build child products using options in variations, the properties of a child products depends on the modifier set for the options that are applied to the child product. The different types of modifiers are:

| Modifier | Data Type | Effect |
| :--- | :--- | :--- |
| `name_equals` | `string` | Overrides the name of the child product with the name specified by the modifier. |
| `name_append` | `string` | Appends the string specified in the modifier to the name of the child product. |
| `name_prepend` | `string` | Prepends the string specified in the modifier to the name of the child product. |
| `description_equals` | `string` | Overrides the description of the child product. |
| `description_append` | `string` | Appends the string specified in the modifier to the description of the child product. |
| `description_prepend` | `string` | Prepends the string specified in the modifier to the product description of the child product. |
| `commodity_type` | `string` | Sets the commodity type of the child product, such as `physical` or `digital`. |
| `commodity_type` | `string` | Sets the commodity type of the child product, such as `physical` or `digital`. |
| `price_increment` | `string` | Increases the price of the product. |
| `price_decrement` | `string` | Decreases the price of the product. |
| `price_equals` | `string` | Sets the price of a product to the amount you specify. |
| `slug_append` | `string` | Appends the string specified in the modifier to the slug of the child product. |
| `slug_prepend` | `string` | Prepends the string specified in the modifier to the slug of the child product. |
| `slug_builder` | `string`| Sets a part of the slug of the child product. |
| `sku_equals` | `string` | Sets the SKU of the child product. |
| `sku_append` | `string` | Appends the string specified in the modifier to the SKU of the child product. |
| `sku_prepend` | `string` | Prepends the string specified in the modifier to the SKU of the child product. |
| `sku_builder` | `string` | Sets a part of the SKU of the child product. |
| `status` | `string` | Sets the status of the child product, such as `draft` or `live`. |

:::important
Modifier values can only contain A-Z, a-z, 0 to 9, -, and _. No spaces or special characters are allowed.
:::

## Creating SKU and slug builder modifiers

### Attributes - `sku_builder`

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this product. |
| `type` | `string` | The type of resource object. You must use `modifier`. |
| `modifier_type` | `string` | The type of modifier, either `sku_builder` or `slug_builder`. |
| `value.seek` | `string` | A search string for the find and replace. |
| `value.set` | `string` | The replacement string. |

The following code provides an example for request:

```javascript
{
  "type": "modifier",
  "modifier_type": "sku_builder",
  "value": {
    "seek": "{PLACEHOLDER}",
    "set": "SKU001-",
  }
}
```

The following code provides an example for response:

`200 OK`

```json
{
    "data": {
        "type": "product-variation-modifier",
        "id": "6d31b2d1-6a26-47e5-9ea0-96b392490ab7",
        "modifier_type": "sku_builder",
        "value": {
          "seek": "{PLACEHOLDER}",
          "set": "SKU001-",
        }
    }
}
```

### Attributes - `slug_builder`

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of resource object. You must use `product-variation-modifier`.|
| `attributes.type` | Required | `string` | The modifier type. |
| `attributes.seek` | Required | `string` | The sub-string to match for find and replace. |
| `attributes.set` | Required | `string` | The value that will be set for the modifier, such as red. |

The following code provides an example for request:

```bash
{
  "data": '{
    "type": "product-variation-modifier",
    "attributes": {
      "type": "slug_builder",
      "seek": "{color}",
      "set": "red"
    }
  }'
}
```

The following code provides an example for response:

`200 OK`

```json
{
    "data": {
        "type": "product-variation-modifier",
        "id": "913095ff-c1ad-4d21-ab09-067e4b74379b",
        "attributes": {
            "seek": "{color}",
            "set": "red",
            "type": "slug_builder"
        }
    }
}
```

## Creating child product with SKU and slug builder modifiers

Using the `{SKU}` and `{SLUG}` builder modifiers, you can build child products  and change a specific part of the slug or SKU of the child products to a specified value.

For example, a shirt with variations `color` and `Size` has an option `Red` created for `color` and option `Medium` created for `Size`. The following steps build a child product `[BASIC-SHIRT-MEDIUM-RED]` in the storefront:

1. Create a `sku_builder` modifier for the `Red` option with `set` value `RED` and `seek` value `{COLOR}` as in the following example:

    ```bash
    {
      "data": {
        "type": "product-variation-modifier",
        "attributes": {
          "type": "slug_builder",
          "seek": "{color}",
          "set": "red"
        }
      }
    }
    ```

1. Create another `sku_builder` modifier for the `Medium` option with d`set` value `MEDIUM` and `seek` value `{SIZE}` as in the following example:

    ```bash
    {
      "data": {
        "type": "product-variation-modifier",
        "attributes": {
          "type": "slug_builder",
          "seek": "{Size}",
          "set": "Medium"
        }
      }
    }
    ```

1. Make the following request to build a child product in the with SKU `[BASIC-SHIRT-MEDIUM-RED]` for the base product with SKU `[BASIC-SHIRT-{SIZE}-{COLOR}]`:
    `https://api.moltin.com/pcm/products/:productId/build`

For more information about how to achieve the same results via the API, see [Create product modifiers](https://documentation.elasticpath.com/commerce-cloud/docs/developer/how-to/create-product-modifiers.html).


## Price Book Modifier Objects

You can apply price book modifiers to the child products of a base product to avoid updating the prices for the child products manually. For example, using the `price_equals` modifier, you can control the price of the child products. In other words, products are sold at the right price point, instead of the base product price. All prices are set in the price book.

### Attributes

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this product. |
| `type` | `string` | The type of resource object. You must use `modifier`. |
| `modifier_type` | `string` | The type of modifier, such as, `price_increment`, `price_decrement`, or, `price_equals`. |
| `value.amount` | `integer` | The value of the price book modifier. |
| `value.currency` | `string` | The currency of this price book modifier as a three letter ISO. |
| `value.includes_tax` | `boolean` | This value is set `true` if relevant taxes are included in the value. If relevant taxes are not included, set to `false`. |

See [Create a price book modifier](../../../../../api/pcm/pricebooks/create-a-price-modifier.md)

### Sample object

```javascript
{
  "type": "modifier",
  "id": "6d31b2d1-6a26-47e5-9ea0-96b392490ab7",
  "modifier_type": "price_increment",
  "value": [
    {
      "currency": "FJT",
      "amount": 46008803,
      "includes_tax": false
    },
    {
      "currency": "YZK",
      "amount": 4011039,
      "includes_tax": false
    }
  ]
}
```

## Related Resources

### Concepts

- [PCM Products](../../../../../concepts/products-pcm.md)

### APIs

- [PCM Products API](../../../../../api/pcm/products/index.md)
- [Create Variations](../../../../../api/pcm/products/variations/create-variation.md)
- [Create Modifiers](../../../../../api/pcm/products/options/modifiers/modifier-crud.md)
- [Build Child Products](../../../../../api/pcm/products/build-child-products.md)

### How-to guides

- [Generate product variations](../../../../../developer/how-to/generate-pcm-variations.md)
