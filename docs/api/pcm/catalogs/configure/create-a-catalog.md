---
id: create-a-catalog
title: Create a Catalog
sidebar_label: Create a Catalog
---

## `POST` Create a Catalog

```text
https://api.moltin.com/pcm/catalogs
```

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use a client credentials token. |

### Body

A [`Catalog`](../index.md#the-catalog-object) object with one or more hierarchies of products and a price book.

| Attribute | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of object being returned. Always: `catalog` |
| `attributes.name` | Required | `string` | **PCM** The name of the catalog. |
| `attributes.description` | Required | `string` | A description of the catalog, such as the purpose for the catalog. |
| `attributes.hierarchy_ids` | Required | `[string]` | The unique identifiers of the hierarchies to associate with this catalog. |
| `attributes.pricebook_id` | Optional | `string` | The unique identifier of the price book to associate with this catalog. **Note**: You can create a catalog without a price book.|

## Request Example - Curl

```bash
curl -X POST https://api.moltin.com/pcm/catalogs \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "catalog",
            "attributes": {
                "name": "Catalog UK",
                "description" : "Catalog for the UK market.",
                "pricebook_id": "9b665e9a-fcb8-436b-a120-3d57979421dd",
                "hierarchy_ids": [
                    "132dd6e7a-2692-4d5a-b8ed-48e243b64c49",
                    "15ea837d-eeb1-4168-a6f8-e8cf9b665e9a"
                ]
            },
            "links": {
                "self": "string"
            }
        }
    }'
```

### Response example

`201 Created`

```json
{
    "data": {
        "attributes": {
            "created_at": "2021-03-02T20:45:27.931Z",
            "description": "Catalog for the UK market.",
            "hierarchy_ids": [
                "132dd6e7a-2692-4d5a-b8ed-48e243b64c49",
                "15ea837d-eeb1-4168-a6f8-e8cf9b665e9a"
            ],
            "name": "Catalog UK",
            "pricebook_id": "9b665e9a-fcb8-436b-a120-3d57979421dd",
            "updated_at": "2021-03-02T20:45:27.931Z"
        },
        "id": "8caf81b8-9bc7-4b72-92fc-3775722aa06a",
        "type": "catalog"
    },
    "links": {
        "self": "/pcm/catalogs/8caf81b8-9bc7-4b72-92fc-3775722aa06a"
    }
}
```
