---
id: variations-relationship
title: Variations Relationship
sidebar_label: Variations Relationship
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../../pcm/products/index.md) section.
:::

## `POST` Create Variations Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/variations
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the variation(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **product-variation**). |
| `data[].id` | Required | `string` | The ID of the product-variation. |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "product-variation",
            "id": "3ab3deca-1f11-47b7-a409-24ea3234d72c"
        },
        {
          "type": "product-variation",
          "id": "7c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/products/:productId/relationships/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "product-variation",
          "id": "3ab3deca-1f11-47b7-a409-24ea3234d72c"
        },
        {
          "type": "product-variation",
          "id": "7c740aa0-7fb7-4bd6-9347-78988cf60f9a"
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
const variationIds = [
    '5ab3deca-1f11-47b7-a409-24ea3234d72c',
    '2c740aa0-7fb7-4bd6-9347-78988cf60f9a'
]
Moltin.Products.CreateRelationships(productId, 'product-variation', variationIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Variation Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/variations
```

Replace the relationships between a product and a variation. Unlike a **`POST`** to this endpoint, a **`PUT`** overrides any existing relationships. ****

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the variation(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **product-variation).** |
| `data[].id` | Required | `string` | The ID of the variation. |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "product-variation",
            "id": "2c740aa0-7fb7-4bd6-9347-78988cf60f9a"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
url -X PUT https://api.moltin.com/v2/products/:productId/relationships/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "product-variation",
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
const variationIds = [
    '2c740aa0-7fb7-4bd6-9347-78988cf60f9a'
]
Moltin.Products.UpdateRelationships(productId, 'variation', variationIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `DELETE` Delete Variation Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/variations
```

Remove a relationship between a Product and a Variation(s). This deletes the relationships specified in the payload.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the variations(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **product-variation).** |
| `data[].id` | Required | `string` | The ID of the variation. |


<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/products/:productId/relationships/variations \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "product-variation",
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
const variationIds = [
    '2c740aa0-7fb7-4bd6-9347-78988cf60f9a'
]
Moltin.Products.DeleteRelationships(productId, 'variation', variationIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
