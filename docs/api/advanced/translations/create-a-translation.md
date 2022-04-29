---
id: create-a-translation
title: Create a Translation
sidebar_label: Create a Translation
---

## `PUT` Create a Translation

```http
https://api.moltin.com/v2/products/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the product you want to update. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `X-Moltin-Language` | Required | `string` | The language code defined in project settings. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | `string` | The translated `description` value. |
| `name` | Optional | `string` | The translated `name` value. |
| `id` | Required | `string` | The Product ID. |
| `type` | Required | `string` | Always `product`. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "type": "product",
        "id": "67b482da-e9db-4eb1-b279-f63989017a66",
        "name": "nombre del producto",
        "slug": "producto",
        "sku": "PROD-001",
        "manage_stock": true,
        "description": "descripción del producto",
        "price": [
            {
                "amount": 2000,
                "currency": "USD",
                "includes_tax": false
            }
        ],
        "status": "live",
        "commodity_type": "physical",
        "meta": {
            "timestamps": {
                "created_at": "2019-07-03T09:01:28+00:00",
                "updated_at": "2019-07-03T09:03:04+00:00"
            },
            "display_price": {
                "with_tax": {
                    "amount": 2000,
                    "currency": "USD",
                    "formatted": "$20.00"
                },
                "without_tax": {
                    "amount": 2000,
                    "currency": "USD",
                    "formatted": "$20.00"
                }
            },
            "stock": {
                "level": 0,
                "availability": "out-stock"
            }
        },
        "relationships": {}
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/products/:id \
    -H "Authorization: Bearer XXXX" \
    -H "X-Moltin-Language: es" \
    -H "Content-Type: application/json" \
    -d $'{
      "data": {
        "type": "product",
        "id": "{PRODUCT_ID}",
        "slug": "producto",
        "name": "nombre del producto",
        "description": "descripción del producto"
      }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

:::warning
If the requested language does not have a translation available, the default language is returned.
:::
