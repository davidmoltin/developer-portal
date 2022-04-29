---
id: create-a-flow
title: Create a Flow
sidebar_label: Create a Flow
---

## `POST` Create a Flow

```http
https://api.moltin.com/v2/flows
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `enabled` | Required | `boolean` | `true` if enabled, `false` if not. |
 | `description` | Required | `string` | Any description for this flow. |
 | `slug` | Required | `string` | A unique slug identifier for the flow. |
 | `name` | Required | `string` | The name of the flow. |
 | `type` | Required | `string` | Represents the type of object being returned. |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
        "type": "flow",
        "name": "Products-1",
        "slug": "products-1",
        "description": "Extends the default product object",
        "enabled": true,
        "links": {
            "self": "https://api.moltin.com/v2/flows/6d320b42-237d-4474-8452-d49f884d4ae1"
        },
        "relationships": {},
        "meta": {
            "timestamps": {
                "created_at": "2018-05-10T18:04:26.623Z",
                "updated_at": "2018-05-10T18:04:26.623Z"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST "https://api.moltin.com/v2/flows" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "flow",
            "name": "Products",
            "slug": "products",
            "description": "Extends the default product object",
            "enabled": true
        }
     }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const data = {
  name: 'Products flow',
  slug: 'products',
  description: 'Extends the default product object',
  enabled: true
}
Moltin.Flows.Create(data).then(flow => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
