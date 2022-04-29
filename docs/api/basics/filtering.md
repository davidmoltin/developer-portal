---
id: filtering
title: Filtering
sidebar_label: Filtering
---

You can filter results returned from the API using a standard URI format.

## Supported Operators

Not all supported operators work with all endpoint attributes. Each endpoint provides a list of filter attributes. Filtering on [custom data](../advanced/custom-data/index.md) fields (Flows) is not supported.

:::note
You can only filter on base object attributes. Filtering through non-base attributes is not supported and returns everything.
:::

:::caution
There is a maximum of 10 filters allowed on a single request.
:::

| **Operator** | Description |
| :--- | :--- |
| `eq` | Equals. Checks if the values of two operands are equal. If they are, the condition is true. See the [`eq` example](#example-the-eq-operator). |
| `like` | Like. Checks if the operand contains the specified string. Wildcards are supported. See the [`like` examples](#example-the-like-operator). |
| `gt` | Greater than. Checks if the value of the first operand is greater than that of the second. If they are, the condition is true.|
| `ge` | Greater than or equal to. Checks if the value of the first operand is greater than or equal to that of the second. If they are, the condition is true.|
| `lt` | Less than. Checks if the value of the first operand is less than that of the second. If they are, the condition is true.|
| `le` | Less than or equal to. Checks if the value of the first operand is less than or equal to that of the second. If they are, the condition is true.|

Passing an incorrectly formatted filter or using an unsupported operator returns a `400` response with the following error:

```json
{
  "errors": [
    {
      "title": "Bad Request",
      "detail": "Could not parse the supplied filter"
    }
  ]
}
```

## Supported Characters

As filters are passed as URL query string parameters, we must ensure all filters are URL safe and are strict about the characters that can be used in a filter.

| Characters | Can be used in filter? |
| :--- | :--- |
| `A-Z` (upper & lower case) | Yes |
| `0-9` | Yes |
| `$` `-` `_` `*` `.`  | Yes |
|  " " (space) | Yes (an unencoded `+` is also treated as a space). |
| `+` | Only when URL encoded (`%2B`). |

Passing unsupported characters returns a `400` response with the following error:

```json
{
  "errors": [
    {
      "title": "Bad Request",
      "detail": "The supplied filter contained unsupported characters"
    }
  ]
}
```

## Supported Date Formats

Specify the date in yyyy-mm-dd format, for example 2022-04-27. You can also specify the date as an integer number of milliseconds since 1970-01-01 00:00:00. It is also known as Unix time. For example, 640912546584.

## URL Encoding Filters

We recommend URL encoding filters. For ease of use, you can encode the full filter, so `filter=eq(email,ron+1@swanson.com)` would become `filter=eq%28email%2Cron%2B1%40swanson.com%29`.

## Supported Endpoints

- `/brands`
- `/categories`
- `/collections`
- `/customers`
- `/files`
- `/orders`
- `/products`
- `/authentication-realms/{{authenticationRealmId}}/user-authentication-info`
- `/accounts`
- `/accounts/{{accountId}}/account-memberships`
- `/accounts/{{accountId}}/account-memberships/unassigned-account-members`

For more detail on filtering, see the Filtering section under each endpoint.

## Examples

### Example: The `eq` operator

In the following example, we make a request to get all digital products from the catalog.

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products?filter=eq(commodity_type, digital) \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.Filter({ eq: { commodity_type: 'digital' } })
  .All()
  .then(products => {
    // Do something
  })
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Example: The `like` operator

The following examples show how to use strings and wildcards with the `like` operator.

#### A string *begins with* a specified value

In the following example we make a request to get all products where the SKU **begins with** `SHOE_DECK`.

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products?filter=like(sku,SHOE_DECK_*) \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.Filter({ like: { sku: 'SHOE_DECK_*' } })
  .All()
  .then(products => {
    // Do something
  })
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### A string *contains* a specified value

In the following example we make a request to get all products where the SKU **contains** `_DECK_`.

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products?filter=like(sku,*_DECK_*) \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.Filter({ like: { sku: '*_DECK_*' } })
  .All()
  .then(products => {
    // Do something
  })
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### A string *ends with* a specified value

In the following example we make a request to get all products where the SKU **ends with** `_RED`.

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products?filter=like(sku,*_RED) \
     -H "Authorization: Bearer XXXX"\
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.Filter({ like: { sku: '*_RED' } })
  .All()
  .then(products => {
    // Do something
  })
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Example: Chaining multiple operators

You can chain filters to a query by using a colon \(`:`\) to separate your filters.
For example, to find all draft products with the slug "new-slug" which have a stock greater than 2 and sorted by `created_at`, you make the following request:

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/products?filter=eq(status,draft):eq(commodity_type,physical) \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
Moltin.Products.Filter({
  eq: {
    status: 'draft',
    slug: 'new-slug'
    },
  gt: {
    stock: 2
    }
  }).All()
    .Sort('created_at')
    .then(products => {
      // Do something
    })
```

<!--END_DOCUSAURUS_CODE_TABS-->
