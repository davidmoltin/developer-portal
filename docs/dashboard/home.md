---
id: home
title: Commerce Manager Home
sidebar_label: Home
---

The Commerce Manager **Home** page provides an option to invite team members to work in your store and to view the API keys for your store.

## Inviting Team Members

Store administrators can invite team members to work on the the store configuration. The team member can access the store through Commerce Manager and the API. All team members with the login credentials can log in to Commerce Manager and get their API keys from the **Home** page.

A store admin can also invite team members from the **Settings > Team Management** page.

1. On the **Home** page, enter the email address of the team member you want to invite.
1. Select a role for the team member.

    For more information, see the [Roles](../concepts/roles.md) section.

As a store admin, you can revoke access of a team member at any time without changing the settings for other team members. For example, you can revoke access of an external developer working on the store when the contract ends without revoking access of other members in the team.

A store admin can invite registered or unregistered users using their email address. For an unregistered user, the invitation includes a link to the registration form.

## Getting API Keys

The **Home** page displays the unique API keys for the current user. The **Home** page also provides the store ID.

Each team member has a unique `client_id` and `client_secret` for each store. These values are used when testing the API and making modifications to the store, products, or customers.

1. To copy a key, click the **Copy** button next to the key value.

:::important
Removing a team member removes the unique ClientID and Client Secret associated with that team member.
:::

## Creating a Store

1. Log into Commerce Manager.
1. Click your profile icon at the top-right.
1. In the drop-down menu, click **Stores**.
1. Click **Create new store**.
1. Enter a name for the store.
1. Click **Create**.
    A new store with the provided name is created.

## Selecting a Store

1. Log into Commerce Manager.
1. Click your profile icon at the top-right.
1. In the drop-down menu, click **Stores**.

    All stores associated with your account are listed.
1. Select the store.

    The store **Home** page opens.
1. Optionally, invite your colleagues to collaborate.

    For more information, see [Team Management](./settings/team-management.md) section.

:::important
If you are logged on to Commerce Manager using single sign-on, Your profile information is provided by the single sign-on provider. You cannot create new stores, invite users, or edit your profile information.

Invites sent to non-registered users are valid only for 36 hours, after which the link expires and a new invite must be created.
:::
