---
id: integrations
title: Integrations
sidebar_label: Integrations
---

You can integrate Elastic Path Commerce Cloud with your external systems like enterprise resource planning, order management, fulfilment, and other systems, ensuring that buying is quick and easy for your shoppers.

Events are actions that occur in your commerce workflow, such as a customer changing their address or an order changing status from created to paid. You can create custom functions that perform additional processing outside of Elastic Path Commerce Cloud, and create integrations so that when an event occurs in your store, the custom function is run.

For example:

- When a customer updates their address, the Customer Relationship Management system is updated with the change.
- When an order status changes to paid, the affected stock in an inventory management system is reduced by the number of items in the order.

:::note
For a list of all the events that can be used, see [Observable Events](../api/advanced/integrations/observable-events.md) in the API reference.
:::

You can integrate Elastic Path Commerce Cloud with your external systems using:

- Webhooks
- Message Queuing Services

## Webhooks

You can use Webhooks to deliver Elastic Path Commerce Cloud events to a configured HTTP endpoint.

## Message Queuing Services

You can deliver Elastic Path Commerce Cloud events to messages queues in the following message queuing services:

- Amazon Simple Queuing Service (SQS)
- Message queuing services that support the Message Simple Text Orientated Messaging Protocol (STOMP), for example, Amazon MQ.

## Related Resources

### Concepts

- [Custom data (Flows)](custom-data-flows.md)

### APIs

- [Integrations API](../api/advanced/integrations/index.md)
- [Observable Events](../api/advanced/integrations/observable-events.md)

### How-to guides

- [Send order confirmations](../developer/how-to/send-order-confirmations.md)
- [Create short order IDs](../developer/how-to/create-short-order-ids.md)
- [Synchronize search with Algolia](../developer/how-to/synchronize-search.md)
