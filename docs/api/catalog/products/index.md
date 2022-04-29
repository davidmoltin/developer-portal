---
id: index
title: Products
sidebar_label: Products
---

:::tip An enhanced service is available!
If you are creating a new store, use the Product Content Management APIs instead of this API. For information about Product Content Management and links to the APIs, see [Product Content Management](../../../concepts/product-content-management.md). For information about services that are superseded by newer services, see [Legacy Services](../../../api/index.md#legacy-services).
:::

Products are the core resource to any Commerce Cloud project. They can be associated by category, collection, brands, and more.

Product inventory is managed separately. If you want to increment and allocate stock levels, see the [Product Inventory API](../../inventory/index.md).

Products with a **`live`** status are only returned when requesting via [implicit](../../basics/authentication/implicit-token.md) authentication.

## The Product object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this product. |
| `type` | `string` | Represents the type of object being returned This is always `product`. |
| `name` | `string` | A human readable name for this product. |
| `slug` | `string` | A human readable slug value. Must be unique. |
| `sku` | `string` | A unique SKU value. |
| `manage_stock` | `boolean` | This should be `true` if you want to use the Inventory API to manage stock. |
| `description` | `string` | A human readable description of the product. |
| `price` | [`array[object]`](#the-price-object) | An array of prices for this product in different currencies. See also [The price object](#the-price-object). |
| `status` | `string` | `live` or `draft` |
| `commodity_type` | `string` | `physical` or `digital` |
| `meta` | [`object`](#the-meta-object) | Additional information calculated for this product. |
| `weight` | [`object`](#the-weight-object) | The weight of the object, if physical, with unit specified. Optional. |
| `relationships` | [`object`](#the-relationships-object) | Related resources.  |

<!--Sample Object-->

```javascript
{
  "data": {
    "type": "product",
    "id": "6837058c-ae42-46db-b3c6-7f01e0c34b40",
    "name": "Deck Shoe",
    "slug": "deck-shoe",
    "sku": "deck-shoe-001",
    "manage_stock": true,
    "description": "Modern boat shoes were invented in 1935 by American Paul A. Sperry of New Haven, Connecticut after noticing his dog's ability to run easily over ice without slipping. Using a knife, he cut siping into his shoes' soles, inspiring a shoe perfect for boating and a company called Sperry Top-Sider.",
    "price": [
      {
        "amount": 5891,
        "currency": "USD",
        "includes_tax": true
      }
    ],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-08-25T09:36:14+00:00",
        "updated_at": "2017-08-25T09:36:14+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 5891,
          "currency": "USD",
          "formatted": "$58.91"
        },
        "without_tax": {
          "amount": 5891,
          "currency": "USD",
          "formatted": "$58.91"
        }
      },
      "stock": {
        "level": 31,
        "availability": "in-stock"
      },
      "variation_matrix": []
    },
    "relationships": {
        "categories": {
            "data": [
                {
                    "type": "category",
                    "id": "8550c943-85c2-4239-a8a4-bfa255a38f08"
                }
            ]
        },
        "brands": {
            "data": [
                {
                    "type": "brand",
                    "id": "c2c16959-5dfa-4ce8-a122-28523c04c0a2"
                }
            ]
        },
        "collections": {
            "data": [
                {
                    "type": "collection",
                    "id": "ced85f3a-f1d2-47b5-ada5-bcbc43eb59eb"
                }
            ]
        },
        "files": {
            "data": [
                {
                    "type": "file",
                    "id": "f1a384bc-e77b-4fe7-9cdd-ec82095f2769"
                }
            ]
        },
        "main_image": {
            "data": {
                "type": "main_image",
                "id": "54ef64a7-8a43-4398-acf2-66aa3c038136"
            }
        }
    }
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## The `price` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `price[].amount` | `integer` | Value of the price in the lowest denomination for that currency. |
| `price[].currency` | `string` | Currency code of this price (3 letter ISO). |
| `price[].includes_tax` | `boolean` | `true` if relevant taxes have been included in the price `false` if not. |

## The `weight` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `weight.unit` | `string` | Unit of weight. One of `g` (grams), `kg` (kilograms), `lb` (pounds), or `oz` (ounces). |
| `weight.value` | `number` | Weight of the product. |

You need only populate one weight unit/value combination. The rest are calculated for you.

:::note
The weight object is not returned in an API call until it is created. After that point, even if the weight value is set to zero, it is still returned.
:::

## The `meta` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.timestamps` | `object` | Timestamps for this product. |
| `meta.timestamps.created_at` | `string` | The creation date of this product. |
| `meta.timestamps.updated_at` | `string` | The last updated date of this product. |
| `meta.stock` | `object` | Stock information for this product. |
| `meta.stock.level` | `string` | The stock level for this product. |
| `meta.stock.availability` | `string` | `in-stock` or `out-stock` |
| `meta.display_price` | `object` | Formatted display prices based on the currency settings for this request. |
| `meta.display_price.with_tax` | `object` | Tax inclusive prices for this product. |
| `meta.display_price.with_tax.amount` | `integer` | The raw total of this product (includes tax). |
| `meta.display_price.with_tax.currency` | `string` | The currency this display price has been formatted for. |
| `meta.display_price.with_tax.formatted` | `string` | The tax-inclusive formatted total based on the currency. |
| `meta.display_price.without_tax` | `object` | Tax-exclusive prices for this product. |
| `meta.display_price.without_tax.amount` | `integer` | The raw total of this product (excludes tax). |
| `meta.display_price.without_tax.currency` | `string` | The currency this display price has been formatted for. |
| `meta.display_price.without_tax.formatted` | `string` | The tax exclusive formatted total based on the currency. |
| `meta.variations` | `array[object]` | An array of variations attached to this product. |
| `meta.variations.id` | `string` | The variation ID. |
| `meta.variations.name` | `string` | The variation name. |
| `meta.variations.options` | `array[object]` | An array of options attached to this variation. |
| `meta.variations.options.name` | `string` | The variation name. |
| `meta.variations.options.description` | `string` | A description of the option. |
| `meta.variation_matrix` | `object` | A matrix of option IDs to child product IDs. |

:::warning
The variations matrix is only returned when getting a product by ID
:::

## The `relationships` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `relationships.variations` | `object` | Relationships information regarding variations for this product (hidden, if no variation relationships exist). |
| `relationships.variations.data` | `array[object]` | An array of relationships from this product to variation resources. |
| `relationships.variations.data.type` | `string` | Always `product-variation` |
| `relationships.variations.data.id` | `string` | The ID of the related variation. |
| `relationships.files` | `object` | Relationships information regarding files for this product (hidden, if no file relationships exist). |
| `relationships.files.data` | `array[object]` | An array of relationships from this product to `file` resources. |
| `relationships.files.data.type` | `string` | Always `file` |
| `relationships.files.data.id` | `string` | The ID of the related file. |
| `relationships.main_image` | `object` | Relationships information regarding `main_image` for this product (hidden, if no `main_image` relationships exist). |
| `relationships.main_image.data` | `array[object]` | An array of relationships from this product to `main_image` resources. |
| `relationships.main_image.data.type` | `string` | Always `main_image` |
| `relationships.main_image.data.id` | `string` | The ID of the related file. |
| `relationships.categories` | `object` | Relationships information regarding categories for this product (hidden, if no categories relationships exist). |
| `relationships.categories.data` | `array[object]` | An array of relationships from this product to `category` resources. |
| `relationships.categories.data.type` | `string` | Always `category` |
| `relationships.categories.data.id` | `string` | The ID of the related category. |
| `relationships.collections` | `object` | Relationships information regarding collections for this product (hidden, if no collections relationships exist). |
| `relationships.collections.data` | `array[object]` | An array of relationships from this product to `collection` resources. |
| `relationships.collections.data.type` | `string` | Always `collection` |
| `relationships.collections.data.id` | `string` | The ID of the related collection. |
| `relationships.brands` | `object` | Relationships information regarding brands for this product (hidden, if no brand relationships exist). |
| `relationships.brands.data` | `array[object]` | An array of relationships from this product to `brand` resources. |
| `relationships.brands.data.type` | `string` | Always `brand` |
| `relationships.brands.data.id` | `string` | The ID of the related brand. |

## Filtering

The following attributes are available for [filtering](../../basics/filtering.md) products.

| Attribute | Type | **Operators** | **Example** |
| :--- | :--- | :--- | :--- |
| `name` | `string` | `eq` / `like` | `like(name,Deck*)` |
| `slug` | `string` | `eq` / `like` | `eq(slug,deck-shoe)` |
| `sku` | `string` | `eq` / `like` | `eq(sku,deck-shoe-001)` |
| `status` | `string` | `eq` / `like` | `eq(status,live)` |
| `description` | `string` | `like` | `like(description,*deck*)` |
| `commodity_type` | `string` | `eq` | `eq(commodity_type,digital)` |
| `manage_stock` | `boolean` | `eq` | `eq(manage_stock,true)` |
| `brand.id` | `string` | `eq` | `eq(brand.id,id)` |
| `category.id` | `string` | `eq` | `eq(category.id,id)` |
| `collection.id` | `string` | `eq` | `eq(collection.id,id)` |


In the following examples, we use a filter in a request to get all the products that belong to one category.

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products?filter=eq(category.id,XXXX) \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.Filter({
  eq: {
    category: {
      id: 'XXXX'
    }
  }
})
  .With(["category"])
  .All()
  .then(products => {
    // Do something
  })
```

<!--Node.js SDK-->

```javascript
const { MoltinClient } = require('@moltin/request')
const client = new MoltinClient({
  client_id: 'X'
})
client
  .get('products?filter=eq(category.id,XXXX)')
  .then(products => {
    // Do something...
  })
  .catch(console.error)
```

<!--END_DOCUSAURUS_CODE_TABS-->
