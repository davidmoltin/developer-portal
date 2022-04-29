---
id: create-a-hierarchy
title: Create a Hierarchy
sidebar_label: Create a Hierarchy
---

## `POST` Create a Hierarchy

```http
https://api.moltin.com/pcm/hierarchies/
```

Creates a hierarchy.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `hierarchy` |
| `attributes.name` | Required | `string` | The name of the hierarchy. The maximum length is 1000 characters. |
| `attributes.description` | Optional | `string` | A description of the hierarchy. |
| `attributes.slug` | Optional | `string` | A unique slug for the hierarchy. |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": {
        "type": "hierarchy",
        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
        "attributes": {
            "description": "Free standing appliances",
            "name": "Major Appliances",
            "slug": "Major-Appliances-MA0",
            "locales": {
                "fr-FR": {
                    "name": "Gros électroménagers",
                    "description": "Appareils autonomes"
                }
            }
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                }
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/pcm/hierarchies/ \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data":{
            "type":"hierarchy",
            "attributes":{
                "name": "Major Appliances",
                "description": "Free standing appliances",
                "slug": "Major-Appliances-MA0"
                }
            }
        }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
