---
id: publish-a-catalog
title: Publish a Catalog
sidebar_label: Publish a Catalog
---

## `POST` Publish a Catalog

```text
https://api.moltin.com/pcm/catalogs/:catalogId/releases
```

Publishes a catalog. You must publish a catalog before you can retrieve that catalog in a store. The hierarchies, products, and prices associated with a published catalog are in read-only mode. If you make a change to these resources, you need to republish the catalog.

When working with catalogs, you might want to have two catalogs that share the same hierarchies and price book. One catalog is published in a staging instance and one is published in a customer-facing production instance. After making changes to products, hierarchies, or the price book, you can publish and verify the changes in the staging instance. If you are happy with staged results, you can publish the public-facing catalog.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogId` | Required | `string` | The unique identifier of an unpublished catalog. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Note that this must be a client credentials token. |

<!-- Response - PCM-->

`201 Created`

```json
{
    "data": {
        "id": "fe68399b-5d9d-4afb-a7d0-621218bd3e9f",
        "type": "catalog-release",
        "attributes": {
            "hierarchies": [
                {
                    "id": "eb3bd9e6-857c-4886-bc3f-fcebd600ae22"
                }
            ],
            "catalog_id": "6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a",
            "description": "Catalog Configuration for PY Store",
            "name": "Ranges Catalog"
        },
        "meta": {
            "created_at": "2021-06-02T15:07:07.386Z",
            "release_status": "PUBLISHED"
        },
        "relationships": {
            "hierarchies": {
                "links": {
                    "related": "/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases/fe68399b-5d9d-4afb-a7d0-621218bd3e9f/hierarchies"
                }
            },
            "products": {
                "links": {
                    "related": "/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases/fe68399b-5d9d-4afb-a7d0-621218bd3e9f/products"
                }
            }
        }
    },
    "links": {
        "self": "/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
