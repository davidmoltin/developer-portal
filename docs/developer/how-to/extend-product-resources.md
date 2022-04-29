---
id: extend-product-resources
title: Extend product resources
sidebar_label: Extend product resources
---

Extend the product model to match your catalog data or enable additional logic.

## Prerequisites

If you want to follow along, you need the following items:

- A Commerce Cloud account and the Client ID and Client Secret of your store
- Basic understanding of object-oriented programming or JavaScript
- An [access token](get-access-token.md)

## Step-by-step walkthrough

The following steps show you how to extend a products resource with a core Flow. In this scenario, weʼll discuss how to create the age restriction field for a random movie and how to add field validation to it.

1. Create a Flow for the endpoint you want to extend: `products`.
2. Create a Field to add custom data.
3. Create a `product` that includes your custom data.
4. Get the `product`.
5. Update the `product`.

### Create a core Flow

Letʼs start with creating a new Flow. Note that slug must match the plural name of the resource youʼre extending, that is, `products`.

If you already have a `products` Flow for your existing resource, skip to Create a Flow Field. You need the ID of the products Flow to continue.

```sh
curl -X POST https://api.moltin.com/v2/flows \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "flow",
          "name": "Products",
          "slug": "products",
          "description": "Extension of products",
          "enabled": true
        }
     }'
```

Take note of the Flow ID that is returned. You need this to create a Flow field, as described in the following section.

### Create a Field

The Field is returned when you call the product object. In the following example, we add the age restriction field, so that products can display appropriate Motion Picture Association of America (MPAA) film classification for each movie. The validation only accepts valid classification values, such as G, P, or PG, that are listed in the `options` array.

```sh
curl -X POST https://api.moltin.com/v2/fields \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
         "data": {
           "type": "field",
           "name": "MPAA classification",
           "slug": "mpaa_classification",
           "field_type": "string",
           "validation_rules": [{
             "type": "enum",
               "options": [
                 "G",
                 "PG",
                 "PG-13",
                 "R",
                 "NC-17"
               ]
            }],
            "description": "MPAA classification",
            "required": false,
            "default": 0,
            "enabled": true,
            "order": 1,
            "relationships": {
              "flow": {
                "data": {
                  "type": "flow",
                  "id": "FLOW-ID"
                }
            }
        }
    }
}'
```

### Create a product with your custom field

We need to start adding data to the product by requesting the `products` endpoint. Add the new key for the custom field in the data object and the value for the MPAA classification. Take a note of the ID returned for your product.

```sh
curl -X POST https://api.moltin.com/v2/products \
    -H "Authorization: XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
       "data": {
         "type": "product",
         "name" : "Parks & Recreation Outtakes (Season 1)",
         "slug": "p-r-outtakes-s1",
         "sku": "PR.O.1",
         "manage_stock": false,
         "description": "LOL moments from Season 1",
         "status" : "live",
         "commodity_type": "physical",
         "price": [{
           "amount": 1299,
           "currency": "USD",
           "includes_tax": true
         }],
         "mpaa_classification": "NC-17"
        }
     }'
```

### Get the product

Weʼve extended the product model and created our first product with the custom field. We can now make a call to get that product with the MPAA classification field.

```sh
curl -X GET https://api.moltin.com/v2/products/:product-id \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json"
```

### Update the product

To update the product, pass the field you want to update to the `product` endpoint.

```sh
curl -X PUT https://api.moltin.com/v2/products/:product-id \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "product",
          "id": "PRODUCT-ID",
          "mpaa_classification": "PG-13"
        }
      }'
```

## Further reading

- [Custom Data (Flows)](../../concepts/custom-data-flows.md)
- [Custom Data (Flows) API](../../api/advanced/custom-data/index.md)
