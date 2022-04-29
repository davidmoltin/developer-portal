---
id: index
title: API Reference Guide
sidebar_label: Introduction
---

[Elastic Path Commerce Cloud (formerly Moltin)](https://elasticpath.com) is a [headless eCommerce](https://elasticpath.com/headless-commerce) service. You can use the Commerce Cloud API to build unique and flexible shopping experiences for your customers.

:::success
If you want to evaluate Commerce Cloud, please [contact us](https://elasticpath.com/contact-us) to speak with an Elastic Path representative.
:::

This API Reference Guide describes the resources, endpoints, methods, requests, and responses that are available to you in the Commerce Cloud API. For an overview of the top-level endpoints, see the [API Endpoints Overview](api-overview.md) section.

:::warning
For backward compatibility, code samples and URLs continue to use `moltin`.
:::

## Introduction to API

The Commerce Cloud API follows a microservice architecture that enables you to plug commerce into any part of your application. The API is built on the [JSON API](http://jsonapi.org/) specification, follows predictable [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) URLs, and supports [cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing). The two-track [authentication layer](./basics/authentication/index.md) enables destructive and non-destructive actions across projects.

## API Base URLs

Elastic Path Commerce Cloud supports multiple geographical regions. For each customer, Elastic Path Commerce Cloud accounts and stores are created in a specific region. When you interact with and use the Elastic Path Commerce Cloud API, ensure that you use the API end point for the region your store is in. The base URL is displayed in the **Your API keys**>**API base URL** field in the **Commerce Cloud Commerce Manager** home page.

In the documentation, we use the variable name `<your_elasticpath_api_base_url>` in the sample requests. When making API requests, customers substitute the hostname for the variable.

## Authentication

All requests must include an authentication token in the header. Generate the token by using your API keys.

- To find your API keys, see the **Your API Keys** section in the **Commerce Cloud Commerce Manager** home page.
- To use the API to generate a token from your API keys, see the [Authentication](basics/authentication/index.md) or [Your first API request](../developer/get-started/your-first-api-request.md#lesson-1-authenticate) sections.
- To learn more about API keys, see the [Security](../concepts/security.md#api-authentication-credentials) section.

## Postman

If you’re looking to test or develop with the Commerce Cloud API, we recommend using the [Elastic Path Postman collection](../developer/how-to/test-with-postman-collection.md). The collection includes all endpoints.

## Software Development Kits

Elastic Path officially maintains the following Software Development Kits (SDK) for Commerce Cloud. Other community-driven SDKs are available within the [Moltin GitHub](https://github.com/moltin) organization.

### JavaScript SDK

If you are beginning a new project, we recommend that you use the JavaScript SDK for Commerce Cloud, which is under active maintenance. Within this guide, the supported endpoints include sample **JavaScript SDK** requests. The Commerce Cloud Reference Store is implemented using this SDK.

Get the [JavaScript SDK](https://github.com/moltin/js-sdk).

### Node.js SDK

The Node.js® SDK (formerly called Moltin Request) is supported for existing Commerce Cloud shopper experiences. The Node.js SDK is not being expanded or maintained, therefore the library does not include recent API endpoints. Within this guide, the supported endpoints include sample **Node.js** requests.

Get the [Node.js SDK](https://github.com/moltin/moltin-request).

## Legacy Services

The **Legacy** label indicates that an enhanced replacement service is now available. The API resources and endpoints marked as legacy are still supported for existing stores, that is, there are no breaking changes. However, for new stores, you should use the replacement service to take advantage of the enhancements. For a summary of legacy resources, see [Legacy API resources](api-overview.md#legacy-apis).

## Elastic Path Documentation & API Help

<!-- This title is an SEO term from our SEO agency, which is why it contains the ampersand. Do not change. -->

You can find the supporting documentation and help in the following resources:

- [Commerce Cloud documentation](https://documentation.elasticpath.com) - The home page for all Elastic Path documentation and help.
- [Key Concepts](../concepts/index.md) - Learn about commerce topics and understand how Elastic Path implements the concepts.
- [Your first API request](../developer/get-started/your-first-api-request.md) - Learn how to make your first API call.
- [How-to guides](../developer/how-to/index.md) - Learn how to achieve your goals with step-by-step instructions.

### Education resources

You can find a self-serve Commerce Cloud API course and other learning opportunities at [Elastic Path Education](https://education.elasticpath.com). Sign in, select the Content Library, and search for `Commerce Cloud API`.

### Storefront examples

The [Reference Experience stores](../developer/get-started/demos-and-examples.md) page contains a list of example shopping experiences and integrations. Demo storefronts can be viewed from this page or from the main menu of this website.
