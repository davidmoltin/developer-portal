---
id: orders
title: Orders
sidebar_label: Orders
---

An order is created after a customer checks out their cart. On creation, the order is marked unpaid. The customer is prompted for a shipping address, a billing address, and a payment method. After the order is successfully paid, you can trigger an inventory process and a shipping process.

You can keep a history of orders associated with the customer account.

## Re-order

A re-order is when a shopper copies items from a previous order from their order history into a cart of their choice. If a shopper re-orders to an empty cart, the same quantities as the past order are applied. If the shopper re-orders to an existing cart, and orders the same item, the quantity increases. If an item is out of stock, the item is not added to the cart, and the shopper sees an insufficient stock error.

The tax for the items in a re-order is not applied. For more information, see [Tax Items](../api/carts-and-orders/carts/cart-items/tax-items/index.md).

## Related concepts

- [Carts](carts.md)
- [Checkout workflow](checkout-workflow.md)
- [Payments](payments.md)
- [Inventory](inventory.md)

## APIs

- [Payments API - Paying for an order](../api/payments/paying-for-an-order/index.md)
- [Payments API - Refunds](../api/payments/paying-for-an-order/index.html#refunds)
- [Re-order](../api/carts-and-orders/carts/re-order.md)

## How-to guides

- [Calculate cart and order totals](../developer/how-to/calculate-totals.md)
