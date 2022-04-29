---
id: promotions
title: Promotions
sidebar_label: Promotions
---

You can manage promotions on the **Store > Promotions** page.

For a conceptual overview of promotions in Commerce Cloud, see the [Promotions](../../concepts/promotions.md) section.

## Creating Promotions

:::important

- You cannot change the promotion type or schema after creating a promotion.
- If you want to restrict the usage of a promotion, do not select the **Automatic** field in promotion setting and ensure that you create a code for the promotion.
- You can use product ID instead of product SKU to specify products.
:::

1. Go to **Store > Promotions**.
1. Click **+New Promotion**.
1. Enter the the required information to create the following promotions:

    - [Cart-level fixed discount promotions](create-cart-level-promotions.md#creating-cart-level-fixed-discount-promotions)
    - [Cart-level percentage discount promotions](create-cart-level-promotions.md#creating-cart-level-percentage-discount-promotions)
    - [X for Y discount promotions](create-item-level-promotions.md#creating-x-for-y-discount-promotions)
    - [X for amount discount promotions](create-item-level-promotions.md#creating-x-for-amount-discount-promotions)
    - [Bundle discount promotions](create-item-level-promotions.md#creating-bundle-discount-promotions)
    - [Item fixed discount promotions](create-item-level-promotions.md#creating-item-fixed-discount-promotions)
    - [Item percentage discount Promotions](create-item-level-promotions.md#creating-item-percentage-discount-promotions)
    - [Free gift promotions](create-item-level-promotions.md#creating-free-gift-promotions)

:::important

- We recommend not to use the **Maximum discount value** setting for the following promotions:

    - [Cart-level fixed discount promotions](create-cart-level-promotions.md#creating-cart-level-fixed-discount-promotions)
    - [Item fixed discount promotions](create-item-level-promotions.md#creating-item-fixed-discount-promotions)
    - [X for Y discount promotions](create-item-level-promotions.md#creating-x-for-y-discount-promotions)
    - [X for amount discount promotions](create-item-level-promotions.md#creating-x-for-amount-discount-promotions)
    - [Bundle discount promotions](create-item-level-promotions.md#creating-bundle-discount-promotions)
    - [Free gift promotions](create-item-level-promotions.md#creating-free-gift-promotions)

- The **Exclude items** setting specifies the products to be excluded from the cart-level promotions, such as `fixed_discount` and `percent_discount`. However, the stores that use [simple calculation method](../../api/advanced/settings/index.md#calculation-method) do not support excluding products from promotions.
- Line-item discounts are only supported by the line calculation method. For more information about this method, see the [Calculation Method](../../api/advanced/settings/index.md#calculation-method) section.

:::

## Adding Codes

After creating a promotion, you can add codes for the promotion. Customers must enter this code to avail the promotion. For the code to work, ensure that the **Automatic** field in the promotion settings is not selected.

1. Go to **Store > Promotions**.
1. Click the promotion name for which you want to add a code.
1. In the right pane, click **Add a new promotion code**.
1. Click one of the following tabs:

    - [**Add a single code**](#adding-single-code)
    - [**Bulk generate codes**](#generating-bulk-codes)

1. Enter the required settings.
1. Click **Generate Code**.
1. Click **Save**.

### Adding single code

1. Go to **Store > Promotions**.
1. Click the promotion name for which you want to add a code.
1. In the right pane, click **Add a new promotion code**.
1. In the **Add a single code** tab, enter the following details:

    - (Optional) **Prepend Value** : Specifies a prepend value for the code. For example, if you set *summer* as prepend value for a code *123*, the promotion code is *summer-123*.
    - (Optional) **Restrict to user** : Specifies the customer ID of the users who can use the code.
    - (Optional) **Usage limit type** : Specifies whether the usage limitation is item-level or cart-level. The options are **Per Cart** and **Per Line Item**.
    - (Optional) **Maximum uses** : Specifies the maximum the number of usages of a code for a promotion. If you set this value to zero, customers cannot use this promotion. If no value is set, customers can use the code any number of times.
    - (Optional) **Code** : Specifies the code for the promotion. You can either enter the code manually or use a system generated code.

1. Click **Generate Code**.
1. Click **Save**.

### Generating bulk codes

1. Go to **Store > Promotions**.
1. Click the promotion name for which you want to add a code.
1. In the right pane, click **Add a new promotion code**.
1. In the **Bulk generate codes** tab, enter the following details:

    - (Optional) **Prepend Value** : Specifies a prepend value for the codes. When codes are generated, this prefix is added to each of them.
    - **Number of codes to generate** : Specifies the number of codes to be generated.
    - (Optional) **Usage limit type** : Specifies whether the usage limitation is item-level or cart-level. The options are **Per Cart** and **Per Line Item**.
    - (Optional) **Maximum uses** : Specifies the maximum the number of usages of a code for a promotion. If you set this value to zero, customers cannot use this promotion. If no value is set, customers can use the code any number of times.

1. Click **Generate Code**.
1. Click **Save**.

The codes for a promotion are displayed in the details page of the promotion.

:::note
You can only generate maximum 1000 codes for a single promotion.
:::

## Deleting Codes

To delete a code, select the code and click the trash icon.

## Duplicating Promotions

You can duplicate an existing promotion and use the details as required in another promotion. However, the **Date range** field is not duplicated.

1. Go to **Store > Promotions**.
1. To duplicate a promotion, do one of the following:
    - In the promotions list, click **... > Duplicate** next to the promotion that you want to duplicate.
    - Open the promotion that you want to duplicate and click **Action > Duplicate**.

    The selected promotion is duplicated and opened in a new tab with the following details:

    - The name of the source promotion is duplicated with the suffix, *-copy*. For example, *50% off order - copy*.
    - The description of the source promotion is duplicated with the suffix, *-copy*. For example, *This promotion is to give 50% off on an order- copy*.
    - The default status of the duplicated promotion is always **Disabled**.
    - If the source promotion is applied automatically, the automatic status is duplicated and new promotions code is auto-generated.
    - Minimum cart value, maximum discount value, promotion type, schema, and custom field settings are duplicated.
1. Make the required changes and click **Save**.

## Editing Promotions

:::warning
You cannot change the promotion type or schema after creating a promotion.
:::

1. Go to **Store > Promotions**.
1. Click the promotion name that you want to edit.
1. Change the settings as required.
1. Click **Save**.

## Viewing Promotion History

The **History** tab provides version history of a promotion You can view the version details except changes in the promotion code and custom fields, of each version.

1. Go to **Store > Promotions**.
1. To view history of a promotion, click the promotion name.
1. Click the **History** tab.
    A list of versions with the following information about each version is displayed:

    - **Date / Time**: Date and time when the update in made in the promotion.
    - **Updated Fields**: The name of the fields that are updated in the corresponding version.
    - **Actions**: An option to view the details of the selected version. You can only view the details in the **Version Details** tab, you cannot edit the details.

The history table displays the latest edit first and earliest original last. For any changes in the promotion codes and custom fields of the promotion, the **Updated Fields** displays *Promotion codes and/or custom fields* value. However, when you click **Actions** to view the details, the **Version Details** tab does not reflect the changes.

## Related Resources

### Concepts

- [Promotions](../../concepts/promotions.md)
- [Customers](../customers.md)
- [Catalog](../catalog.md#adding-pricing)

### API

- [Promotions API](../../api/promotions/index.md)

### How-to guide

- [Create and apply promotions](../../developer/how-to/apply-promotions.md)

### Demos

- [Promotions](https://share.vidyard.com/watch/v5s8hWWrGgusf9Hv7AwZDL?)
