---
id: get-all-files
title: Get all Files
sidebar_label: Get all Files
---

## `GET` Get all Files

```http
https://api.moltin.com/v2/files
```

:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md).
:::

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `filter` | Optional | `string` | Filter attributes. For more information, see [Filtering files](index.md#filtering). |

## Request Examples

### Curl

 ```bash
 curl -X GET https://api.moltin.com/v2/files \
      -H "Authorization: Bearer XXXX"
 ```

### JavaScript SDK

 ```javascript
 const MoltinGateway = require('@moltin/sdk').gateway
 const Moltin = MoltinGateway({
   client_id: 'X'
 })
 Moltin.Files.All().then(files => {
   // Do something
 })
 ```

## Response

`200 OK`


```json
{
    "data": [
        {
            "type": "file",
            "id": "f8cf26b3-6d38-4275-937a-624a83994702",
            "link": {
                "href": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/f8cf26b3-6d38-4275-937a-624a83994702.png"
            },
            "file_name": "f6669358-85db-4367-9cde-1deb77acb5f4.png",
            "mime_type": "image/png",
            "file_size": 110041,
            "public": true,
            "meta": {
                "dimensions": {
                    "width": 1000,
                    "height": 1000
                },
                "timestamps": {
                    "created_at": "2018-03-13T13:45:21.673Z"
                }
            },
            "links": {
                "self": "https://api.moltin.com/v2/files/f8cf26b3-6d38-4275-937a-624a83994702"
            }
        }
    ],
    "links": {
        "self": "https://api.moltin.com/v2/files?page[offset]=0&page[limit]=100&filter=",
        "first": "https://api.moltin.com/v2/files?page[offset]=0&page[limit]=100&filter=",
        "last": null
    },
    "meta": {
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        },
       "results": {
            "total": 1
        }
    }
}
```
