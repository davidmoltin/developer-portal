---
id: get-all-hierarchies
title: Get all Hierarchies
sidebar_label: Get all Hierarchies
---

## `GET` Get all Hierarchies

```text
https://api.moltin.com/catalog/hierarchies
```

Returns all hierarchies from the catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](../../index.md#resolving-catalog-rules).

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. The Implicit Bearer token returns only resources with the `live` status. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |

**Query Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `string` | The number of items to return per page. Minimum value is `1`. |
| `page[offset]` | Optional | `string` | The number of items to offset the results by. Offset is zero-based. |

<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "type": "hierarchy",
            "attributes": {
                "created_at": "2021-03-05T21:45:28.395Z",
                "description": "Free-standing appliances",
                "name": "Major Appliances",
                "slug": "Major-Appliances-MA0",
                "updated_at": "2021-03-05T22:15:44.684Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                    }
                },
                "nodes": {
                    "links": {
                        "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products"
                    }
                }
            }
        },
        {
            "id": "4a5a476e-f28d-491f-95d7-86e53f05daf9",
            "type": "hierarchy",
            "attributes": {
                "created_at": "2021-03-05T21:55:39.042Z",
                "description": "Counter-top appliances",
                "name": "Small Appliances",
                "slug": "Small-Appliances-SA0",
                "updated_at": "2021-03-05T22:13:55.756Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/children"
                    }
                },
                "nodes": {
                    "links": {
                        "related": "/catalog/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/nodes"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/products"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/catalog/hierarchies?page[offset]=0&page[limit]=25&",
        "last": "/catalog/hierarchies?page[offset]=0&page[limit]=25&",
        "self": "/catalog/hierarchies"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/catalog/hierarchies \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Channel: web store" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
