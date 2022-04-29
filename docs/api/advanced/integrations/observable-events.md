---
id: observable-events
title: Observable Events
sidebar_label: Observable Events
---

You can pass multiple observable keys to the `observes` field of the [integration object](index.md#integration-object), or you can create individual events. You can use an array when you handle multiple webhooks at the same URL.

| **Entity/Resource** | **Action** | **Observable Key** |
| :--- | :--- | :--- |
| **Address** | Created | `address.created` |
|  | Updated | `address.updated` |
|  | Deleted | `address.deleted` |
| [**Account**](../../customers-and-accounts/account-management/accounts/index.md) | Created | `account.created` |
|  | Updated  | `account.updated` |
|  | Deleted  | `account.deleted` |
| [**Account Member**](../../customers-and-accounts/account-management/account-members/index.md) | Created | `account-member.created` |
|  | Updated  | `account-member.updated` |
|  | Deleted  | `account-member.deleted` |
| [**Account Membership**](../../customers-and-accounts/account-management/account-memberships/index.md) | Created | `account-membership.created` |
|  | Updated  | `account-membership.updated` |
|  | Deleted  | `account-membership.deleted` |
| [**Brand**](../../catalog/brands/index.md) (legacy) | Created | `brand.created` |
|  | Updated | `brand.updated` |
|  | Deleted | `brand.deleted` |
| **Cart** | Updated | `cart.updated` |
|  | Deleted | `cart.deleted` |
| [**Category**](../../catalog/categories/index.md) (legacy) | Created | `category.created` |
|  | Updated | `category.updated` |
|  | Deleted | `category.deleted` |
| [**Collection**](../../catalog/collections/index.md) (legacy) | Created | `collection.created` |
|  | Updated | `collection.updated` |
|  | Deleted | `collection.deleted` |
| **Currency** | Created | `currency.created` |
|  | Updated | `currency.updated` |
|  | Deleted | `currency.deleted` |
| **Customer** | Created | `customer.created` |
|  | Updated | `customer.updated` |
|  | Deleted | `customer.deleted` |
| **File** | Created | `file.created` |
|  | Deleted | `file.deleted` |
| **Integration (events)** | Created | `integration.created` |
|  | Updated | `integration.updated` |
|  | Deleted | `integration.deleted` |
| **Order** | Created | `order.created` |
|  | Updated | `order.updated` |
|  | Fulfilled | `order.fulfilled` |
|  | Authorized | `order.authorized` |
|  | Paid/Captured | `order.paid` |
|  | Refunded | `order.refunded` |
| **Payment Gateway** | Updated | `payment-gateway.updated` |
| **PCM Catalog** | Created | `catalog-release.created` |
|  | Updated | `catalog-release.updated` |
|  | Deleted | `catalog-release.deleted` |
| [**Product**](../../catalog/products/index.md)(legacy)| Created | `product.created` |
|  | Updated | `product.updated` |
|  | Deleted | `product.deleted` |
| **Settings** | Created | `settings.created` |
|  | Updated | `settings.updated` |
| **Stock Transaction** | Created | `stock-transaction.created` |
| **Transaction** | Created | `transaction.created` |
|  | Updated | `transaction.updated` |
| **User Authentication Info** | Created | `user-authentication-info.created` |
|  | Updated  | `user-authentication-info.updated` |
|  | Deleted  | `user-authentication-info.deleted` |

## Related Resources

### Concepts

- [Integrations](../../../concepts/integrations.md)

### APIs

- [Integrations API](index.md)
- [Observable Events](observable-events.md)

### How-to guides

- [Integration Examples](../../../developer/get-started/integrations.md)
