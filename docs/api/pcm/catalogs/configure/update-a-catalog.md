---
id: update-a-catalog
title: Update a Catalog
sidebar_label: Update a Catalog
---

## `PUT` Update a Catalog

```text
https://api.moltin.com/pcm/catalogs/:catalogId
```

Updates an existing catalog. This operation performs a sparse update. Only those catalog fields included in the request body are updated.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogId` | Required | `string` | The unique identifier of a catalog. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |

**Body**:

Required. A [`Catalog`](../index.md#the-catalog-object) object with the attributes you want to update.

| Attribute | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The same `catalogId` that you specify in the path. |
| `type` | Required | `string` | The type of object being returned. Always: `catalog` |
| `attributes.name` | Optional | `string` | The name of the catalog. |
| `attributes.description` | Required | `string` | A description of the catalog, such as the purpose for the catalog. |
| `attributes.hierarchy_ids` | Optional | `[string]` | The unique identifiers of the hierarchies to associate with this catalog. |
| `attributes.pricebook_id` | Optional | `string` | The unique identifier of the price book to associate with this catalog. |

<!-- Response - PCM-->

`200 OK`

```json
{
    "data": {
        "attributes": {
            "created_at": "2021-03-02T19:43:11.817Z",
            "description": "Catalog for the Canadian market.",
            "hierarchy_ids": [
                "xybdd6e7a-2692-4d5a-b8ed-48e243b64c49",
                "xyca837d-eeb1-4168-a6f8-e8cf9b665e9a"
            ],
            "name": "Catalog for Canadian market",
            "pricebook_id": "xya77ce0-fcb8-436b-a120-3d57979421dd",
            "updated_at": "2021-03-02T20:43:44.564Z"
        },
        "id": "a2a69ad2-85cd-4fb1-8e2b-d621bf915a15",
        "type": "catalog"
    },
    "links": {
        "self": "/pcm/catalogs/a2a69ad2-85cd-4fb1-8e2b-d621bf915a15"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/pcm/catalogs/a2a69ad2-85cd-4fb1-8e2b-d621bf915a15 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "id": "a2a69ad2-85cd-4fb1-8e2b-d621bf915a15",
            "type": "catalog",
            "attributes": {
                "name": "Catalog for Canadian market"
            }
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
