---
id: pagination
title: Pagination
sidebar_label: Pagination
---

You can use pagination to move through pages of API call results for most top-level endpoints. Use the query parameters `page[offset]` and `page[limit]` to enable pagination in the response. You must use integers for both parameters. The API response with pagination provides following information:

- The `page` attribute includes the following information about the current page:

    - `page[limit]`: The maximum number of records per page for this response. You can set this value up to 100.
    - `page[offset]`: The current offset by number of records, not pages. Offset is zero-based.
    - `page[current]`: The current page.
    - `page[total]`: The total page count.

- The `results` attribute includes complete information about the result, and includes `total`, which is the total number of results after applying filters, if any, or all results.

Even if the result is zero, pagination fields are always included in the response. The resources that support pagination are:

- `brands`
- `carts`
- `categories`
- `collections`
- `customers`
- `files`
- `flows/:slug/entries`
- `inventory`
- `orders`
- `products`

:::note Pagination Limitations

- By default, page length is set to `25`. This value was previously set to `100`, and older stores might still have the old default setting. You can adjust this setting globally for your project using the [settings endpoint](../advanced/settings/index.md) or override the setting in any single call. The maximum page length is set to `100` for any paginated call.
- Requests to `/v2/orders` and `/v2/files` have a hard offset limit of `10,000` records.
- Requests to other endpoints have a soft offset limit of `10,000` records.

:::

Pagination is also supported within [JavaScript SDK](../../developer/get-started/sdk.md).

## `GET` the product list in the third page of the product

If an API call is set to return 100 products per page, and if you want to view the third page of the product, then set the `offset` to 200 so that the first two pages are ignored and the third page is displayed.

```http
https://api.moltin.com/v2/products?page[limit]=100&page[offset]=200
```

## `GET` all categories and return 2 categories page

```http
https://api.moltin.com/v2/categories?page[limit]=2
```

### Parameters

#### Query parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `page[limit]` | Optional | `number` | The number of records per page. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl -g -X GET https://api.moltin.com/v2/products?page[limit]=2 \
     -H "Authorization: Bearer XXXX"
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.Limit(2)
  .All()
  .then(products => {
    // Do something
  })
```

### Response example

`200 OK`

```json
{
    "data": [
        {
            "id": "521e6029-0e0e-4704-b9a5-9777047ada04",
            "type": "category",
            "status": "live",
            "name": "Bright",
            "slug": "bright",
            "description": "Bright Category",
            "meta": {
                "timestamps": {
                    "created_at": "2018-02-05T11:19:08+00:00",
                    "updated_at": "2018-03-29T10:34:13+00:00"
                }
            },
            "relationships": {
                "products": {
                    "data": [
                        {
                            "type": "product",
                            "id": "41c84c63-4d5e-4135-979f-e4b681b83dcc"
                        },
                        {
                            "type": "product",
                            "id": "bf8a9d62-6ca9-45f6-85eb-f0d1d9ae7fdd"
                        },
                        {
                            "type": "product",
                            "id": "36c21093-8996-4a9d-aacb-bf061f0769ed"
                        }
                    ]
                }
            },
            "background_color": "#ded7cb",
            "background_image": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/61118f21-14a2-466c-a84b-c30b1f900cf9.png"
        },
        {
            "id": "65c036ce-c13b-4c05-89d5-9a47b9763935",
            "type": "category",
            "status": "live",
            "name": "Silver",
            "slug": "Silver",
            "description": "Silver Category",
            "meta": {
                "timestamps": {
                    "created_at": "2017-07-31T20:25:44+00:00",
                    "updated_at": "2018-02-05T11:31:52+00:00"
                }
            },
            "relationships": {
                "products": {
                    "data": [
                        {
                            "type": "product",
                            "id": "2bc131a2-9cca-4a04-b40c-b19f773a1354"
                        },
                        {
                            "type": "product",
                            "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe"
                        }
                    ]
                }
            },
            "background_color": "#dadada",
            "background_image": "https://files-eu.epusercontent.com/e8c53cb0-120d-4ea5-8941-ce74dec06038/ca9dd645-638c-4dfa-9a60-1fa544d125fd.png"
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/categories?page[limit]=2&page[offset]=0",
        "first": "https://api.moltin.com/v2/categories?page[limit]=2&page[offset]=0",
        "last": "https://api.moltin.com/v2/categories?page[limit]=2&page[offset]=2",
        "prev": null,
        "next": "https://api.moltin.com/v2/categories?page[limit]=2&page[offset]=2"
    },
    "meta": {
        "results": {
            "total": 2,
            "all": 4
        },
        "page": {
            "limit": 2,
            "offset": 0,
            "current": 1,
            "total": 2
        }
    }
}
```

## `GET` Example: Get products from page 21 to page 30

```http
https://api.moltin.com/v2/products?page[limit]=10&page[offset]=20
```

Use `page[offset]` to get additional pages for your content.

### Parameters

#### Query parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `page[offset]` | Optional | `number` | The number of records to offset the results by. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl -g -X GET https://api.moltin.com/v2/products?page[limit]=10&page[offset]=20 \
     -H "Authorization: Bearer XXXX"
```

#### Java SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.Limit(10)
  .Offset(20)
  .All()
  .then(products => {
    // Do something
  })
```

### Response example

`200 OK`

```json
{
    "data": [
        {
            "id": "65c036ce-c13b-4c05-89d5-9a47b9763935",
            "type": "category",
            "status": "live",
            "name": "Silver",
            "slug": "Silver",
            "description": "Silver Category",
            "meta": {
                "timestamps": {
                    "created_at": "2017-07-31T20:25:44+00:00",
                    "updated_at": "2018-02-05T11:31:52+00:00"
                }
            },
            "relationships": {
                "products": {
                    "data": [
                        {
                            "type": "product",
                            "id": "2bc131a2-9cca-4a04-b40c-b19f773a1354"
                        },
                        {
                            "type": "product",
                            "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe"
                        }
                    ]
                }
            },
            "background_color": "#dadada",
            "background_image": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/ca9dd645-638c-4dfa-9a60-1fa544d125fd.png"
        },
        {
            "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd",
            "type": "category",
            "status": "live",
            "name": "Modern",
            "slug": "modern",
            "description": "Modern Category",
            "meta": {
                "timestamps": {
                    "created_at": "2017-06-26T11:17:21+00:00",
                    "updated_at": "2018-02-05T11:26:12+00:00"
                }
            },
            "relationships": {
                "products": {
                    "data": [
                        {
                            "type": "product",
                            "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df"
                        },
                        {
                            "type": "product",
                            "id": "4cdb1d36-19ee-48b2-a7c7-f3d4350ee45a"
                        },
                        {
                            "type": "product",
                            "id": "001b9188-3959-4269-aaf6-e4a74f8607b8"
                        }
                    ]
                }
            },
            "background_color": "#e2d1bf",
            "background_image": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/e490fd98-2439-46ef-88e6-20629d3bd269.png"
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/categories?page[limit]=2&page[offset]=1",
        "first": "https://api.moltin.com/v2/categories?page[limit]=2&page[offset]=0",
        "last": "https://api.moltin.com/v2/categories?page[limit]=2&page[offset]=3",
        "prev": null,
        "next": "https://api.moltin.com/v2/categories?page[limit]=2&page[offset]=3"
    },
    "meta": {
        "results": {
            "total": 2,
            "all": 4
        },
        "page": {
            "limit": 2,
            "offset": 1,
            "current": 1,
            "total": 2
        }
    }
}
```
