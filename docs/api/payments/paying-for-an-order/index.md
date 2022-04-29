---
id: index
title: Paying for an order
sidebar_label: Paying for an order
---

When you [checkout](../../carts-and-orders/checkout.md) a [cart](../../carts-and-orders/carts/index.md), an unpaid [order](../../carts-and-orders/orders/index.md) is returned. You can process the payment for the order though a payment gateway.

:::note
You need to configure and enable a payment gateway before you can accept payments for orders.
:::

:::warning
Configure your store to use [Manual Gateway](manual-payments.md) to process payments if the order total is zero or the payment is through non-supported payment providers.
:::

:::caution
There are a number of actions that happen to your [inventory](https://app.gitbook.com/@moltin/s/api/catalog/inventory) when checking out and paying for an order. For more information, see [Inventory](../../../concepts/inventory.md).
:::

## Payment methods

Depending on the chosen gateway, you may or may **not** have access to `capture` funds immediately or `authorize` for later payment.

- [Transactions](../transactions/index.md)

### Purchase

The simplest method is `purchase`. The gateway attempts to charge the customer immediately, and the result of the attempt is returned.

### Authorize

You can `authorize` a payment so funds can later be captured when an item is dispatched or restocked.

### Capture

After authorizing a transaction, you have to `capture` the authorized funds.

:::important
We recommend capturing payments several hours to days after the authorization to mitigate risks of fraud and chargebacks. When you sell digital goods that are delivered immediately, we recommend using a single `purchase` call instead of separate `authorize` and `capture` calls.
:::

### Refunds

You can use either the **Refund** through Commerce Cloud or use the **Mark as Refunded** capability, or a combination of both capabilities.

#### Refund through Commerce Cloud

You can start a full or partial refund to a supported payment provider directly from Commerce Manager or the API. When you start the refund process, the refund request is sent to the payment gateway. You no longer have to log on to your payment gateway’s console to process the refund.

When you process a refund, use the `refund` endpoint to pass the refund amount. If you don’t pass an amount, the refund is processed as `Mark as refunded`. For more information, see the [Mark as Refunded](#mark-as-refunded) section.

Each time a partial refund is triggered, the `transaction.updated` event is generated and updated with `refunded.amount`. The `order.updated` event is also triggered. The `order.refunded` event generates when the full amount is refunded.

#### Mark as Refunded

You can use your payment gateway’s console to process a refund. Process the refund first in the payment gateway and then use the **Mark as Refunded** capability in Commerce Cloud to complete the process.

When an order is **Marked as refunded**, the payment status `order.payment.status` is set to `refunded`. In this case, the `order.updated`, `transaction.updated` and `order.refunded` events are generated.
