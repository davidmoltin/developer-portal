---
id: collection-relationships
title: Collection Relationships
sidebar_label: Collection Relationships
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../../pcm/products/index.md) section.
:::

## `POST` Create Collection Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/collections
```

Create a product relationship to one or many collections. If any relationships already exist, the ones made in the request are added to them.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the collection(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **collection**). |
| `data[].id` | Required | `string` | The ID of the collection. |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "collection",
            "id": "5ab3deca-1f11-47b7-a409-24ea3234d72c"
        },
        {
          "type": "collection",
          "id": "2c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/products/:productId/relationships/collections \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "collection",
          "id": "5ab3deca-1f11-47b7-a409-24ea3234d72c"
        },
        {
          "type": "collection",
          "id": "2c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
      ]
    }'
```

<!--JavaScript SDK-->

```javascript
 const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const productId = 'XXXX'
const collectionIds = [
    '5ab3deca-1f11-47b7-a409-24ea3234d72c',
    '2c740aa0-7fb7-4bd6-9347-78988cf60f9a'
]
Moltin.Products.CreateRelationships(productId, 'collection', collectionIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Collection Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/collections
```

Replace the relationships between a Product and a Collection. Unlike a **`POST`** to this endpoint, a **`PUT`** overrides any existing relationships.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the collection(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **collection**). |
| `data[].id` | Required | `string` | The ID of the collection. |

<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "collection",
            "id": "2c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/products/{PRODUCT_ID}/relationships/collections \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "collection",
          "id": "2c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
      ]
    }'
```

<!--JavaScriptSDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const productId = 'XXXX'
var collectionIds = [
    '2c740aa0-7fb7-4bd6-9347-78988cf60f9a'
];
Moltin.Products.UpdateRelationships(productId, 'collection', collectionIds).then((relationships) => {
    // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `DELETE` Delete Collection Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/collections
```

Remove a relationship between a product and a collection(s). This deletes the relationship specified in the payload.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the collection(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **collection**). |
| `data[].id` | Required | `string` | The ID of the collection. |


<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/products/:productId/relationships/collections \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "collection",
          "id": "2c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
      ]
    }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const productId = 'XXXX'
var collectionIds = [
    '2c740aa0-7fb7-4bd6-9347-78988cf60f9a'
];
Moltin.Products.DeleteRelationships(productId, 'collection', collectionIds).then((relationships) => {
    // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
