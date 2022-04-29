---
id: payment-gateway
title: Payment Gateways
sidebar_label: Payment Gateways
---

You can view your store’s payment gateways on the **Settings > Payment Gateways** tab.

For an overview of how payments work in Elastic Path Commerce Cloud, see [Payments](../../concepts/payments.md).

:::warning
Configure your store to use [Manual Gateway](../../api/payments/paying-for-an-order/manual-payments.md) to process payments if the order total is zero or the payment is through non-supported payment providers.
:::

## Sorting and filtering payment gateways

You can sort the payment gateway list by **Name** or **Status**.

You can filter the payment gateway list to show which gateways are **Enabled** or **Disabled**.

## Modifying a payment gateway

1. Select the payment gateway name.
1. Enter the details for the payment gateway.

:::note
Each payment gateway can require different information, and the field names can be specific to that gateway only.

Contact your payment provider for details.
:::

## Team Management

You can manage team members from the **Team Management** tab.

### Sorting team members

You can sort the team member list by **Name**, **Email**, or **Role**.

### Adding team members

1. Select **+Invite user**.
1. In the dialog box that opens, enter a name, email address, and choose a role.

For more information, see [Inviting Team Members](../home.md#inviting-team-members) and [Roles](../../concepts/roles.md).

### Deleting team members

You can delete team members from the **Settings > Team Management** page. This action cannot be undone.

You can re-add deleted users. They receive a new `client_id` and `client_secret`.

### Changing team members roles

You can change a team member’s role from the **Settings > Team Management** page.

1. Select a team member from the table to open the **User Details** page.
1. Select the new role from the **Role** field.
1. Click the **Save** button.

:::note
The team member needs to sign in for the change to take effect.
:::

## Authentication Management

The Authentication Management tab is used to configure one or more single sign-on authentication providers. Single sign-on is used to verify a user’s identity using the OpenID Connect protocol, without saving user information such as a password.

:::warning
Changing these settings affects how customers authenticate with your store. Any misconfiguration might prevent users from authenticating.
:::

For more information, see [Single sign-on and authentication](../../concepts/openid.md) and [Single sign-on with OpenID Connect](../../developer/how-to/get-single-sign-on-customer-token.md).

:::important
To set up single sign-on for customers of your store, use the **Buyer Organization** realm. To set up single sign-on for store administrators and developers, use the **Merchant Organization** realm.
:::

### Buyer Organization: Adding redirect URLs

When the storefront begins the single sign-on flow for an end user or customer, it must tell Elastic Path Commerce Cloud which URI the user should be redirected to when the authentication completes. This is the `redirect_uri` parameter discussed in [Single sign-on with OpenID Connect](../../developer/how-to/get-single-sign-on-customer-token.md#add-parameters-to-the-authorization-endpoint-url). These URLs must be explicitly listed as *Redirect URIs* to prevent phishing and other security vulnerabilities.

1. On the **Settings > Authentication Realms** tab, select the Buyer Organization realm.

1. In the **Edit Configuration** area for the realm, enter redirect URIs.

    You can view the list of redirect URIs as tags or as a comma-separated list.

1. Click **Save** to save the configuration.

### Merchant Organization: URL prefix

To log into the correct store’s Commerce Manager as a developer or administrator when using single sign-on, you must set a *URL prefix* for your store’s Merchant Organization realm.

:::note
This prefix must be unique, and comprised of between two and 24 alphanumeric characters.
:::

1. On the **Settings > Authentication Realms** tab, select the Merchant Organization realm.

1. In the **Edit Configuration** area for the realm, enter your URL prefix.

    You enter the URL prefix every time you log in to Commerce Manager.

1. Click **Save** to save the configuration.

### Adding a new provider

1. Select a realm on the **Settings > Authentication Realms** page.

1. In the dialog box that opens, click **Add New Provider**.

1. Enter the following information:

    | Field    | Information     |
    | :------------- | :------------- |
    | **Name** | The name of the configuration. |
    | **Discovery Url** | The URL where the OpenID Connect authentication configuration is found. This is often at the URL of the provider. For example: `https://<URL>/.well-known/openid-configuration` |
    | **Client Id** | The client identifier that Commerce Cloud uses to identify itself with the authentication provider. |
    | **Client Secret** | A secret code known only to Commerce Cloud and the authentication provider. |

1. In the Redirect URL for Provider dialog box that opens, click **Copy** to copy the **Redirect URL for Provider** URL.

    This redirect URL must be configured in your single sign-on authentication provider setup.

    You can also copy the **Redirect URL for Provider** field after you have saved the configuration for a new provider. Use the **Copy** button to copy the URL.

After you have properly configured one or more authentication providers, when customers open the **Login** dialog box, a **Login with [provider]** button is available for single sign-on authentication workflow.
