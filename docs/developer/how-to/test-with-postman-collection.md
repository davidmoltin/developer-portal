---
id: test-with-postman-collection
title: Test with a Postman collection
sidebar_label: Test with a Postman collection
---

Use the Postman collection to run and explore Elastic Path Commerce Cloud APIs. The collection includes the relevant types of requests for each endpoint, including create, read, update, and delete.

## Prerequisites

- Ensure that the Postman client is installed.
- Ensure to download the latest postman collection and environment from the following links:

    - [Collection](https://documentation.elasticpath.com/assets/epcc/postman/collection.json)
    - [Environment](https://documentation.elasticpath.com/assets/epcc/postman/environment.json)

## Procedure

1. In Commerce Manager, go to **Home > Your API Keys**.

    Make a note of the following values:

    - **Client ID**
    - **Client secret**
    - **API base URL**

1. Go to Postman client on your system and import Elastic Path commerce cloud Postman [Collection](https://documentation.elasticpath.com/assets/epcc/postman/collection.json).
1. Import the [Environment](https://documentation.elasticpath.com/assets/epcc/postman/environment.json) file in Postman.

    Make a note of `authUrl` and `pcmUrl` values.

1. Update the following environment variables with the values copied from Commerce Manager and the [Environment](https://documentation.elasticpath.com/assets/epcc/postman/environment.json) file:

    - `client_id`
    - `client_secret`
    - `baseUrl`
    - `authUrl`
    - `pcmUrl`

    :::note
    If the store is in the `useast` environment, update the `baseUrl`, `authUrl`, and `pcmUrl` environment variables with the values for the `useast` environment.
    :::

1. In Postman, open **authentication** folder and run the **Get client credentials token** or the **Get implicit token** requests.
1. Click **Send**.

    Authentication for the current session is done, and an access token is returned. You can now test the rest of your API endpoints in your Postman collection. An access token is valid for an hour, you must authenticate the session and get new tokes every time the access token expires. For more information about authentication permissions, see [Client credential token](../../api/basics/authentication/client-credential-token.html) and [Implicit token](../../api/basics/authentication/implicit-token.html).
