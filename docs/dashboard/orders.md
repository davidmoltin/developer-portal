---
id: orders
title: Orders
sidebar_label: Orders
---

You can manage orders on the **Orders** page.

## Viewing Orders

1. Go to **Store > Orders**.

    All orders in the store are displayed.

## Viewing Details of a Specific Order

1. In the **All orders** page, do one of the following:

    - Click an order.
    - Click **Jump to order** and do the following:
        1. In the **Order ID** field, enter the order ID of the order that you want to view.
        1. Click **Search**.

1. (Optional) To quit the current order page and view details of another order:

    1. Click **Jump to another order** and enter the order ID.
    1. Click **Search**.

The **Order details** page with the following details of the order is displayed:

- Order ID
- Order items
- Order status
- Payment status
- Payment details
- Shipping status
- Details of items in the order
- Order total
- Order processing history
- Customer details
- Shipping address
- Billing address
- Custom fields, if any

### Anonymizing orders

You can anonymize orders so that the following information about the order are deleted from the system:

- **Customer Details**
- **Shipping Details**
- **Billing Details**

You cannot update or access these information about an order after anonymizing the order.

:::important
You can only anonymize paid and fulfilled orders.
:::

1. Do the following to anonymize an order:

    1. In the **All orders** page, select the order that you want to anonymize, and click the **Actions > Anonymize** option.
    1. Click the order and click the **Anonymize Order** button in the **View order page**.

You can also select multiple orders and click the **Actions > Anonymize** option to anonymize the selected orders.

## Updating Order Details

You cannot update the order details of an order after anonymizing the order.

### Refunding an order

You can refund an order directly through your payment gateway, or using Elastic Path Commerce Cloud API or Commerce Manager. For more information, see the [Refunds](../api/payments/paying-for-an-order/index.md#refunds) section.

On the **Order details** page, you can refund the order directly from Elastic Path Commerce Manager. You can refund partially or the full amount.

1. In the **View order > Order details** section, click **Refund Order**.

    The **Refund** dialog box with the refund method is displayed.
1. In the **Enter refund amount** field, enter the refund amount.
1. Select **Refund Order**.

    The **Order details** page is updated with the refund transaction.

Optionally, you can also click the **Mark as Refunded** button to change the payment status to refunded and manually process the refund using third-party payment gateways.

### Cancelling an order

You can cancel an unfulfilled order.

1. In the **View order > Order details** section, click **Cancel Order**.

    A message to confirm the delete action is displayed.
1. Click **Yes, cancel order**.
    The order cancellation message is displayed and the status of the order is updated to **Cancelled**.

Cancelling an order does not automatically refund a payment, you must refund the orders manually.

### Updating shipping address and custom fields

1. In the **View order**, navigate to the right pane and click **Shipping address > Update address**.
1. Update the address as required.
1. Click **save**.

Depending on the flow configuration for orders, the custom fields are displayed on the **Order details** page. You can enter the required information in these fields. For more information about adding custom fields, see the [Flows](flows.md) section.

## Filtering Orders

1. In the orders list page, click the **Filters** icon.
1. Enter any or all of the following details as required:

    - **Customer ID**: Enter the ID of the customer whose orders you want to see.
    - **Product ID**: Enter the ID of the product to retrieve all orders that has this product. These orders might contain other products too.
    - **Date range**: Enter a date range to view orders during the selected period.
    - **Order status**: Select the order status, such as **complete**, **incomplete**, **Cancelled**, or **processing** to view orders with the selected status.
    - **Payment status**: Select a payment status to view all orders with that payment status. You can select **paid**, **unpaid**, **authorized**, or **refunded**.
    - **Shipping status**: Select one of the shipping statuses **fulfilled** or **unfulfilled** to view orders with the selected shipping status.
    - **Billing postcode**: Enter a post code to view all orders related to view all orders to a specific billing address with this postcode.
    - **Shipping postcode**: Enter a post code to view all orders to a specific shipping address with this postcode.
    - **Customer email**: Enter the email address of a customer to view all orders associated with that customer.
    - **Customer name**: Enter the name of a customer to view all orders associated with that customer.
    - **Account ID**: Enter the ID of an account to view all orders associated with that account.
    - **Account member ID**: Enter ID of an account member to view all orders associated with that account member.

      For **Billing postcode**, **Customer email**, **Customer name**, **Payment status**, and **Shipping postcode**, you can set the search to match the exact search criteria. The orders that match the search criteria are displayed.

1. Click **Apply Filters**.

The selected filters and the results are displayed. You can remove a filter by clicking the **X** icon next to the filter, or you can reset the filter by clicking **Clear All**.

## Exporting Order Details

You can filter orders as required and export the result in a text file in a comma-separated value (CSV) format.

:::important
Only seller administrators can export order details.
:::

1. In the **All orders** page, click **Manage Export**.

    The **Manage Exports** window with previous export details, if any, is displayed.
1. In the **Manage Exports** window, click **Create export**.

    After completing the export, the status of the export is updated to **Complete**.
1. To download the report, click **Download**.

## Related topics

- [Orders](../concepts/orders.md)
- [Orders API](../api/carts-and-orders/orders/index.md)
