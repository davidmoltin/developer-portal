---
id: get-an-entry
title: Get an Entry
sidebar_label: Get an Entry
---

## `GET` Get an Entry

```http
https://api.moltin.com/v2/flows/:slug/entries/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID of the entry you are requesting. |
| `slug` | Required | `string` | The slug for the flow you are requesting an entry for. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "4abb8316-d0a2-4c91-bf29-4d19ba932227",
        "type": "entry",
        "meta": {
            "timestamps": {
                "created_at": "2018-05-10T15:28:59.192Z",
                "updated_at": "2018-05-10T15:28:59.192Z"
            }
        },
        "links": {
            "self": "https://api.moltin.com/v2/flows/products/entries/4abb8316-d0a2-4c91-bf29-4d19ba932227"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl https://api.moltin.com/v2/flows/:slug/entries/:id \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const slug = 'XXXX'
const entryId = 'XXXX'
Moltin.Flows.GetEntry(slug, entryId).then(entry => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

