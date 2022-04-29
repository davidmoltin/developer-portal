---
id: create-a-product
title: Create a Product
sidebar_label: Create a Product
---

## `POST` Create a Product

```http
https://api.moltin.com/pcm/products
```

Creates a product with the attributes that are defined in the body.

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

**Body**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `product` |
| `attributes.name` | Required | `string` | The product name to display to customers. |
| `attributes.commodity_type` | Required | `string` | Valid values: `physical` or `digital` |
| `attributes.sku` | Required | `string` | The unique [stock keeping unit](../../../glossary.md#stock-keeping-unit-sku) of the product. |
| `attributes.slug` | Optional | `string` | The unique [slug](../../../glossary.md#slug) of the product. |
| `attributes.description` | Optional | `string` | The product description to display to customers. |
| `attributes.mpn` | Optional | `string` | The [manufacturer part number](../../../glossary.md#manufacturer-part-number-mpn) of the product. |
| `attributes.status` | Optional | `string` | Valid values: `draft` or `live`. Default is `draft`. |
| `attributes.upc_ean` | Optional | `string` | The [universal product code](../../../glossary.md#universal-product-code-upc) or [european article number](../../../glossary.md#european-article-number-ean) of the product. |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

<!-- Response -->

`201 Created`

```json
{
    "data": {
        "type": "product",
        "id": "60afe403-a191-455e-b771-c510c928a308",
        "attributes": {
            "commodity_type": "physical",
            "description": "The 30 inch version of this popular electric range.",
            "mpn": "BE-R-1111-aaaa-1a1a-30",
            "name": "BestEver Range 30 inch, Model 1a1a-30",
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
curl -X POST https://api.moltin.com/pcm/products \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "product",
            "attributes": {
                "name": "BestEver Range 30 inch, Model 1a1a-30",
                "sku": "BE-Range-1a1a-30",
                "slug": "bestever-range-1a1a-30",
                "description": "The 30 inch version of this popular electric range.",
                "status": "draft",
                "commodity_type": "physical",
                "upc_ean": "111130303030",
                "mpn": "BE-R-1111-aaaa-1a1a-30"
            }
        }
    }'

```

<!--END_DOCUSAURUS_CODE_TABS-->
