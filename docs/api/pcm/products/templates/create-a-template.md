---
id: create-a-template
title: Create a Template
sidebar_label: Create a Template
---

## `POST` Create a Template

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
 | `type` | Required | `string` | Specifies the type of the resource. You must use `flow`.|
 | `name` | Required | `string` | Specifies the name of the template. |
 | `slug` | Required | `string` | Specifies the unique slug identifier for the template. You must use the `products(my-template-slug`) format. For example, `products(Skincare)`. |
 | `description` | Required | `string` | Provides a description for the template. |
 | `enabled` | Required | `boolean` | Specifies whether the template is enabled. Set this parameter `true` to assign the template to an attribute. |

<!-- Response -->

`201 Created`

```json
{
    "data": {
        "id": "6d320b42-237d-4474-8452-d49f884d4ae1",
        "type": "flow'",
      "name": "products(Skincare)",
      "slug": "products(Skincare)",
      "description": "newFlowDescription_6717339029",
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
            "name": "products(Skincare)",
            "slug": "products(Skincare)",
            "description": "newFlowDescription_6717339029",
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
  name: 'products(Skincare)',
  slug: 'products(Skincare)',
  description: 'Extends the default product object',
  enabled: true
}
Moltin.Flows.Create(data).then(flow => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
