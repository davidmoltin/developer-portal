---
id: openid
title: Single sign-on and authentication
sidebar_label: Single sign-on and authentication
---

Single sign-on allows authentication with Elastic Path Commerce Cloud using an external authentication provider. Using an existing authentication provider allows for integration with company-specific or customizable authentication systems. In some cases, it can also simplify the log-in experience because they don’t need to remember another password.

Elastic Path Commerce Cloud supports two types of single sign-on users:

- End users, that is, customers of your store.
- Administrators, who can use single sign-on to log on to Commerce Manager.

When users need to authenticate, they are redirected to the single sign-on provider, which then communicates the result of the authentication process back to Elastic Path Commerce Cloud.

You can set up Elastic Path Commerce Cloud to allow single sign-on for end users, using the *OpenID Connect* standard.

:::note
When users authenticate using an external authentication provider, authentication details, such as username and password, are neither stored on nor sent through Elastic Path Commerce Cloud.
:::

## Authentication Realms

Authentication realms contain general options for configuration, sets of single sign-on profiles, and user mapping information between Elastic Path Commerce Cloud, and the external authentication provider.

Commerce Cloud comes with two per-store pre-set realms:

- Buyer Organization. For customers: users who buy products from your store.
- Merchant Organization. For administrators: users who log in to Commerce Manager to modify the store’s settings or catalog.

## Authentication Providers and Commerce Cloud

Elastic Path Commerce Cloud supports many OpenID Connect compatible authentication providers. For more information, see [Authentication Management](../dashboard/settings/authentication.md).

## External reference

- [What is OpenID?](https://openid.net/what-is-openid/)
- [OpenID Connect standard](https://openid.net/connect/)

## Related concepts

- [Security](security.md)

## APIs

- [Authentication Realms](../api/single-sign-on/authentication-realms/index.md)
- [OpenID Connect profiles](../api/single-sign-on/oidc-profiles/index.md)

## How-to guides

- [Single sign-on with OpenID Connect](../developer/how-to/get-single-sign-on-customer-token.md)
