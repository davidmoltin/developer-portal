---
id: get-a-hierarchys-nodes
title: Get a Hierarchyʼs Nodes
sidebar_label: Get a Hierarchyʼs Nodes
---

## `GET` Get the Nodes in a Hierarchy

```text
https://api.moltin.com/catalog/hierarchies/latest/nodes
```

Returns all the nodes except the root node for the specified hierarchy.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](../../index.md#resolving-catalog-rules).

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of a hierarchy. |

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
        {
            "id": "55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-08T17:33:36.070Z",
                "description": "Electric stoves and ovens",
                "name": "Electric Ranges",
                "slug": "Electric-Ranges-MA2",
                "updated_at": "2021-03-08T17:33:36.070Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/children"
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
                        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/d167d384-d2cf-4d05-ad41-6fc567855765"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/products"
                    }
                }
            }
        },
        {
            "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-05T22:29:30.433Z",
                "description": "Electric stoves and ovens updated",
                "name": "Electric Ranges",
                "slug": "Electric-Ranges-MA2",
                "updated_at": "2021-03-05T22:52:23.569Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/relationships/children"
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
                        "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/relationships/products"
                    }
                }
            }
        },
        {
            "id": "de3c3590-4138-4943-b04d-d7b7dc48fa54",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-11T21:22:55.262Z",
                "description": "Gas stoves and ovens",
                "name": "Gas Ranges",
                "slug": "Gas-Ranges-MA2",
                "updated_at": "2021-03-12T22:11:08.709Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/children"
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
                        "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/products"
                    }
                }
            }
        },
        {
            "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-05T21:48:32.874Z",
                "description": "All stoves and ovens",
                "name": "Ranges",
                "slug": "Ranges-MA1",
                "updated_at": "2021-03-05T21:48:32.874Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/children"
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
                        "related": "/catalog/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/products"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes?page[offset]=0&page[limit]=25&",
        "last": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes?page[offset]=0&page[limit]=25&",
        "self": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Channel: web store" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
