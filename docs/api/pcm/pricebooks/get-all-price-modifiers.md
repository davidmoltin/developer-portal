---
id: get-all-price-modifiers
title: Get all Price Modifiers
sidebar_label: Get all Price Modifiers
---

## `GET` Get a List of All Price Modifiers

```http
https://api.moltin.com/pcm/pricebooks/:pricebookId/modifiers
```

Retrieves a list of price modifiers for the specified price book.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the price book whose price modifiers you want to retrieve. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Key | Value |  Description |
| :--- | :--- | :--- |
| `page[limit]` |  *`n`* | *n* is the number of items to return per page. |
| `page[offset]` | *`n`* | *n* is the number of items to offset the results by. Offset is zero-based. |

## Request Example

```bash
curl GET 'https://api.moltin.com/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers' \
 -H "Authorization: Bearer XXXX"
```

## Response Example

`200 OK`

```json
{
  "data": [
    {
      "id": "54323af0-2b82-4d8a-97dc-eae178b82b0a",
      "attributes": {
        "currencies": {
          "USD": {
            "amount": 120000,
            "includes_tax": true,
            "tiers": {
              "min_5": {
                "amount": 100000,
                "minimum_quantity": 5
              }
            }
          }
        },
        "modifier_type": "price_equals",
        "name": "PriceEQM"
      },
      "type": "price-modifier"
    },
    {
      "id": "d7dc74fe-3620-4d91-a863-cd1b7fe2b4e4",
      "attributes": {
        "currencies": {
          "USD": {
            "amount": 55,
            "includes_tax": false,
            "tiers": {
              "min_5": {
                "amount": 50,
                "minimum_quantity": 5
              }
            }
          }
        },
        "modifier_type": "price_increment",
        "name": "modifier-2"
      },
      "type": "price-modifier"
    },
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
    "first": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?page[offset]=0&page[limit]=25&",
    "last": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers?page[offset]=0&page[limit]=25&",
    "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers"
  },
  "meta": {
    "page": {
      "current": 1,
      "limit": 25,
      "total": 3
    },
    "results": {
      "total": 3
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
