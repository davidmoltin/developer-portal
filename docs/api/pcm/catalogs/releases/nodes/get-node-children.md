---
id: get-node-children
title: Get a Nodeʼs Children
sidebar_label: Get a Nodeʼs Children
---

## `GET` Get a Nodeʼs Children

```text
https://api.moltin.com/catalog/nodes/:nodeId/relationships/children
```

Returns the child nodes for a node in the catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](../../index.md#resolving-catalog-rules).

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

**Query Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `string` | The number of items to return per page. Minimum value is `1`. |
| `page[offset]` | Optional | `string` | The number of items to offset the results by. Offset is zero-based. |

<!-- Response - PCM-->

`200 OK`

```json
{
    "data": [
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
        }
    ],
    "links": {
        "first": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children?page[offset]=0&page[limit]=25&",
        "last": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children?page[offset]=0&page[limit]=25&",
        "self": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children"
```

<!-- Response - V2 -->

`200 OK`

```json
{
    "data": [
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
        {
            "id": "96ca0f71-f177-450d-8c6a-4c3001c72056",
            "type": "node",
            "attributes": {
                "created_at": "2020-08-27T22:57:11.000Z",
                "description": "Browse our clothing line",
                "label": "brand",
                "name": "Some Cool Clothing 15985690313868111430",
                "slug": "clothing",
                "status": "live",
                "updated_at": "2020-08-27T22:57:11.000Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/96ca0f71-f177-450d-8c6a-4c3001c72056/relationships/children"
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
                        "related": "/catalog/nodes/96ca0f71-f177-450d-8c6a-4c3001c72056/relationships/products"
                    }
                }
            }
        },
        {
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
                        "related": "/catalog/nodes/0a450e04-d8a4-4f12-a800-1ad10a18d636/relationships/products"
                    }
                }
            }
        },
        {
            "id": "c86d6a68-383e-44ff-92e0-3441f5484f34",
            "type": "node",
            "attributes": {
                "created_at": "2020-11-06T18:48:36.772Z",
                "description": "Brand 0 description",
                "label": "brand",
                "name": "Brand 0",
                "slug": "brand0",
                "status": "live",
                "updated_at": "2020-11-06T18:48:59.424Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/c86d6a68-383e-44ff-92e0-3441f5484f34/relationships/children"
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
                        "related": "/catalog/nodes/c86d6a68-383e-44ff-92e0-3441f5484f34/relationships/products"
                    }
                }
            }
        },
        {
            "id": "58e0e495-f68e-46db-b030-cf7080d95cf9",
            "type": "node",
            "attributes": {
                "created_at": "2020-11-06T18:48:36.923Z",
                "description": "Brand 1 description",
                "label": "brand",
                "name": "Brand 1",
                "slug": "brand1",
                "status": "live",
                "updated_at": "2020-11-06T18:48:46.123Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/58e0e495-f68e-46db-b030-cf7080d95cf9/relationships/children"
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
                        "related": "/catalog/nodes/58e0e495-f68e-46db-b030-cf7080d95cf9/relationships/products"
                    }
                }
            }
        }
        ...
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children \
     -H "Authorization: Bearer XXXX" \
     -H "EP-Channel: web store" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
