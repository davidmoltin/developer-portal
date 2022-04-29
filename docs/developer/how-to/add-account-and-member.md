---
id: add-account-and-member
title: Add Accounts and Account Members
sidebar_label: Add Accounts and Account Members
---

## Before you begin

- Ensure that the user is signed into the store with appropriate seller permissions.

## Procedure

1. Get the authentication realm for accounts.

    For more information, see the [Get Account Authentication Settings](../../api/advanced/settings/account-authentication-settings/get-account-authentication-settings.md) section.

1. To specify the login process for users, add a profile to the account realm.

    You can choose to set up a [Password Profile](../../api/single-sign-on/password-profiles/index.md) or an [OpenID Connect Profile](../../api/single-sign-on/oidc-profiles/index.md). However, you might have to modify other settings, such as redirect link settings, to use an OpenID Connect Profile. For more information, see the [Create an OpenID Connect Profile](../../api/single-sign-on/oidc-profiles/create-an-oidc-profile.md) section.

1. Create one or more accounts.

    For more information, see the [Create an Account](../../api/customers-and-accounts/account-management/accounts/create-an-account.md) section.

1. Register account members.

    Seller admin can register users to an the account realm by following the instructions in the [Creating a User Authentication Info](../../api/single-sign-on/user-authentication-info/create-a-user-authentication-info.md) section. After creating the user authentication info, seller admin can associate the user to a login profile by following the instructions in one of the following sections:

    - [Create a User Authentication OpenID Connect Profile Info](../../api/single-sign-on/user-authentication-oidc-profile-info/create-a-user-authentication-oidc-profile-info.md)
    - [Create a User Authentication Password Profile](../../api/single-sign-on/user-authentication-password-profiles/create-a-user-authentication-password-profile.md)

    :::note
    After the registration, you can view the user as an account member through the account member APIs. For more information, see the [Account Members](../../api/customers-and-accounts/account-management/account-members/index.md) section.
    :::

1. Get the ID of the account member to add to the account using the [Get All Account Members](../../api/customers-and-accounts/account-management/account-members/get-all-account-members.md) API endpoint.

1. Add the selected account member to the account membership.

    For more information, see the [Create an Account Membership](../../api/customers-and-accounts/account-management/account-memberships/create-an-account-membership.md) section.

After an account member is listed in an account membership, the user can shop on behalf of the account.

## Buy on behalf of an account

1. Authenticate the account member using the selected profile.

    Authenticate an account member by following the instructions in one of the following sections:

    - [Account member authentication API using OpenID Connect](../../api/customers-and-accounts/account-management/account-members/account-member-authentication.md#using-openid-connect) section for OpenID Connect Profiles.
    - [Account member authentication API using username and password](../../api/customers-and-accounts/account-management/account-members/account-member-authentication.md#using-username-and-password) section for password profiles.


1. From the list of accounts, select an account to use.

    You can use the `account-management-authentication-token` to check out on behalf of an account.

1. From the store, select products and add to the cart.
1. Checkout the cart and make the payment on behalf of the account.

    For more information, see the [Account Checkout](../../api/customers-and-accounts/account-management/checkout/account-checkout.md) section.

:::note
Sellers can use the buyer account ID and account member ID to search and filter the completed orders.
:::
