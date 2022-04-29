---
id: security
title: Security
sidebar_label: Security
---

Store administrators and team members share responsibility for keeping a store secure.

## User Credentials

Store admins receive their user credentials from Elastic Path to log in to Commerce Cloud. Store admins can invite team members to work on a store.

After a team member receives an invitation to a Commerce Cloud store, they register and create their username and password. Store admins do not have access to the user credentials of the team members.

:::important
Never share your user credentials.
:::

## API Authentication Credentials

All API requests must contain a generated access token for authentication purposes. To generate an access token, you need your API keys. API keys are the store ID, client ID, and client secret. Each person with access to a store receives a unique client ID and client secret. You can find your API keys on the [Commerce Manager Home page](https://dashboard.elasticpath.com). Access tokens expire after a predefined period of time.

:::important
Never share your API keys or generated access tokens.
:::

You can generate different types of access tokens based on the level of access needed for a particular task.

- `client_credentials` token - Enables full access to all resources in the store. Use this type of token to create, read, update, or delete resources by using the API.
- `implicit` token - Enables read access to resources in the store. Use this type of token to perform actions that a store customer would do, that is, access live resources available from the storefront.

In addition, a `customer` token is required to access a customer profile, including addresses and order history.

- To manage the customer profile from the server side, use the `customer` token with the `client_credential` token.
- To access the customer profile from the client side, use the `customer` token with the `implicit` token.

:::important
Removing a team member removes the unique ClientID and Client Secret associated with that team member.
:::

## APIs

- [Your first API request](../developer/get-started/your-first-api-request.md)
- [Authentication](../api/basics/authentication/index.md)
