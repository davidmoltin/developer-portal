---
id: get-all-releases-of-a-catalog
title: Get all Releases of a Catalog
sidebar_label: Get all Releases
---

## `GET` Get all Releases of a Catalog

```text
https://api.moltin.com/pcm/catalogs/:catalogId/releases
```

Returns a list of all published releases of the specified catalog.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogId` | Required | `string` | The unique identifier of the catalog. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |

<!-- Response - PCM/V2-->

`200 OK`

```json
{
    "data": [
        {
            "id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
            "type": "catalog-release",
            "attributes": {
                "hierarchies": [
                    {
                        "id": "eb3bd9e6-857c-4886-bc3f-fcebd600ae22"
                    }
                ],
                "description": "Ranges Catalog",
                "name": "Ranges Catalog",
                "published_at": "2021-04-13T02:11:57.393Z"
            },
            "relationships": {
                "hierarchies": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/products"
                    }
                }
            }
        }
    ],
    "links": {
        "self": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
