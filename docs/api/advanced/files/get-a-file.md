---
id: get-a-file
title: Get a File
sidebar_label: Get a File
---

## `GET` Get a File by ID

```http
https://api.moltin.com/v2/files/:id
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier for the file. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl

```bash
curl -X GET https://api.moltin.com/v2/files/:id \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const fileId = 'XXXX'
Moltin.Files.Get(fileId).then(file => {
  // Do something
})
```

## Response

`200 OK`

```json
{
  "data": {
    "type": "file",
    "id": "f8cf26b3-6d38-4275-937a-624a83994702",
    "link": {
      "href":
        "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/f8cf26b3-6d38-4275-937a-624a83994702.png"
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
      "self":
        "https://api.moltin.com/v2/files/f8cf26b3-6d38-4275-937a-624a83994702"
    }
  }
}
```
