---
id: set-up-the-storefront
title: Set up the storefront locally
sidebar_label: Set up the storefront locally
---

Get the storefront source code, configure it for your environment, and launch the web service. When you are done, you can view the storefront locally in a supported web browser.

## Get the source code

Clone the repository and install dependencies.

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
```

## Configure the ./src/config.ts file

The parameters that require configuration are in the `./src/config.ts` file.

You must set these values based on your own store. They are prepopulated with the demonstration values when you download the store.

 |  Parameter| Importance|Type|Description|
 |--|--|--|--|
 |`clientId`| Required | String| The Client ID of your store.|
 |`stripeKey`| Required | String | Stripe publishable API key.|
 |`categoryPageSize`| Required | String| Maximum number of products to display on a category page.|
 |`maxCompareProducts`| Required | String| Maximum number of products to display in compare view.|
 |`algoliaAppId`| Required | String | Algolia application identifier.|
 |`algoliaApiKey`| Required | String | Algolia API key used to read records.|
 |`algoliaPlacesAppId`| Required | String | Algolia Places application identifier used for address lookup.|
 |`algoliaPlacesApiKey`| Required | String | Algolia Places API key used for address lookup.|
 |`algoliaIndexName`| Required | String | Name of Algolia index used for search functions.|
 |`compareKeys`| Required | Array | An array of all product attributes to display in compare view.|
 |`endpointURL`| Default | String | Optional override location of API endpoint.|


## Start the application

Run the following command to start the local version of the storefront.

```bash
yarn start
```

## View the storefront

To see the storefront running locally in your browser, go to [http://localhost:3000/](http://localhost:3000/).

When you make changes to your local storefront, you see the changes immediately in your browser.
