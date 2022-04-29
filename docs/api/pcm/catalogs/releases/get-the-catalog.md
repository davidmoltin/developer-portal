---
id: get-the-catalog
title: Get the Catalog
sidebar_label: Get the Catalog
---

## `GET` Get the Catalog

```text
https://api.moltin.com/catalog
```

Retrieves details about the published catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](../index.md#resolving-catalog-rules).

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |

<!-- Response - PCM-->

`200 OK`

```json
{
    "data": {
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
            "published_at": "2021-04-13T02:18:16.450Z"
        },
        "relationships": {
            "hierarchies": {
                "links": {
                    "related": "/catalog/hierarchies"
                }
            },
            "products": {
                "links": {
                    "related": "/catalog/products"
                }
            }
        }
    },
    "links": {
        "self": "/catalog"
    }
}
```

<!-- Response - V2 -->

`200 OK`

```json
{
    "data": {
        "id": "15ea9633-278c-4807-80f7-2009fed63c7e",
        "type": "catalog-release",
        "attributes": {
            "hierarchies": [
                {
                    "id": "f8c8388f-4722-51ac-b7f7-2bb3fa2f9b9f",
                    "label": "brand",
                    "name": "Brands"
                },
                {
                    "id": "16fdf604-b985-5294-b7b2-70b15530a934",
                    "label": "category",
                    "name": "Categories"
                },
                {
                    "id": "5f96c3b1-7f93-5c32-8c1e-196a0b7b0bea",
                    "label": "collection",
                    "name": "Collections"
                }
            ],
            "published_at": "0001-01-01T00:00:00.000Z"
        },
        "relationships": {
            "hierarchies": {
                "links": {
                    "related": "/catalog/hierarchies"
                }
            },
            "products": {
                "links": {
                    "related": "/catalog/products"
                }
            }
        }
    },
    "links": {
        "self": "/catalog"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/catalog \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Channel": "web store" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
