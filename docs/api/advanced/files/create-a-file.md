---
id: create-a-file
title: Create a File
sidebar_label: Create a File
---

## `POST` Create a File

```http
https://api.moltin.com/v2/files
```

The following table describes the file types that can be uploaded to Elastic Path Commerce Cloud:

| File Extension | Description |
| --- | --- |
| .gif | Graphics Interchange Format (GIF) |
| .jpg/jpeg | Joint Photographic Experts Group (JPEG) format |
| .png | Portable graphics format |
| .webp | Web picture format |
| .mp4 | Moving Picture Experts Group (MPEG) format |
| .mov | QuickTime Movie format |
| .pdf | Portable Document Format |
| .svg | Scalable Vector Graphics format |
| .usdz | Universal Scene Description Format |
| .glb | Global File format |
| .jp2 |  Compressed bitmap image saved in Joint Photographic Experts Group (JPEG) format |
| .jxr |  Extended range for Joint Photographic Experts Group (JPEG) format |
| .aac |  Advanced Audio Coding (AAC) format |
| .vrml |  Virtual Reality Modelling Language (VRML) format |
| .doc(x) | Microsoft Word Open XML format |
| .ppt(x) | Microsoft PowerPoint Open XML format |
| .xls(x) | Microsoft Excel Open XML format |

If you use file types that are not supported, a `403: Forbidden` response with `This file type is not supported` message is returned.

## Parameters

### Form data parameters - upload image

 Specify the following parameters to upload a file:

| Name | Required | Type | Description |
| --- | --- | ---| ---|
| `file` | Required | `string` | Indicates the file you want to upload. |
| `public` | Required | `boolean` | Indicates whether the file is public. |

### Form data parameters - image URL

Specify the following parameter to reference a file stored at a specific location:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `file_location` | `string` | Required | The URL that points to an image file. |

:::note
If you include `file` or `public` with `file_location`, the service returns a 400 error.
:::

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Examples

### Curl - upload image

```bash
curl -X POST https://api.moltin.com/v2/files \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer XXXX" \
    -F file=@path/to/file \
    -F public=true
```

### Curl - image URL

```bash
curl -X POST https://api.moltin.com/v2/files \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer XXXX" \
    -F file_location=https://my.example.com/images/abc.png \
```

### Java SDK

```javascript
const { MoltinClient } = require('@moltin/request')
const FormData = require("form-data")
​
const moltin = new MoltinClient({
  client_id: 'X',
  client_secret: 'X'
})
​
const formData = new FormData()
​
formData.append("file_name", fileName)
formData.append("public", "true")
formData.append("file", buffer, { filename: fileName })
​
const headers = {
  "Content-Type": formData.getHeaders()["content-type"]
}
​
const data = {
  body: formData
}
​
moltin
  .post("files", data, headers)
  .then(console.log(data))
  .error(console.error(error))
```

## Response Example

`201 Created`

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
