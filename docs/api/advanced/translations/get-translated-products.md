---
id: get-translated-products
title: Get Translated Products by Language
sidebar_label: Get Translated Products
---

## `GET` Get all Products by preferred language

```http
https://api.moltin.com/v2/products
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Language` | Optional | `string` | The language code as defined in project settings. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": [
        {
            "type": "product",
            "id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
            "name": "nombre del producto",
            "slug": "crown",
            "sku": "CWLP100BLK",
            "manage_stock": true,
            "description": "descripción del producto",
            "price": [
                {
                    "amount": 47500,
                    "currency": "USD",
                    "includes_tax": true
                }
            ],
            "status": "live",
            "commodity_type": "physical",
            "meta": {
                "timestamps": {
                    "created_at": "2017-06-19T14:58:42+00:00",
                    "updated_at": "2018-04-10T09:12:05+00:00"
                },
                "display_price": {
                    "with_tax": {
                        "amount": 47500,
                        "currency": "USD",
                        "formatted": "$475.00"
                    },
                    "without_tax": {
                        "amount": 47500,
                        "currency": "USD",
                        "formatted": "$475.00"
                    }
                },
                "stock": {
                    "level": 500,
                    "availability": "in-stock"
                }
            },
            "relationships": {
                "files": {
                    "data": [
                        {
                            "type": "file",
                            "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
                        }
                    ]
                },
                "categories": {
                    "data": [
                        {
                            "type": "category",
                            "id": "a636c261-0259-4975-ac8e-77246ec9cfe0"
                        }
                    ]
                },
                "main_image": {
                    "data": {
                        "type": "main_image",
                        "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
                    }
                }
            },
            "material": null,
            "max_watt": null,
            "bulb_qty": null,
            "bulb": null,
            "new": null,
            "on_sale": null,
            "background_color": "#d9d9d9",
            "finish": "test"
        }
    ],
    "links": {
        "current": "https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0",
        "first": "https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0",
        "last": null
    },
    "meta": {
        "results": {
            "total": 10,
            "all": 10
        },
        "page": {
            "limit": 100,
            "offset": 0,
            "current": 1,
            "total": 1
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products \
    -H "Authorization: Bearer XXXX" \
    -H "X-Moltin-Language: es"
```

<!--END_DOCUSAURUS_CODE_TABS-->
