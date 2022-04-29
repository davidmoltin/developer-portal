---
id: shopkit-demo
title: Set up Shopkit
sidebar_label: Shopkit
---

You can use Shopkit anywhere you can insert custom HTML.

:::note
Shopkit only works with the Stripe payment gateway.
:::

## Prerequisites

Before you begin, ensure that you have the following accounts set up:

- [Elastic Path Commerce Cloud account](https://dashboard.elasticpath.com)
- [Stripe account](https://stripe.com/docs/dashboard)

## Set up the Shopkit instance

1. From your [Commerce Manager](https://dashboard.elasticpath.com), configure Stripe as the payment gateway.

2. Enable Shopkit on your website.

    Add the following code before the `</body>` tag and specify the values for the variables.

    ```html
    <script
      src="https://btn.moltin.com"
      data-moltin-client-id="..."
      data-moltin-stripe-publishable-key="..."
    ></script>
    ```

3. Add a **Cart** button by adding the following code:

    ```html
    <span class="moltin-cart-button"></span>
    ```

4. Add a **Buy** button by adding the following code:

    ```html
    <span class="moltin-buy-button" data-moltin-product-id="..."></span>
    ```

    You can change the Buy and Cart button appearance and behavior with additional attributes. You can also configure the Buy button to use a custom product outside of Elastic Path Commerce Cloud.

## Customize the Buy button

Set the button text and behavior.

### Button text

The default text for a button is `Add to Cart`. You can change the default text by providing a `data-moltin-text=""` attribute to the button.

```html
<span
  class="moltin-buy-button"
  data-moltin-product-id="..."
  data-moltin-text="Add to Basket"
></span>
```

### Open cart on click

The default behavior when clicking on a button is to silently add the items to the cart and update the cart button total.

You can automatically open the cart after an item has been added by providing a `data-moltin-open-cart="true"` attribute to the button.

```html
<span
  class="moltin-buy-button"
  data-moltin-product-id="..."
  data-moltin-open-cart="true"
></span>
```

### Custom item

You can add custom items to the cart that donʼt belong inside your Elastic Path Commerce Cloud catalog.

Omit the `data-moltin-product-id` attribute and add all the following attributes:

```html
<span
  class="moltin-buy-button"
  data-moltin-type="custom"
  data-moltin-product-name="T-Shirt"
  data-moltin-product-sku="unique-sku-here"
  data-moltin-product-price="1000"
></span>
```

## Customize the Cart button

Set the button text and choose whether to show the total number of cart items on the button.

### Button text

The default text for a cart button is `Cart`. You can change the default text by providing a `data-moltin-text=""` attribute to your button.

```html
<span class="moltin-cart-button" data-moltin-text="Basket"></span>
```

### Show total

By default, the cart button shows the number of items in the cart alongside the text defined previously. You can change this behavior by providing a `data-moltin-show-total="true"` attribute to your button.

```html
<span class="moltin-cart-button" data-moltin-show-total="true"></span>
```

## Override styles

By default, Shopkit ships with a blue theme. You can change the colors by overriding the CSS classes.

In the `<head>` tag, define a `<style>` tag with the following content:

```html
<style>
  .shopkit-primary {
    background: orange !important;
  }
  .shopkit-primary-text {
    color: orange !important;
  }
</style>
```

## Using with NPM (Node Package Manager)

If you want the code to exist within the context of your own project, install and use ShopKit with `npm` or `yarn` directly.
You can then expose the HTML tags within your project and within any front-end framework, such as React, Angular, or Vue.

With NPM: `npm i @moltin/shopkit --save`

With Yarn: `yarn add @moltin/shopkit --save`

In the `body` tag, include the `script` tag. Set the `src` parameter to the path for Shopkit through the `node_modules` directory. For example, the path might be `"/node_modules/@moltin/shopkit/dist/index.js"`.

For example, in index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="description"
      content="Example Moltin ShopKit with NPM"
    />
    <title>My App</title>
  </head>
  <body>
    <h1>My Fancy Website!</h1>
    <script
      src="./node_modules/@moltin/shopkit/dist/index.js"
      data-moltin-client-id="..."
      data-moltin-stripe-publishable-key="..."
    ></script>
  </body>
</html>
```

In your project, you can expose any of the HTML tags, such as the Sign In button:
`<span className="moltin-login-button" data-moltin-text="Sign In"></span>`

In a React application, you can expose HTML tags in any component.

For example:

```javascript
import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <span className="moltin-login-button" data-moltin-text="Sign In"></span>
    </div>
  );
}
export default App;
```
