---
id: update-settings
title: Update Settings
sidebar_label: Update Settings
---

You can use the Settings endpoint to update your project settings at any time. These global settings take immediate effect.

## `PUT` Update project settings

```http
https://api.moltin.com/v2/settings
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `calculation_method` | Optional | `string` | The method used to calculate card and order totals. |
| `additional_languages` | Optional | `array` | An array of `alpha2` codes for [supported languages](../translations/index.md#supported-languages). |
| `list_child_products` | Optional | `boolean` | Display child products or not in product listings. |
| `page_length` | Optional | `integer` | Number of results per page (**max**: `100`). |
| `type` | Required | `string` | This describes the type of request payload you’re sending. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/settings \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "settings",
         "page_length": 70,
         "list_child_products": false,
         "additional_languages": ["es","fr","de"],
         "calculation_method": "simple"
       }
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`200 OK`


```json
{
    "data": {
        "type": "settings",
        "page_length": 70,
        "list_child_products": true,
        "additional_languages": ["es", "fr", "de"],
        "calculation_method": "simple",
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
