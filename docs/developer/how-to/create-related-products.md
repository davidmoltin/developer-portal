---
id: create-related-products
title: Display related products
sidebar_label: Display related products
---

This is a walkthrough on how to show the customer items that are related to the product theyʼre viewing.

When creating a store, it is useful to show the customer items that can be related to the product you are viewing. For example, if you bought a pair of boxing gloves, you may also want to buy a mouthguard or some wraps for your hands.

By displaying these related products, a customer can conveniently add them to a cart without having to search through your product catalog. One way we can achieve this is by using the flexibility of Flows and the relationship field.

In this example, we are going to create a `related-products` feature for an online fishing and tackle store. You can follow along with this example and modify the calls to use products and images relevant to your store.

## Prerequisites

If you want to follow along, you need the following items:

- A Commerce Cloud account
- An [access token](get-access-token.md)

## Step-by-step walkthrough

1. Create products
2. Add product images
3. Create a relationship between images and products
4. Link products as related item:
    1. Extend the existing resource, products with Flows
    2. Create related item Field
    3. Create Product relationship
5. Display related items

### Create products

You can create your products through the API or Commerce Manager, and in fact, adding product and images from Commerce Manager is quick and simple. In this example, we create our products through the API for consistency with the later calls, where the direct API communication is needed.

When purchasing a fishing rod you can purchase other accessories such as a reel, tripod, tackle box, and so on. First, we create our fishing rod product, and then add the products that are related.

#### Fishing Rod

```sh
curl -X "POST" https://api.moltin.com/v2/products \
  -H 'authorization: XXXX' \
  -H 'content-type: application/json' \
  -d '{
    "data": {
      "type": "product",
      "name" : "Penn Rampage II Surf Rod",
      "slug": "penn-rapage-II-surf-rod",
      "sku": "PRIISR",
      "manage_stock": true,
      "description": "PENN RAMPAGE II rods",
      "status" : "live",
      "commodity_type": "physical",
      "price": [
        { "amount": 9999, "currency": "GBP", "includes_tax": true}
      ]
    }
  }'
```

Next, we add some accessories.

#### Fishing Reel

```sh
curl -X POST https://api.moltin.com/v2/products \
  -H 'authorization: XXXX' \
  -H 'content-type: application/json' \
  -d '{
    "data": {
      "type": "product",
      "name" : "Shimano Ultegra XSD Reel, Size: 14000",
      "slug": "shimano-ultegra-xsd-reel-size-14000",
      "sku": "SUXSD-RS14000",
      "manage_stock": true,
      "description": "Product description",
      "status" : "live",
      "commodity_type": "physical",
      "price": [
        {   "amount": 9999,
          "currency": "GBP",
          "includes_tax": true
        }
      ]
    }
  }'
```

#### Tackle Box

```sh
curl -X POST https://api.moltin.com/v2/products \
  -H 'authorization: XXXX' \
  -H 'content-type: application/json' \
  -d '{
    "data": {
      "type": "product",
      "name" : "Tackle Box Combo with Black Harness & Side Tray",
      "slug": "grandslam-hi-vis-seat-and-tackle-box-combo",
      "sku": "GHVS-TB",
      "manage_stock": true,
      "description": "Product description",
      "status" : "live",
      "commodity_type": "physical",
      "price": [
        {
        "amount": 3999,
        "currency": "GBP",
        "includes_tax": true
        }
      ]
    }
  }'
```

#### Beach Shelter

```sh
curl -X POST https://api.moltin.com/v2/products \
  -H 'authorization: XXXX' \
  -H 'content-type: application/json' \
  -d '{
    "data": {
      "type": "product",
      "name" : "Imax Storm Safe Beach Shelter",
      "slug": "imax-storm-safe-beach-shelter",
      "sku": "ISS-BS",
      "manage_stock": true,
      "description": "Product description",
      "status" : "live",
      "commodity_type": "physical",
      "price": [
        {
        "amount": 7999,
        "currency": "GBP",
        "includes_tax": true
        }
      ]
    }
  }'
```

After we have a list of products, we can then add their images.

### Add images for products

We can add image files to our store via the files endpoint. We need to add files for each product by using the following call:

```sh
curl -X POST https://api.moltin.com/v2/files \
  -H 'authorization: XXXX' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F file=@gslam.jpg \
  -F public=true
```

We can repeat this for every product image we need to upload, changing the file path for each call.

#### Main Images to Product Relationships

Now that we have our image files uploaded, we need to link them to their respective products, so that they can be included with our product calls for display.

