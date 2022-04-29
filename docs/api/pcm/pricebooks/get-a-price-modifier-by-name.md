---
id: get-a-price-modifier-by-name
title: Get a Price Book Modifier By Name
sidebar_label: Get a Price Book Modifier By Name
---

## `GET` a Price Book Modifier By Name

```http
https://api.moltin.com/pcm/pricebooks/:pricebookId/modifiers?filter=eq(name,modifiername)
```

Retrieves a price book modifier by name, using a filter expression.

:::important
You can only have a maximum of 10 filters in a single request.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the pricebook. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Filter expression

| Operation | Operator | Value | Description |
| --- | --- | --- | --- |
| Equality | `eq` | `(name, modifiername)` | The `modifiername` is the name of the modifier that you want to retrieve. For example, `?filter=eq(name, large_supplement)`  |

See [Filtering](../../../api/basics/filtering.md) for more information about filtering in Elastic Path Commerce Cloud.

## Request Example

```bash
curl GET https://api.moltin.com/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?filter=eq(name,large_supplement)
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "dde5425f-1b7b-457e-ba3c-accb0c089f3b",
            "attributes": {
                "currencies": {
                    "USD": {
                        "amount": 99,
                        "includes_tax": false
                    }
                },
                "modifier_type": "price_increment",
                "name": "large_supplement"
            },
            "type": "price-modifier"
        }
    ],
    "links": {
        "first": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?filter=eq(name,large_supplement)&page[offset]=0&page[limit]=25&",
        "last": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?filter=eq(name,large_supplement)&page[offset]=0&page[limit]=25&",
        "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?filter=eq(name,large_supplement)&"
    },
    "meta": {
        "page": {
            "current": 1,
            "limit": 25,
            "total": 1
        },
        "results": {
            "total": 1
        }
    }
}
```

## Related Resources

### Concepts

- [PCM Products](../../../concepts/products-pcm.md)

### APIs

- [PCM Products API](../../../api/pcm/products/index.md)
- [Create Variations](../../../api/pcm/products/variations/create-variation.md)
- [Create Modifiers](../../../api/pcm/products/options/modifiers/modifier-crud.md)
- [Build Child Products](../../../api/pcm/products/build-child-products.md)

### How-to guides

- [Generate product variations](../../../developer/how-to/generate-pcm-variations.md)
