---
id: delete-a-pricebook
title: Delete a Price Book
sidebar_label: Delete a Price Book
---

## `DELETE` a Price Book by ID

```http
https://api.moltin.com/pcm/pricebooks/:id
```

Deletes the specified price book.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The unique identifier of the price book to delete. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

<!-- Response - PCM -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609 \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
