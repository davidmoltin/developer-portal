---
id: create-an-association
title: Create a Customer-Cart Association
sidebar_label: Create an Association
---

You can create associations between a customer and one or more carts. After cart associations exist for a customer, the customer can access those carts across any device.

## `POST` Create an association between a customer and a cart

```http
https://api.moltin.com/v2/carts/:cartId/relationships/customers
```

Creates an association between a cart (`:cart_id`) and a customer.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The id for the cart created by the customer. Ensure that you follow the guidelines for [Safe Characters](../../../basics/safe-characters.md).|

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `x-moltin-customer-token` | Required | `string` | A customer token to access specific customer orders.|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.  If there is no customer token the grant type must be `client_credentials`.  |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type`| Required | `string` | The type of related object. Ensure that it is `customer`. |
| `data[].id` | Required | `string` | The id of the customer.|

<!-- Response -->

`200 OK`

```json
{
    "data": [
      {
        "type": "customer",
        "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
      }
    ]
}
```

`204 No Content` is sent back in case the customer has already been associated to the cart.

<!--END_DOCUSAURUS_CODE_TABS-->

## With customer token

Requires an [`implicit` token](../../../basics/authentication/implicit-token.md) with a [`customer` token](../../../customers-and-accounts/customers/customer-tokens.md).

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:cartId/relationships/customers \
     -H "x-moltin-customer-token: XXXX"
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [{
          "type": "customer",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }'
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Without customer token

Requires a [`client_credentials` token](../../../basics/authentication/client-credential-token.md).

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/carts/:cartId/relationships/customers \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data": [{
          "type": "customer",
          "id": "b3f2b6de-8fd4-4cdf-a9d9-c5f7cecccdfe"
          }]
      }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
