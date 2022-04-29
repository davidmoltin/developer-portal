---
id: get-all-entries
title: Get all Entries
sidebar_label: Get all Entries
---

:::note
When call all entries, all entries from both flows and Product Content Management attributes are returned.
:::

## `GET` Get all Entries

```http
https://api.moltin.com/v2/flows/:slug/entries
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `slug` | Required | `string` | Specifies the slug of a template to get the entries of an attribute in that template. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl https://api.moltin.com/v2/flows/:slug/entries \
     -H "Authorization: Bearer XXXX"
```

### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const slug = 'XXXX'
Moltin.Flows.GetEntries(slug).then(entries => {
  // Do something
})
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "ce1f0b19-23c3-487b-aa2a-552b77abdf0c",
            "type": "entry",
            "brand-image": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/61118f21-14a2-466c-a84b-c30b1f900cf9.png",
            "meta": {
                "timestamps": {
                    "created_at": "2018-06-05T20:58:25.596Z",
                    "updated_at": "2018-06-05T20:58:25.596Z"
                }
            },
            "links": {
                "self": "https://api.moltin.com/v2/flows/brands/entries/ce1f0b19-23c3-487b-aa2a-552b77abdf0c"
            }
        },
        {
            "id": "a5fcf6bc-233f-44d7-a3b0-0961eed3df9d",
            "type": "entry",
            "brand-image": "some image for brand x",
            "meta": {
                "timestamps": {
                    "created_at": "2018-06-06T14:48:59.006Z",
                    "updated_at": "2018-06-06T14:48:59.006Z"
                }
            },
            "links": {
                "self": "https://api.moltin.com/v2/flows/brands/entries/a5fcf6bc-233f-44d7-a3b0-0961eed3df9d"
            }
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/flows/products/entries?page[limit]=2&page[offset]=0",
        "first": "https://api.moltin.com/v2/flows/products/entries?page[limit]=2&page[offset]=0",
        "last": "https://api.moltin.com/v2/flows/products/entries?page[limit]=2&page[offset]=36",
        "previous": null,
        "next": "https://api.moltin.com/v2/flows/products/entries?page[limit]=2&page[offset]=2"
    },
    "meta": {
        "page": {
            "limit": 2,
            "offset": 0,
            "current": 1,
            "total": 19
        },
        "results": {
            "total": 37
        }
    }
}
```

:::note
You can use pagination with this resource. For more information, see [pagination](../../../basics/pagination.md).
:::