The following code example shows how to create a relationship between a product and a main image file. The product ID is submitted via the URL, and the file ID via the request body.

If we do a `GET` request on our product, we can see that the relationship has been created in the call response.

```sh
curl -X POST https://api.moltin.com/v2/products/:product-id/relationships/main-image \
  -H 'authorization: XXXX' \
  -H 'content-type: application/json' \
  -d '{
    "data": {
      "type": "main_image",
      "id": "FILE-ID"
    }
  }'
```

We can now rinse and repeat for each of our products and images, until all the relationships are created, and that is our products set up.

### Create Related-Items

We need to create the Flow functionality to link products together as related items.

#### Create Product Flow

As we are extending the functionality of our products resource, we need to create a products flow.

Also see: Extending an existing resource with Flows

```sh
curl -X POST https://api.moltin.com/v2/flows \
  -H 'authorization: XXXX' \
  -H 'content-type: application/json' \
  -d '{
    "data": {
      "type": "flow",
      "name": products",
      "slug": "products",
      "description": "creates a flow for related item",
      "enabled": true
    }
  }'
```

#### Create Related-Items Field

To store our related product IDs, we need to create a new field and relate it to our Flow.

```sh
curl -X POST https://api.moltin.com/v2/fields \
  -H 'authorization: XXXX' \
  -H 'content-type: application/json' \
  -d '{
    "data": {
      "type": "field",
      "name": "Related Items",
      "slug": "related-items",
      "description": "Items related to a given product",
      "required": false,
      "enabled": true,
      "field_type": "relationship",
        "relationships": {
          "flow": {
            "data": {
              "type": "flow",
              "id": "FLOW-ID"
              }
            }
        },
        "validation_rules": [{
          "type": "one-to-many",
         "to": "product"
          }]
      }
    }'
```

In this call, there are some flow field validation rules.

```sh
"validation_rules": [
  {
  "type": "one-to-many",
  "to": "product"
  }
]
```

As a product can have several (that is, “many”) related products, we must specify that this relationship field is a one-to-many relationship.

### Create Product Relationships

Now that we have set up our flow and our relationship field, we can begin linking our products to create the related products data model.

We take the product we want to relate items to, in this case the Rampage fishing rod, and put it in the URL of the request.

We then specify which product we want to relate to it in the request body. We repeat this step for every product we want to relate to the product specified in the request URL.

```sh
curl -X POST https://api.moltin.com/v2/products/:product-id/relationships/related-items \
  -H 'authorization: XXXX' \
  -H 'content-type: application/json' \
  -d '{
     "data": [{
        "type": "product",
        "id": "add95435-7d5e-4bb0-b498-5719c4965373"
        }]
      }'
```

With each request, you should see your related items being added to the response.

```json
{
  "data": [
    {
      "type": "product",
      "id": "add95435-7d5e-4bb0-b498-5719c4965373"
    },
    {
      "type": "product",
      "id": "c4dc0875-ffed-44b2-8979-e331c7de0b72"
    },
    {
      "type": "product",
      "id": "91000863-337b-4482-a4a1-10866b5229c6"
    }
  ]
}
```

### Display Related Items

After we have our related products, we can display them in our web applications.

If we do a `GET` request on our main product, we should see a response containing the product information and the IDs of the related products.

The following javascript code shows you how to display the related items:

```javascript
const Moltin = moltin.gateway({
      client_id: 'xxxx'
    })

    new Vue({
      el: "#app",
      data() {
        return {
          product: {},
          relatedItems: []
        }
      },
      created() {
        this.fetchMoltinData({ id: '7ca12065-7155-4d4c-93fd-a978844adc5d' })
      },
      methods: {
        async fetchMoltinData({ id }) {
          const product = await this.fetchProduct({ id })

          this.product = product
          this.relatedItems = await this.fetchRelatedProducts({ product })
        },
        async fetchProduct({ id }) {
          const { data, included: { main_images } } = await Moltin.Products.With('main_image').Get(id)

          const imageId = data.relationships.main_image.data.id

          return {
              ...data,
              image: main_images.find(img => img.id === imageId).link.href
        }
        },
        fetchRelatedProducts({ product }) {
          const { relationships: { 'related-items': { data: products } } } = product

          return Promise.all(products.map(({ id }) => this.fetchProduct({ id })))
        }
      }
    })
```

## Further reading

- [Products](../../concepts/products.md)
- [Custom Data (Flows)](../../concepts/custom-data-flows.md)
- [Custom Data (Flows) API](../../api/advanced/custom-data/index.md)
- [Extend a resource with custom data](extend-any-resource.md)
