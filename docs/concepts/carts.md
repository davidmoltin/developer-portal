---
id: carts
title: Carts
sidebar_label: Carts
---

A cart contains a list of the products that a customer adds to the cart while browsing your catalog. In the context of a cart, a selected product is called a cart item.

A cart item identifies the product, the product price, the quantity selected, and the total price for the quantity selected. The cart displays a running total of the cost for the selected products plus the calculated tax.

After a customer checks out, the cart is converted to an order and you can manually delete the cart. If you donʼt delete the cart, it is purged automatically after seven days.

The following diagram shows a typical cart workflow:

![Shows a cart workflow, starting from adding the first item to a cart, through cart creation and checkout.](assets/cart-workflow.png)

## Multiple Carts

Buyers often make purchases based on jobs that they need to perform or outcomes they need to achieve and therefore require more than one shopping cart. For example, a corporate buyer places orders for multiple locations. Each location has a different frequency of ordering and require different products. The buyer can create one cart per location, fill the carts, and then check out the carts quickly. Similarly, shoppers can also create multiple carts for the ease of managing various shopping experiences, such as birthdays or holidays.

Each cart is discrete and separate. Any updates or changes to one cart has no effect on the other carts. A cart persists, that is, it stays with the buyer or shopper even after they use the cart in a checkout. Carts remain available after a checkout.

## Related concepts

- [Taxes](taxes.md)
- [Promotions](promotions.md)

## APIs

- [Carts API](../api/carts-and-orders/carts/index.md)
- [Cart items API](../api/carts-and-orders/carts/cart-items/index.md)
- [Multiple Carts API](../api/carts-and-orders/carts/create-multi-cart.md)

## How-to guides

- [Manage carts](../developer/how-to/manage-carts.md)
- [Calculate cart and order totals](../developer/how-to/calculate-totals.md)
- [Extend cart and order resources](../developer/how-to/extend-cart-and-order-resources.md)
