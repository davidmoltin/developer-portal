---
id: get-a-field
title: Get a Field
sidebar_label: Get a Field
---

## `GET` Get a Field

```http
https://api.moltin.com/v2/fields/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the field you are requesting. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "102b2087-d56a-45e7-bf1c-e9517716abb3",
        "type": "field",
        "field_type": "integer",
        "slug": "product-rating",
        "name": "Product Rating",
        "description": "Average rating as given by our users",
        "required": false,
        "default": null,
        "enabled": true,
        "validation_rules": [
            {
                "type": "between",
                "options": {
                    "from": 1,
                    "to": 5
                }
            }
        ],
        "order": 1,
        "omit_null": false,
        "links": {
            "self": "https://api.moltin.com/v2/flows/6d320b42-237d-4474-8452-d49f884d4ae1/fields/102b2087-d56a-45e7-bf1c-e9517716abb3"
        },
        "relationships": {
            "flow": {
                "data": {
                    "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
                    "type": "flow"
                }
            }
        },
        "meta": {
            "timestamps": {
                "created_at": "2018-05-10T18:19:11.559Z",
                "updated_at": "2018-05-10T18:19:11.559Z"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl https://api.moltin.com/v2/fields/:id \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const fieldID = 'XXXX';
Moltin.Fields.Get(fieldID).then(field => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
