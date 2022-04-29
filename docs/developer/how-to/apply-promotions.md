---
id: apply-promotions
title: Create and apply promotions
sidebar_label: Apply promotions
---

With promotions, you can provide different types of discounts to all your customers or specific customers. You can apply promotions automatically to all purchases, or you can create promotion codes that customers must enter to receive a discount. Each promotion can have up to 1000 codes, which can be distributed to customers.

:::note
When a promotion expires, the promotion codes attached to the promotion automatically become invalid. However, when you re-enable the expired promotion, the promotion codes attached to the promotion are deleted.
:::

## Applying Promotions

Promotions appear as cart items in the cart with negative values. The summation of cart items subtracts any promotion amount from the sub-total.

### Before you begin

- Ensure that you have an [access token](get-access-token.md).

### Procedure

Do the following to apply a promotion at a cart level:

1. Create a promotion using one of the following:

    - [Commerce Manager](../../dashboard/promotions/promotions.md)
    - [API](../../api/promotions/index.md)

1. If required, create a promotion code for the promotion using one of the following:

    - [Commerce Manager](../../dashboard/promotions/promotions.md#adding-codes)
    - [API](../../api/promotions/create-promotion-codes.md)

1. [Add items to the cart](../../api/carts-and-orders/carts/add-product-to-cart.md).
1. Apply promotion using code if the promotion is not automatically applied.
1. [Checkout the cart](../../api/carts-and-orders/checkout.md) that is updated with the promotion.

The promotion codes work with the `cart` endpoint. When a customer enters a promotion code, you must call API to apply the promotion that the code is associated with.

## Example: Creating Percentage Discount using API

Use user-friendly code formatting when you want customers to use the same code for a limited period. For example, for a holiday season, you can use the code `SAVE10%`.

Use unique codes when you want to control the number of products included in the promotion.

1. Create the following promotion:

    ```sh
      curl -X POST https://api.moltin.com/v2/promotions \
         -H "Authorization: Bearer XXXX" \
         -d $'{
          "data": {
            "type": "promotion",
            "id": "c12ddfe7-3478-4822-b339-4a68ee9926a6",
            "name": "Coolpromo",
            "description": "Promotion",
            "enabled": true,
            "promotion_type": "percent_discount",
            "schema": {
              "currencies": [
            {
                "currency": "USD",
                "percentage": 10
                },
            {
                "currency": "GBP",
                "percentage": 10
                }
              ]
            },
            "start": "2017-01-13T00:00:00Z",
            "end": "2018-01-13T00:00:00Z",
            "created_at": "2018-05-29T20:02:57.238736345Z",
            "updated_at": "2019-05-29T20:02:57.238736906Z"
          }
      }'
    ```

1. Create promotion code for the promotion:

    ```sh
    curl -X POST https://api.moltin.com/v2/promotions/:id/codes \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
          "data":{
            "type":"promotion_codes",
            "codes": [
              {"code":"SAVE10%"},
              {"code":"CoolPromo"}
            ]
          }
        }'
     ```

1. Add items to the cart:

    ```sh
    curl -X POST https://api.moltin.com/v2/carts/:reference/items \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
          "data": {
              "id": "df32387b-6ce6-4802-9b90-1126a5c5a54f",
              "type": "cart_item",
              "quantity": 1
            }
          }'
    ```

1. Apply the promotion:

    ```sh
    curl -X POST https://api.moltin.com/v2/carts/:cartId/items \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
           "data": {
             "type": "promotion_item",
             "code": "SAVE10%"
           }
         }'
    ```

1. Checkout with updated cart:

    ```sh
    curl -X POST https://api.moltin.com/v2/carts/:reference/checkout \
         -H "Authorization: Bearer XXXX" \
         -H "Content-Type: application/json" \
         -d $'{
           "data": {
             "customer": {
               "email": "john@moltin.com",
               "name": "John Doe"
             },
             "billing_address": {
               "first_name": "John",
               "last_name": "Doe",
               "company_name": "Moltin",
               "line_1": "2nd Floor British India House",
               "line_2": "15 Carliol Square",
               "city": "Newcastle upon Tyne",
               "postcode": "NE1 6UF",
               "county": "Tyne & Wear",
               "country": "UK"
             },
             "shipping_address": {
               "first_name": "John",
               "last_name": "Doe",
               "company_name": "Moltin",
               "phone_number": "(555) 555-1234",
               "line_1": "2nd Floor British India House",
               "line_2": "15 Carliol Square",
               "city": "Newcastle upon Tyne",
               "postcode": "NE1 6UF",
               "county": "Tyne & Wear",
               "country": "UK",
               "instructions": "Leave in porch"
             }
           }
        }'
    ```

## Next steps

- [Pay for the order](../../api/payments/paying-for-an-order/index.md)

## Related Resources

### Concept

- [Promotions Overview](../../concepts/promotions.md)

### API

- [Promotions API](../../api/promotions/index.md)

### Commerce Manager

- [Promotions](../../dashboard/promotions/promotions.md)
