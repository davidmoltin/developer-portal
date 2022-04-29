---
id: delete-a-hierarchy-node
title: Delete a Hierarchy Node
sidebar_label: Delete a Node
---

## `DELETE` Delete a Node from a Hierarchy

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId
```

Deletes the specified node from the hierarchy. If the target node has descendants, all the descendant nodes are deleted as well.

:::tip
If you want to keep the descendant nodes, change the parent for each child of the target node. Then delete the target node.
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
curl -X DELETE https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765 \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
