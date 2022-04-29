---
id: create-an-entry
title: Create an Entry
sidebar_label: Create an Entry
---

## `POST` Create an Entry

```http
https://api.moltin.com/v2/flows/:slug/entries
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `slug` | Required | `string` | Specifies the slug of the template to create an entry for an attribute within the template. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Specifies the type of object. You must use `entry`. |
| `FIELD_SLUG` | Required | `string` | Specifies the slug of the attribute for which you want to add the entry. You must provide the entry and a value for the entry. You must also include the product ID.|
| `id` | Required | `string` | Provides the ID of the product that uses the template to which this attribute is assigned. |

## Request Examples

### Curl

```bash
curl -X POST https://api.moltin.com/v2/flows/:flowSlug/entries \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "entry",
         "SkinType": "Oily",
         "ml": "200",
       }
     }'
```

### JavaScript SDK

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

## Response Example

`201 Created`


```json
{
    "data":
      {
      "type": "entry",
      "id": "169e8370-aace-42ce-a1f2-bbf802ec79a3",
      "SkinType": "Oily",
      "ml": "200"
    }
}
  "meta": {
        "timestamps": {
          "created_at": "2021-09-17T17:13:09.538Z",
          "updated_at": "2021-09-17T17:13:09.538Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/flows/products(Skincare)/entries/169e8370-aace-42ce-a1f2-bbf802ec79a3"
  }'
```
