---
id: sorting
title: Sorting
sidebar_label: Sorting
---

Sort results that are returned from the API by using the `sort` parameter with the field name you want to sort against.

:::note
To reverse the sort order, prepend the field with a minus.
:::

Currently, sorting is supported for the following endpoints, and against the following fields:

| Endpoint | Fields to sort against |
| :--- | :--- |
| Brands | `created_at`, `description`, `name`, `slug`, `status`, `updated_at` |
| Categories | `created_at`, `description`, `name`, `slug`, `status`, `updated_at` |
| Collections | `created_at`, `description`, `name`, `slug`, `status`, `updated_at` |
| Products | `commodity_type`, `created_at`, `description`, `manage_stock`, `name`, `sku` ,`slug`, `status`, `updated_at` |
| Product Variations | `name` |
| Orders | `created_at`, `payment`, `shipping`, `status`, `with_tax` |

The following example shows how to make a request to get all products, and sort them by the `created_at` timestamp.

## Sort products by `created_at` in ascending order

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products?sort=created_at
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.All()
  .Sort('created_at')
  .then(products => {
    // Do something
  })
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Sort products by `created_at` in descending order

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products?sort=-created_at
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.All()
  .Sort('-created_at')
  .then(products => {
    // Do something
  })
```

<!--END_DOCUSAURUS_CODE_TABS-->
