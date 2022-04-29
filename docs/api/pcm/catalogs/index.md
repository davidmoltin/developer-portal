---
id: index
title: PCM Catalogs API
sidebar_label: PCM Catalogs API
---

Use the PCM Catalogs API to create, manage, and publish catalogs. You can also define catalog rules so that you can show catalogs with different pricing or different products to preferred customers or channels.

You can use the PCM Catalogs service with either the `pcm/products` resource or the `v2/products` resource.

## PCM Catalogs with `pcm/products`

A catalog is a combination of one or more hierarchies and a price book. Use the PCM Products API and Hierarchies API to create a hierarchy of products that can be included in a catalog. Use the Price Book API to associate prices with products.

In the object descriptions, parameters that are unique to `pcm/products` are identified with **PCM**.

## PCM Catalogs with `v2/products`

You can use the PCM Catalogs to retrieve products associated with a legacy catalog. The hierarchies come from the brands, categories, and collections that are associated with the products. The prices are defined in the products, which means that the Price Book API is not supported with the `v2/products` resource.

:::important
To serve products and hierarchies created using `v2/products` from Catalog View, you must create a catalog rule with a legacy catalog.

- To apply the catalog to all shoppers, set `catalog_id=legacy` and leave the other optional catalog rule fields empty.
- To constrain the catalog to a subset of shoppers, set `catalog_id=legacy` and also set the `channel`, `customer_ids`, or `tags` as appropriate for your scenario.

For more information, see [The Legacy Catalog Object](#the-legacy-catalog-object). In the object descriptions, parameters that are unique to `v2/products` are identified with **V2**.
:::

## The Catalog object

**PCM**. Identifies the catalog, its product hierarchies, and a price book.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the catalog. |
| `type` | `string` | The type of object being returned. Always: `catalog` |
| `attributes.name` | `string` | The name of the catalog. |
| `attributes.description` | `string` | A description of the catalog, such as the purpose for the catalog. |
| `attributes.hierarchy_ids` | `[string]` | The unique identifiers of the hierarchies to associate with this catalog.  |
| `attributes.pricebook_id` | `string` | The unique identifier of the price book to associate with this catalog. If no price book is selected, the catalog is displayed without prices. |
| `attributes.created_at` | `string($date-time)` | The date and time the catalog was created. |
| `attributes.updated_at` | `string($date-time)` | The date and time the catalog was updated. |
| `attributes.published_at` | `string($date-time)` | If published, the date and time the catalog was published. |
| `links` | [`object`](#the-links-object) | A URL to the catalog. |


### The Legacy Catalog object

**V2**. To support v2 Products, there is a predefined `legacy` catalog that you can use to retrieve the products for your store. You can use this catalog with catalog rules.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Always: `legacy`|
| `type` | `string` | Always: `catalog` |
| `attributes.hierarchy_ids` | `[string]` | The unique identifiers of the Brand, Category, and Collection resources associated with the v2 Products. |

### The `Links` object

**PCM**. A URL to a catalog, node, or product.

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `self` | `string` | Refers to the object that calls this object. |

## The Rule object

If you have multiple catalogs, add catalog rules. A catalog rule defines the circumstances under which you want to display a catalog to a customer. For example, the catalog rule could be preferred customers or mobile apps or both. If you create catalog rules, be sure to create a base catalog rule to use when no other catalog rule fits the shopper request. A base catalog rule is defined with a `type`, `name`, and `catalog_id` only.

:::note
If you have one catalog for all customers and channels, you can omit creating this object.
:::

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `type` | `string` | The type of object being returned. Always: `catalog_rule` |
| `attributes.name` | `string` | The name of the rule without spaces. |
| `attributes.description` | `string` | The purpose for this rule. |
| `attributes.catalog_id` | `string` | The unique identifier for the catalog to display in this rule. **V2** If you want to display a catalog that contains v2 Products, Brands, Categories, and Collections, specify `legacy`. |
| `attributes.account_ids` | `[array]` | Specifies the list of accounts who are eligible to see this catalog. If this field is empty, the rule matches all accounts. |
| `attributes.customer_ids` | `[array]` | The list of customers who are eligible to see this catalog. If empty, the rule matches all customers. |
| `attributes.channels` | `[array]` | The list of channels in which this catalog can be displayed. A channel is the shopping experience, such as a mobile app or web storefront. If empty, the catalog rule matches all channels. The channel will eventually be included in the bearer token that is used for authorization, but currently, you must set the `EP-Channel` header in your requests. |
| `attributes.tags` | `[array]` |  A list of user-defined tags that can be used to further restrict the eligibility criteria for this rule. Requests populate the catalog rule tag using the `EP-Context-Tag` header. |
| `attributes.schedules` | `[array]` | Specifies a time period when a catalog is displayed, such as on a specific date or during summer. Requests populate the rule tag using  the `EP-Context-Tag` header. The `schedules` attribute must include `valid_from` and `valid_to`. `valid_from` matches the date and time that the catalog is displayed from. `valid_to` matches the date and time the catalog is displayed to. Elastic Path Commerce Cloud runs on UTC time. You can offset the timezone by adding the offset to the end of the date and time. For example, a catalog which contains a sale hierarchy that should appear for a set timeframe may be scheduled to publish on a given date and time within a given timezone. For instance, a sale that should begin on 1st of June 2022 05:00 ET and end on the 15th of June 2022 at 23:50 PT would have a valid schedule of `"valid_from": "2022-06-01T05:00:00.000-05:00",`  `"valid_to": "2022-06-15T11:59:99.000-08:00"` |

### Resolving catalog rules

When there is a request for a catalog, the store displays the catalog with the rule that matches the most attributes of the shopperʼs context.

The request triggers the following steps:

1. Compares the shopperʼs context against the defined catalog rules.
1. Determines the best match.
1. Retrieves the catalog associated with the matching catalog rule.

The follow examples show how the best match might be resolved:

- A shopper matches one of the `customer_ids` in one catalog rule only. The catalog for that catalog rule is displayed.
- A shopper matches one of the `customer_ids` in one catalog rule only, but doesnʼt match any of the `tags` specified in that catalog rule. Because there are no other catalog rules for this `customer_id`, the catalog for the catalog rule is displayed because it is the best match.
- A shopper is browsing a store using the storeʼs mobile app, which matches `channel=mobile` in two catalog rules. The catalog displayed depends on matches with the `tags` or `customer_ids` attributes. If there is no other matching attribute, the first catalog rule found by the store is used. The best practice is to create catalog rules that cover all cases so that you avoid this situation.
- An unknown shopper is browsing the only channel offered by the seller. The store displays the base catalog.
