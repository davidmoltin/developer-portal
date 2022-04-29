---
id: delete-node-parent-relationship
title: Delete a Nodeʼs Parent Relationship
sidebar_label: Delete a Nodeʼs Parent Relationship
---

## `DELETE` Delete a Nodeʼs Parent

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId/relationships/parent
```

For the specified node, deletes the relationship to the current parent node.

:::note
Because all nodes in a hierarchy must have a parent node, the hierarchy root node becomes the parent of this node.
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

<!-- Response - PCM -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/parent \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
