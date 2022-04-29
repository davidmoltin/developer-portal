---
id: permissions
title: Permissions
sidebar_label: Permissions
---

Permissions are managed through tokens. There are two main token types available for use within your project.

- [Client credential token](client-credential-token.md)
- [Implicit token](implicit-token.md)

Customer tokens can be used with an Implicit Bearer token to manage user interfaces that involve sensitive data the user may need to access or modify. Sensitive data might include orders, addresses, and customer details.

- [Customer tokens](../../customers-and-accounts/customers/customer-tokens.md)

Account Management Authentication Tokens can be used with an Implicit Bearer token to manage user interfaces that involve sensitive data that the user may need to access or modify associated with an Account. Sensitive data might include orders, addresses, and account details.

- [Account management authentication token](../../customers-and-accounts/account-management/account-members/account-member-authentication.md)

## Breakdown of access (for customers)

The following table shows a breakdown of the API endpoint actions that are available to the implicit token:

<!--DOCUSAURUS_CODE_TABS-->

<!--Implicit-->

 | Endpoint | Read access | Write access |
 | --- | --- | --- |
 | `/accounts` | ⛔️ | ⛔️ |
 | `/account-members` | ⛔️ | ⛔️ |
 | `/account-membership` | ⛔️ | ⛔️ |
 | `/authentication-realms` | ✅ | ⛔️ |
 | `/brands` | ✅ | ⛔️ |
 | `/carts` | ✅ | ✅ |
 | `/categories` | ✅ | ⛔️ |
 | `/checkout` | ✅ | ✅ |
 | `/collections` | ✅ | ⛔️ |
 | `/currencies` | ✅ | ⛔️ |
 | `/customers` | ⛔️ | ⛔️ |
 | `/files` | ✅ | ⛔️ |
 | `/flows` | ✅ | ⛔️ |
 | `/gateways` | ⛔️ | ⛔️ |
 | `/integrations` | ⛔️ | ⛔️ |
 | `/inventories` | ✅ | ⛔️ |
 | `/jobs` | ⛔️ | ⛔️ |
 | `/merchant-realm-mappings` | ⛔️ | ⛔️ |
 | `/orders`                  | ⛔️ | ⛔️ |
 | `/orders/:id`              | ⛔️ | ⛔️ |
 | `/v2/products`             | ✅ | ⛔️ |
 | `/catalog/products`        | ✅ | ⛔️ |
 | `/catalog/hierarchies`     | ✅ | ⛔️ |
 | `/catalog/nodes`           | ✅ | ⛔️ |
 | `/pcm/products`            | ⛔️ | ⛔️ |
 | `/pcm/hierarchies`         | ⛔️ | ⛔️ |
 | `/pcm/pricebooks`          | ⛔️ | ⛔️ |
 | `/pcm/catalogs`            | ⛔️ | ⛔️ |
 | `/promotions`              | ⛔️ | ⛔️ |
 | `/settings`                | ⛔️ | ⛔️ |
 | `/variations`              | ⛔️ | ⛔️ |

<!--Implicit + Customer Token-->

 | Endpoint | Read access | Write access |
 | -- | --- | --- |
 | `/accounts` | ⛔️ | ⛔️ |
 | `/account-members` | ⛔️ | ⛔️ |
 | `/account-membership` | ⛔️ | ⛔️ |
 | `/authentication-realms` |  ✅ | ⛔️ |
 | `/brands` | ✅ | ⛔️ |
 | `/carts` | ✅ | ✅ |
 | `/categories` | ✅ | ⛔️ |
 | `/checkout` | ✅ | ✅ |
 | `/collections` | ✅ | ⛔️ |
 | `/currencies` | ✅ | ⛔️ |
 | `/customers` | ✅ | ✅ |
 | `/files` | ✅ | ⛔️ |
 | `/flows` | ✅ | ⛔️ |
 | `/gateways` | ⛔️ | ⛔️ |
 | `/integrations` | ⛔️ | ⛔️ |
 | `/inventories` | ✅ | ⛔️ |
 | `/jobs` | ⛔️ | ⛔️ |
 | `/merchant-realm-mappings` | ⛔️ | ⛔️ |
 | `/orders` | ✅ | ⛔️ |
 | `/orders/:id` | ⛔ | ⛔️ |
 | `/v2/products` | ✅ | ⛔️ |
 | `/catalog/products` | ✅ | ⛔️ |
 | `/catalog/hierarchies` | ✅ | ⛔️ |
 | `/catalog/nodes` | ✅ | ⛔️ |
 | `/pcm/products` | ⛔️ | ⛔️ |
 | `/pcm/hierarchies` | ⛔️ | ⛔️ |
 | `/pcm/pricebooks` | ⛔️ | ⛔️ |
 | `/pcm/catalogs` | ⛔️ | ⛔️ |
 | `/promotions` | ⛔️ | ⛔️ |
 | `/settings` | ⛔️ | ⛔️ |
 | `/variations` | ⛔️ | ⛔️ |

