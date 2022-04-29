---
id: extend-any-resource
title: Extend any resource
sidebar_label: Extend any resource
---

Extend any existing resource with custom data. You can extend any resource to enable pre-defined information for display or to power custom business logic elsewhere in your application that requires this additional data to function.

This guide gives you a general idea and know-how around extending an existing resource with custom schema. For how-to guides about extending specific types of resources, see:

- [Extend customer resources](extend-customer-resources.md)
- [Extend product resources](extend-product-resources.md)
- [Extend cart and order resources](extend-cart-and-order-resources.md)

## Prerequisites

If you want to follow along, you need the following items:

- A Commerce Cloud account and the Client ID and Client Secret of your store
- An [access token](get-access-token.md)
- A basic understanding of object-oriented programming or JavaScript

## Step-by-step walkthrough

The walkthrough shows you how to extend an existing resource with a core Flow, so it can have all of the JSON you want and need.

1. Create a core Flow.
2. Create a Flow Field.
3. Create an object that includes your custom data.
4. Verify your new field.

### Create a core Flow

Letʼs start with creating a new Flow. The slug must match the plural name of the resource youʼre extending, such as `products`.

If you already have a Flow for your existing resource, skip to [Create a Flow Field](#create-a-flow-field). You need the ID of the `products` Flow to continue.

```sh
curl -X POST https://api.moltin.com/v2/flows \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "flow",
          "name": "products extended",
          "slug": "products",
          "description": "flow description",
          "enabled": true
        }
     }'
```

Take note of the Flow ID that is returned. You need the Flow ID to create a Flow field.

### Create a Flow Field

The Field is returned when you call the object youʼve extended. Replace `FLOW-ID` with the generated Flow ID.

```sh
curl -X POST https://api.moltin.com/v2/fields \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
          "data": {
            "type": "field",
            "name": "Field Name",
            "slug": "field-name",
            "field_type": "integer",
            "description": "field description",
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

### Create an object that includes your custom data

Now, all you need to do is to create an object that includes all your custom data. In addition to your custom fields, you need to include all fields required for that object. Replace `FIELD-SLUG` with the actual slug you used for the Field you want to create an Entry for.

```sh
curl -X POST https://api.moltin.com/v2/flows/:flowSlug/:existing-resource \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "entry",
         "FIELD-SLUG": "a value",
       }
     }'
```

### Verify your new field

To verify whether your existing resource has been expanded with new fields, call (`GET`) this resource, such as `products`. The fields are also available in Commerce Manager under custom data for each resource you have there.

```sh
curl -X GET https://api.moltin.com/v2/:existing-resource \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json"
```

## Further reading

- [Custom Data (Flows)](../../concepts/custom-data-flows.md)
- [Custom Data (Flows) API](../../api/advanced/custom-data/index.md)
- [Extend cart and order resources](extend-cart-and-order-resources.md)
- [Extend customer resources](extend-customer-resources.md)
- [Extend product resources](extend-product-resources.md)
