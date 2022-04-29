---
id: get-access-token
title: Get an access token
sidebar_label: Get an access token
---

If you want to follow along making the API requests that are used in the how-to guides, you need to get a `client_credentials` access token.

Use the following request to get the access token:

```sh
curl -X POST https://api.moltin.com/oauth/access_token \
     -d "client_id=XXXX" \
     -d "client_secret=XXXX" \
     -d "grant_type=client_credentials"
```
