---
id: replicate-a-pricebook
title: Replicate a Price Book
sidebar_label: Replicate a Price Book
---

## `POST` Replicate a Price Book

```http
https://api.moltin.com/pcm/pricebooks/:pricebookId/replicate
```
<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/pcm/pricebooks/:pricebookId/replicate \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The ID of the price book that you want to replicate. |
| `type` | Required | `string` | The type of resource object. You must use `pricebook`. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `name` | Required | `string` | The name of the new price book. |
| `description` | Optional | `string` | The description of the new price book. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response - PCM -->

`201 Created`

```json
{
    "data": {
      "id": "4c45e4ec-26e0-4043-86e4-c15b9cf985a7",
      "type": "pricebook",
      "attributes": {
        "created_at": "2020-09-22T09:00:00",
        "description": "This is a price book",
        "name": "pricebook-store-abc",
        "updated_at": "2020-09-22T09:00:00"
      }
  },
  "links": {
        "self": "/pcm/pricebooks/4c45e4ec-26e0-4043-86e4-c15b9cf985a7"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
