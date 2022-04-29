---
id: update-a-flow
title: Update a Flow
sidebar_label: Update a Flow
---

## `PUT` Update a Flow

```http
https://api.moltin.com/v2/flows/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the flow you are changing. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the flow you’re requesting. |
| `type` | Required | `string` | Represents the type of object being returned. |
| `name` | Optional | `string` | The name of the flow. |
| `slug` | Optional | `string` | A unique slug identifier for this flow. |
| `description` | Optional | `string` | Any description for this flow. |
| `enabled` | Optional | `string` | `true` if enabled `false` if not. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
        "type": "flow",
        "name": "extraFieldRenamed",
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
                "updated_at": "2018-05-10T18:11:47.469Z"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT "https://api.moltin.com/v2/flows/:id" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "id": "{FLOW_ID}",
            "type": "flow",
            "name": "Categories",
            "slug": "categories",
            "description": "Extends the default category object",
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
const flowId = 'XXX'
const data = {
  name: 'Categories',
  slug: 'categories',
  description: 'Extends the default category object'
}
Moltin.Flows.Update(flowId, data).then(flow => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
