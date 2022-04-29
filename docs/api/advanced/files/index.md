---
id: index
title: Files
sidebar_label: Files
---

You can upload image files or URLs by using `multipart/form-data` as the content type header. For example, `"Content-Type: multipart/form-data" \`. Elastic Path Commerce Cloud supports the following file types:

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

By default, the maximum file size is 8 MB. If you need to support larger file sizes, contact your Elastic Path representative. Alternatively, store files somewhere else and reference them.

## The File object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this file. |
| `type` | `string` | The type represents the object being returned. |
| `link` | [`object`](#the-file-link-object) | The file [link object](#the-file-link-object). |
| `file_name` | `string` | The name of the file. |
| `mime_type` | `string` | The mime type of the file. |
| `file_size` | `integer` | The size of the file. Required when uploading files. |
| `public` | `boolean` | Whether the file public or not. Required when uploading files. |
| `file_location` | `string` | The URL that points to an image. Required when referencing files stored externally. |
| `meta` | [`object`](#the-file-meta-object) | The additional [meta object](#the-file-meta-object). |
| `links` | [`object`](#the-file-links-object) | The file [links object](#the-file-links-object). |

## The file link object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `link.href` | `string` | The publicly available URL for this file. |

## The file meta object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.dimensions.width` | `integer` | The width of the file. |
| `meta.dimensions.height` | `integer` | The height of the file. |
| `meta.timestamps.created_at` | `string` | The creation date of the file. |

## The file links object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `links.self` | `string` | The URL of this file object. |

## Response Example

```json
{
  "data": {
    "id": "272d3ff0-5034-4986-8786-0ff97450745d",
    "type": "file",
    "link": {
      "href": "https://files-eu.epusercontent.com/2a85964e-cb3d-482a-ab02-0f0e47ab5662/273d3ff0-5034-4986-8786-0ff97450745.jpg"
    },
    "file_name": "image.jpg",
    "mime_type": "image/jpeg",
    "file_size": 20953,
    "public": true,
    "meta": {
      "dimensions": {
        "width": 1600,
        "height": 800
      },
      "timestamps": {
        "created_at": "2017-08-14T10:47:45.191Z"
      }
    },
    "links": {
      "self": "https://api.moltin.com/v2/files/272d3ff0-5034-4986-8786-0ff97450745d"
    }
  }
}
```

## Filtering

The following attributes are available for [filtering](../../basics/filtering.md) files.

| Attribute | Type | **Operators** | **Example**                   |
| :--- | :--- | :--- |:------------------------------|
| `file_name` | `string` | `eq` / `like` | `eq(file_name, my_image.jpg)` |
| `width` | `integer` | `gt` / `ge` / `lt` / `le` | `gt(width,200)` |
| `height` | `integer` | `gt` / `ge` / `lt` / `le` | `lt(height,500)` |
| `public` | `boolean` | `eq` | `eq(public,true)` |
| `file_size` | `integer` | `gt` / `ge` / `lt` / `le` | `le(file_size,20953)` |


## Supported characters

As filters are passed as URL query string parameters, we must ensure all filters are URL safe and are strict about the characters that can be used in a filter.

| Characters | Can be used in filter? |
| :--- | :--- |
| `A-Z` (upper) | No (must be lower case). |
| `0-9` | Yes |
| `_` | Yes |
| " " (space) | No |

Example string for filtering:

```javascript
const { MoltinClient } = require('@moltin/request')
const client = new MoltinClient({
  client_id: 'X',
  client_secret: 'X'
})
//Clean up the file name
const filterName = fileName.replace(/[^A-Z0-9]/gi, "_")
          .toLowerCase()
  client
  .get(`files/?filter=eq(file_name,${filterName}`);
  .then(product => {
    // Do something...
  })
  .catch(console.error)
```
