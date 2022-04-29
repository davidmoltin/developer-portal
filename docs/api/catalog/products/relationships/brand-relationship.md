---
id: brand-relationship
title: Brand Relationship
sidebar_label: Brand Relationship
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../../pcm/products/index.md) section.
:::

## `POST` Create Brand Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/brands
```

Create a Product relationship to one or more Brands.  If any relationships already exist, the ones made in the request are added to them.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the brand(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer used to access the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **brand**). |
| `data[].id` | Required | `string` | The ID of the brand. |


<!-- Response -->

`200 OK`

```json
{
  "data": [
    {
      "type": "brand",
      "id": "d1e04526-7870-469c-a940-8f3033893084"
    }
  ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/products/:productID/relationships/brands \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "brand",
          "id": "8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c"
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
const brandIds = [
  '8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c'
]
Moltin.Products.CreateRelationships(productId, 'brand', brandIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Brand Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/brands
```

Replace the relationships between a Product and a Brand.  Unlike a **`POST`** to this endpoint, a **`PUT`** overrides any existing relationships.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the brand(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **brand**). |
| `data[].id` | Required | `string` | The ID of the brand. |

<!-- Response -->

`200 OK`

```json
{
  "data": [
      {
        "type": "brand",
        "id": "0af10e37-066a-47a9-ad14-cc17eb31eed4"
      }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/products/:productId/relationships/brands \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "brand",
          "id": "8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c"
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
const brandIds = [
    '8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c'
]
Moltin.Products.UpdateRelationships(productId, 'brand', brandIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `DELETE` Delete Brand Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/brands
```

Remove a relationship between a Product and Brand(s). This deletes the relationships specified in the payload.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The **iID** of the product you want to relate to the brand. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **brand**). |
| `data[].id` | Required | `string` | The ID of the brand. |

<!-- Response -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/products/:productId/relationships/brands \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "brand",
          "id": "8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c"
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
const brandIds = [
  '8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c'
]
Moltin.Products.DeleteRelationships(productId, 'brand', brandIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
