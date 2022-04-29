---
id: update-a-hierarchy
title: Update a Hierarchy
sidebar_label: Update a Hierarchy
---

## `PUT` Update a Hierarchy

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId
```

Updates the specified hierarchy.

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

**Body**:

Specify whichever `attributes` you want to change. The values of the other `attributes` remain the same. If the `attributes` section is empty, the hierarchy is not updated.

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Always: `hierarchy` |
| `id` | Required | `string` | The unique identifier of the hierarchy. Must match the hierarchy ID specified in the request path. |
| `attributes.name` | Optional | `string` | An updated name. Cannot be null. |
| `attributes.description` | Optional | `string` | An updated description. |
| `attributes.slug` | Optional | `string` | An updated slug. Must be unique. |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

<!-- Response - PCM -->

`200 OK`

```json
{
    "data": {
        "type": "hierarchy",
        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
        "attributes": {
            "description": "Free-standing appliances",
            "name": "Major Appliances",
            "slug": "Major-Appliances-MA0",
            "locales":{
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
curl -X PUT https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007 \
     -H "Authorization: Bearer XXXX" \
     -d $'{
        "data": {
            "type": "hierarchy",
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "attributes":{
                "name": "Major Appliances",
                "description": "Free-standing appliances",
                "slug": "Major-Appliances-MA0"
                }
            }
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
