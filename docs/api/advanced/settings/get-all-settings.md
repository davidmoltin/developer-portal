---
id: get-all-settings
title: Get all Settings
sidebar_label: Get all Settings
---

You can get all of the project settings via one API call using a `client_credential` token. The response is in object format as shown in the following example.

:::note
The default `calculation_method` is `line.`
:::

## `GET` Get all project settings

```http
https://api.moltin.com/v2/settings
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/settings \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`200 OK`


```json
{
    "data": {
        "type": "settings",
        "page_length": 25,
        "list_child_products": true,
        "additional_languages": [],
        "calculation_method": "line",
        "currency_limit": 10,
        "field_limit": 100,
        "integration_limit": 100,
        "event_limit": 5,
        "filter_limit": 10,
        "tax_item_limit": 5,
        "promotions_limit": 1000,
        "promotion_codes_limit": 1000
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
