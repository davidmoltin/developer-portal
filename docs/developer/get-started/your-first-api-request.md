---
id: your-first-api-request
title: Your first API request
sidebar_label: Your first API request
---

Learn how to make your first API request. The lessons use the command line to make requests via cURL, but you could as easily use a [supported SDK](sdk.md).

We start with authentication and then walk you through a basic checkout process:

1. [Authenticate](#lesson-1-authenticate)
2. [Add items to a cart](#lesson-2-add-to-cart)
3. [Check out the cart](#lesson-3-check-out)
4. [Pay for the order](#lesson-4-pay-for-the-order)

## Lesson 1: Authenticate

Requests to Commerce Cloud require an `Authorization` header containing your `Bearer` token. There are two token types; `implicit` and `client_credentials`. See [Authentication](../../api/basics/authentication/index.md) for more details.

This guide uses the implicit grant type. This grant type can be thought of as read only and most commonly used client side.

### Get your API keys

Go to [Commerce Manager](https://dashboard.elasticpath.com/), sign in, select your project, and make a copy of your `client_id`.

### Get an access token

Using the `client_id`, we can now make our very first API request. Inside your Terminal or command-line equivalent, make the following request:

```sh
curl -X POST https://api.moltin.com/oauth/access_token \
     -d "client_id=XXXX" \
     -d "grant_type=implicit"
```

A successful request responds with something similar to:

```javascript
{
  "expires": 1537779121,
  "identifier": "implicit",
  "expires_in": 3600,
  "access_token": "0e82127a8d9c20abb3d6e48561cbfe81448956ab",
  "token_type": "Bearer"
}
```

Congratulations!

Now youʼll want to make a copy of your `access_token`. This is your implicit `Bearer` token that is required for future requests.

:::note
You need to re-authenticate when the `access_token` expires.
:::

### Make a request with your access token

Letʼs go ahead and request a new Cart. Weʼll use the unique reference `abc` for the Cart. Weʼll need this when requesting the items, adding items and checking out.

:::warning
 Replace `XXXX` in the following example with your `access_token` from the previous example.
:::

Inside your command-line, run the following cURL request:

```sh
curl https://api.moltin.com/v2/carts/abc \
     -H "Authorization: Bearer XXXX"
```

Youʼll receive a response similar to:

```javascript
{
  "data":{
    "id":"a054e10e-5fb7-4a76-a496-c59638d45939",
    "type":"cart",
    "links":{
      "self":"https://api.moltin.com/carts/a054e10e-5fb7-4a76-a496-c59638d45939"
    },
    "meta":{
      "display_price":{
        "with_tax":{
          "amount":0,
          "currency":"",
          "formatted":"0"
        },
        "without_tax":{
          "amount":0,
          "currency":"",
          "formatted":"0"
        }
      },
      "timestamps":{
        "created_at":"0001-01-01T00:00:00Z",
        "updated_at":"0001-01-01T00:00:00Z"
      }
    }
  }
}
```

Now that we have successfully authenticated and retrieved a Cart, in the next lesson we add a custom item to the Cart.

## Lesson 2: Add to Cart

Since we currently donʼt have any products within our inventory, weʼll go ahead and add a custom item to the Cart.

:::note
Custom cart items can be a great solution, as by definition a custom cart item doesn’t need to have a corresponding item in your catalog. For example, if you do not have a catalog in Commerce Cloud, you can use a custom cart item to refer to those products.

Custom items are also perfect when dealing with **shipping** charges.‌
:::

Letʼs go ahead and add a `custom_item` to the Cart. We are using the same cart reference `abc`.

:::warning
Replace `XXXX` in the following example with your `access_token` from the previous example.
:::

```sh
curl -X POST https://api.moltin.com/v2/carts/abc/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "custom_item",
        "name": "T-Shirt",
        "sku": "tshirt-001",
        "description": "A branded T-shirt",
        "quantity": 1,
        "price": {
          "amount": 10000
        }
      }
    }'
```

We can very easily add another `custom_item` to the Cart.

```sh
curl -X POST https://api.moltin.com/v2/carts/abc/items \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "custom_item",
        "name": "Jeans",
        "sku": "jeans-orange-001",
        "description": "branded jeans",
        "quantity": 1,
        "price": {
          "amount": 12500
        }
      }
    }'
```

Both of these requests respond with the current cart items, including useful data such as `display_price` for each item, which provides helpful formatted currencies for items in the cart.‌

Now we have items in the cart, in the next lesson we convert the Cart to an unpaid Order using the `/checkout` endpoint.

## Lesson 3: Check out

A cart with the reference `abc` that includes our T-Shirt as a `custom_item` is created. You can now convert the cart to an order using the [Checkout API](../../api/carts-and-orders/checkout.md).‌

### Check out a Cart

You can check out a Cart using an existing Customer ID or an object including the customer name and email. In the following example, weʼll provide a name and an email, as we have no customers yet.

:::note
You need to re-authenticate when the `access_token` expires.‌
:::

Along with the customer’s information, we must also provide the billing and shipping information. Using cURL we can send the following request:

:::warning
Replace `XXXX` in the following example with your `access_token` from the previous example.
:::

```sh
‌curl -X POST https://api.moltin.com/v2/carts/abc/checkout \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "customer": {
                "email": "jamie.barton@moltin.com",
                "name": "Jamie Barton"
            },
            "billing_address": {
                "first_name": "Jamie",
                "last_name": "Barton",
                "company_name": "Commerce Cloud",
                "line_1": "British India House",
                "postcode": "NE1 6UF",
                "county": "Tyne & Wear",
                "country": "UK"
            },
            "shipping_address": {
                "first_name": "Jamie",
                "last_name": "Barton",
                "line_1": "British India House",
                "postcode": "NE1 6UF",
                "county": "Tyne & Wear",
                "country": "UK"
            }
        }
     }'
```

When the request is complete, youʼll receive a `201 CREATED` response similar to the following example:

```sh
‌{
    "data": {
        "type": "order",
        "id": "a4a83c8b-c71d-4eec-8f0a-30c562bd5f3e",
        "status": "incomplete",
        "payment": "unpaid",
        "shipping": "unfulfilled",
        "customer": {
            "name": "Jamie Barton",
            "email": "jamie.barton@moltin.com"
        },
        "shipping_address": {
            "first_name": "Jamie",
            "last_name": "Barton",
            "phone_number": "",
            "company_name": "",
            "line_1": "British India House",
            "line_2": "",
            "city": "",
            "postcode": "NE1 6UF",
            "county": "Tyne & Wear",
            "country": "UK",
            "instructions": ""
        },
        "billing_address": {
            "first_name": "Jamie",
            "last_name": "Barton",
            "company_name": "Commerce Cloud",
            "line_1": "British India House",
            "line_2": "",
            "city": "",
            "postcode": "NE1 6UF",
            "county": "Tyne & Wear",
            "country": "UK"
        },
        "links": {},
        "meta": {
            "display_price": {
                "with_tax": {
                    "amount": 1998,
                    "currency": "USD",
                    "formatted": "$19.98"
                },
                "without_tax": {
                    "amount": 1998,
                    "currency": "USD",
                    "formatted": "$19.98"
                }
            },
            "timestamps": {
                "created_at": "2018-10-12T15:02:37Z",
                "updated_at": "2018-10-12T15:02:37Z"
            }
        },
        "relationships": {
            "items": {
                "data": [
                    {
                        "type": "item",
                        "id": "e2f7aa51-a96a-4d84-b0cb-f8ec35e94f2f"
                    }
                ]
            }
        }
    }
}
```

Congratulations. This is your first Order.‌

### Inspecting the Order

In the preceding Order object, we received a few values that make paying for an Order easy.

 | Property | Description |
 | :--- | :--- |
 | `id` | This is the ID for the newly created order. Youʼll need this to get the order again in the future or when paying for an order. |
 | `status` | This is either **`complete`** or **`incomplete`**. Useless when grouping orders in your own UI to your customers when theyʼre logged in. |
 | `payment` | An order is immediately unpaid, but after you move onto paying for an order, this can be: **`authorized`**, **`paid`** or **`refunded`**. |
 | `shipping` | This is either **`fulfilled`** or **`unfulfilled`**. |
 | `meta` | This object contains useful metadata for your order including a formatted [order total](../how-to/calculate-totals.md) for your cart, along with when the cart was created. |
 | `relationships` | This object contains the IDs for related objects, including the [Order Items](../../api/carts-and-orders/orders/order-items.md) and the [Customer](../../api/customers-and-accounts/customers/index.md#the-customer-object), if you provided one during Checkout. |

### Clean up the Cart

After a Cart is converted to an Order, the Cart exists for another 7 days, unless you touch it again. You can send a request to `DELETE` the Cart, if you no longer require the items inside.

:::warning
Replace `XXXX` in the following example with your `access_token.`
:::

```sh
curl -X DELETE https://api.moltin.com/v2/carts/abc \
     -H "Authorization: Bearer XXXX"
```

## Lesson 4: Pay for the order

Now that we have an unpaid order, we can move onto using the Payments API.

:::note
Before we can use the Payments API, we must first configure a payment gateway.‌
:::

### Payment Gateways

Right now Commerce Cloud provides native payment functionality for the following providers:‌

* ​[Stripe](../../api/payments/paying-for-an-order/stripe-payments.md)​
* ​[Braintree](../../api/payments/paying-for-an-order/braintree-payments.md)​

If your gateway isnʼt listed, you can implement a [Manual Gateway](../how-to/implement-manual-gateways.md).‌

### Configure your gateway

In this example we are using Stripe. If you want to follow along, login or sign up to Stripe and head to [Developers &gt; API keys](https://dashboard.stripe.com/account/apikeys) and make a copy of your **secret key**.‌

Next weʼll need to tell Commerce Cloud the Stripe secret key, but weʼll need a `client_credentials` token to do that.‌

Youʼll need your `client_id` and `client_secret` from [Commerce Manager](https://dashboard.elasticpath.com/) to do this.

```bash
curl -X POST https://api.moltin.com/oauth/access_token \
     -d "client_id=XXXX" \
     -d "client_secret=XXXX" \
     -d "grant_type=client_credentials"‌
```

After completed you receive your `access_token`.

```bash
‌{
  "expires": 1537779121,
  "identifier": "implicit",
  "expires_in": 3600,
  "access_token": "9z12127b8d9e20abb3d6e48561cbfe81448956pl",
  "token_type": "Bearer"
}
```

We can now configure the [Stripe gateway](../../api/payments/gateways/configure-stripe.md) by using the API. _You can also configure payment gateways via the Commerce Manager._

:::warning
You need to replace `XXXX` with your `access_token` and Stripe secret key in the following example.
:::

```sh
‌curl -X PUT https://api.moltin.com/v2/gateways/stripe \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "enabled": true,
         "login": "XXXX"
       }
     }'
```

### Make a payment

We now have everything we need to pay for our Order.

Payments are handled via token and sources. These are secure tokens that permit `authorize`/`capture` on your card. Stripe provide many tools to generate tokens, including [Stripe.js](https://stripe.com/docs/stripe-js/reference) and [Checkout](https://stripe.com/docs/payments/checkout) .‌

Stripe also provides a variety of tokens you can use during test/development environments and in the following example, we use the `tok_visa` to simulate a successful Visa payment.

:::warning
Replace `XXXX` with your access\_token and replace `:orderId` with your unpaid order ID we created in the [previous step](#lesson-3-check-out).
:::

```sh
‌curl -X POST https://api.moltin.com/v2/orders/:orderId/payments \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
          "gateway": "stripe",
          "method": "purchase",
          "payment": "tok_visa"
        }
      }'
```

**Congratulations!** You have now successfully paid for your unpaid order.
