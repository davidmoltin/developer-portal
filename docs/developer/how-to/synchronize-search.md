---
id: synchronize-search
title: Synchronize search with Algolia
sidebar_label: Synchronize search
---
This example provides instructions to clone and configure the repository that contains the code required to synchronize data between Elastic Path Commerce Cloud and [Algolia](https://www.algolia.com/), and use webhooks to synchronize data.

## Prerequisite

- Ensure that you have an account in the [ngrok](https://ngrok.com/) service to tunnel your development environment externally.
- Ensure that yarn and other dependencies are installed.

## Procedure

1. To clone repository, run the following command:

    ```bash
    git clone https://github.com/moltin/examples.git
    ```

1. In the terminal, go to the `examples/webhooks/sync-catalog-to-algolia` directory.
1. Go to [Algolia](https://www.algolia.com/) and do the following:

    1. Create an account.
    1. Create a new app with a name.
    1. Go to **Settings > API Keys**.

        Make a note of your **Application ID** and **Admin API Key**.

1. In the `/sync-catalog-to-algolia` directory, create an `.env` file and add the keys for the following environment variables:

    - `ALGOLIA_APP_ID=`
    - `ALGOLIA_API_KEY=`
    - `MOLTIN_WEBHOOK_SECRET=`

    Use any value that you want for `MOLTIN_WEBHOOK_SECRET`.

1. Run the following command and start the development server:

    ```bash
    yarn dev
    ```

    By default, the server starts on port 3000. If the server starts on a different port, use that port number in the next step.

1. Start ngrok using the following command:

    ```bash
    ngrok http 3000
    ```

    This exposes port 3000 externally.
1. Go to the ngrok status page and make a note of the URL.
1. Create a new integration in Commerce Manager by doing the following:

    1. Log into the Commerce Manager.
    1. Go to **Settings > Integrations**.
    1. Click **New Integration**.
    1. In the **Integration details** section, enter a name and description for your integration.

        We recommend to prefix the name with `DEVELOPMENT` for easier referencing.

    1. In the **Configuration** section, enter the ngrok URL and a secret key.
    1. In the **Observes** section, select the following options in **Category* and **Collection**:

        - **Created**
        - **Updated**
        - **Deleted**

    1. Select **Enabled**.
    1. Click **Save**.

## Related Resources

- [Integrations)](../../concepts/integrations.md)
- [Integrations) API](../../api/advanced/integrations/index.md)
- [Synchronize search example](https://github.com/moltin/examples/tree/master/webhooks/sync-catalog-to-algolia) **(Source code)**
