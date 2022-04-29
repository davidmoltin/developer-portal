---
id: build-and-deploy-the-storefront
title: Build and deploy the storefront
sidebar_label: Build and deploy the storefront
---

If you want to make the storefront available from a remote location instead of your local environment, build and deploy the storefront. For this quick start, we recommend setting up Netlify as well.

## Build your storefront

To build your storefront, enter the following at the command-line:

```bash
yarn build
```

This builds your storefront for production and outputs it in the `/build` folder.

## Deploy your storefront

After you finish building your store, deploy to a production environment Content Delivery Network (CDN) or Netlify.

## Set up Netlify for continuous delivery and deployment

The `epcc-react-pwa-reference-storefront` project includes all necessary assets to build and deploy on Netlify.

* `epcc-react-pwa-reference-storefront/netlifybuild.sh`: Shell script triggered by Netlify upon invoking `yarn netlifybuild` to build the storefront, and copy the built assets to the Netlify build directory.

* `epcc-react-pwa-reference-storefront/_redirects`: The redirect file for Netlify to configure rewrite/redirect rules for the storefront.

For more information about Netlify, see the [Netlify documentation](https://docs.netlify.com/).

For more information about setting up your store on AWS, see [Deploy to an Amazon S3 Bucket](../deploy-S3.md).
