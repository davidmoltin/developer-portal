---
id: calculate-totals
title: Calculate cart and order totals
sidebar_label: Calculate cart and order totals
---

There are two methods that can be used to calculate cart and order totals. The method used depends on the `calculation_method` setting.

:::important
The default calculation method for stores created before February 2020 is set to `simple`. However, stores created since February 2020 have `line` method as the default setting.
:::

## Simple calculation method

Taxes are calculated for each line and are rounded to the nearest penny for the unit.

The cart totals are calculated by summing each of the lines and then subtracting any discounts.

Example:

|                 |     Item 1 |    Item 2 |  Discount |   Total   |
| :-------------- | ---------: | --------: | --------: | ---------: |
| Unit price      |      $9.99 |     $0.03 |   −$10.00 |           |
| Quantity        |          3 |         1 |         1 |           |
| **Line price**  |     $29.97 |     $0.03 |   −$10.00 |           |
| Tax rate        |       0.20 |      0.00 |           |           |
| Unit tax        |      $1.99 |     $0.00 |           |           |
| **Line tax**    |  **$5.97** | **$0.00** |           |           |
| Unit subtotal   |      $9.99 |     $0.03 |           |           |
|**Line subtotal**| **$29.97** | **$0.03** |           |           |
|**Total**        | **$35.94** | **$0.03** |**−$10.00**| **$25.97** |

In summary, discounts are applied after tax and rounding occurs at the individual unit level.

## Line calculation method

Any cart-level discount is distributed among the cart items such that the amount each line gets is in proportion to its value before tax.

Discounts are calculated for each line by subtracting from the pre-tax value and the discount is rounded to the nearest penny for the line.

Taxes are calculated for each line based on the line value after discounts have been applied and are rounded to the nearest penny for the line.

The cart totals are calculated by summing each of the lines.

Example:

|                 |   Item 1 |  Item 2 |  Total    |
| :-------------- | -------: | ------: | ---------: |
| Unit price      |    $9.99 |   $0.03 |           |
| Quantity        |        3 |       1 |           |
| Line price      |   $29.97 |   $0.03 |           |
| Unit discount   |   −$3.33 |  −$0.01 |           |
| Line discount   |   −$9.99 |  −$0.01 |           |
| Tax rate        |     0.20 |    0.00 |           |
| Unit tax        | $1.3333r |   $0.00 |           |
|**Line tax**     | **$4.00**|**$0.00**| **$4.00** |
| Unit subtotal   |$5.3266666667|$0.02 |           |
|**Line subtotal**|**$19.97**|**$0.02**| **$19.99** |
| **Total**       |   $23.97 |   $0.02 | **$23.99** |

In summary, discounts are applied before tax and rounding occurs for whole lines.

## Further reading

- [Carts](../../concepts/carts.md)
- [Orders](../../concepts/orders.md)
- [Taxes](../../concepts/taxes.md)
- [Carts API](../../api/carts-and-orders/carts/index.md)
- [Carts API - Add Custom Item to Cart](../../api/carts-and-orders/carts/add-custom-item-to-cart.md)
- [Checkout API](../../api/carts-and-orders/checkout.md)
- [Create custom carts](create-custom-carts.md)
