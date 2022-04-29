---
id: update-an-entry
title: Update an Entry
sidebar_label: Update an Entry
---

## `PUT` Update an entry

```http
https://api.moltin.com/v2/flows/:slug/entries/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `slug` | Required | `string` | The slug for the Flow you are requesting an entry for. |
| `id` | Required | `string` | The ID of the entry you are updating. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | This is always `entry`. |
| `:fieldSlug` | Required | `string` | The field slug for each field in this flow along with the corresponding value for this entry. |
| `entryID` | Required | `string` | The ID of the entry. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
        "id": "03224af8-da41-4761-99fb-a125fa81ed99",
        "type": "entry",
        "brand-image": "someimage new things",
        "meta": {
            "timestamps": {
                "created_at": "2018-06-06T14:42:39.312Z",
                "updated_at": "2018-06-06T14:42:39.312Z"
            }
        },
        "links": {
            "self": "https://api.moltin.com/v2/flows/brands/entries/03224af8-da41-4761-99fb-a125fa81ed99"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/v2/flows/:flowSlug/entries/:entryId \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "id": "{ENTRY_ID}",
         "type": "entry",
         "{FIELD_SLUG}": "a new value",
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
const entryId = 'XXXX'
const data = {
  "{FIELD_SLUG}": "A new value"
}
Moltin.Flows.UpdateEntry(flowSlug, entryId, data).then(entry => {
  // Do something
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

:::note
You can have multiple `{FIELD_SLUG}`values in the request body if they are related to the flow.
:::