<!--Implicit + Account Management Authentication Token-->

| Endpoint | Read access | Write access |
| --- | -- | --- |
| `/accounts` | ✅️ | ⛔️ |
| `/account-members` | ✅️ | ⛔️ |
| `/account-membership` | ✅ | ⛔️ |
| `/authentication-realms` |  ✅ | ⛔️ |
| `/brands` | ✅ | ⛔️ |
| `/carts` | ✅ | ✅ |
| `/categories` | ✅ | ⛔️ |
| `/checkout` | ✅ | ✅ |
| `/collections` | ✅ | ⛔️ |
| `/currencies` | ✅ | ⛔️ |
| `/customers` | ⛔ | ⛔ |
| `/files` | ✅ | ⛔️ |
| `/flows` | ✅ | ⛔️ |
| `/gateways` | ⛔️ | ⛔️ |
| `/integrations` | ⛔️ | ⛔️ |
| `/inventories` | ✅ | ⛔️ |
| `/jobs` | ⛔️ | ⛔️ |
| `/merchant-realm-mappings` | ⛔️ | ⛔️ |
| `/orders` | ✅ | ⛔️ |
| `/orders/:id` | ⛔ | ⛔️ |
| `/v2/products` | ✅ | ⛔️ |
| `/catalog/products` | ✅ | ⛔️ |
| `/catalog/hierarchies` | ✅ | ⛔️ |
| `/catalog/nodes` | ✅ | ⛔️ |
| `/pcm/products` | ⛔️ | ⛔️ |
| `/pcm/hierarchies` | ⛔️ | ⛔️ |
| `/pcm/pricebooks` | ⛔️ | ⛔️ |
| `/pcm/catalogs` | ⛔️ | ⛔️ |
| `/promotions` | ⛔️ | ⛔️ |
| `/settings` | ⛔️ | ⛔️ |
| `/variations` | ⛔️ | ⛔️ |

<!--END_DOCUSAURUS_CODE_TABS-->

Note that you can only fetch data with live status.

## Breakdown of access (for sellers)

The following table shows a breakdown of the API endpoint actions that are available to the client credentials token for each role:

<!--DOCUSAURUS_CODE_TABS-->

<!--Seller Admin-->

| Endpoint                   | Read access | Write access |
|----------------------------| --- | --- |
| `/accounts`                | ✅ | ✅ |
| `/account-members`         | ✅ | ✅ |
| `/account-membership`      | ✅ | ✅ |
| `/authentication-realms`   |  ✅ | ✅ |
| `/brands`                  | ✅ | ✅ |
| `/carts`                   | ✅ | ✅ |
| `/categories`              | ✅ | ✅ |
| `/checkout`                | ✅ | ✅ |
| `/collections`             | ✅ | ✅ |
| `/currencies`              | ✅ | ✅ |
| `/customers`               | ✅ | ✅ |
| `/files`                   | ✅ | ✅ |
| `/flows`                   | ✅ | ✅ |
| `/gateways`                | ✅ | ✅ |
| `/integrations`            | ✅ | ✅ |
| `/inventories`             | ✅ | ✅ |
| `/jobs`                    | ✅ | ✅ |
| `/merchant-realm-mappings` | ✅ | ✅ |
| `/orders`                  | ✅ | ✅ |
| `/orders/:id`              | ✅ | ✅ |
| `/v2/products`             | ✅ | ✅ |
| `/catalog/products`        | ✅ | ✅ |
| `/catalog/hierarchies`     | ✅ | ✅ |
| `/catalog/nodes`           | ✅ | ✅ |
| `/pcm/products`            | ✅ | ✅ |
| `/pcm/hierarchies`         | ✅ | ✅ |
| `/pcm/pricebooks`          | ✅ | ✅ |
| `/pcm/catalogs`            | ✅ | ✅ |
| `/promotions`              | ✅ | ✅ |
| `/settings`                | ✅ | ✅ |
| `/user-roles`              | ✅ | ✅ |
| `/variations`              | ✅ | ✅ |

