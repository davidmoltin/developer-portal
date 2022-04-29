---
id: create-a-pricebook
title: Create a Price Book
sidebar_label: Create a Price Book
---

## `POST` Create a Price Book

```http
https://api.moltin.com/pcm/pricebooks
```

Creates a price book. You can add the prices to the price book now or update the price book later.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

Required. A [`pricebook`](index.md#the-pricebook-object) object with the following attributes:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `pricebook` |
| `attributes.name` | Required | `string` | A unique name for the price book. |
| `attributes.description` | Optional  | `string` | The purpose for the price book, such as flash sale pricing or preferred customer pricing. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": {
        "id": "2cf0d38c-58aa-420d-8658-4385dccea609",
        "type": "pricebook",
        "attributes": {
            "created_at": "2021-02-08T20:54:07.494Z",
            "description": "Tier 1 pricing",
            "name": "Customer AAA Pricing",
            "updated_at": "2021-02-08T20:54:07.494Z"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/pcm/pricebooks \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "pricebook",
            "attributes": {
                "name": "Customer AAA Pricing",
                "description": "Tier 1 pricing"
            }
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
