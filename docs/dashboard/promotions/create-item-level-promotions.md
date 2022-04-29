---
id: create-item-level-promotions
title: Creating Item-level Promotions
sidebar_label: Item-level Promotions
---

## Creating X for Y Discount Promotions

Use this procedure to create promotions such as, such as *2-for-1* sales. In this promotion, 2 SKU1s are sold for the price of 1. In this example, X is 2 and Y is 1.

:::warning
We recommend not to set maximum discount value for this promotions. Setting maximum discount value for this promotion conflicts with the promotion settings.
:::

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date**  field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. In the **Promotion type** field, select **X for Y**.
1. To enable the promotion, select the **Enabled** field.
1. To automatically apply the promotion, select the **Automatic** field.
  If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](promotions.md#adding-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
      1. In the **Set minimum cart value > Amount** field, enter a minimum cart value before the promotion can be applied
      1. In the **Select Currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Adding pricing](../catalog.md#adding-pricing) section.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.
1. In the **Define schema** section, do the following:
    1. Click **Specify X/Y values**, and add value for X and Y.
    1. Click **Save**.
    1. Click **Add target** and enter the SKUs for which you want to apply this promotion.

    You can also use product ID instead of SKU to specify the targets.
    1. Click **Save**.
1. Click **Save**.

## Creating X for Amount Discount Promotions

Use this procedure to create promotions such as, such as *3-for-$20* sales. In this promotion, 3 SKU1s are sold for $20.

:::warning
We recommend not to set maximum discount value for this promotions. Setting maximum discount value for this promotion conflicts with the promotion settings.
:::

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date**  field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. In the **Promotion type** field, select **X for amount**.
1. To enable the promotion, select the **Enabled** field.
1. To automatically apply the promotion, select the **Automatic** field.
  If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](promotions.md#adding-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
      1. In the **Set minimum cart value > Amount** field, enter a minimum cart value before the promotion can be applied
      1. In the **Select Currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Adding pricing](../catalog.md#adding-pricing) section.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.
1. In the **Define schema** section, do the following:
    1. Click **Add currency** and enter the promotion amount and currency.
    1. Click **Specify X/Y values**, and add value for X.
    1. Click **Save**.
    1. Click **Add target** and enter the SKUs for which you want to apply this promotion.

    You can also use product ID instead of SKU to specify the targets.
    1. Click **Save**.
1. Click **Save**.

## Creating Bundle Discount Promotions

:::warning
We recommend not to set maximum discount value for this promotions. Setting maximum discount value for this promotion conflicts with the promotion settings.
:::

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date**  field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. In the **Promotion type** field, select **Bundle**.
1. To enable the promotion, select the **Enabled** field.
1. To automatically apply the promotion, select the **Automatic** field.
  If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](promotions.md#adding-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
      1. In the **Set minimum cart value > Amount** field, enter a minimum cart value before the promotion can be applied
      1. In the **Select Currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Adding pricing](../catalog.md#adding-pricing) section.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.
1. In the **Define schema** section, do the following:
    1. Click **Add currency**, and add the amount and currency for the bundle.
    1. Click **Save**.
    1. Click **Bundle requirements > Add requirement** and enter the SKU and quantity of the first item in the bundle.
    1. Click **Save**.
    1. Repeat step 3 to add more items to the bundle.
    1. Click **Save**.
1. Click **Save**.

### Example for bundle

For a bundle promotion *(SKU1 or SKU2 ) + SKU3 for $20*, the promotion is applied if the bundle contains *SKU1 and SKU3* or *SKU2 and SKU3*. Do the following to define schema for this promotion.

1. Click **Add requirement** and enter *SKU1* and *SKU2* separated by a comma.
1. Click **Save**.
1. Click **Add requirement**  again and enter *SKU3*.
1. Click **Save**.

## Creating item fixed discount promotions

:::warning
We recommend not to set maximum discount value for this promotions. Setting maximum discount value for this promotion conflicts with the promotion settings.
:::

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date**  field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. In the **Promotion type** field, select **Item fixed discount**.
1. To enable the promotion, select the **Enabled** field.
1. To automatically apply the promotion, select the **Automatic** field.
  If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](promotions.md#adding-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
   1. In the **Set minimum cart value > Amount** field, enter a minimum cart value before the promotion can be applied.
   1. In the **Select Currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Adding pricing](../catalog.md#adding-pricing) section.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.
1. In the **Define schema** section, do the following:
    1. Click **Add currency**, and add the amount and currency.
    1. Click **Save**.
    1. Click **Add target** and enter the SKUs that you want to include in the promotion.
    1. Click **Save**.
1. Click **Save**.

## Creating Item Percentage Discount Promotions

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date**  field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. In the **Promotion type** field, select **Item percent discount**.
1. To enable the promotion, select the **Enabled** field.
1. To automatically apply the promotion, select the **Automatic** field.
  If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](promotions.md#adding-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
   1. In the **Set minimum cart value > Amount** field, enter a minimum cart value before the promotion can be applied.
   1. In the **Select Currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Adding pricing](../catalog.md#adding-pricing) section.
1. (Optional) In the **Maximum discount value** field, enter the maximum possible discount amount and currency.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.
1. In the **Define schema** section, do the following:
    1. Click **Add percentage** and add the percentage.
    1. Click **Save**.
    1. In the **Targets** section, do one of the following:

        - To enable the promotion for all products, click the **Apply to all products** toggle.
        - To enable the promotion only for selected products, click **Add target** and enter the SKUs that you want to include in the promotion.

    1. Click **Save**.
1. Click **Save**.

## Creating Free Gift Promotions

:::warning
We recommend not to set maximum discount value for this promotions. This setting doesn’t have any effect on the promotion.
:::

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. In the **Name** field, enter a name for the promotion.
1. In the **Description** field, enter a description for the promotion.
1. In the **Start date**  field, select the start time for the promotion.
1. In the **End date** field, the end time of the promotion.
1. In the **Promotion type** field, select **Free gift**.
1. To enable the promotion, select the **Enabled** field.
1. To automatically apply the promotion, select the **Automatic** field.
  If this field is not selected, the promotion requires the buyer to enter a code in the cart to get the discount. For more information, see the [Adding codes](promotions.md#adding-codes) section.
1. (Optional) In the **Minimum cart value** field, click **Specify values**.
   The **Set minimum cart value** window is displayed.
   1. In the **Set minimum cart value > Amount** field, enter a minimum cart value before the promotion can be applied.
   1. In the **Select Currency** field, select a currency.
      You can add one or several value specifications in different currencies. For more information about currencies, see the [Adding pricing](../catalog.md#adding-pricing) section.
1. (Optional) In the **Quantity limit per use** field, specify the maximum number of application of a promotion per cart for a single use of a promotion.
1. In the **Define schema** section, do the following:
    1. Click **Bundle requirements > Add requirement** and enter the ID or SKU of the products and quantity of the items for which a free gift is included.
    1. Click **Save**.
    1. Click **Add gift** and enter the SKUs of the free gift items separated by comma.
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
