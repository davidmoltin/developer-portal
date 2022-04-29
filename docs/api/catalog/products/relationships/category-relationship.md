---
id: category-relationship
title: Category Relationship
sidebar_label: Category Relationship
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../../pcm/products/index.md) section.
:::

## `POST` Create Category Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/categories
```

Create a Product relationship to one or more **Categories**. If any relationships already exist, the ones made in the request are added to them.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the category or categories. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer used to access the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **category**). |
| `data[].id` | Required | `string` | The ID of the category. |

<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "category",
            "id": "39a13b7e-f2d3-47a5-9bc5-1e98b198748c"
        },
        {
          "type": "category",
          "id": "0c108707-bb4a-4eda-95e3-f51b35122cb4"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/products/:productId/relationships/categories \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "category",
          "id": "39a13b7e-f2d3-47a5-9bc5-1e98b198748c"
        },
        {
          "type": "category",
          "id": "0c108707-bb4a-4eda-95e3-f51b35122cb4"
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
const categoryIds = [
    '39a13b7e-f2d3-47a5-9bc5-1e98b198748c',
    '0c108707-bb4a-4eda-95e3-f51b35122cb4'
]
Moltin.Products.CreateRelationships(productId, 'category', categoryIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Category Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/categories
```

Replace the relationships between a Product and a Category. Unlike a **`POST`** to this endpoint a **`PUT`** overrides any existing relationships.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the category or categories. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer used to access the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of objects (should be **category**). |
| `data[].id` | Required | `string` | The ID of the category. |

<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "category",
            "id": "d7290481-8d03-4fe0-a7df-23fc05498a46"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/products/:productId/relationships/categories \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "category",
          "id": "d7290481-8d03-4fe0-a7df-23fc05498a46"
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
const categoryIds = [
    'd7290481-8d03-4fe0-a7df-23fc05498a46'
]
Moltin.Products.UpdateRelationships(productId, 'category', categoryIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `DELETE` Delete Category Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/categories
```

Removing a relationships between a Product and Category or Categories deletes the relationships specified in the payload.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to delete. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **category**). |
| `data[].id` | Required | `string` | The ID of the category. |


<!-- Response -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/products/:productId/relationships/categories \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "category",
          "id": "0c108707-bb4a-4eda-95e3-f51b35122cb4"
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
const categoryIds = [
    '0c108707-bb4a-4eda-95e3-f51b35122cb4
]
Moltin.Products.DeleteRelationships(productId, 'category', categoryIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
