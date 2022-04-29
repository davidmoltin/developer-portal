---
id: create-a-price-modifier
title: Create a Price Book Modifier
sidebar_label: Create a Price Book Modifier
---

## `POST` a Price Book Modifier

```http
https://api.moltin.com/pcm/pricebooks/:pricebookId/modifiers/
```

You can use price modifiers to change the price property of child products. By default, child products inherit the same price as their base products. Using price modifiers, you can enable child products to inherit a different price. This enables you to configure the price of child products, for example, to be lower than its base product, without having to individually update the price of your child products. There are three types of price modifier.

Modifier | Data Type | Effect |
| :--- | :--- | :--- |
| `price_increment` | `string` | Increases the price of a product. |
| `price_decrement` | `string` | Decreases the price of a product. |
| `price_equals` | `string` | Sets the price of a product to the amount you specify. |

The following is an overview of the steps you need to follow to use price modifiers.

1. Create a price modifier. You must give the price modifier a unique name. Price modifier names are case sensitive.
1. Create a product modifier that uses the same name as the price modifier. For more information, see [Create Modifiers](../../../api/pcm/products/options/modifiers/modifier-crud.md).
1. Build your child products with the new product modifier. For more information, see [Build Child Products](../../../api/pcm/products/build-child-products.md).

Once your child products are built, you can publish them in your catalog.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `pricebookId` | Required | `string` | The ID of the pricebook. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Attribute | Required | Type | Description |
| --- | --- | --- | --- |
| `type` |Required| `string` | The type of resource object. You must use `modifier`. |
| `attributes.name` | Required| `string`| A name for the modifier.|
| `attributes.modifier_type` | Required |`string` | The type of modifier, such as, `price_increment`, `price_decrement`, or, `price_equals`. |
| `attributes.currencies`  | Required| [`object`](index.md#the-currencies-object) | The value of the price modifier. |

## Request Example Using Price Equals

```bash
curl -X POST https://api.moltin.com/pcm/pricebooks/2d65a2e6-70e7-489e-b8ab-52367703aa03/modifiers
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
     {
         "data": {
           "type": "price-modifier",
           "attributes": {
               "name": "PriceEQ",
                "modifier_type": "price_equals",
             "currencies": {
               "USD": {
                 "amount": 3500,
                 "includes_tax": false
        }
      },
    },
  },
}
```

## Response Example Using price_equals

`200 OK`

```json
{
  "data": {
    "id": "435ec8c4-32a3-41bf-82e6-843f2bda1f7a",
    "type": "price-modifier",
    "attributes": {
        "name": "PriceEQ",
         "modifier_type": "price_equals",
      "currencies": {
        "USD": {
          "amount": 3500,
          "includes_tax": false
        }
      },
    },
  },
  "links": {
    "self": "/pcm/pricebooks/2d65a2e6-70e7-489e-b8ab-52367703aa03/modifiers/435ec8c4-32a3-41bf-82e6-843f2bda1f7a"
  }
}
```

## Request Example Using price_increment

```bash
curl -X POST https://api.moltin.com/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
     {
         "data": {
           "type": "price-modifier",
           "attributes": {
               "name": "large_supplement",
                "modifier_type": "price_increment",
             "currencies": {
               "USD": {
                 "amount": 99,
                 "includes_tax": false
        }
      },
    },
  },
}
```

## Response Example Using price_increment

`200 OK`

```json
{
    "data": {
        "id": "553f71f9-410b-4c09-b41a-963e541cd48d",
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
    },
    "links": {
        "self": "/pcm/pricebooks/fe3f3f4c-bf36-44fc-9af6-e460276b2a45/modifiers/553f71f9-410b-4c09-b41a-963e541cd48d"
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
