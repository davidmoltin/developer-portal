---
id: update-node-parent-relationship
title: Update a Nodeʼs Parent
sidebar_label: Update a Nodeʼs Parent
---

## `PUT` Update a Nodeʼs Parent

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId/relationships/parent
```

Changes the parent of the specified node. The new parent node must be located within the same hierarchy as the specified node.

:::note
You cannot move a node to another hierarchy. If you want to put the specified node into another hierarchy, create the node in the target hierarchy and delete it from the current hierarchy.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |
| `nodeId` | Required | `string` | The unique identifier of the node in the hierarchy. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

Required. A Node Reference object that identifies the new parent node.

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `node` |
| `id` | Required | `string` | The unique identifier of a node within the same hierarchy as the node you specified in the request. A node cannot be its own parent. |

<!-- Response - PCM -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/parent \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data":{
            "type":"node",
            "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
            }
        }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
