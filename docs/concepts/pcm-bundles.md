---
id: pcm-bundles
title: Bundles - Product Content Management
sidebar_label: PCM Bundles
---

With Product Content Management (PCM), you can create and manage bundles. A bundle is a purchasable product that is composed of a combination of two or more products that you want to sell together. For example, a consumer electronics and video game company, *Playtend Games* can sell a *Playtend* video game console as a bundle that includes the console, controller, and game. The price of the bundle might be different from the total of the individual products. A bundle must contain at least two items, either the same items or different items.

## Bundle types

Elastic Path Commerce Cloud supports two types of bundles, such as SKU-based bundles and SKU-less bundles. With bundles, a store can offer the customers a discounted price for a group of products when the customers buy those products together. For example, you can purchase the newest *Playtend* video game for the original price or buy the whole franchise series with a bundle-only sales price. Bundle sales price depends on the type of bundle.

### SKU-based bundle

A SKU-based bundle must have a SKU and price associated with the bundle. The price of the bundle is not dependent on the the total price of the products in the bundle. The bundle may contain items which might or might not be available for purchase individually. However, when purchased as a bundle, customers might get it for a discounted price.

With SKU-based bundles, you can create:

- Pure bundles: Products are available only as a bundle.
- Joint bundles: A bundled price offered for two or more products.
- Gift sets: A bundle created from a set of predefined items.

For SKU-based bundles, stores must set a price for bundle SKUs in the associated pricebooks.

For example, *Playtend Games* has a bundle that consists of a game console, the Playtend Invaders Game, and the Invaders Controller, and the bundle is available for purchase at $500. The individual price of the products in the bundle are $500 for the game console, $50 for the Playtend Invaders Game, and $75 for the Invaders Controller, which makes the total of the products $625 when bought individually. The price of the bundle is defined in the pricebooks associated with the bundle SKU and the sale price depends on the pricing configuration for the SKU.

You must not assign a draft product to a bundle. A bundle is invalid if a product in the bundle is in draft status. You may track the inventory of a bundle using the bundle SKU, which might be different from the individual product SKUs. The bundle is available only if all of the products included in the bundle are available.

The sale price or volume price of the products in the bundle are ignored. However, you can set a sale price for a SKU-based bundle when you configure the bundle SKU pricing. For more information, see the [Add Product Prices to a Price Book](../api/pcm/pricebooks/prices/create-product-prices.md) section. You can also set a sale price for an individual product in the bundle after adding the product to the bundle.

### SKU-less bundle

A SKU-less bundle price is based on the sum of each component product price, without sale or tier pricing. Ensure that you set price for each product within the bundle. If a component product does not have a price, the bundle price cannot be set and customers cannot purchase the bundle.

The sale price or volume price of the products in the bundle are ignored. If you want to apply a sale price to an item within the bundle, you must set a sale price for individual products in the pricebook setting for the bundle.

With SKU-less bundles, you can create:

- Joint bundle: A bundled price offered for two or more products.
- Leader bundle: A popular product is offered for a discount if you buy it with another less popular product.
- Mix and Match bundles: Bundle products are selected from a predetermined list of items items that you can bundle together.
- Upsell bundles: Discounted price for the current product when bought together with an accessory as a related item.
- Gift sets: A bundle created from a set of predefined items.

## Sale Pricing

You can set a sale price for an item within a bundle so that the product is sold at the sale price when sold as a part of the bundle. For example, if you have a bundle consisting of four items, you can apply a discounted price to an item within the bundle to get a bundle sales price.

| Product | Regular product price | Bundle sales price |
| :--- | :--- | :--- |
| Product A | $100 | $80 |
| Product B | $50 | $50 |
| Product C | $30 | $30 |
| Product D | $130 | $130 |
| **Total** | **$310** | **$290**|

:::note
If a price is set for the SKU on a SKU-Based bundle, bundle sale prices is ignored.
:::

## Components and Options

You can create multiple components within a bundle and add multiple options to each component in the bundle.

For example, *Playtend Games* can create a bundle where the total bundle price is calculated based on the options that the buyers choose. Shoppers can select a base console option, two games options, and a controller option as in the following example:

1. Select one of the following options in the gaming console component:

    - Gaming Console 512 MB Storage. Regular price is $500, selling for $475.
    - Gaming Console 1 GB Storage. Regular price is $750, selling for $725.

1. Select one of the following options in the game component:

    - Option 1:

        - Playtend Roboselect Game, selling for $50
        - Playtend Burndown Game, selling for $45
        - Playtend Invaders Game, selling for $50

    - Option2:

        - Playtend Doomsday Game, selling for $35
        - Playtend Happyday Game, selling for $35
        - Playtend Birthday Game, selling for $40

1. Select one of the following options in the controllers component:

    - Red Controller, selling for $40
    - Blue Controller, selling for $40
    - Green Controller, selling for $40
    - Invaders Controller, selling for $75

If the shopper chooses the following options for their bundle, the total is $885:

- Gaming Console 1 GB Storage ($725)
- Playtend Burndown Game ($45)
- Playtend Birthday Game ($40)
- Invaders Controller ($75)

<!--You can add an upper limit to set the maximum number of options that customer can select in a component. You can add a limit to set the minimum number of options customers must select from a component. With this feature, you can add multiple options in a list for customers to select and limit the number of options that customers can select.

For example, if you want to offer a promotions to your customer where you want to sell 4 books for a single price and customer can select four books from 10 books. When you create the bundle, you can add all ten products to the bundle and explicitly specify that the minimum selections required is 4, and the maximum selections allowed is 4.

You can also create bundle options within a bundle. For example, if you want to sell gaming bundle where three items, PS5, PS5 controller, and a PS+ subscription, are mandatory purchase and the fourth item can be one of the four 4 game options. The game options are Minecraft, Fifa2021, Battlefield, or Call of Duty.-->

## Related Resources

### Concept

- [PCM Products](../dashboard/pcm-products/pcm-products.md)

### APIs

- [Create a bundle](../api/pcm/products/bundles/create-a-bundle.md)
- [Update a bundle](../api/pcm/products/bundles/update-a-bundle.md)
- [Create product prices](../api/pcm/pricebooks/prices/create-product-prices.md)