<!--Basic User-->

| Endpoint                   | Read access | Write access |
|----------------------------| --- | --- |
| `/accounts`                | ⛔️ | ⛔️ |
| `/account-members`         | ⛔️ | ⛔️ |
| `/account-membership`      | ⛔️ | ⛔️ |
| `/authentication-realms`   | ⛔️ | ⛔️ |
| `/brands`                  | ⛔️ | ⛔️ |
| `/carts`                   | ⛔️ | ⛔️ |
| `/categories`              | ⛔️ | ⛔️ |
| `/checkout`                | ⛔️ | ⛔️ |
| `/collections`             | ⛔️ | ⛔️ |
| `/currencies`              | ✅️ | ⛔️ |
| `/customers`               | ⛔️ | ⛔️ |
| `/files`                   | ⛔️ | ⛔️ |
| `/flows`                   | ✅️ | ⛔️ |
| `/gateways`                | ⛔️ | ⛔️ |
| `/integrations`            | ⛔️ | ⛔️ |
| `/inventories`             | ✅ | ⛔️ |
| `/jobs`                    | ⛔️ | ⛔️ |
| `/merchant-realm-mappings` | ⛔️ | ⛔️ |
| `/orders`                  | ⛔️ | ⛔️ |
| `/orders/:id`              | ⛔️ | ⛔️ |
| `/v2/products`             | ⛔️ | ⛔️ |
| `/catalog/products`        | ⛔️ | ⛔️ |
| `/catalog/hierarchies`     | ⛔️ | ⛔️ |
| `/catalog/nodes`           | ⛔️ | ⛔️ |
| `/pcm/products`            | ⛔️ | ⛔️ |
| `/pcm/hierarchies`         | ⛔️ | ⛔️ |
| `/pcm/pricebooks`          | ⛔️ | ⛔️ |
| `/pcm/catalogs`            | ⛔️ | ⛔️ |
| `/promotions`              | ⛔️ | ⛔️ |
| `/settings`                | ⛔️ | ⛔️ |
| `/user-roles`              | ✅ | ⛔️ |
| `/variations`              | ⛔️ | ⛔️ |

<!--Marketing/Sales-->

| Endpoint                   | Read access | Write access |
|----------------------------| --- | --- |
| `/accounts`                | ⛔️ | ⛔️ |
| `/account-members`         | ⛔️ | ⛔️ |
| `/account-membership`      | ⛔️ | ⛔️ |
| `/authentication-realms`   | ⛔ | ⛔ |
| `/brands`                  | ✅ | ✅ |
| `/carts`                   | ⛔ | ⛔ |
| `/categories`              | ✅ | ✅ |
| `/checkout`                | ⛔ | ⛔ |
| `/collections`             | ✅ | ✅ |
| `/currencies`              | ✅ | ⛔ |
| `/customers`               | ⛔ | ⛔ |
| `/files`                   | ✅ | ✅ |
| `/flows`                   | ✅ | ✅ |
| `/gateways`                | ⛔️ | ⛔️ |
| `/integrations`            | ⛔ | ⛔ |
| `/inventories`             | ✅ | ✅ |
| `/jobs`                    | ⛔ | ⛔ |
| `/merchant-realm-mappings` | ⛔ | ⛔ |
| `/orders`                  | ⛔ | ⛔ |
| `/orders/:id`              | ⛔ | ⛔ |
| `/v2/products`             | ✅ | ✅ |
| `/catalog/products`        | ✅ | ⛔️ |
| `/catalog/hierarchies`     | ✅ | ⛔️ |
| `/catalog/nodes`           | ✅ | ⛔️ |
| `/pcm/products`            | ✅ | ✅ |
| `/pcm/hierarchies`         | ✅ | ✅ |
| `/pcm/pricebooks`          | ✅ | ✅ |
| `/pcm/catalogs`            | ✅ | ✅ |
| `/promotions`              | ✅ | ✅ |
| `/settings`                | ⛔ | ⛔ |
| `/user-roles`              | ✅ | ⛔ |
| `/variations`              | ✅ | ✅ |

