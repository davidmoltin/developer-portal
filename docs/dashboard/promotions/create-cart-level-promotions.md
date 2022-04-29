---
id: create-cart-level-promotions
title: Creating Cart-level Promotions
sidebar_label: Cart-level Promotions
---

## Creating Cart-level Fixed Discount Promotions

:::warning

- We recommend not to set maximum discount value for this promotion. Setting maximum discount value for this promotion conflicts with the cart fixed discount value. For example, if the maximum discount value is $10 and the cart fixed discount value is $20, the cart gets $10 discount only.
- The **Exclude items** setting specifies the products to be excluded from the cart-level promotions, such as `fixed_discount` and `percent_discount`. However, the stores that use [simple calculation method](../../api/advanced/settings/index.md#calculation-method) do not support excluding products from promotions.

:::

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date** field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. In the **Promotion type** field, select **Fixed discount**.
1. To enable the promotion, select the **Enabled** field.
1. To automatically apply the promotion, select the **Automatic** field.
    If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](promotions.md#adding-codes) section.
1. In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
   1. In the **Set minimum cart value > Amount** field, enter a minimum cart value before the promotion can be applied.
   1. In the **Select Currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Adding pricing](../catalog.md#adding-pricing) section.
1. In the **Define schema** section, do the following:
    1. Click **Currencies**  and add the amount and currencies.
    1. Click **Save**.
    1. Click **Exclude items > Specify products** and enter the IDs or SKUs of the products that you want to exclude from a cart-level promotion.
    1. Click **Save**.
1. Click **Save**

## Creating Cart-level Percentage Discount Promotions

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date**  field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. In the **Promotion type** field, select **Percent discount**.
1. To enable the promotion, select the **Enabled** field.
1. To automatically apply the promotion, select the **Automatic** field.
    If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](promotions.md#adding-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
   1. In the **Set minimum cart value > Amount** field, enter a minimum cart value before the promotion can be applied.
   1. In the **Select Currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Adding pricing](../catalog.md#adding-pricing) section.
1. (Optional) In the **Maximum discount value** field, enter the maximum possible discount amount and currency.
1. In the **Define schema** section, do the following:
    1. Click **Currencies**  and add the amount and currencies.
    1. Click **Save**.
    1. Click **Exclude items > Specify products** and enter the IDs or SKUs of the products that you want to exclude from a cart-level promotion.
    1. Click **Save**.
1. Click **Save**.

## Related Resources

### Concepts

- [Promotions](../../concepts/promotions.md)
- [Customers](../customers.md)
- [Catalog](../catalog.md#adding-pricing)

### API

- [Promotions API](../../api/promotions/index.md)

### How-to guide

- [Create and apply promotions](../../developer/how-to/apply-promotions.md)
