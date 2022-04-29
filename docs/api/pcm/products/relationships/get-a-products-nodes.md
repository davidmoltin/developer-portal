---
id: get-a-products-nodes
title: Get a Productʼs Nodes
sidebar_label: Get a Productʼs Nodes
---

## `GET` Get a Productʼs Nodes

```http
https://api.moltin.com/pcm/products/:productId/nodes
```

Retrieves the nodes that are associated with the specified product.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

<!-- Response - PCM-->

`200 OK`

```json
{
    "data": [
        {
            "type": "node",
            "id": "de3c3590-4138-4943-b04d-d7b7dc48fa54",
            "attributes": {
                "description": "Gas stoves and ovens",
                "name": "Gas Ranges",
                "slug": "Gas-Ranges-MA2"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/children"
                    }
                },
                "products": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/products"
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
curl -X GET https://api.moltin.com/pcm/products/14e055d0-eebb-4090-8594-a0a7aeea2151/nodes \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
