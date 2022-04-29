---
id: file-relationships
title: File Relationships
sidebar_label: File Relationships
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/products` endpoints instead of the `v2/products` endpoints. For details about the `pcm/products` endpoints, see the topics in the [PCM Products](../../../pcm/products/index.md) section.
:::

## `POST` Create File Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/files
```

Create a product relationship to one or more **Files**. If any relationships already exist, the ones made in the request are added to them.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID  of the product you want to relate to the file(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer used to access the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **file).** |
| `data[].id` | Required | `string` | The ID of the file. |


<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "file",
            "id": "2c51711-35f9-403e-aa73-8e6c80c2258b"
        },
        {
          "type": "file",
          "id": "2C090e3c8-0206-4243-9a3b-f28175f7e9de"
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/products/:productId/relationships/files \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "file",
          "id": "82c51711-35f9-403e-aa73-8e6c80c2258b"
        },
        {
          "type": "file",
          "id": "c090e3c8-0206-4243-9a3b-f28175f7e9de"
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
const fileIds = [
    '82c51711-35f9-403e-aa73-8e6c80c2258b',
    'c090e3c8-0206-4243-9a3b-f28175f7e9de'
]
Moltin.Products.CreateRelationships(productId, 'file', fileIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update File Relationship(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/files
```

Replace the relationships between a Product and a File. Unlike a **`POST`** to this endpoint, a **`PUT`** overrides any existing relationships.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to relate to the file(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **file).** |
| `data[].id` | Required | `string` | The ID of the file. |

<!-- Response -->

`200 OK`

```json
{
    "data": [
        {
            "type": "file",
            "id": "2c51711-35f9-403e-aa73-8e6c80c2258b"
        }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/products/:productId/relationships/files \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "file",
          "id": "82c51711-35f9-403e-aa73-8e6c80c2258b"
        }
      ]
    }
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const productId = 'XXXX'
const fileIds = [
    '82c51711-35f9-403e-aa73-8e6c80c2258b'
]
Moltin.Products.UpdateRelationships(productId, 'file', fileIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `DELETE` Delete File Relationships(s)

```http
https://api.moltin.com/v2/products/:productId/relationships/files
```

Remove a relationship between a Product and File(s). This deletes the relationships specified in the payload.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the product you want to delete the relationship with file(s). |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer used to access the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | Represents the type of object (should be **file).** |
| `data[].id` | Required | `string` | The ID of the file. |

<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/products/:productId/relationships/files \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "file",
          "id": "82c51711-35f9-403e-aa73-8e6c80c2258b"
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
const fileIds = [
    '82c51711-35f9-403e-aa73-8e6c80c2258b'
]
Moltin.Products.DeleteRelationships(productId, 'file', fileIds).then((relationships) => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
