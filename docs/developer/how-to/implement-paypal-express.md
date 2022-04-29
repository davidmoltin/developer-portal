---
id: implement-paypal-express
title: Implement PayPal Express
sidebar_label: Implement PayPal Express
---

Implement PayPal Express to authorize, capture and purchase payments.

## Prerequisites

If you want to follow along, you need the following items:

- An Elastic Path Commerce Cloud account and the Client ID and Client Secret of your store, available from [Commerce Manager](../../dashboard/index.md).
- An [access token](get-access-token.md).
- A PayPal Express account.
- Configured products and gateway using Commerce Manager or API.

## Step-by-step walkthrough

1. Enable PayPal Express through the PayPal website and Commerce Manager, and provide the API Key.
2. Set up the checkout workflow to use PayPal Express as a dedicated provider when making payment calls.


### Enable PayPal Express

To enable PayPal Express, you must do so from the PayPal dashboard and Commerce Manager.

1. Create an account or sign in to [PayPal Express Dashboard](https://developer.paypal.com/developer/accounts/).

1. On the **Sandbox** sidebar, click **Accounts**.

    You will see **Sandbox Accounts**.

1. Go to **Manage Accounts** of the default business account. A menu appears. Click **View and Edit**.

1. In the **Account Details** dialog box, click **API Credentials**.

1. On the **API Credentials** tab, find and copy the following values:
    - **Username**
    - **Password**
    - **Signature**

1. Go to Commerce Manager.

1. Go to **Settings** > **Payment Gateways** > **PayPal Express Checkout and Edit**.

1. Click **Enabled**.

1. Enter the **Login**, **Password** and **Signature** from PayPal.

1. Click **Save**.


### Set up the checkout flow

Use the API to create a checkout flow.

At minimum, you need the ability to:

1. Setup and confirm the `Purchase` workflow.
2. Setup and confirm the `Authorization` workflow.

#### `Purchase` workflow

This section walks you briefly through steps required to set up and confirm a purhcase.

You can use any URL safe value you want for your cart IDs. If a cart doesn’t already exist with that ID, it’ll be created the first time you add an item. If this request is successful, you’ll get a `201` response with all of the cart items that exist in the updated cart.

1. `POST` checkout using a customer object.

    :::note
    Ensure that you use a valid country code.

    The URL used in this call was `http://localhost/v2/carts/{{cartID}}/checkout`. For more information, see [Checkout](../../api/carts-and-orders/checkout.md).
    :::

    ```json
    {
     "data": {
        "customer": {
          "email": "john@yourcompany.com",
          "name": "John Doe"
        },
        "billing_address": {
          "first_name": "John",
          "last_name": "Doe",
          "company_name": "YourCompany",
          "line_1": "2nd Floor British India House",
          "line_2": "15 Carliol Square",
          "city": "Newcastle upon Tyne",
          "postcode": "NE1 6UF",
          "county": "Tyne & Wear",
          "country": "GB"
        },
        "shipping_address": {
          "first_name": "John",
          "last_name": "Doe",
          "company_name": "YourCompany",
          "phone_number": "(555) 555-1234",
          "line_1": "2nd Floor British India House",
          "line_2": "15 Carliol Square",
          "city": "Newcastle upon Tyne",
          "postcode": "NE1 6UF",
          "county": "Tyne & Wear",
          "country": "GB",
          "instructions": "Leave in porch"
          }
       }
    }
    ```

1. `POST` Setup Purchase from PayPal Express.

    :::note
    The URL used in this call was `http://localhost/v2/orders/{{orderID}}/payments`. For more information, see [PayPal Express Payments](../../api/payments/paying-for-an-order/paypal-express-payments.md).
    :::

    ```json
        {
	        "data" : {
		        "gateway" : "paypal_express",
		        "method" : "purchase",
		        "options" : {
	                "return_url": "http://localhost:7000/return",
	                "cancel_return_url": "http://localhost:7000/cancel",
                    "address_override": 0
		        }
	        }
        }
    ```

1. Get the response value. Copy and open in a browser.

    ```http
    ...
    "redirect_url": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-63F12300EY677963V"
    ...
    ```

1. Go to the PayPal redirect URL from Step 3 and sign in under the **Personal** account to make a payment.

    :::note
    If you sign in and are not redirected to the Personal account, go to the **Sandbox** sidebar, click **Manage Accounts** and then **Personal view and edit**.
    :::

1. Click **Continue** to confirm the payment.

    This returns a URL with a `PayerID`, such as `http://localhost:7000/return?token=EC-63F12300EY677963V&PayerID=6KQCR66SFS6B8`. Note the `PayerID` value.

1. `POST` Confirm the purhcase with the payment using the `PayerID` value from the previous step.

    :::note
    The URL used in this call was `http://localhost/v2/orders/{{orderID}}/transactions/{{transactionID}}/confirm`. For more information, see [Get a Transaction](../../api/payments/transactions/get-a-transaction.md).
    :::

    ```json
    {
	  "data" : {
		"gateway" : "paypal_express",
		"method" : "purchase",
		"payment" : "xxxxxxxxx"
	   }
    }
    ```

    The following is the response:

    ```json
    {
      "data": {
        "id": "xxxxxx-xxxx-xxxx-xxxx-xxxxxxx",
        "type": "transaction",
        "reference": "xxxxxxxxxxx",
        "gateway": "paypal_express",
        "amount": 10000,
        "currency": "USD",
        "transaction_type": "purchase",
        "status": "complete",
        "relationships": {
            "order": {
                "data": {
                    "type": "order",
                    "id": "xxxxxx-xxxx-xxxx-xxxx-xxxxxxx"
                }
            }
        },
        "meta": {
            "display_price": {
                "amount": 10000,
                "currency": "USD",
                "formatted": "$100.00"
            },
            "timestamps": {
                "created_at": "2020-05-12T23:28:11Z",
                "updated_at": "2020-05-12T23:29:11Z"
                }
            }
        }
    }
    ```

1. Go to Commerce Manager.

1. Go to **Orders**. Find the order. The status shows `Paid` and under the **Transaction** status is `Complete`.

#### `Authorization` flow

This section walks you briefly through steps required to set up and authorize a purhcase.

You can use any URL safe value you want for your cart IDs. If a cart doesn’t already exist with that ID, it’ll be created the first time you add an item. If this request is successful, you’ll get a `201` response with all of the cart items that exist in the updated cart.

1. `POST` checkout using a customer object.

    :::note
    Ensure that you use a valid country code.

    The URL used in this call was `http://localhost/v2/carts/{{cartID}}/checkout`. For more information, see [Checkout](../../api/carts-and-orders/checkout.md).
    :::

    ```json
    {
     "data": {
        "customer": {
          "email": "john@yourcompany.com",
          "name": "John Doe"
        },
        "billing_address": {
          "first_name": "John",
          "last_name": "Doe",
          "company_name": "YourCompany",
          "line_1": "2nd Floor British India House",
          "line_2": "15 Carliol Square",
          "city": "Newcastle upon Tyne",
          "postcode": "NE1 6UF",
          "county": "Tyne & Wear",
          "country": "GB"
        },
        "shipping_address": {
          "first_name": "John",
          "last_name": "Doe",
          "company_name": "YourCompany",
          "phone_number": "(555) 555-1234",
          "line_1": "2nd Floor British India House",
          "line_2": "15 Carliol Square",
          "city": "Newcastle upon Tyne",
          "postcode": "NE1 6UF",
          "county": "Tyne & Wear",
          "country": "GB",
          "instructions": "Leave in porch"
          }
       }
    }
    ```

1. `POST` Setup Authorization from PayPal Express.

    :::note
    The URL used in this call was `http://localhost/v2/orders/{{orderID}}/payments`. For more information, see [PayPal Express Payments](../../api/payments/paying-for-an-order/paypal-express-payments.md).
    :::

    ```json
        {
	        "data" : {
		        "gateway" : "paypal_express",
		        "method" : "authorize",
		        "options" : {
	                "return_url": "http://localhost:7000/return",
	                "cancel_return_url": "http://localhost:7000/cancel",
                    "address_override": 0
		        }
	        }
        }
    ```

1. Get the response value. Copy and open in a browser.

    ```http
    ...
    "redirect_url": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-63F12300EY677963V"
    ...
    ```

1. Go to the PayPal redirect URL from Step 3 and sign in under the **Personal** account to make a payment.

    :::note
    If you sign in and are not redirected to the Personal account, go to the **Sandbox** sidebar, click **Manage Accounts** and then **Personal view and edit**.
    :::

1. Go to **Manage Accounts** of the **Personal** account. A menu appears. Click **View and Edit**.

1. Click **Continue** to confirm the payment.

    This returns a URL with a `PayerID`, such as `http://localhost:7000/return?token=EC-63F12300EY677963V&PayerID=6KQCR66SFS6B8`. Note the `PayerID` value.

1. `POST` Confirm the purchase with the payment as the `PayerID` value.

    :::note
    The URL used in this call was `http://localhost/v2/orders/{{orderID}}/transactions/{{transactionID}}/confirm`. For more information, see [Get a Transaction](../../api/payments/transactions/get-a-transaction.md).
    :::

    ```json
    {
	  "data" : {
		"gateway" : "paypal_express",
		"method" : "authorize",
		"payment" : "xxxxxxxxx"
	   }
    }
    ```

1. Go to Commerce Manager.

1. Go to **Orders**. Find the order. The status shows `Authorized` and under the **Transaction** status is `Complete`.

1. Capture the authorization. This `POST` to PayPal to make the payment. The Dashboard payment becomes `paid`.

    ```http
    POST http://localhost/v2/orders/{{orderID}}/transactions/{{transactionID}}/capture
    ```

## Further reading

- [Payments](../../concepts/payments.md)
- [Checkout workflow](../../concepts/checkout-workflow.md)
- [Configure PayPal Express API](../../api/payments/gateways/configure-paypal-express.md)
- [Carts API](../../api/carts-and-orders/carts/index.md)
- [Gateways API](../../api/payments/gateways/index.md)
- [Payments API - Paying for an order](../../api/payments/paying-for-an-order/index.md)
