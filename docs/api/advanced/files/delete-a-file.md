---
id: delete-a-file
title: Delete a File
sidebar_label: Delete a File
---

## `DELETE` Delete a File by ID

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

## Request Example

### Curl

```bash
curl -X DELETE https://api.moltin.com/v2/files/:id \
     -H "Authorization: Bearer XXXX"
```

### JavaScript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const id = 'XXXX'
Moltin.Files.Delete(id).then(response => {
  // Do something
})
```

## Response

`204 No Content`


```json

```
