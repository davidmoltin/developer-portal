---
id: update-a-pricebook
title: Update a Price Book
sidebar_label: Update a Price Book
---

## `PUT` Update a Price Book by ID

```http
https://api.moltin.com/pcm/pricebooks/:id
```

Updates the specified price book.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book you want to update. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant the API access. |

**Body:**

Required. A [`pricebook`](index.md#the-pricebook-object) object with the following attributes:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The unique identifier of the price book. |
| `type` | Required | `string` | Always: `pricebook` |
| `attributes.name` | Optional | `string` | The name of the price book. |
| `attributes.description` | Optional  | `string` | The purpose for the price book, such as flash sale pricing or preferred customer pricing. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": {
        "id": "2cf0d38c-58aa-420d-8658-4385dccea609",
        "type": "pricebook",
        "attributes": {
            "created_at": "2021-02-08T20:56:27.537Z",
            "description": "Tier 1 pricing",
            "name": "Customer A Pricing",
            "updated_at": "2021-02-08T21:34:49.789Z"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/pcm/pricebooks/2cf0d38c-58aa-420d-8658-4385dccea609 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "id": "2cf0d38c-58aa-420d-8658-4385dccea609",
            "type": "pricebook",
            "attributes": {
                "name": "Customer A Pricing"
            }
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
