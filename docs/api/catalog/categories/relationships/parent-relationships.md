---
id: parent-relationships
title: Parent Relationships
sidebar_label: Parent Relationships
---

:::tip Choose the right endpoint
If you are using the [Product Content Management](../../../../concepts/product-content-management.md) services, use the `pcm/hierarchies` endpoints instead of the `v2/categories` endpoints. For details about the `pcm/hierarchies` endpoints, see the topics in the [PCM Hierarchies](../../../pcm/hierarchies/index.md) section.
:::

## `POST` Create Parent Category Relationship

```http
https://api.moltin.com/v2/categories/:id/relationships/parent
```

Create a relationship to a parent category. The new relationship in the request overwrites any existing relationship.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the category you want to make relationships to. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of related object. \(should be `category`\). |
| `id` | Required | `string` | The ID of the parent category. |


<!-- Response -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/categories/:id/relationships/parent \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "category",
        "id": "8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c"
      }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `PUT` Update Parent Category Relationship

```http
https://api.moltin.com/v2/categories/:id/relationships/parent
```

Change the parent of a Category.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the category you want to make relationships to. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of related object. \(should be `category`\). |
| `id` | Required | `string` | The ID of the parent category. |

<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/categories/:id/relationships/parent \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": {
        "type": "category",
        "id": "8a43aea7-79f0-4bcf-9bc8-a0f5d3d3642c"
      }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `DELETE` Delete Parent Category Relationship

```http
https://api.moltin.com/v2/categories/:id/relationships/parent
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the parent category you with to delete the relationship to. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

<!-- Response -->

`200 OK`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/categories/:id/relationships/parent \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
