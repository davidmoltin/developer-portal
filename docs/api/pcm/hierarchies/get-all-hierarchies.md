---
id: get-all-hierarchies
title: Get all Hierarchies
sidebar_label: Get all Hierarchies
---

## `GET` Get all Hierarchies

```http
https://api.moltin.com/pcm/hierarchies
```

Retrieves a list of all hierarchies.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": [
        {
            "type": "hierarchy",
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "attributes": {
                "description": "Free standing appliances",
                "name": "Major Appliances",
                "slug": "Major-Appliances-MA0"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                    }
                }
            }
        },
        {
            "type": "hierarchy",
            "id": "4a5a476e-f28d-491f-95d7-86e53f05daf9",
            "attributes": {
                "description": "Counter-top appliances",
                "name": "Small Appliances",
                "slug": "Small-Appliances-SA0"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/children"
                    }
                }
            }
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/hierarchies \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