<!--Support-->

| Endpoint                   | Read access | Write access |
|----------------------------| --- | --- |
| `/accounts`                | ⛔️ | ⛔️ |
| `/account-members`         | ⛔️ | ⛔️ |
| `/account-membership`      | ⛔️ | ⛔️ |
| `/authentication-realms`   | ⛔️ | ⛔️ |
| `/brands`                  | ⛔️ | ⛔️ |
| `/carts`                   | ⛔️ | ⛔️ |
| `/categories`              | ⛔️ | ⛔️ |
| `/checkout`                | ⛔️ | ⛔️ |
| `/collections`             | ⛔️ | ⛔️ |
| `/currencies`              | ✅️ | ⛔️ |
| `/customers`               | ✅️ | ✅️ |
| `/files`                   | ⛔️ | ⛔️ |
| `/flows`                   | ✅️ | ⛔️ |
| `/gateways`                | ⛔️ | ⛔️ |
| `/integrations`            | ⛔️ | ⛔️ |
| `/inventories`             | ⛔️ | ⛔️ |
| `/jobs`                    | ⛔️ | ⛔️ |
| `/merchant-realm-mappings` | ⛔️ | ⛔️ |
| `/orders`                  | ✅ | ✅️ |
| `/orders/:id`              | ✅ | ✅️ |
| `/v2/products`             | ⛔️ | ⛔️ |
| `/catalog/products`        | ⛔️ | ⛔️ |
| `/catalog/hierarchies`     | ⛔️ | ⛔️ |
| `/catalog/nodes`           | ⛔️ | ⛔️ |
| `/pcm/products`            | ⛔️ | ⛔️ |
| `/pcm/hierarchies`         | ⛔️ | ⛔️ |
| `/pcm/pricebooks`          | ⛔️ | ⛔️ |
| `/pcm/catalogs`            | ⛔️ | ⛔️ |
| `/promotions`              | ⛔️ | ⛔️ |
| `/settings`                | ⛔️ | ⛔️ |
| `/user-roles`              | ✅ | ⛔️ |
| `/variations`              | ⛔️ | ⛔️ |

<!--IT/Developer-->

| Endpoint                   | Read access | Write access |
|----------------------------| --- | --- |
| `/accounts`                | ⛔️ | ⛔️ |
| `/account-members`         | ⛔️ | ⛔️ |
| `/account-membership`      | ⛔️ | ⛔️ |
| `/authentication-realms`   | ✅️ | ✅ |
| `/brands`                  | ⛔️ | ⛔️ |
| `/carts`                   | ⛔️ | ⛔️ |
| `/categories`              | ⛔️ | ⛔️ |
| `/checkout`                | ⛔️ | ⛔️ |
| `/collections`             | ⛔️ | ⛔️ |
| `/currencies`              | ✅️ | ✅️ |
| `/customers`               | ⛔️ | ⛔️ |
| `/files`                   | ⛔️ | ⛔️ |
| `/flows`                   | ✅️ | ✅️ |
| `/gateways`                | ✅️️ | ✅️️ |
| `/integrations`            | ✅️ | ✅️ |
| `/inventories`             | ⛔️ | ⛔️ |
| `/jobs`                    | ⛔️ | ⛔️ |
| `/merchant-realm-mappings` | ✅ | ✅️ |
| `/orders`                  | ⛔️ | ⛔️ |
| `/orders/:id`              | ⛔️ | ⛔️ |
| `/v2/products`             | ⛔️ | ⛔️ |
| `/catalog/products`        | ⛔️ | ⛔️ |
| `/catalog/hierarchies`     | ⛔️ | ⛔️ |
| `/catalog/nodes`           | ⛔️ | ⛔️ |
| `/pcm/products`            | ⛔️ | ⛔️ |
| `/pcm/hierarchies`         | ⛔️ | ⛔️ |
| `/pcm/pricebooks`          | ⛔️ | ⛔️ |
| `/pcm/catalogs`            | ⛔️ | ⛔️ |
| `/promotions`              | ⛔️ | ⛔️ |
| `/settings`                | ⛔️ | ⛔️ |
| `/user-roles`              | ✅ | ✅️ |
| `/variations`              | ⛔️ | ⛔️ |

<!--END_DOCUSAURUS_CODE_TABS-->
