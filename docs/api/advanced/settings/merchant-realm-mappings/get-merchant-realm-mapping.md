---
id: get-merchant-realm-mapping
title: Get a Merchant Realm Mapping
sidebar_label: Get a Merchant Realm Mapping
---

## `GET` Get the Merchant Realm Mapping for the current store

For a direct GET on a Merchant Realm Mapping, see [Get a Merchant Realm Mapping by ID](#get-get-a-merchant-realm-mapping-by-id).

```http
https://api.moltin.com/v2/merchant-realm-mappings
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "925c8617-41b3-44fa-ac4b-2f6edd1bd3c5",
        "prefix": "mystore",
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
curl -X GET https://api.moltin.com/v2/merchant-realm-mappings \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `GET` Get a Merchant Realm Mapping by ID

```http
https://api.moltin.com/v2/merchant-realm-mappings/:mapping-id
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

<!-- Response -->

`200 OK`

```json
{
    "data": {
        "id": "925c8617-41b3-44fa-ac4b-2f6edd1bd3c5",
        "prefix": "mystore",
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
curl -X GET https://api.moltin.com/v2/merchant-realm-mappings/925c8617-41b3-44fa-ac4b-2f6edd1bd3c5 \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
