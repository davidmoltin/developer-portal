---
id: get-all-nodes
title: Get all Nodes
sidebar_label: Get all Nodes
---

## `GET` Get all Nodes

```text
https://api.moltin.com/catalog/nodes
```

Returns all nodes in the catalog.

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

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": [
        {
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "type": "node",
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
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/products"
                    }
                }
            }
        },
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
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/products"
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
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/d167d384-d2cf-4d05-ad41-6fc567855765"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/products"
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
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/products"
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
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/products"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/catalog/nodes?page[offset]=0&page[limit]=25&",
        "last": "/catalog/nodes?page[offset]=0&page[limit]=25&",
        "self": "/catalog/nodes"
    }
}
```

<!-- Response - V2 -->

`200 OK`

```json
{
    "data": [
        {
            "id": "16fdf604-b985-5294-b7b2-70b15530a934",
            "type": "node",
            "attributes": {
                "created_at": "0001-01-01T00:00:00.000Z",
                "label": "category",
                "name": "Categories",
                "status": "live",
                "updated_at": "0001-01-01T00:00:00.000Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/16fdf604-b985-5294-b7b2-70b15530a934/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "16fdf604-b985-5294-b7b2-70b15530a934",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/hierarchies/16fdf604-b985-5294-b7b2-70b15530a934"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/16fdf604-b985-5294-b7b2-70b15530a934/relationships/products"
                    }
                }
            }
        },
        {
            "id": "f8c8388f-4722-51ac-b7f7-2bb3fa2f9b9f",
            "type": "node",
            "attributes": {
                "created_at": "0001-01-01T00:00:00.000Z",
                "label": "brand",
                "name": "Brands",
                "status": "live",
                "updated_at": "0001-01-01T00:00:00.000Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/f8c8388f-4722-51ac-b7f7-2bb3fa2f9b9f/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "f8c8388f-4722-51ac-b7f7-2bb3fa2f9b9f",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/hierarchies/f8c8388f-4722-51ac-b7f7-2bb3fa2f9b9f"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/f8c8388f-4722-51ac-b7f7-2bb3fa2f9b9f/relationships/products"
                    }
                }
            }
        },
        {
            "id": "5f96c3b1-7f93-5c32-8c1e-196a0b7b0bea",
            "type": "node",
            "attributes": {
                "created_at": "0001-01-01T00:00:00.000Z",
                "label": "collection",
                "name": "Collections",
                "status": "live",
                "updated_at": "0001-01-01T00:00:00.000Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/5f96c3b1-7f93-5c32-8c1e-196a0b7b0bea/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "5f96c3b1-7f93-5c32-8c1e-196a0b7b0bea",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/hierarchies/5f96c3b1-7f93-5c32-8c1e-196a0b7b0bea"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/5f96c3b1-7f93-5c32-8c1e-196a0b7b0bea/relationships/products"
                    }
                }
            }
        },
        {
            "id": "578c2c68-8f07-408b-a054-f5055bf91d59",
            "type": "node",
            "attributes": {
                "created_at": "2020-08-25T14:29:52.000Z",
                "description": "Browse our clothing line",
                "label": "brand",
                "name": "Some Cool Clothing 15983657796369708986",
                "slug": "clothing",
                "status": "live",
                "updated_at": "2020-08-25T14:29:52.000Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/578c2c68-8f07-408b-a054-f5055bf91d59/relationships/children"
                    }
                },
                "parent": {
                    "data": {
                        "id": "f8c8388f-4722-51ac-b7f7-2bb3fa2f9b9f",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/f8c8388f-4722-51ac-b7f7-2bb3fa2f9b9f"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/578c2c68-8f07-408b-a054-f5055bf91d59/relationships/products"
                    }
                }
            }
        },
    ...
    ],
    "links": {
        "first": "/catalog/nodes?page[offset]=0&page[limit]=25&",
        "last": "/catalog/nodes?page[offset]=75&page[limit]=25&",
        "next": "/catalog/nodes?page[offset]=25&page[limit]=25&",
        "self": "/catalog/nodes"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/catalog/nodes \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Channel: web store" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
