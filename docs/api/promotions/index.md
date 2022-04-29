---
id: index
title: Promotions
sidebar_label: Promotions
---

With promotions, you can provide different types of discounts to all your customers or specific customers. A promotion can be set to apply automatically or by entering a code. Automatic promotions are applied when the selected items meet the promotions criteria. Promotions with codes are applied when customers enter the promotion code to get to discount. Elastic Path Commerce Cloud offers the following types of promotions:

- [`fixed_discount`](create-a-cart-fixed-discount-promotion.md): Adds a fixed amount discount to a cart.
- [`percent_discount`](create-a-cart-percent-discount-promotion.md): Adds a percentage discount to a cart based on the value of the `cart_items` and `custom_items` objects.
- [`x_for_y`](create-X-for-Y-discount-promotion.md): Provides an option to sell more than one item of the same product for a specific price. For example,  _2 for 1_ or _3 for 2_ promotions. If a cart contains more items that are eligible for _2 for 1_ promotion, the promotion amount is multiplied by the number of eligible collection.
- [`x_for_amount`](create-X-for-amount-discount-promotion.md): Provides an option to sell a specific number of items of the same product for a fixed amount. For example, buy two items for $10 or four items for $20.
- [`bundle_fixed_discount`](create-fixed-bundle-discount-promotion.md): Provides a fixed price for a selection of products when you buy the selected products together. For example, buy products _x, y, and z for $15_ or buy _two x and three y or z for $25_.
- [`item_fixed_discount`](create-item-fixed-discount-promotion.md): Reduces the product price for multiple items by a fixed amount, such as $5.00 off.
- [`item_percent_discount`](create-item-percent-discount-promotion.md): Reduces the product price for multiple items by a percentage, such as 10% off.
- [`bundle_gift`](create-free-gift-promotion.md): Offers a free item when a specific product or a group of products are purchased.

:::important

- Line-item discounts are only supported by the line calculation method. For more information about this method, see the [Calculation Method](../advanced/settings/index.md#calculation-method) section.
- The `max_discount_value` setting specifies the maximum possible discount for the cart. To avoid the conflict with the promotions and the promotion to work, we recommend not to use this setting for the following promotions:

    - `item_fixed_discount`
    - `fixed_discount`
    - `x_for_y`
    - `x_for_amount`
    - `bundle_fixed_discount`
    - `bundle_gift`

- The `max_applications_per_cart` setting, which specifies the maximum number of applications of a promotion per cart, is applicable to line-item promotions only. For example, in a store that offers _buy SKU1 get a free gift_ promotion with `max_applications_per_cart:1` setting, the buyer can only use the free gift promotion once per cart. If `max_applications_per_cart` is not set, the buyer can use the promotion multiple times. You can also set `max_applications_per_cart` to zero to remove any usage limit.
- The `exclude` array consists of `productID`s or `SKU`s of products to be excluded from the cart-level promotions, such as `fixed_discount` and `percent_discount`. However, the stores that use simple calculation method do not support excluding products from promotions.

:::

## The `schema` Object

Promotions are defined by schemas that are used internally to verify promotions and calculate discounts. For each promotion, you must define schema when you create the promotion.

## Promotion Codes

You can apply promotions automatically to all customer carts, or you can create promotion codes that customers must enter to receive the discount. For more information, see the [Creating Promotion Codes](create-promotion-codes.md) section.

## Related Resources

### Concepts

- [Promotions - Overview](../../concepts/promotions.md)

### Commerce Manager

- [Promotions - Commerce Manager](../../dashboard/promotions/promotions.md)

### How-to guide

- [Create and apply promotions](../../developer/how-to/apply-promotions.md)
