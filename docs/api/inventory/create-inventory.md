---
id: create-inventory
title: Create Inventory
sidebar_label: Create Inventory
---

:::important Product Content Management Only
This endpoint works only with products that are created with the PCM Products API.
:::

## `POST` Create Inventory

```http
https://api.moltin.com/v2/inventories/:productId
```

Sets the inventory quantity for the specified product. When you take this action, you are choosing to manage the inventory for this product in Elastic Path Commerce Cloud.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->


**Path Parameters**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `productId` | Required | `string` | The unique identifier of the product. |

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

| Name | Required | Type      | Description |
| :--- | :--- |:----------| :--- |
| `quantity` | Required | `integer` | The amount of inventory available. |

<!-- Response -->

`200 OK`

```json
{
    "data": {
       "quantity": 1000
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/inventories/f5bd4e59-a95f-4bda-bfe6-0f34f47ac94b \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "quantity": 1000
            }
        }
    }'

```

<!--END_DOCUSAURUS_CODE_TABS-->
