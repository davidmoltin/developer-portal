---
id: index
title: Settings
sidebar_label: Settings
---

Use the Settings API to configure global settings for your project.

## Page length

This defines the number of results per page when paginating results (**max**: `100`).

| **Name** | Type | **Default** | **Max** |
| :--- | :--- | :--- | :--- |
| `page_length` | `integer` | `25` | `100` |

For more information on pagination including a list of which resources support pagination, see [Pagination](../../basics/pagination.md).

## List child products

:::note
This information is for our Legacy Catalog and does not apply to PCM Catalog, Products nor Hierarchies.
:::

This defines whether you want to display child products in product listings.

| **Name** | Type | **Default** |
| :--- | :--- | :--- |
| `list_child_products` | `boolean` | `true` |


## Additional languages

:::note
Additional languages apply only to the legacy catalog and does not apply to PCM products, hierarchies, and catalogs. For more information on locale settings for the PCM services, see the [PCM Products](../../pcm/products/create-a-product.md) and [PCM Hierarchies](../../pcm/hierarchies/create-a-hierarchy.md) sections.
:::

You can define additional [language codes](../translations/index.md#supported-languages) that are enabled for a project (**max**: `5`).

| **Name** | Type | **Default** | **Max** |
| :--- | :--- | :--- | :--- |
| `additional_languages` | `array` | `[]` | `5` |

## Calculation method

This option defines the method used to calculate cart and order totals. Currently there are two methods: `{simple}` and `{line}`

The `{simple}` method is our previous method for calculating cart and order totals which focuses on the total value of the cart. This should only be used in the case where Commerce Cloud is not used for tax calculations. The `{line}` method treats each line item individually resulting in more accurate figures after taxes and promotions are applied.

 | Name | Type | Value |
 | :--- | :--- | :--- |
 | `calculation_method` | `string` | `simple` |
 | `calculation_method` | `string` | `line` |

:::important
The default calculation method for stores created before February 2020 is set to `simple`. However, stores created since February 2020 have `line` method as the default setting.
:::

:::note
Line-item discount promotions, such as `item_percent_discount` and `item_fixed_discount`, are only supported by the `line` calculation method. For more information, see [Promotions](../../promotions/index.md).
:::

## Readonly settings

For internal store configurations, read-only settings are used and updating these settings fails without returning any error. To change any predefined configuration, contact [Elastic Path support team](https://support.elasticpath.com/hc/en-us).

| Name | Type | Default |
| :--- | :--- | :--- |
| `currency_limit` | `integer` | `10` |
| `field_limit` | `integer` | `100` |
| `integration_limit` | `integer` | `100` |
| `event_limit` | `integer` | `5` |
| `filter_limit` | `integer` | `10` |
| `tax_item_limit` | `integer` | `5` |
| `promotions_limit` | `integer` | `1000` |
| `promotion_codes_limit` | `integer` | `1000` |
