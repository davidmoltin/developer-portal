---
id: child-relationships
title: Child Relationships
sidebar_label: Child Relationships
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/categories` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../../pcm/hierarchies/index.md) section.
:::

## `POST` Create Child Category Relationships

```http
https://api.moltin.com/v2/categories/:categoryId/relationships/children
```

Create a relationship to a parent Category. If any relationship(s) already exists, new ones are added.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `categoryId` | Required | `string` | The ID of the category that you want to update relationships to. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | The type of related object. Ensure it is `category`. |
| `data[].id` | Required | `string` | The ID of the parent category. |

<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "59a8c4e2-bd2d-4a14-9f1a-a497330cdf11",
        "type": "category",
        "status": "live",
        "name": "Mens",
        "slug": "mens",
        "description": "Browse our mens clothing line",
        "meta": {
            "timestamps": {
                "created_at": "2019-07-04T13:18:53+00:00",
                "updated_at": "2019-07-04T13:18:53+00:00"
            }
        },
        "relationships": {}
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/categories/:categoryId/relationships/children \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "category",
          "id": "8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c"
        }
      ]
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Child Category Relationship

```http
https://api.moltin.com/v2/categories/:categoryId/relationships/children
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `categoryId` | Required | `string` | The ID of the category that you want to update relationships to. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | The type of related object. Ensure it is `category`. |
| `data[].id` | Required | `string` | The ID of the parent category. |

<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/categories/:categoryId/relationships/children \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [
        {
          "type": "category",
          "id": "c902aea9-ec90-4fdd-8084-3c2d879a2c52"
        }
      ]
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `DELETE` Delete Child Category Relationship

```http
https://api.moltin.com/v2/categories/:categoryId/relationships/parent
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `categoryId` | Required | `string` | The ID of the category that you want to update relationships to. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type` | Required | `string` | The type of related object. Ensure it is `category`. |
| `data[].id` | Required | `string` | The ID of the parent category. |

<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/categories/:categoryId/relationships/parent \
     -H "Authorization: Bearer XXXX" \
     -d $'{
       "data": [{
         "type": "category",
         "id": "c902aea9-ec90-4fdd-8084-3c2d879a2c52"
        }]
      }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
