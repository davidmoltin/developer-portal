---
id: integrations
title: Integrations
sidebar_label: Integrations
---

You can view your store’s integrations on the **Settings > Integrations** tab.

For an overview of how integrations work in Elastic Path Commerce Cloud, see [Integrations](../../concepts/integrations.md).

## Sorting and filtering integrations

You can sort the integrations list by **Name**, **Description**, or **Status**.

You can filter the integrations list to show which integrations are enabled or disabled.

## Creating a new integration

1. On the **Settings > Integrations** tab, select **+New Integration**.
1. On the **Create New Integration** page, enter the following information:

     | Section | Fields |
     | :------------- | :------------- |
     | **Integration details** | **Name** and **Description**. The **Integration type** is fixed at `webhook`.|
     | **Configuration** | **URL** for the integration, and **Secret key**. The secret key is forwarded along with the request as a header. |
     | Observes | These events can trigger webhooks. Select the ones you want to trigger the webhook: **Created**, **Updated**, or **Deleted** for most objects; **Updated** or **Deleted** for Cart; **Created** or **Deleted** for File; **Created**, **Updated**, **Fulfilled**, **Authorized**, **Paid/Captured**, **Cancelled**, or **Refunded** for Order; **Updated** for Payment Gateway. **Created**, **Updated**, or **Deleted** for customers. Only five events can be added. |
     | **Enabled** | Enable the integration.|
