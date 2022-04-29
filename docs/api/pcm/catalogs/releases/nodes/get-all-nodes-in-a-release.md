---
id: get-all-nodes-in-a-release
title: Get all Nodes in the Latest Release
sidebar_label: Get all Nodes
---

## `GET` Get all Nodes from a Catalog Release

```text
https://api.moltin.com/pcm/catalogs/:catalogId/releases/latest/nodes
```

Returns the child nodes from a published catalog.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

:::important
Use `releaseId` to delete a specific release than the latest catalog.
:::

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogId` | Required | `string` | The unique identifier of the catalog. |
| `releaseId` | Required | `string` | The unique identifier of a published release of the catalog or `latest` for the most recently published version. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. The Implicit Bearer token returns only resources with the `live` status. |

### Query Parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `string` | The number of items to return per page. Minimum value is `1`. |
| `page[offset]` | Optional | `string` | The number of items to offset the results by. Offset is zero-based. |

## Request

```bash
curl -X GET https://api.moltin.com/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes \
     -H "Authorization: Bearer XXXX" \
```

## Response

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
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/products"
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
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "node"
                    },
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/products"
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
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
                        "type": "node"
                    },
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/d167d384-d2cf-4d05-ad41-6fc567855765"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/products"
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
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
                        "type": "node"
                    },
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/products"
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
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "node"
                    },
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "products": {
                    "links": {
                        "related": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/aea233e7-1300-48ce-9b45-7d0c0b60dde3/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/products"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes?page[offset]=0&page[limit]=25&",
        "last": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes?page[offset]=0&page[limit]=25&",
        "self": "/pcm/catalogs/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/nodes"
    }
}
```
