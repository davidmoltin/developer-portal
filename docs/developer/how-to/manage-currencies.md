---
id: manage-currencies
title: Manage currencies
sidebar_label: Manage currencies
---

Use the currency settings to manage how the price formatting is localized. To set up a currency other than the default, use Commerce Manager or the API.

## Currency setting use cases

Use currency settings to achieve the following goals:

- Set up default currency
- Set up multiple currencies
- Delete or disable existing currencies
- Edit existing currencies

## Currency settings

Use the currency settings to manage how the price formatting is localized.

The formatted price can be found outside the regular price object for a product, in the meta object, which also includes timestamps, stock detail, etc.

Depending on localization, a common value for this field might be something like `${price}`, if the currency is to be USD. Canadian French however, uses the symbol as a suffix, so in that case it would be `{price}$`.

### Delete or disable currency

If a currency is no longer needed, you can delete it. Deleting destroys that currency object. The currency is automatically deleted from all products that have used it. If this was the only currency set up for the product, the product has no currency, and if used in a request, the default currency is used instead.

If a currency is no longer needed but you still want to retain it for archiving purposes, disable it. Disabled currencies still show in the currency header, but they can’t be actively used.

### Edit currency

Edit the currency through Commerce Manager or API. Editing the existing currency updates all products that have that currency set up.

### Set a default currency

The default currency is USD and it’s also enabled by default. You can set up any currency as default, just make sure the currency is enabled either through Commerce Manager or API. Default currency is used as a fallback currency in a request, if not currency header is provided.

## Display price vs. order price

When getting a list of orders, every order is displayed in the currency the order was taken in.


## Multiple currency - key points

- You can configure several currency types for your project.
- Carts don’t support multiple currencies. If you add products with mixed currencies, the products automatically fall back and use the default currency. Otherwise, `display_price` is `0`.

## Using currencies header with products

When a request comes into a gateway, the currency settings are attached to the request based on the `x-moltin-currency` header the user passes in. If the currency is not specified, the project’s default currency is used. The currency settings are responsible for adapting the price format to the currency in use.

For projects that support multiple currency, use the `x-moltin-currencies` header that contains the formatting detail for all currencies available to the project.

```json
[
    {
        "code": "GBP",
        "exchange_rate": 1,
        "format": "\u00A3{price}",
        "decimal_point": ".",
        "thousand_separator": ",",
        "decimal_places": 2
    },
    {
        "code": "USD",
        "exchange_rate": 0,
        "format": "${price}",
        "decimal_point": ".",
        "thousand_separator": ",",
        "decimal_places": 2
    }
]
```

This allows you to have a collection of all currencies, including ones that are disabled.

## How price is handled for orders

When the request gets to orders, the `currency-related` information from the header is put into the meta object of the response.

## Price formatting

Price formatting is handled by Commerce Cloud. After a cart converts into an order, the header provides all formatting details available for the currency specified in the order. If the currency doesn’t exist in the project, then currencies. `GET` returns sensible defaults, so the `display_price` values won’t be formatted, but the correct order currency is displayed.

## Further reading

- [Currencies](../../concepts/currencies.md)
- [Currencies API](../../api/advanced/currencies/index.md)
