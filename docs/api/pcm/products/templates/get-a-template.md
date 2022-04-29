---
id: get-a-template
title: Get a Template
sidebar_label: Get a Template
---

## `GET` Get a Template

```http
https://api.moltin.com/v2/flows/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `id` | Required | `string` | Specifies the ID for the template that you want to retrieve. |

**Headers**:

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
        "type": "flow",
        "name": "products(Skincare)",
        "slug": "products(Skincare)",
        "description": "newFlowDescription_6717339029",
        "enabled": true,
        "links": {
            "self": "https://api.moltin.com/v2/flows/38ba1451-efa4-4361-9ca6-3fb646490f37"
        },
        "relationships": {},
        "meta": {
            "timestamps": {
                "created_at": "2018-05-10T01:41:36.009Z",
                "updated_at": "2018-05-10T15:27:26.241Z"
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl https://api.moltin.com/v2/flows/:id \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const flowId = 'XXXX';
Moltin.Flows.Get(flowId).then(flows => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
