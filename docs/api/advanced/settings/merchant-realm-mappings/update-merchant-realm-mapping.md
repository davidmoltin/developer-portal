---
id: update-merchant-realm-mapping
title: Update a Merchant Realm Mapping
sidebar_label: Update a Merchant Realm Mapping
---

## `PUT` Update a Merchant Realm Mapping

```http
https://api.moltin.com/v2/merchant-realm-mappings/:mappingId
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `mapping-id` | Required | `string` | The ID for the requested merchant realm mapping. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | merchant-realm-mappings |
| `prefix` | Required | `string` | The prefix name to associate with a store. |

<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "925c8617-41b3-44fa-ac4b-2f6edd1bd3c5",
        "prefix": "awesomeName",
        "realm_id": "e730bf37-ed95-4ca9-b4c4-2c5ee08b21d7",
        "store_id": "88888888-4444-4333-8333-111111111111",
        "type": "merchant-realm-mappings"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->


<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/merchant-realm-mappings/:mappingId \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "type": "merchant-realm-mappings",
        "prefix": "awesomeName"
     }
   }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
