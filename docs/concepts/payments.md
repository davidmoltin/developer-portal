---
id: payments
title: Payments
sidebar_label: Payments
---

Payments for orders are processed through a payment gateway. Commerce Cloud offers integrations for a selection of payment gateway providers, or you can create your own integrations.

Payment transactions are processed similarly for all gateways:

1. A payment transaction is created and an attempt to pay is made.
2. The transaction is forwarded to the third-party gateway specified by the customer.
3. The payment is processed by the third-party gateway.

Payment transactions are always processed outside of Commerce Cloud for security reasons. Typically, you use a token rather than pass the card details directly. If, however, you want to pass the cart details directly to the third-party provider, Commerce Cloud enforces the use of the secure HTTPS protocol. If the transaction is successful, a `200 OK` response is returned. Use the response (success or failure) to update the transaction, which automatically updates the order and payment statuses.

A payment transaction can also be refunded. You can select which way you want to process refunds:

- **Mark as Refunded**: You can use your payment gateway’s console to process a refund. Process the refund first in the payment gateway and then use the **Mark as Refunded** capability in Commerce Cloud to complete the process.
- **Refund through Commerce Cloud**: Start a full or partial refund to a supported payment provider directly from Commerce Manager or the API. You still have the ability to mark as refunded for a pre-integrated gateway, such as Stripe.

:::warning
Configure your store to use [Manual Gateway](../api/payments/paying-for-an-order/manual-payments.md) to process payments if the order total is zero or the payment is through non-supported payment providers.
:::

## Related concepts

- [Orders](orders.md)

## APIs

- [Gateways API](../api/payments/gateways/index.md)
- [Payments API - Paying for an order](../api/payments/paying-for-an-order/index.md)
- [Payments API - Refunds](../api/payments/paying-for-an-order/index.html#refunds)

## How-to guides

- [Calculate cart and order totals](../developer/how-to/calculate-totals.md)
