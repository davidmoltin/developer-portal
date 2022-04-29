---
id: api-overview
title: API Overview
sidebar_label: API Overview
---

The Elastic Path Commerce Cloud API is a set of APIs used to manage resources. The following table lists the top-level resources in alphabetical order with a brief description and links to related content. To view all endpoints, see the methods in the linked sections or use the [Postman collection](../developer/how-to/test-with-postman-collection.md).

| Resource | Description | Links |
| --- | --- | --- |
| `/pcm/catalogs` | Catalog configuration, rules, and releases. | [Catalogs](pcm/catalogs/index.md), [Catalog Releases](pcm/catalogs/releases/index.md) |
| `/pcm/catalog` | Retrieve the published catalog that best matches the shopper context according to the defined catalog rules. | [Catalogs](pcm/catalogs/index.md), [Catalog Releases](pcm/catalogs/releases/index.md) |
| `/pcm/hierarchies` | Hierarchy management that supports user-defined, structured hierarchies. | [PCM Hierarchies](pcm/hierarchies/index.md) |
| `/pcm/pricebooks` | Price books contain product prices in multiple currencies. | [Price Books](pcm/pricebooks/index.md) |
| `/pcm/products` | Product information and relationships. | [PCM Products](pcm/products/index.md) |
| `/v2/authentication-realms` | Single sign-on support for your business customers. | [Authentication Realms](single-sign-on/authentication-realms/index.md), [OpenID Connect Profiles](single-sign-on/oidc-profiles/index.md) |
| `/v2/carts` | Cart management, including carts, cart items, and taxes. Associate carts with customers. | [Carts](carts-and-orders/carts/index.md) |
| `/v2/currencies` | Currencies that are used to display prices. | [Currencies](advanced/currencies/index.md) |
| `/v2/customers` | Customer management, including addresses and orders. | [Customers](customers-and-accounts/customers/index.md) |
| `/v2/files` | Images and other files. | [Files](advanced/files/index.md) |
| `/v2/flows` | Data model extensions. You can extend an existing resource or create a new resource. | [Custom Data (Flows)](advanced/custom-data/index.md) |
| `v2/gateways` | Payment gateways that you can configure so that customers can pay for their orders. | [Gateways](payments/gateways/index.md) |
| `/v2/integrations` | Integrate Elastic Path Commerce Cloud with your external systems using webhooks and message queue services. | [Integrations](advanced/integrations/index.md) |
| `/v2/inventories` | Inventory management within your project. | [Inventories](inventory/index.md) |
| `/v2/jobs` | Task management for long-running background tasks, such as exporting orders. | [Jobs](advanced/jobs/index.md) |
| `/v2/merchant-realm-mappings` | Single sign-on configuration for administrators and developers. | [Merchant Realm Mapping](advanced/settings/merchant-realm-mappings/index.md) |
| `/v2/orders` | Orders are the result of checking out a cart. A payment for an order is called a transaction. | [Orders](carts-and-orders/orders/index.md), [Transactions](payments/transactions/index.md) |
| `/v2/promotions` | Promotions management, including promotion codes. | [Promotions](promotions/index.md) |
| `/v2/settings` | Global settings that affect your project, such as page length and language settings. | [Settings](advanced/settings/index.md) |

## Legacy APIs

The following API resources are supported but have been replaced by enhanced services.

| Resource | Description | Links | Replacement |
| --- | --- | --- | --- |
| `/v2/brands` | Hierarchies that are used to organize products by brand, such as Leviʼs® or Adidas®. | [Brands](catalog/brands/index.md) | `/pcm/hierarchies` |
| `/v2/categories` | Hierarchies that are used to organize products by categories, such as Appliances or Shoes. | [Categories](catalog/categories/index.md) | `/pcm/hierarchies` |
| `/v2/collections` | Hierarchies that are used to organize products by collections, such as Fall Collection or Sale Collection. | [Collections](catalog/collections/index.md) | `/pcm/hierarchies` |
| `/v2/products` | Products or services that you sell in your store. You define product attributes, such as name and description. You also define relationships to other resources, such as files and types of hierarchies. Finally, you can build child products based on variations. | [Products](catalog/products/index.md), [Child Products](catalog/product-variations/build-child-products.md), [Translations](advanced/translations/index.md) |  `/pcm/products`, `/pcm/pricebooks` |
| `/v2/variations` | Attributes necessary to build child products. A child product is one version of the parent product based on product variations, such as a size 7 shoe in black. You can override attribute values from the parent product by using modifiers. | [Product Variations](catalog/product-variations/index.md), [Product Modifiers](catalog/product-variations/modifiers/index.md) | *Future* |
