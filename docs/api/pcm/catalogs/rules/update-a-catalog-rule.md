---
id: update-a-catalog-rule
title: Update a Catalog Rule
sidebar_label: Update a Rule
---

## `PUT` Update a Catalog Rule

```text
https://api.moltin.com/pcm/catalogs/rules/:catalogRuleId
```

Updates an existing catalog rule. This operation performs a sparse update. Only the fields included in the request body are updated.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogRuleId` | Required | `string` | Specifies the unique identifier of a catalog rule. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Note that this must be a client credentials token. |


**Body**:

Required. A [`Rule`](../index.md#the-rule-object) object with the fields you want to update.

| Attribute | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | Specifies the ID of the catalog that you want to update. The same `catalogRuleId` is used as the path parameter in the request. |
| `type` | Required | `string` | Specifies the type of the catalog that you want to update. Set this value to `catalog_rule`. |
| `attributes.name` | Required | `string` | Specifies the name of the rule that you want to update. |
| `attributes.description` | Optional | `string` | Specifies the purpose for this rule that you want to update. |
| `attributes.catalog_id` | Required | `string` | Specifies the unique identifier of the catalog for this rule that you want to update. |
| `attributes.customer_ids` | Optional | `[array]` | Specifies the list of customers who can see this catalog. If this field is empty, the rule matches all customers. |
| `attributes.channels` | Optional | `[array]` | Specifies the list of channels in which this catalog can be displayed. A channel is the shopping experience, such as a mobile app or web storefront. If empty, the rule matches all channels. |
| `attributes.tags` | Optional | `[array]` | Specifies a list of user-defined tags that can be used to refine the rule in any way you want. |

<!-- Response - PCM-->

`200 OK`

```json
{
    "data": {
        "attributes": {
            "catalog_id": "8caf81b8-9bc7-4b72-92fc-3775722aa06a",
            "channels": [
                "dealers-site"
            ],
            "created_at": "2021-04-12T16:47:39.178Z",
            "description": "Dealers",
            "name": "Dealers",
            "channels": ["in_store"],
            "schedules": [
                {
                    "valid_from": "2021-09-22T00:00:00.000+01:00(Europe/Paris)",
                    "valid_to": "2021-12-21T00:00:00.000+01:00(Europe/Paris)"
                }
            ],
            "updated_at": "2021-04-12T16:56:36.029Z"
        },
        "id": "4abd19fa-b697-4cec-a1c7-922a16a264f6",
        "type": "catalog_rule"
    },
    "links": {
        "self": "/pcm/catalogs/rules/4abd19fa-b697-4cec-a1c7-922a16a264f6"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/pcm/catalogs/rules/4abd19fa-b697-4cec-a1c7-922a16a264f6 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "id": "4abd19fa-b697-4cec-a1c7-922a16a264f6",
            "type": "catalog_rule",
            "attributes": {
                "catalog_id": "8caf81b8-9bc7-4b72-92fc-3775722aa06a"
            }
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
