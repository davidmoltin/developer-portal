---
id: delete-entry-relationships
title: Delete Entry Relationships
sidebar_label: Delete Entry Relationships
---

:::warning
Removing a relationship between an entry and resources deletes the relationships specified in the payload.
:::

## `DELETE` Delete Entry Relationships

```http
https://api.moltin.com/v2/flows/:flowSlug/entries/:entryId/relationships/:fieldSlug
```

Remove all relationships between an entry and resources.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `fieldSlug` | Required | `string` | The slug of the entry this field belongs to. |
| `entryId` | Required | `string` | The ID of the entry this field belongs to. |
| `flowSlug` | Required | `string` | The slug of the Flow the entry belongs to. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`204 No Content`


```json

```

<!--END_DOCUSAURUS_CODE_TABS-->
