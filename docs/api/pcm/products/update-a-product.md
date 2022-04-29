---
id: update-a-product
title: Update a Product
sidebar_label: Update a Product
---

## `PUT` Update a Product

```http
https://api.moltin.com/pcm/products/:productId
```

Updates the specified product.

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

Required. Specify whichever `attributes` you want to change. The values of the other `attributes` remain the same. If the `attributes` section is empty, the product is not updated.

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `product` |
| `id` | Required | `string` | The unique identifier of the product. Must match the product ID specified in the request path. |
| `attributes.name` | Optional | `string` | The updated product name to display to customers. Cannot be null.|
| `attributes.sku` | Optional | `string` | The updated [Stock Keeping Unit](../../../glossary.md#stock-keeping-unit-sku) of the product. Must be unique. |
| `attributes.slug` | Optional | `string` | The updated [slug](../../../glossary.md#slug). Must be unique. |
| `attributes.commodity_type` | Optional | `string` | Valid values: `physical` or `digital` |
| `attributes.description` | Optional | `string` | The updated description to display to customers. |
| `attributes.mpn` | Optional | `string` | The updated [Manufacturer Part Number](../../../glossary.md#manufacturer-part-number-mpn). |
| `attributes.status` | Optional | `string` | Valid values: `draft` or `live` |
| `attributes.upc_ean` | Optional | `string` | The updated [Universal Product Code](../../../glossary.md#universal-product-code-upc) or [European Article Number](../../../glossary.md#european-article-number-ean). |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

<!-- Response -->

`200 OK`

```json
{
    "data": {
        "type": "product",
        "id": "60afe403-a191-455e-b771-c510c928a308",
        "attributes": {
            "commodity_type": "physical",
            "description": "The 30 inch version of this popular electric range.",
            "mpn": "BE-R-1111-aaaa-1a1a-30",
            "name": "UPDATED BestEver Range 30 inch, Model 1a1a-30",
            "sku": "BE-Range-1a1a-30",
            "slug": "bestever-range-1a1a-30",
            "status": "draft",
            "upc_ean": "111130303030",
            "locales": {
                "fr-FR": {
                    "name": "MISE À JOUR de la gamme BestEver 30 pouces, modèle 1a1a-30",
                    "description": "La version 30 pouces de cette cuisinière électrique populaire"
                }
            }
        },
        "relationships": {
            "files": {
                "data": [],
                "links": {
                    "self": "/products/60afe403-a191-455e-b771-c510c928a308/relationships/files"
                }
            },
            "templates": {
                "data": [],
                "links": {
                    "self": "/products/60afe403-a191-455e-b771-c510c928a308/relationships/templates"
                }
            }
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X PUT https://api.moltin.com/pcm/products/60afe403-a191-455e-b771-c510c928a308 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product",
            "id": "60afe403-a191-455e-b771-c510c928a308",
            "attributes": {
                "name": "UPDATED BestEver Range, Model 1a1a"
            }
        }
    }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
