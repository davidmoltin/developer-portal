---
id: manage-carts
title: Manage carts
sidebar_label: Manage carts
---

A cart can be created through either a back-end or front-end action:

- Back-end actions:
    - Implicit action
    - Explicit action
- Front-end actions:
    - Cart created upon registration
    - Cart association upon sign in

## Back-end actions

An implicit action is when the shopper initiates the cart with their first add-to-cart action. When a shopper adds the first product to a cart, a cart is created with a unique reference ID and the product is added as a cart item. You need the reference ID field for any action related to the cart, such as updating, deleting or checking out a cart.

An explicit action is when a user calls the cart creation endpoint. For more information, see [Create a Custom Cart](../../api/carts-and-orders/carts/create-multi-cart.md).


## Front-end actions

When a shopper registers a profile, the registration process also creates a cart.

When a shopper signs in to their account, a cart association is created between the shopper’s account and the cart. For this action, the front-end calls the cart association API. For more information, see [Customer Cart Associations](../../api/carts-and-orders/carts/associations/index.md).

## Generating a cart reference ID

If youʼre using the JavaScript SDK, the cart reference ID is generated for you. Otherwise, you must add a cart reference generator to your functionality. The cart reference ID field is a mandatory field.

Regardless of the way the reference ID was created (through the SDK or a custom feature), the API remembers it, and uses the reference ID to create an order ID. Make sure you take note of this field, as you also need it.

## Handling a cart after payment

Each cart is discrete and separate. Any updates or changes to one cart have no effect on the other carts. A cart is persistent. It is available to the buyer or shopper even after they use the cart in a checkout.

You can manually delete the cart. This deletes the cart’s information which was persisted in the system. The cart name, description and customer association are deleted. As well, any cart that has not been accessed beyond the expiry threshold from the last use is automatically deleted.

Carts within a store have a default expiry threshold of seven days. The elapsed number of days until an idle cart is deemed expired and then purged. You can configure the default number of days for cart expiry.

## Further reading

- [Carts](../../concepts/carts.md)
- [Carts API](../../api/carts-and-orders/carts/index.md)
- [Checkout API](../../api/carts-and-orders/checkout.md)
- [Custom Cart Items API](../../api/carts-and-orders/carts/add-custom-item-to-cart.md)
- [Calculate totals](calculate-totals.md)
- [Create custom carts](create-custom-carts.md)
- [Implement Shopkit](https://www.moltin.com/commerce-solutions/shopkit) - an embeddable cart and checkout solution
