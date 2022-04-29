---
id: index
title: Storefront quick start
sidebar_label: Storefront quick start
---

The goal of this quick start guide is to implement the core shopping journey, from browsing products to checking out, in a branded storefront. You start from the Elastic Path Commerce Cloud React PWA Reference Storefront (the storefront) and then add as much of your own branding assets, locales, and customized strings as you choose.

At the end of the process, you will have a branded storefront that supports:

* Searching and browsing products
* Adding products to a cart
* Editing and deleting carts
* Checking out a cart

The storefront is designed as an open source mobile Progressive Web Application (PWA) that has the capabilities for local browser storage page caching and persistent session management. For more details on progressive web applications (PWA), see [Progressive Web Apps](https://web.dev/progressive-web-apps/) and [create-react-app](https://github.com/facebook/create-react-app).

:::note
For more details on store development and more advanced store building, contact your Elastic Path sales representative, and refer to [Composable Commerce](https://www.elasticpath.com/composable-commerce).
:::

## Outline

To quickly create a branded storefront, perform the following actions:

1. [Set up your development environment](#set-up-your-development-environment).
1. [Get the source code](./set-up-the-storefront.md#get-the-source-code) from the [public git repo](https://github.com/elasticpath/epcc-react-pwa-reference-storefront).
1. [Preview your storefront](./set-up-the-storefront.md#view-the-storefront).
1. [Set the language and locale](./brand-the-storefront.md#set-the-language-and-locale).
1. [Set the default currency](./brand-the-storefront.md#set-the-default-currency).
1. [Add your branding assets](./brand-the-storefront.md#add-your-branding-assets).
1. [Add products](add-products-search.md). You need some products to support the basic shopping flows.
1. [Enable product search with Algolia](add-products-search.md).
1. [Build and deploy your storefront](build-and-deploy-the-storefront.md) (optional).

## Set up your development environment

To work with the storefront, you must do the following:

* Install development tools
* Set up accounts
* Ensure that you have some knowledge of the technologies used in the storefront.

### Development tools

The storefront development environment requires the following software:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/), the most recent long-term support version (currently 14.15.4).
* [Yarn](https://yarnpkg.com/en/)
* [Visual Studio Code](https://code.visualstudio.com/) with the following extensions:
    * [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
    * [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* **Windows Only:** [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/about)

### Accounts

Ensure that you have the following accounts set up:

* [Elastic Path Commerce Cloud account](https://dashboard.elasticpath.com/login)
* [Stripe account](https://stripe.com/docs/dashboard) - Stripe is used as the payment gateway. From Commerce Manager, configure Stripe as the payment gateway. For more information, see [Settings](../../../dashboard/settings/payment-gateway.md).
* [Algolia account](https://www.algolia.com/) - Algolia is used for search functionality to display search results, facets, and filtering.
* [Netlify account](https://www.netlify.com/) - Netlify is used to deploy and host the site.

### Knowledge requirements

To customize and extend the storefront, you need knowledge in the following technologies:

* [React](https://reactjs.org/)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [sass](https://sass-lang.com/)
