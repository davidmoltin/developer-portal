---
id: taxes
title: Taxes
sidebar_label: Taxes
---

<!-- Jen: There is no content explicitly for this concept. So drafting content that needs to be validated.-->

Taxes differ by country and can differ within the country by region, state, or province. Each jurisdiction has a unique tax code and rate. If your store serves many jurisdictions, integrate a third-party tax generator to manage taxes. If your store serves a few jurisdictions, you can use the API to define the tax codes and rates in Commerce Cloud.

Taxes are calculated after all promotional discounts have been applied. When calculating taxes on a cart or order, you can choose from the following methods for calculating taxes:

- **Simple calculation method**: Taxes are calculated at the unit level and are rounded to the nearest penny *for the unit*.
- **Line calculation method**: Default. Taxes are calculated at the line level and are rounded to the nearest penny *for the line*.

For more information about calculation methods, see [Calculate cart and order totals](../developer/how-to/calculate-totals.md).

## Related concepts

- [Carts](carts.md)
- [Orders](orders.md)

## APIs

- [Carts API - Tax Items](../api/carts-and-orders/carts/cart-items/tax-items/index.md)

## How-to guides

- [Calculate cart and order totals](../developer/how-to/calculate-totals.md)
- [Create tax rates](../developer/how-to/create-tax-rates.md)
