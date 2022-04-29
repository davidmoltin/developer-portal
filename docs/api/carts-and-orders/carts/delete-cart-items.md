---
id: delete-cart-items
title: Delete Cart Items
sidebar_label: Delete Cart Items
---

A shopper can clean up their cart, deleting custom items, promotions, and so on, while the empty cart remains available. The cart id, name, description and any customer associations persist. The shopper can continue to add items to the cart.

## `DELETE` Cart Items

```http
https://api.moltin.com/v2/carts/:cartID/items
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`204 No Content`


```json

```

<!--END_DOCUSAURUS_CODE_TABS-->


<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/v2/carts/:cartID/items \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
