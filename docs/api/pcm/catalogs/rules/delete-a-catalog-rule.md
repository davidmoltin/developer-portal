---
id: delete-a-catalog-rule
title: Delete a Catalog Rule
sidebar_label: Delete a Rule
---

## `DELETE` a Catalog Rule by ID

```text
https://api.moltin.com/pcm/catalogs/rules/:catalogRuleId
```

Deletes the specified catalog rule.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `catalogRuleId` | Required | `string` | Specifies the unique identifier of the catalog rule. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Note that this must be a client credentials token. |

<!-- Response -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/catalogs/rules/ac7d1ea8-6220-44b6-978d-a55bf111772d \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
