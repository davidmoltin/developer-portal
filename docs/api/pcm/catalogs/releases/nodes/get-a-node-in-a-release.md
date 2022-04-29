---
id: get-a-node-in-a-release
title: Get a Node in the Latest Release
sidebar_label: Get a Node
---

## `GET` Get a Node from a Catalog Release

```text
https://api.moltin.com/pcm/catalogs/:catalogId/releases/latest/nodes/:nodeId
```

Returns a node from a published catalog.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

:::important
Use `releaseId` to delete a specific release than the latest catalog.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of the catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published version of the catalog or `latest` for the most recently published version. |
| `nodeId` | Required | `string` | The unique identifier of a hierarchy node. |

 **Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |

<!--Response - PCM/V2-->

`200 OK`

```json
{
    "data": {
        "id": "39f96a3f-5577-473f-a263-f21fb2013469",
        "type": "node",
        "attributes": {
            "created_at": "2021-03-08T17:50:14.629Z",
            "description": "All cooling units for food",
            "name": "Refrigerators",
            "slug": "Refrigerators-MA1",
            "updated_at": "2021-03-08T17:50:14.629Z",
            "published_at": "2021-04-13T02:36:16.505Z"
        },
        "relationships": {
            "children": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/children"
                }
            },
            "hierarchy": {
                "data": {
                    "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                    "type": "hierarchy"
                },
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                }
            },
            "parent": {
                "data": {
                    "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                    "type": "node"
                },
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                }
            },
            "products": {
                "links": {
                    "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/products"
                }
            }
        }
    },
    "links": {
        "self": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes/39f96a3f-5577-473f-a263-f21fb2013469"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes/39f96a3f-5577-473f-a263-f21fb2013469 \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
