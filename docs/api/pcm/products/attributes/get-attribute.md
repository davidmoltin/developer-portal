---
id: get-atttribute
title: Get an Attribute
sidebar_label: Get an Attribute
---

## `GET` Get an Attribute

```http
https://api.moltin.com/v2/fields/:id
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `id` | Required | `string` | Specifies the ID of the attribute you want to get. |

**Headers**:

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": {
      "type": "product",
    "id": "169e8370-aace-42ce-a1f2-bbf802ec79a3",
    "attributes": {
      "commodity_type": "physical",
      "description": "Product 9965623995",
      "extensions": { "products(Skincare)": { "SkinType": "Oily", "ml": "200" } },
      "locales": {
        "fr-FR": {
          "name": "Maskerade",
          "description": "Mais Granny Weatherwax, la sorcière la plus redoutable de Discworld, est dans le public."
        }
      },
      "mpn": "Product-mpn-9965623995",
      "name": "PIMProduct 9965623995",
      "sku": "product-sku-9965623995",
      "slug": "product-slug-9965623995",
      "status": "live",
      "upc_ean": "9965623995"
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
curl https://api.moltin.com/v2/fields/:id \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const fieldId = 'XXXX';
Moltin.Fields.Get(fieldId).then(fields => {
  // Do something
});
```

<!--END_DOCUSAURUS_CODE_TABS-->
