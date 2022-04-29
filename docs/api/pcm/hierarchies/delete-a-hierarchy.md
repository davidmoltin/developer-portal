---
id: delete-a-hierarchy
title: Delete a Hierarchy
sidebar_label: Delete a Hierarchy
---

## `DELETE` Delete a Hierarchy

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId
```

Deletes the specified hierarchy and all its children.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |

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
curl -X DELETE https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007 \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
