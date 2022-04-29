---
id: update-a-price-modifier
title: Update a Price Book Modifier
sidebar_label: Update a Price Book Modifier
---

## `PUT` Update a Price Book by ID

```http
https://api.moltin.com/pcm/pricebooks/:pricebookId/modifiers/:modifierId
```

Updates the specified price book modifier.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the pricebook. |
| `modifierId` | Required | `string` | The ID of the modifier you want to update. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Required | Type | Description |
| --- | --- | --- | --- |
| `type` |Required| `string` | The type of resource object. You must use `price_modifier`. |
| `attributes.name` | Required| `string`| The name of the price modifier that you want to update.|
| `attributes.currencies`  | Required| [`object`](index.md#the-currencies-object) | The value of the price modifier. |


## Request Example

```bash
curl -X PUT https://api.moltin.com//pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/dde5425f-1b7b-457e-ba3c-accb0c089f3b
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
{
  "data": {
    "type": "price-modifier",
    "id": "dde5425f-1b7b-457e-ba3c-accb0c089f3b",
    "attributes": {
      "currencies": {
        "USD": {
          "amount": 100,
          "includes_tax": false,
          "tiers": {
            "min_5": {
              "minimum_quantity": 5,
              "amount": 80
            }
          }
        }
      }
    }
  }
}
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "dde5425f-1b7b-457e-ba3c-accb0c089f3b",
    "attributes": {
      "currencies": {
        "USD": {
          "amount": 100,
          "includes_tax": false,
          "tiers": {
            "min_5": {
              "amount": 80,
              "minimum_quantity": 5
            }
          }
        }
      },
      "modifier_type": "price_increment",
      "name": "large_supplement"
    },
    "type": "price-modifier"
  },
  "links": {
    "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/dde5425f-1b7b-457e-ba3c-accb0c089f3b"
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
