---
id: delete-an-association
title: Delete a Customer-Cart Association
sidebar_label: Delete an Association
---

You can delete an association between a customer and a cart.

## `DELETE` Delete an association

```http
https://api.moltin.com/v2/carts/:cartId/relationships/customers
```

Deletes an association between a cart (`:cartId`) and a customer.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `cartId` | Required | `string` | The id for the cart created by the customer. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `x-moltin-customer-token` | Required | `string` | A customer token to access specific customer orders. |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `data[].type`| Required | `string` | The type of related object. Ensure that it is `customer`. |
| `data[].id` | Required | `string` | The id of the customer.|

<!-- Response -->

`204 No Content`


```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

## With customer token

Requires an [`implicit` token](../../../basics/authentication/implicit-token.md) with a [`customer` token](../../../customers-and-accounts/customers/customer-tokens.md).

:::note
Pass the `X-Moltin-Customer-Token` header to limit carts to a specific customer. For more information, see [Using a token](../../../customers-and-accounts/customers/customer-tokens.md#using-a-token).
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/carts/:cartId/relationships/customers \
     -H "x-moltin-customer-token: XXXX" \
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
curl -X DELETE https://api.moltin.com/v2/carts/:cartId/relationships/customers \
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
