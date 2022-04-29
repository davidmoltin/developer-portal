---
id: reference-storefront
title: Reference Storefront
sidebar_label: Reference Storefront
---

:::note
The reference storefront only works with v2 catalog (legacy) and is not compatible with our latest Product Content Management and Catalog Composer features.
:::

The Elastic Path Commerce Cloud React PWA Reference Storefront is a flexible e-commerce website built on the Elastic Path Commerce Cloud REST API. The storefront uses the e-commerce capabilities provided by Elastic Path Commerce Cloud and gets data in a RESTful manner.

For more information, see [Store Features](./store_features.md).

## Overview

The storefront uses the [Elastic Path Commerce Cloud JavaScript SDK](https://github.com/moltin/js-sdk) for all Elastic Path Commerce Cloud API requests.

You can try out a [live instance of the Reference Storefront](https://epcc-reference.elasticpath.com/).

:::note
To check out, use the test card number `4242 4242 4242 4242`, any future expiry date, and any three-digit Card Verification Code (CVC).
:::

## Prerequisites

You need to set up some accounts, install development tools, and ensure that you have some knowledge of the technologies that are used in the storefront.

### Accounts

Before you begin, ensure that you have the following accounts set up:

- [Elastic Path Commerce Cloud account](https://dashboard.elasticpath.com/login)
- [Stripe account](https://stripe.com/docs/dashboard) - Stripe is used as the payment gateway. From your Commerce Cloud Dashboard, configure Stripe as the payment gateway.
- [Algolia account](https://www.algolia.com/) - Algolia may be used for search functionality to display search results, facets, and filtering.
- [Coveo account](https://www.coveo.com/en/products/platform) - Coveo may be used for search functionality to display search results, facets, and filtering.
    - [Installation, tutorials, core concepts, how-tos, etc.](https://docs.coveo.com/en/375/javascript-search-framework/use-the-coveo-javascript-search-framework)
    - [Reference for components, classes, interfaces, top-level functions, etc.](https://coveo.github.io/search-ui/globals.html)

### Development tools

A React PWA Reference Storefront development environment requires the following software:

- [Git](https://git-scm.com/downloads)
- [Node.js v14.x](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/)
- [Visual Studio Code](https://code.visualstudio.com/) with the following extensions:
    - [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
    - [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- **Windows Only:** [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/about)

### Knowledge requirements

To customize and extend the storefront, you need knowledge in the following technologies:

- [React](https://reactjs.org/)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [sass](https://sass-lang.com/)

### Push the product catalog to Algolia

To enable product search, share your product catalog with Algolia. Elastic Path offers a script that you can use to push the catalog from Elastic Path Commerce Cloud to Algolia.

1. Go to the [catalog syndication open source project](https://github.com/elasticpath/catalog-syndication).
2. Follow the instructions in the [README file](https://github.com/elasticpath/catalog-syndication/blob/master/README.md#start-running-the-utilities).

## Start building the storefront

:::note
 If you are running a Windows environment, launch the Windows Subsystem for Linux application and perform the following steps from the console window.
:::

```bash
# Clone the Git repository
git clone https://github.com/elasticpath/epcc-react-pwa-reference-storefront.git

# Go into the cloned directory
cd epcc-react-pwa-reference-storefront

# Install all the dependencies for all sub-project and create necessary symlinks in-between them
yarn

# Configure the ./src/config.ts file.
# For more information, see Configuration parameter descriptions.

# Start the app in development mode

# Run the main application:
yarn start

# Builds the app for production to the build folder:
yarn build
```

## Configuration parameter descriptions

Parameters that require configuration are in the `./src/config.ts` file.
You must set these values based on your own store:

|  Parameter| Importance| Type | Description |
|--|--|--|--|
|`clientId`| Required| String| The client ID of your store.|
|`stripeKey`| Required| String| Stripe publishable API key.|
|`categoryPageSize`| Required| String| Maximum number of products to display on a category page.|
|`maxCompareProducts`| Required| String| Maximum number of products to display in compare view.|
|`algoliaAppId`| Required| String| Algolia application identifier.|
|`algoliaApiKey`| Required| String| Algolia API key used to read records.|
|`algoliaPlacesAppId`| Required| String| Algolia Places application identifier used for address lookup.|
|`algoliaPlacesApiKey`| Required| String| Algolia Places API key used for address lookup.|
|`algoliaIndexName`| Required| String| Name of Algolia index used for search functions.|
|`compareKeys`| Required| Array| An array of all product attributes to display in compare view. For example, `config.ts`: `'bulb','bulb';'max_watt','wattage';'bulb_qty','bulb-qty';'material','material';'finish','finish'`|
|`endpointURL`| Default| String| Optional override location of API endpoint.|
|`supportedLocales`| Default| Object| Key-value pair of supported languages for storefront. An example is,  `config.ts`: `[{"key": "en","name": "english"},{"key": "fr","name": "french"}]`.|
|`defaultLanguage`| Default| String| Default language to display in storefront upon loading the page. For example. `"en"`|
|`defaultCurrency`| Default| String| Default currency to display in storefront upon loading the page. Fro example, `"USD"`|
