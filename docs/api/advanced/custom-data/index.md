---
id: index
title: Custom Data (Flows)
sidebar_label: Custom Data (Flows)
---

Use `flows` resource to extend an existing resource or to create a new resource.

For more information, see the [Custom data (Flows)](../../../concepts/custom-data-flows.md) section.

## Core and. Non-core Flows

The following table describes the differences between core and non-core flows:

| Core Flows | Non-core Flows |
| :--- | :--- |
| Extend an existing resource. | Create a new resource. |
| Entries managed automatically by Elastic Path Commerce Cloud. | Create and manage entries manually. |
| Requests are sent to the `fields` endpoint. | Requests are sent to the `entries` endpoint. |

:::note
You cannot delete core flows after creating them on API or Commerce Manager.
:::

## Extend a resource

Extending a resource applies only to core flows. When creating a new flow, make sure the `slug` matches that of a core resource listed in the following table.

| Flow slug | Description |
| :--- | :--- |
| `accounts` | Extend the [`account`](../../customers-and-accounts/account-management/accounts/index.md#the-account-object) object. |
| `account-memberships` | Extend the [`account-membership`](../../customers-and-accounts/account-management/account-memberships/index.md#the-account-membership-object) object. |
| `addresses` | Extend the [`address`](../../customers-and-accounts/addresses/index.md#the-address-object) object. |
| `authentication-realms` | Extend the [`authentication-realms`](../../single-sign-on/authentication-realms/index.md#the-authentication-realm-object) object. |
| `brands` | Extend the [`brand`](../../catalog/brands/index.md#the-brand-object) object. |
| `carts` | Extend the [`carts`](../../../developer/how-to/extend-cart-and-order-resources.md) object. |
| `cart_items` | Extend the [`cart_item`](../../carts-and-orders/carts/cart-items/index.md#the-cart-item-object) object. |
| `categories` | Extend the [`category`](../../catalog/categories/index.md#the-category-object) object. |
| `collections` | Extend the [`collection`](../../catalog/collections/index.md#the-collection-object) object. |
| `customers` | Extend the [`customer`](../../customers-and-accounts/customers/index.md#the-customer-object) object. |
| `files` | Extend the [`file`](../files/index.md#the-file-object) object. |
| `oidc-profiles` | Extend the [`oidc-profiles`](../../single-sign-on/oidc-profiles/index.md#the-openid-connect-profile-object) object. |
| `order_items` | Extend the [`order_item`](../../carts-and-orders/orders/order-items.md#the-order-item-object) object. |
| `orders` | Extend the [`order`](../../carts-and-orders/orders/index.md#the-order-object) object. |
| `password-profiles` | Extend the [`password-profiles`](../../single-sign-on/password-profiles/index.md#the-password-profile-object) object. |
| `products` | Extend the [`product`](../../catalog/products/index.md#the-product-object) object. |
| `promotions` | Extend the [`promotion`](../../promotions/index.md). |
| `user-authentication-info` | Extend the [`user-authentication-info`](../../single-sign-on/user-authentication-info/index.md#the-user-authentication-info-object) object. |
| `user-authentication-oidc-profile-info` | Extend the [`user-authentication-oidc-profile-info`](../../single-sign-on/user-authentication-oidc-profile-info/index.md#the-user-authentication-openid-connect-profile-info-object) object. |
| `user-authentication-password-profile-info` | Extend the [`user-authentication-password-profile-info`](../../single-sign-on/user-authentication-password-profiles/index.md#the-user-authentication-password-profile-info-object) object. |

## Add a new resource

Adding a new resource is applicable only to non-core (custom) flows.

## Resource structure

A [flow](flows/index.md) describes a collection of fields. It is named after the internal entity type you want to associate it with. For example, a flow with a slug of `products` applies to all product responses in your store.

A [field](fields/index.md) represents a single field of data, such as `Product Rating`, that is applied to an entity. All fields have a type , such as `string`, `integer`, `boolean`, `date` or `relationship`, a default value, and an optional set of validation rules.

An [entry](entries/index.md) is a specific instance of a flow, and is associated with a specific instance of an entity. For example, a single product. Use entries for custom flows (non-core) only.

## How-to guides

- [Extend any resource](../../../developer/how-to/extend-any-resource.md)
- [Extend product resources](../../../developer/how-to/extend-product-resources.md)
- [Extend customer resources](../../../developer/how-to/extend-customer-resources.md)
- [Extend cart and order resources](../../../developer/how-to/extend-cart-and-order-resources.md)
- [Create a blog resource](../../../developer/how-to/create-a-blog-resource.md)
- [Create a wishlist resource](../../../developer/how-to/create-a-wishlist-resource.md)
