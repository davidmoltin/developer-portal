---
id: main-image-relationship
title: Main Image Relationship
sidebar_label: Main Image Relationship
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../../pcm/products/index.md) section.
:::

## `POST` Create a Main Image Relationship

```http
https://api.moltin.com/v2/products/:productId/relationships/main-image
```

Create a Product relationship to a single File, which can be used as a `main_image`.  You can only have one main image relationship.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the image. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of the object (should be **main_image**). |
| `data[].id` | Required | `string` | The ID of the image. |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "main_image",
            "id": "8df7738-febe-4987-bc0e-b857297b30e9"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/products/:productId/relationships/main-image \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "main_image",
        "id": "98df7738-febe-4987-bc0e-b857297b30e9"
      }
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
const imageIds = [
  'e9737dc6-876a-4eab-b3b7-af62a1999123'
]
Moltin.Products.CreateRelationships(productId, 'main-image', imageIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update a Main Image Relationship

```http
https://api.moltin.com/v2/products/:productId/relationships/main-image
```

Update the main image relationship.  This replaces any currently related image.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the image. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **main_image**). |
| `data[].id` | Required | `string` | The ID of the image. |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "main_image",
            "id": "e9737dc6-876a-4eab-b3b7-af62a1999123"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/products/:productId/relationships/main-image \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "main_image",
        "id": "e9737dc6-876a-4eab-b3b7-af62a1999123"
      }
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
const imageIds = [
  'e9737dc6-876a-4eab-b3b7-af62a1999123'
]
Moltin.Products.UpdateRelationships(productId, 'main-image', imageIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `DELETE` Delete a Main Image Relationship

```http
https://api.moltin.com/v2/products/:productId/relationships/main-image
```

Delete the main image relationship. This removes the related main image.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to remove the relationship for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **main_image).** |
| `data[].id` | Required | `string` | The ID of the image. |


<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/products/:productId/relationships/main-image \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "main_image",
        "id": "e9737dc6-876a-4eab-b3b7-af62a1999123"
      }
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
const imageIds = [
  'e9737dc6-876a-4eab-b3b7-af62a1999123'
]
Moltin.Products.DeleteRelationships(productId, 'main-image', imageIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
