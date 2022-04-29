---
id: create-an-entry
title: Create an Entry
sidebar_label: Create an Entry
---

## `POST` Create an Entry

```http
https://api.moltin.com/v2/flows/:slug/entries
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `slug` | Required | `string` | The slug for the flow for which you want to create an entry.|

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | The type of the resource object, use `entry`. |
| `:fieldSlug` | Required | `string` | The field slug for each field on this flow along with the corresponding value for this entry. |


<!-- Response -->

`201 Created`


```json

{
  "data": {
        "id": "10fe2aca-09fb-42fe-a1d4-081134320641",
        "type": "entry",
        "meta": {
            "timestamps": {
                "created_at": "2021-10-26T17:10:56.329Z",
                "updated_at": "2021-10-26T17:10:56.329Z"
            }
        },
        "links": {
            "self": "https://epcc-integration.global.ssl.fastly.net/v2/flows/products/entries/10fe2aca-09fb-42fe-a1d4-081134320641"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/flows/:flowSlug/entries \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "entry",
         "{FIELD_SLUG}": "a value",
       }
     }'
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X',
  client_secret: 'X'
})
const flowSlug = 'XXXX'
const data = {
  "{FIELD_SLUG}": "A value"
}
Moltin.Flows.CreateEntry(flowSlug, data).then(entry => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->
