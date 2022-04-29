---
id: extend-customer-resources
title: Extend customer resources
sidebar_label: Extend customer resources
---

Extend a customer profile to add more customer-specific information that your business needs.

## Prerequisites

If you want to follow along, you need the following items:

- A Commerce Cloud account and the Client ID and Client Secret of your store
- Basic understanding of object-oriented programming or JavaScript
- An [access token](get-access-token.md)

## Step-by-step walkthrough

The walkthrough shows you how to extend an existing resource, `customers`, with a core Flow so it can have all the JSON you want and need. For the purpose of this guide, weʼre going to create an entry field for customers to provide their delivery details.

1. Create a Flow for the endpoint you want to extend: `customers`.
2. Create Fields to add custom data.
3. Create a `customer` that includes your custom data.
4. Get the `customer`.
5. Update the `customer`.

### Create a core Flow

Create a new Flow, called `customers`. The slug must match the plural name of the resource youʼre extending.

:::note
If you already have a Flow for `customers`, skip this step. You need the ID of the products Flow to continue.
:::

```sh
curl -X POST https://api.moltin.com/v2/flows \
     -H "Authorization:XXXX" \
     -H "Content-Type:application/json" \
     -d $'{
        "data":{
          "type":"flow",
          "name":"Customers",
          "slug":"customers",
          "description":"Extends the default customer object",
          "enabled":true
   }
}'
```

Take note of the Flow ID that is returned. You need the ID to create a Flow field.

### Create a Field

The Field is returned when you call the `customer` object. Replace `FLOW-ID` with the ID that was generated for the `customers` Flow. In this scenario, we have set the `unique` field to `false`, which means that entries can repeat themselves. This way we donʼt constrain customers to write an original description for their delivery details. The field is also not required, making an entry optional for customers to fill in.

```sh
curl -X POST https://api.moltin.com/v2/fields \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
          "data": {
            "type": "field",
            "name": "Delivery Details",
            "slug": "delivery_details",
            "field_type": "string",
            "description": "customers delivery details",
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

### Create a customer with your custom field

Now, we need to start adding data to the customer profile. Call the customers endpoint and adding the new key for the custom field in the data object with the value for the delivery details. Take a note of the ID returned for your customer.

```sh
curl -X POST https://api.moltin.com/v2/customers \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "customer",
          "name": "Ron Swanson",
          "email": "ron.swanson@gmail.com",
          "delivery_details": "Do NOT leave in a government building"
        }
      }'
```

### Get the customer

Now that weʼve extended the customer profile and created our first customer with the custom field, we can make a call to get that customer with the delivery details.

```sh
curl -X GET https://api.moltin.com/v2/customers/:customer-id \
     -H "Authorization: XXXX"
     -H "Content-Type: application/json"
```

### Update the customer

To update the delivery details, pass the field you want to update to the `customer` endpoint.

```sh
curl -X PUT https://api.moltin.com/v2/customers/:customer-id \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "customer",
          "id": "CUSTOMER-ID",
          "delivery_details": "Leave in Leslie Knope’s office"
        }
      }'
```

## Further reading

- [Custom Data (Flows)](../../concepts/custom-data-flows.md)
- [Customers](../../concepts/customers.md)
- [Custom Data (Flows) API](../../api/advanced/custom-data/index.md)
- [Manage customers](manage-customers.md)
