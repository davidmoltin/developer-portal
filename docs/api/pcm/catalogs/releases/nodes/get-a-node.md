---
id: get-a-node
title: Get a Node
sidebar_label: Get a Node
---

## `GET` Get a Node

```text
https://api.moltin.com/catalog/nodes/:nodeId
```

Returns a node from the catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog to retrieve. For information about how catalog rules are matched, see [Resolving Catalog Rules](../../index.md#resolving-catalog-rules).

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `nodeId` | Required | `string` | The unique identifier of a hierarchy node. |

 **Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |

<!--Response - PCM-->

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
                    "related": "/catalog/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/children"
                }
            },
            "hierarchy": {
                "data": {
                    "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                    "type": "hierarchy"
                },
                "links": {
                    "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                }
            },
            "parent": {
                "data": {
                    "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                    "type": "node"
                },
                "links": {
                    "related": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                }
            },
            "products": {
                "links": {
                    "related": "/catalog/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/products"
                }
            }
        }
    },
    "links": {
        "self": "/catalog/nodes/39f96a3f-5577-473f-a263-f21fb2013469"
    }
}
```

<!-- Response - V2 -->

`200 OK`

```json
{
    "data": {
        "id": "0a450e04-d8a4-4f12-a800-1ad10a18d636",
        "type": "node",
        "attributes": {
            "created_at": "2020-08-27T23:50:48.000Z",
            "description": "Browse our clothing line",
            "label": "brand",
            "name": "Some Cool Clothing 15985721875809226256",
            "slug": "clothing",
            "status": "live",
            "updated_at": "2020-08-27T23:50:48.000Z"
        },
        "relationships": {
            "children": {
                "links": {
                    "related": "/catalog/nodes/0a450e04-d8a4-4f12-a800-1ad10a18d636/relationships/children"
                }
            },
            "products": {
                "links": {
                    "related": "/catalog/nodes/0a450e04-d8a4-4f12-a800-1ad10a18d636/relationships/products"
                }
            }
        }
    },
    "links": {
        "self": "/catalog/nodes/0a450e04-d8a4-4f12-a800-1ad10a18d636"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/catalog/nodes/39f96a3f-5577-473f-a263-f21fb2013469 \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Channel: web store" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
