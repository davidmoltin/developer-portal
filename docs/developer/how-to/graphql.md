---
id: graphql
title: Using the GraphQL Server
sidebar_label: Using the GraphQL Server
---

Use the GraphQL server with your Elastic Path Commerce Cloud store to access Commerce Cloud APIs using GraphQL instead of REST for shopping experiences.

## Getting started with the GraphQL server

1. To create a `.env` file, follow the instructions in the [Get Started](https://github.com/elasticpath/elasticpath-graphql-server#get-started) section.

1. Get the following variables and add to the `.env` file:

    1. In Commerce Manager home page for your store, go to the **Your API keys** section.
    1. To get the value for the `ELASTICPATH_API_HOST` variable, copy the **API base URL** and remove the `https://`.

        For example, if the API base URL is `https://api.moltin.com`, use `api.moltin.com` for the `ELASTICPATH_API_HOST` variable.
    1. To get the value for the `ELASTICPATH_CLIENT_ID` variable, copy the client ID.

1. [Start](https://github.com/elasticpath/elasticpath-graphql-server#development) the server.

    :::note
    You can use the [local host URL](https://github.com/elasticpath/elasticpath-graphql-server#graphql-playground) to perform queries using [GraphQL Playground](https://github.com/graphql/graphql-playground).
    :::

1. To start using GraphQL, follow the instructions in the [Your First GraphQL Queries](https://github.com/elasticpath/elasticpath-graphql-server#your-first-graphql-queries) section.
