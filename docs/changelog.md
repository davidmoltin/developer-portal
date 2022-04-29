---
id: changelog
title: Elastic Path Commerce Cloud Changelog
sidebar_label: Changelog
---
[Changelog](changelog.md)

The changelog is a list of backwards-compatible updates and fixes in the API and Commerce Manager. These updates are rolled out automatically, but we would still like to keep you informed about the most current state of our API.

:::note
For product updates, use this changelog. Elastic Path does not publish separate release notes for Elastic Commerce Cloud.
:::

## April 21, 2022

* **`MAJOR`** Commerce Manager: You can use store analytics, including total orders made and total value of orders, over a period of time that you select.
* **`MAJOR`** Commerce Manager: You can search on partial **SKU** in **Products**, see [Searching Products by SKU](dashboard/pcm-products/pcm-products.md#searching-products-by-sku).
* **`MAJOR`** Commerce Manager: You can create product descriptions with rich text formatting.
* **`MINOR`** Commerce Manager: You can sort nodes by dragging and dropping them.

## March 31, 2022

* **`MINOR`** Removed the store owner role from Commerce Manager. A store owner was a permanent seller admin in each store. You can now remove or change the role of former store owners. Functional and feature access for former store owners have not changed.

## March 22, 2022

* **`MINOR`** Removed the **Store ID** field from the Commerce Manager home page. The **Store UUID** field has been renamed to **Store ID**. Use this value to open a support ticket.

## March 7, 2022

* **`MINOR`** Added `purchase` as an option to support Manual Payments. For more information, see [Manual Payments](api/payments/paying-for-an-order/manual-payments.md).

## March 4, 2022

* **`MINOR`** **Files Service Refactor**:
    * Improved performance of the files service.
    * Added supported and supported file types, see [Create a File](api/advanced/files/create-a-file.md)

* **`MAJOR`** **Hierarchy Node Sorting**: You can now specify sort order for child nodes within a hierarchy. The default sort order is in the descending order of the `updated_at` time, see [Get all Nodes in the Latest Release](api/pcm/catalogs/releases/nodes/get-all-nodes-in-a-release.md).


## March 3, 2022

* **`MAJOR`** Commerce Manager: You can now use [Product Bundles](dashboard/pcm-products/bundle-configuration.md) in Commerce Manager.
* **`MAJOR`** Commerce Manager: You can now cancel an unfulfilled order in Commerce Manager. For more information, see the [Cancelling an Order](dashboard/orders.md#cancelling-an-order) section.

## March 1, 2022

* **`MINOR`** Added `cancelled` state to the order status. You can now update the status of an unfulfilled order to `cancelled`. For more information, see the [Cancel an Order by ID](api/carts-and-orders/orders/update-an-order.md) section.

## February 22, 2022

* **`Bug Fix`** Commerce Manager: Fixed a bug where users got an authentication loop after a failed authentication.
* **`MINOR`** Commerce Manager: Users can now filter the accounts list by account name in Account Management.
* **`Bug Fix`** Commerce Manager: Fixed a bug where an image uploader breaks when user attempts to type in a URL.
* **`MINOR`** Commerce Manager: Added cart expiration in settings.

## February 17, 2022

* **`MINOR`** Account Management APIs are no longer in beta. You can now remove `account-management` and `account-authentication-settings` from the [Beta Header](./api/basics/api-contract.md#beta-apis) and use the APIs in production environment. For more information, see [Account Management](./concepts/account_management.md).

## February 10, 2022

* **`MAJOR`** Commerce Manager: You can now [view promotion history](dashboard/promotions/promotions.md#viewing-promotion-history) in Commerce Manager.

## February 7, 2022

* **`MINOR`** Commerce Manager: You can now select usage limit type and maximum uses when bulk generating promotion codes.
* **`MINOR`** Commerce Manager: You can now use pagination to navigate through store list when you have more than 50 stores.
* **`MINOR`** Commerce Manager: Improved authentication error message for invalid credentials.
* **`MINOR`** Commerce Manager: Updated the warning message that appears when you try to update an attribute after deleting the template associated with the attribute.
* **`MINOR`** Commerce Manager: You can now paginate through inventory management log.

## January 18, 2022

* **`MINOR`** You can now view and replicate previous orders.
* **`MINOR`** Global table updates for expanded and compact row views.

## December 13, 2021

* **`MINOR`**  You can now use [`includes`](api/basics/includes.md) to view main images and files of products in catalog view.

## December 2, 2021

* **`MAJOR`** Added support for [Stripe Connect](api/payments/gateways/configure-stripe-connect.md) and [Stripe Intent](api/payments/gateways/configure-stripe-payment-intents.md). You can also use Stripe Connect in Commerce Manager.

## December 1, 2021

* **`MAJOR`** You can now create variations and options in Commerce Manger and build child products using them. For more information, see the [Variations](dashboard/configuration/variations.md) section.

## November 15, 2021

* **`MAJOR`** Added the new product bundles feature that supports creating [SKU-based](concepts/pcm-bundles.md#sku-based-bundle) and [SKU-less](concepts/pcm-bundles.md#sku-less-bundle) bundles. For more information, see the [Product Content Management Bundles](concepts/pcm-bundles.md) and [API](api/pcm/products/bundles/create-a-bundle.md) sections.
* **`MINOR`** Added [bundle sales pricing for SKU-less bundles](concepts/pcm-bundles.md#sale-pricing), so that users can set sale prices on individual items within the bundle.

## Nov 12, 2021

* **`MINOR`** You can now extend the following entities with [core flows](api/advanced/custom-data/index.md#extend-a-resource).
    * [`authentication-realms`](api/single-sign-on/authentication-realms/index.md)
    * [`oidc-profiles`](api/single-sign-on/oidc-profiles/index.md)
    * [`password-profiles`](api/single-sign-on/password-profiles/index.md)
    * [`user-authentication-info`](api/single-sign-on/user-authentication-info/index.md)
    * [`user-authentication-oidc-profile-info`](api/single-sign-on/user-authentication-oidc-profile-info/index.md)
    * [`user-authentication-password-profile-info`](api/single-sign-on/user-authentication-password-profiles/index.md)

## Nov 10, 2021

* **`MINOR`** Added the ability to duplicate a price book. Any prices and products defined under the primary price book are replicated into the new price book. For more information, see [Price Books](concepts/price-books.md).

## Nov 3, 2021

* **`MINOR`** The [list of observable events](api/advanced/integrations/observable-events.md) has been extended to include account, account member, account membership, and user authentication info entities.

## Nov 1, 2021

* **`MAJOR`** Product Variations and Child Product Builder feature is now available. Variations allow you to generate child products on a product with a number of options such as size, color and more. The features include:

    * Stock tracked independently.
    * Price inherited by a base product if one is not supplied.
    * Child products can be sold immediately after being created.
    * Details on product variation data and variation matrix in the base product response.
    * Manual changes to child products are retained if the child products are rebuilt.

## Oct 27, 2021

* **`MAJOR`** You can now view the history of a promotion using the API endpoint [`history`](api/promotions/get-promotion-history.md).

## Oct 25, 2021

* **`MINOR`** Increased the validity period of the invite link, which is used to invite a non-registered user to a store, from 12 hours to 36 hours.

## Oct 19, 2021

* **`MINOR`** You can now extend [`accounts`](api/customers-and-accounts/account-management/accounts/index.md) and [`account-memberships`](api/customers-and-accounts/account-management/account-memberships/index.md) with [core flows](api/advanced/custom-data/index.md#extend-a-resource).

## Oct 18, 2021

* **`MINOR`** The default [rate limiter](api/basics/rate-limits.md) for all stores in Elastic Path Commerce Cloud was set to 100 req/sec. However, we now have different rate limiters for different type of stores. The rate limiter for developments stores is 25 req/sec, which is less than the default rate limiter for production stores.

## Sept 29, 2021

* **`MINOR`** Improved the consistency of authentication flow error responses. For more information about the error message, see the [errors](api/basics/errors.md#forbidden) section.

## September 23, 2021

* **`MINOR`** Added filtering for [unassigned account members](api/customers-and-accounts/account-management/account-memberships/get-all-unassigned-account-members.md).

## September 14, 2021

* **`MINOR`** Fixed a bug where [account members](api/customers-and-accounts/account-management/account-members/index.md) were erroneously created for other [authentication realms](api/single-sign-on/authentication-realms/index.md) in the store instead of only for the authentication realm linked from [account authentication settings realm](api/advanced/settings/account-authentication-settings/index.md). We also removed the erroneously created records.
* **`MINOR`** [Account members](api/customers-and-accounts/account-management/account-members/index.md) now update details when the corresponding [user authentication info](api/single-sign-on/user-authentication-info/index.md) changes.

## September 13, 2021

* **`MINOR`** Added support to count the number of times item percentage promotion is used for the items in a cart.

## September 9, 2021

* **`MINOR`** Added a [rate limiter](api/basics/rate-limits.md) that limits the number of requests received by each store within any given second. This ensures consistent performance and stability of Elastic Path Commerce Cloud as well as a quality experience for all of our customers.

## September 2, 2021

* **`MINOR`** Filtering improvements for [customers](api/customers-and-accounts/customers/index.md) and [account members](api/customers-and-accounts/account-management/account-members/index.md).

## September 1, 2021

* **`MAJOR`** **Jump to another Order** feature is now available on the **Order details** page in Elastic Path Commerce Cloud Commerce Manager.
* **`MAJOR`** Added support for managing accounts in Commerce Manager. For more information, see the [Accounts](dashboard/accounts.md) section.

## August 25, 2021

* **`MINOR`** Added [filtering](api/customers-and-accounts/account-management/accounts/index.md#filtering) for accounts and new API to list [unassigned account members](api/customers-and-accounts/account-management/account-memberships/get-all-unassigned-account-members.md).

## August 19, 2021

* **`MINOR`** Bug fixes.

## August 11, 2021

* **`MAJOR`** Added [password profile](api/single-sign-on/password-profiles/index.md) support that enables users to log in using a username and password instead of OpenID Connect profile. You can now create [user authentication info](api/single-sign-on/user-authentication-info/index.md) to be associated with your [Password Profiles](api/single-sign-on/user-authentication-password-profiles/index.md) and [OpenID Connect Profiles](api/single-sign-on/user-authentication-oidc-profile-info/index.md). You can use these APIs for [account member authentication](api/customers-and-accounts/account-management/account-members/account-member-authentication.md#using-username-and-password). For more informations, see the [Adding Accounts and Account Members](developer/how-to/add-account-and-member.md) section.

## July 28, 2021

* **`MAJOR`** Commerce Manager: Product Content Management (PCM) sale pricing is now available on the **PCM Product - Pricing** page.

* **`MAJOR`** Commerce Manager: Attributes and templates is now available on the **PCM Configurations - Attributes/Templates** page.

## July 19, 2021

* **`MINOR`** Added support for [account addresses](api/customers-and-accounts/addresses/index.md).


## July 12, 2021

* **`MINOR`** Added custom page limits up to 100 on PCM catalog and price books.

## July 9, 2021

* **`MAJOR`** Added extension templates to PCM products to attach custom fields. For more information, see the [Add custom data to PCM products](https://documentation.elasticpath.com/commerce-cloud/docs/developer/how-to/add-custom-data-pcm-products.html) section.

## July 7, 2021

* **`MAJOR`** Added locale support to PCM Products and Hierarchies. For more information, see [PCM Products](https://documentation.elasticpath.com/commerce-cloud/docs/concepts/products-pcm.html) and [PCM Hierarchies](https://documentation.elasticpath.com/commerce-cloud/docs/concepts/hierarchies.html).

## July 6, 2021

* **`MINOR`** Bug fixes.

## June 24, 2021

* **`MAJOR`** Added the capability to revert unwanted changes in a catalog release.

## June 21, 2021

* **`MAJOR`** Added volume pricing feature with price books, a store can offer different pricing for minimum quantities of items that customers purchase. For more information, see the [Price Books - Volume Pricing](https://documentation.elasticpath.com/commerce-cloud/docs/concepts/price-books.html) section.

## June 16, 2021

* **`MAJOR`** Added an integration to deliver events directly into the configured AWS SQS queue. For more information, see the [Integrations - AWS-SQS](api/advanced/integrations/index.md#message-queuing-services) section.

## June 14, 2021

* **`MAJOR`** [GraphQL Server](https://github.com/elasticpath/elasticpath-graphql-server) is now available to enable building shopping experiences with Elastic Path Commerce Cloud and GraphQL. For more information, see the [Using GraphQL Server](developer/how-to/graphql.md) section.

## June 8, 2021

* **`MINOR`** Improved the reliability of catalog publishing.

* **`MAJOR`** Added attribute templates, attributes and custom field types to Product Content Management (PCM).

## June 1, 2021

* **`MINOR`** Added support for a new field, `duplicate_email_policy`, to enable the capability to conditionally treat e-mail address as unique in Single Sign On.

## May 31, 2021

* **`MINOR`** [Accounts](api/customers-and-accounts/account-management/accounts/index.md) and [Account Members](api/customers-and-accounts/account-management/account-members/index.md) can now be [included](https://documentation.elasticpath.com/commerce-cloud/docs/api/basics/includes.html) when retrieving an order.

## May 26, 2021

* **`Commerce Manager`** Product Content Management (PCM) services are now available in Commerce Manager. Manage your product information, hierarchies, catalogs and price books. For more information, see [Product Content Management](https://documentation.elasticpath.com/commerce-cloud/docs/concepts/product-content-management.html).

## May 10, 2021

* **`MAJOR`** Introduced the Product Content Management (PCM) services. PCM manages product information, hierarchies, and catalogs. Product Content Management can be used as the single source of truth for product data across your organization. For more information, see [Product Content Management](concepts/product-content-management.md).

* **`MAJOR`** Introduced the Price Book Service. For more information, see [PCM Price Books](concepts/price-books.md).

* **`MINOR`** Updated the Files API to support referencing images by a URL. For more information, see [Files](api/advanced/files/index.md).

## May 4, 2021

* **`MAJOR`** Seller users can now be assigned roles to grant distinct functional and feature access to your Elastic Path Commerce Cloud store. For more information, see [Roles](./concepts/roles.md).

## April 28, 2021

* **`MAJOR`** Account Management [Beta APIs](./api/basics/api-contract.md#beta-apis) are now available. For more information, see [Account Management](./concepts/account_management.md).

## March 25, 2021

* **`MINOR`**  Improved performance when listing all jobs for a store.

## March 12, 2021

* **`MINOR`**  Security fixes.

## April 2021

* **`MAJOR`** Introduced the Product Content Management services. For more information, see [Product Content Management](concepts/product-content-management.md).
* **`MINOR`** Updated the Files API to support referencing images by a URL. For more information, see [Files](api/advanced/files/index.md).

## March 4, 2021

* **`MINOR`**  Security improvements.

## March 1, 2021

* **`MAJOR`** Cart expiry date is now displayed in the `My Carts` section in the Reference storefront and is also available in the API. For more information, see [Carts](./api/carts-and-orders/carts/index.md).

## February 26, 2021

* **`MINOR`**  Bug fixes.

## February 18, 2021

* **`MINOR`**  Security improvements.

## February 16, 2021

* **`MAJOR`** OpenID Connect single sign-on is now available for Commerce Manager logins, using a separate Merchant Organization realm. For more information, see [Authentication Management](./dashboard/settings/authentication.md).

## February 11, 2021

* **`MINOR`**  Stability improvements.

## February 9, 2021

* **`MAJOR`** Bulk update of part of a cart now available. For more information, see [Bulk Update Items in Cart](./api/carts-and-orders/carts/bulk-update-in-cart.md).

* **`MAJOR`** The ability to merge carts is now available in the Reference store and the API. Merge from an anonymous user’s cart to a registered user’s cart. For more information, see [Merging Carts](./api/carts-and-orders/carts/merging-carts.md).

## February 8, 2021

* **`MINOR`** In Commerce Manager, orders can now be filtered and exported by Product ID.

## February 3, 2021

* **`MINOR`** Bug fixes.

## January 28, 2021

* **`PLATFORM`** Security improvements.

## January 27, 2021

* **`MINOR`** The JavaScript SDK now supports adding products to a cart by SKUs.

## January 21, 2021

* **`MINOR`** You can now copy the API base URL directly from Commerce Manager home page.

## January 20, 2021

* **`MINOR`** Bug fixes and security fixes.

## January 13, 2021

* **`MAJOR`** Re-order is available in the API. For more information, see [Add Order Items to Cart (Re-order)](./api/carts-and-orders/carts/re-order.md).

## January 8, 2021

* **`STOREFRONT`** Added a [Storefront Quick Start](./developer/get-started/quick-store/index.md) to the Developer Guide.

## January 7, 2021

* **`MINOR`** Bug fixes.

## January 5, 2021

* **`MINOR`** Moved the Swift SDK examples from the API Reference documentation to the community-supported `ios-sdk` repository [Readme file](https://github.com/moltin/ios-sdk/blob/master/README.md).

## December 9, 2020

* **`MAJOR`** Added the ability to create multiple shoppings carts. For more information, see [Multiple carts](./api/carts-and-orders/carts/create-multi-cart.md).

* **`MAJOR`** Added a new endpoint to support the configuration of cart-expiry default. For more information, see [Cart expiry](./api/advanced/settings/cart-settings.md).


## December 7, 2020

* **`MAJOR`** Added the ability to configure and use OpenID Connect compliant Single Sign-On authentication providers for Elastic Path Commerce Cloud customer logins. For more information, see [Single sign-on with OpenID Connect](./developer/how-to/get-single-sign-on-customer-token.md).

## November 20, 2020

* **`PLATFORM`** Performance, reliability, and stability improvements.

## November 16, 2020

* **`MINOR`** The pagination default is now set at 25 for newly-created stores. There is no change for existing stores. For more information, see [Pagination](./api/basics/pagination.md).

## November 3, 2020

* **`PLATFORM`** Performance improvements.

## November 2, 2020

* **`MAJOR`** Quick Add to cart is available in the Reference Store. Bulk add item to cart is available in the API. For more information, see [Bulk add item to cart](./api/carts-and-orders/carts/bulk-add-to-cart.md).

## October 22, 2020

* **`MINOR`** Updated the [Event API logs](api/advanced/integrations/get-integration-logs.md) to support pagination.
* **`MINOR`** Other minor bug fixes.

## October 2, 2020

* **`MAJOR`**  Updated the Carts API to add the ability to associate a `user-id` with a cart or to remove the association. For more information, see [Customer Cart Associations](api/carts-and-orders/carts/associations/index.md).

## September 22, 2020

* **`MINOR`** Bug fixes, security fixes, and performance improvements.
* **`MINOR`**  The `customer.deleted` integration type has been added to Commerce Manager.

## September 18, 2020

* **`MINOR`** UI fixes for Flows in Commerce Manager.

## September 14, 2020

* **`STOREFRONT`** Reference Store updates:

    * Native Cart, Promotions, and Checkout UI components for checkout flow.
    * Service Worker caching policy configuration through Workbox.

## September 10, 2020

* **`MINOR`** Updated the Flows service to include field validation of non-string data types.

* **`Commerce Manager`** In the Flows page, updated the field type Boolean. The default value is now selected by using True and False radio buttons.

## August 20, 2020

* **`STOREFRONT`** Reference Store updates:

    * Includes Voice Search integration with Algolia for accessibility.
    * Updated to use JS-SDK v4.0.0.
    * Configuration is now set to use the BelleVie catalog data by default and for Algolia.

* **`SDK`** JS-SDK v4.0.0 is available.

* **`MINOR`** Added Commerce Manager Help. Get help on procedures directly from the Commerce Manager Resource Center.

## August 14, 2020

* **`MINOR`** Fixed a Commerce Manager bug: X for Y promotion display error.

## August 11, 2020

* **`MINOR`** Updated the search service to prevent the service from entering an unstable state.

## August 7, 2020

* **`STOREFRONT`** The React PWA Reference Storefront has a new open source project for catalog syndication scripts. The first available script is for Algolia. Use the script to push the product catalog from Elastic Path Commerce Cloud to Algolia as part of the Storefront setup. The open source project is available at: [https://github.com/elasticpath/catalog-syndication](https://github.com/elasticpath/catalog-syndication).

## August 5, 2020

* **`MAJOR`** New full and partial refunds capabilities available in both Commerce Manager and API. For more information, read the [docs](api/payments/paying-for-an-order/index.md#refunds) or watch a video of the [refund flow in action](https://epcc-videos.s3.amazonaws.com/pendo+guide+videos/Refunds.mp4).

## July 30, 2020

* **`PLATFORM`** Moved Elastic Path Commerce Cloud to a new EMEA Production Instance. The new instance provides additional scalability, security, and compliance.

## July 22, 2020

* **`STOREFRONT`** The React PWA Reference Storefront is now available for Elastic Path Commerce Cloud. The initial release of the storefront implements key commerce workflows, including:

    * Finding and browsing products (uses Algolia).
    * Comparing products.
    * Adding products to a cart.
    * Checking out a cart, including promotions and payment.
    * Logging in and registering customers.
    * Managing customer profiles, including order history.
    * Setting the language and currency.

    Reference Storefront links:

    * Live instance: [https://epcc-reference.elasticpath.com/](https://epcc-reference.elasticpath.com/).
    * Source code: [https://github.com/elasticpath/epcc-react-pwa-reference-storefront](https://github.com/elasticpath/epcc-react-pwa-reference-storefront).
    * Features and updates: [https://github.com/elasticpath/epcc-react-pwa-reference-storefront/releases/tag/v1.0.0](https://github.com/elasticpath/epcc-react-pwa-reference-storefront/releases/tag/v1.0.0).

## July 3, 2020

* **`MINOR`** Updated the Stripe integration to support the longer tokens that Stripe uses for new accounts.

## June 16, 2020

* **`MINOR`** Minor bug fix.

## June 11, 2020

* **`MAJOR`** Added support for PayPal Express Checkout. For more information, see [configuring PayPal Express Checkout](api/payments/gateways/configure-paypal-express.md) and [paying with Paypal Express Checkout](api/payments/paying-for-an-order/paypal-express-payments.md).
* **`MAJOR`** Added support for PayPal Payflow Pro. For more information, see [configuring PayPal Payflow Pro](api/payments/gateways/configure-payflow-express.md) and [paying with PayPal Payflow Pro](api/payments/paying-for-an-order/payflow-express-payments.md).
* **`MINOR`** Fixed a security issue.
* **`MAJOR`** Fixed an issue where building child products produced invalid entities.
* **`MINOR`** Minor bug fixes.

## May 11, 2020

* **`MAJOR`** New promotion type which limits coupon usage per individual customer.

## May 7, 2020

* **`MAJOR`** Fixed issue filtering orders by customer.

## May 6, 2020

* **`MAJOR`** Implemented [customer-specific promotions](api/promotions/index.md).

## May 5, 2020

* **`MAJOR`** Implemented visual builder in Commerce Manager for the management of promotions.

## May 1, 2020

* **`MINOR`** Added more reserved flow field slugs.

## April 28, 2020

* **`MAJOR`** Fix issue with filtering orders.
* **`MINOR`** Fixed issue with flows not appearing on address fields.

## April 14, 2020

* **`MAJOR`** Implemented Min/Max promotions.

## March 17, 2020

* **`MAJOR`** Remove unique attribute from flows.

## March 10, 2020

* **`MAJOR`** Added event observer to the Customer API.

## February 24, 2020

* **`MAJOR`** Implemented bundled promotions.
* **`MAJOR`** Prevented multiple promotions from targeting a single item. For more information, see [Promotions](concepts/promotions.md#multiple-promotions-for-the-same-sku).

## February 17, 2020

* **`MINOR`** Added [custom reference attribute](api/payments/transactions/capture-a-transaction.md#post-capture-a-transaction) to transactions.

## February 10, 2020

* **`MAJOR`** Added new promotion type which sets the maximum value of a promotion. Now you can create a promotion which limits the maximum value of a promotion when applying a promotion to a user’s cart. For example, a promotion for 25% off can be limited to $50 off a carts total. After the $50 discount is reached, no further discount applies.

## January 27, 2020

* **`MAJOR`** Changed default calculation type in stores for new customers to line calculation from simple calculation method.
* **`MAJOR`** Implemented time constrained promotion usage which limits usage to a time range in a given day or dates.

## January 22, 2020

* **`MAJOR`** Added Authorize.net [payment gateway](api/payments/gateways/configure-authorize.net.md) and [payment](api/payments/paying-for-an-order/authorize.net-payments.md).
* **`MAJOR`** Added CyberSource payment gateway.

## January 7, 2020

* **`MAJOR`** Added the [item fixed discount](api/promotions/create-item-fixed-discount-promotion.md) promotion. This new discount type allows a fixed discount to be applied to a single line item in a cart.
* **`MAJOR`** Added the [item percentage discount](api/promotions/create-item-percent-discount-promotion.md) promotion type. This new discount type allows a percentage discount to be applied to a single line item in a cart.
* **`MAJOR`** Added promotion maximum usage type which limits the number of times a single promotion can be used storewide.
* **`MAJOR`** Added weight field to products in Commerce Manager.

## December 19, 2019

* **`MAJOR`** Order flows removed from transaction responses.

## December 12, 2019

* **`MAJOR`** Removed deprecated fields on transaction responses.

## November 26, 2019

* **`MINOR`** Promotion code response is now paginated.

## November 4, 2019

* **`MAJOR`** Flow slugs can no longer be pluralized versions of core entity slugs \(products, orders, etc\).

## October 28, 2019

* **`MINOR`** In some cases, errors to the orders endpoints would return a blank error. This has been resolved.
* **`MINOR`** Deleting a relationship on a flow now sets the fields to `null`, not a blank array.

## October 15, 2019

* **`MINOR`** Fixed an issue where whitespace in filters would cause a 500 error.
* **`MINOR`** Fixed an issue where all flows were returned when using `?include`.

## October 11, 2019

* **`MINOR`** Fixed an issue where meta data wasn’t being returned when searching for customers.

## October 7, 2019

* **`MINOR`** Added the ability to delete a single promotion code via a new endpoint.

## October 4, 2019

* **`MINOR`** Added `detail` to error responses that only included `details` in preparation to deprecate `details`

## October 2, 2019

* **`MINOR`** Added Stripe payment gateway to attributes.

## September 30, 2019

* **`MINOR`** Fixed an issue where updating a file would sometimes result in a 500 error.

## September 13, 2019

* **`MINOR`** Currency is now formatted correctly across all `formatted` properties.
* **`MINOR`** Product slug is now returned for cart items.

## September 11, 2019

* **`MINOR`** Order `CSV` exports now include the `instructions` field from the shipping address.

## September 9, 2019

* **`MINOR`** Fixed an issue where the formatted money was not being formatted for transaction responses.

## September 2, 2019

* **`MINOR`** Fixed a bug where `field_type` needed to be specified when updating a field and omitting it would cause a `5xx` response.
* **`MINOR`** Fixed a bug where the `updated_at` on a flow was not being updated when the flow was updated.

## July 17, 2019

* **`MINOR`** Return an error if a user tries to add a product to a cart that does not have a price in the supplied currency.
* **`MINOR`** Return an error if more than 10 filter parameters are applied to a request.
* **`MINOR`** Fixed a bug where adding a relationship field to some entity types could cause a `5xx` response.

## July 10, 2019

* **`MINOR`** Fixed a bug where new store settings could be empty.
* **`MINOR`** Added new readonly settings.
* **`MAJOR`** `OPTIONS` requests are now handled from the nearest edge location to the client instead of our EU data centre.

## July 4, 2019

* **`MINOR`** Improved validation when creating and updating integrations.
* **`MAJOR`** Added a new [`payload` field to webhooks](api/advanced/integrations/integration-payload.md) with the JSON representation of the updated object. _`resources` is now deprecated but remains in place for the foreseeable future._

## July 2, 2019

* **`MINOR`** Fixed a bug where incorrect error messages could be returned if there was an error when making a payment. For example, you could get an `Insufficient Stock` error because of an incorrectly formatted payment request.

## June 24, 2019

* **`MAJOR`** Added new methods, `simple` \(default\) and `line`, to [calculate totals](developer/how-to/calculate-totals.md) for carts and orders.
  **`MINOR`** Fixed a bug where a `PUT` to a cart item with a quantity of `0` would return a `404`.
* **`MINOR`** Fixed a bug where passing mismatched IDs in the URL and body, or not passing an ID in the body would cause a `5xx` error.
* **`MINOR`** You can now add a tax item at the same time you add a cart item. See [Add Product to Cart](api/carts-and-orders/carts/add-product-to-cart.md) or [Add Custom Item to Cart](api/carts-and-orders/carts/add-custom-item-to-cart.md) and for tax item reference see [Tax Items](api/carts-and-orders/carts/cart-items/tax-items/index.md#the-tax-item-object).

## June 21, 2019

* **`MINOR`** Improved error handling when making payments.

## June 19, 2019

* **`MINOR`** Fixed a bug where attempting to disable any currency would result in a `Cannot disable the default currency` error.

## June 18, 2019

* **`MAJOR`** Added a [settings option](api/advanced/settings/index.md#calculation-method) to allow store owners to specify [how taxes and promotions are calculated on their carts](developer/how-to/calculate-totals.md).

## June 11, 2019

* **`MINOR`** Fixed bug where in some cases cart totals did not exactly reflect the order totals created after the cart was checked out. Cart totals and order totals now exactly match.
* **`MINOR`** Fixed bug where phone number associated with address would not update correctly on `PUT`.

## May 28, 2019

* **`MINOR`** Cart items now returned with `GET` cart call.
* **`MINOR`** Adding a promo code to an empty cart now returns 422: "At least one product must be included in your cart to qualify for this offer".
* **`MINOR`** Adding the same promo code to a cart more than once returns 201 but ensures the code is applied only once.
* **`MINOR`** Updating a modifier no longer changes the child product IDs on rebuild.

## May 23, 2019

* **`MINOR`** Added ability to [update tax items](api/carts-and-orders/carts/cart-items/tax-items/update-a-tax-item.md) \(`PUT`\) once added to a cart item.

## May 21, 2019

* **`MINOR`** Improved the safety of carts using different currencies by rejecting requests which would mix up currencies. The following use cases apply:
    1. If you attempt to add a product to a cart which contains items in a different currency, you receive a 400 error.
    2. If you attempt to check out a cart in a different currency than the products that exist in the cart, you receive a 400 error.
    3. If you attempt to `GET` a cart in a different currency than the items in the cart, then the currency header should be ignored and you see it in the original currency.
    4. If you attempt to `GET` cart items in a different currency than the items in the cart, then the currency header should be ignored and you see it in the original currency.
* **`MINOR`** Fixed an issue with carts whereby changing the product quantity would change the order of cart items. This is now preserved.
* **`MINOR`** Added attribute validation so that only [known events](api/advanced/integrations/observable-events.md) are accepted.
* **`MINOR`** DELETE calls are now rejected to remove a relationship from a collection for incorrectly formatted requests.
* **`MINOR`** Checkout call now returns order items in the response.

## April 17, 2019

* [**Commerce Manager**](https://dashboard.elasticpath.com/) Fixed inconsistent behavior of pagination in the UI.
* Fixed an issue whereby an invalid slug would cause an error with the `flows` endpoint.
* Fixed an issue whereby a payment request without an object would cause an error.
* Fixed an issue with the validation issue being logged as error.

## April 9, 2019

* Pagination on the [`/v2/flows/:flowSlug/entries`](api/advanced/custom-data/entries/get-all-entries.md) endpoint now defaults to 100 entries per page.

## April 4, 2019

* **`MAJOR`** Released a caching layer for `/products` endpoints. Cached data is now served to stores from edge locations around the world.
* **`MAJOR`** Released live version of the [Self Checkout](https://moltin.com/commerce-solutions/mobile-self-checkout/) solutions.

## March 19, 2019

* **`MAJOR`** Added pagination to the [`/v2/flows/:flowSlug/entries`](api/advanced/custom-data/entries/get-all-entries.md) endpoint with default set to 1000 entries per page.

## March 27, 2019

* Fixed issue with timestamp on inventory record.

## March 4, 2019

* Validation error code now returns a helpful message for SingleEqualsPriceModifierViolation.
* Fixed an issue whereby newly created Flow Field wouldn’t immediately present on resource.
* **`MAJOR`** Added Zendesk integration for improved customer support.

## February 4, 2019

* **`MAJOR`** The architecture now incorporates Kubernetes.
* Successful request to orders/:ID/payments endpoint now returns information about the transaction which was created.
* Validation on files endpoint now checks the file parameter is passed, that it is an actual file and returns a 422 if it is not.

## December 18, 2018

* **`MAJOR`** Created a tax item to calculate sales tax for individual cart items. GitHub now includes an [example app](https://github.com/moltin/taxjar-example) showcasing TaxJar integration.
* [**Commerce Manager**](https://dashboard.elasticpath.com/) Transactions now include the `date` field and show formatted values.
* Fixed issue with filtering orders.
* Added validation checks for file import.

## December 11, 2018

* Added the `formatted` field to `transaction.data.meta` showing the formatted display price.
* `transaction` response now includes the `created_at` field.

## December 4, 2018

* Updated search to return a 400 error explaining the search contains [unsupported characters](api/basics/filtering.md#supported-characters).

## November 20, 2018

* Fixed an issue whereby `GET` `orders.flow` fields would return 404 when flow exists.
* Fixed issue with accessing Commerce Manager.
* Fixed issue with stores list visible when there are no stores.

## November 13, 2018

* **`MAJOR`** [**Commerce Manager**](https://dashboard.elasticpath.com/) Customers can now bulk add promo codes.
* Fixed issue with initial `POST` to cart returning unformatted `meta.display_price`.
* Fixed issue with child Product `sku` and `slug` not reflecting API response.
* Fixed an issue with deleting customers through Commerce Manager and API.

## November 6, 2018

* [**Commerce Manager**](https://dashboard.elasticpath.com/) Customers can now easily delete promo codes.
* Fixed issue with using modifier placeholder in `product.slug` field.
* Fixed issue with assigning Inventory.
* Fixed issue whereby `id` fields on update user and delete user are returned as integers instead of strings.
* Fixed issue with deleting a user from a store.

## October 30, 2018

* Fixed an issue whereby adding a second `cart_item` or deleting a `cart_item` wouldn’t return `flow.entries` for all `cart_items` in the cart.

## October 23, 2018

* Fixed issue with creating `product` relationships.

## October 16, 2018

* **`MAJOR`​**[**Commerce Manager**](https://dashboard.elasticpath.com/) Added product variations.
* Updated validation rules for `POST` requests on `addresses`.
* Fixed issue with additional key returned with `product` response.
* Added validation for `price` object when adding a price modifier.

## September 25, 2018

* Fixed issue with filtering on email.
* [**Commerce Manager**](https://dashboard.elasticpath.com/) Added pagination to Customers grid.

## September 18, 2018

* **`MAJOR`** Added pagination to `customers`.

## September 4, 2018

* Fixed issue with `flow` to `flow` custom relationship.

## August 28, 2018

* Added allocate and deallocate actions to inventory service.
* Fixed issue around `product` to `product` relationships and pagination.

## August 21, 2018

* **`MAJOR`** Added ​Inventory Management is now available.
* **`MAJOR`** Order exporting is now available.
* `POST` to `variation.option` returns the newly created `option` object instead of the parent `variation`.
* `PUT` to `variation.modifier` returns the updated `modifier` object instead of the parent `variation`.
* `POST` to `variation.modifiers` returns the newly created `modifier` instead of the parent `variation`.
* **`MAJOR`** [**Commerce Manager**](https://dashboard.elasticpath.com/) Customers can now easily export order data into a `CSV` file.

## August 14, 2018

* **`MAJOR`** Added Beta access to Inventory Management with `orders`.

## June 19, 2018

* Added validation for the `currencies` array in the promotions schema.

## June 5, 2018

* Resolved an issue with using payment captured events.
* Child `products` now display `main_images`.
* **`MAJOR`** ​Stripe Connect payment method now available.

## May 15, 2018

* Resolved issue that prevented some users from working with Promotions API correctly.
* `flow` to `flow` relationships are now available.
* **`MAJOR`** CardConnect `gateway` now available.
