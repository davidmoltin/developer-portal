---
id: get-a-hierarchy
title: Get a Hierarchy
sidebar_label: Get a Hierarchy
---

## `GET` Get a Hierarchy

```http
https://api.moltin.com/pcm/hierarchies/:hierarchyId
```

Retrieves the specified hierarchy.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |

**Query Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `include` | Optional | `string` | To include all the nodes in the hierarchy within the response, add:`include=children` |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

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
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007 \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
