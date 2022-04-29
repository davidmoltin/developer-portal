---
id: create-a-catalog-rule
title: Create a Catalog Rule
sidebar_label: Create a Rule
---

If you have multiple catalogs, create catalog rule resources. With catalog rules, you can display different catalogs to different shoppers. For example, you can display a preferred pricing catalog to a few special customers. Or you can display one catalog to shoppers using your website and a different catalog to shoppers using your mobile app. Finally, you can define custom criteria by creating tags.

:::note
If you have one catalog for all customers and channels, you can omit creating this resource.
:::

For ideas about the kinds of business scenarios you can achieve with catalog rules, see [Catalog Rules](../../../../concepts/catalog-rules.md). To understand how catalogs are matched to shoppers by using rules, see [Resolving Catalog Rules](../index.md#resolving-catalog-rules).

:::tip
If you want to use the Catalog View API to display v2 products, you must create a catalog rule with `catalog_id=legacy`. For more information, see [The Legacy Catalog Object](../index.md#the-legacy-catalog-object) and [The Rule Object](../index.md#the-rule-object).
:::

## `POST` Create a Catalog Rule

```http
https://api.moltin.com/pcm/catalogs/rules
```

Creates a rule for a catalog.

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Note that this must be a client credentials token. |

### Body

Required. A [Rule](../index.md#the-rule-object) object with the following attributes.

A rule object with only the required attributes defined applies to all customers and all channels. If no other catalog rules apply, the store displays this base catalog.

| Attribute | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Specifies the type of the resource. Set this value to `catalog_rule`. |
| `attributes.name` | Required | `string` | Specifies the name of the rule without spaces. |
| `attributes.description` | Optional | `string` | Specifies the purpose of this rule. |
| `attributes.catalog_id` | Required | `string` | Specifies the unique identifier of the catalog for this rule. **V2**  If you want to display a catalog that contains v2 Products, Brands, Categories, and Collections, specify `legacy`. |
| `attributes.account_ids` | Optional | `[array]` | Specifies the list of accounts who are eligible to see this catalog. If this field is empty, the rule matches all accounts. |
| `attributes.customer_ids` | Optional | `[array]` | Specifies the list of customers who are eligible to see this catalog. If this field is empty, the rule matches all customers. |
| `attributes.channels` | Optional | `[array]` | Specifies the list of channels in which this catalog can be displayed. A channel is the shopping experience, such as a mobile app or web storefront. If empty, the rule matches all channels. |
| `attributes.tags` | Optional | `[array]` | Specifies a list of user-defined tags that can be used to to further restrict the eligibility criteria for this rule. Requests populate the rule tag using the `EP-Context-Tag` header. |
| `attributes.schedules` | Optional | `[array]` | Specifies a time period when a catalog is displayed, such as on a specific date or during summer. Requests populate the rule tag using  the `EP-Context-Tag` header. The `schedules` attribute must include `valid_from` and `valid_to`. `valid_from` matches the date and time that the catalog is displayed from. `valid_to` matches the date and time the catalog is displayed to. Elastic Path Commerce Cloud runs on UTC time. You can offset the timezone by adding the offset to the end of the date and time. For example, a catalog which contains a sale hierarchy that should appear for a set timeframe may be scheduled to publish on a given date and time within a given timezone. For instance, a sale that should begin on 1st of June 2022 05:00 ET and end on the 15th of June 2022 at 23:50 PT would have a valid schedule of `"valid_from": "2022-06-01T05:00:00.000-05:00",`  `"valid_to": "2022-06-15T11:59:99.000-08:00"` |

## Request Example - Curl

```bash
curl -X POST https://api.moltin.com/pcm/catalogs/rules \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
            "type": "catalog_rule",
            "attributes": {
                "name": "Preferred customers",
                "description": "Preferred customers",
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
                "customer_ids": ["fcb065be-0af3-4bb1-94c2-a1ffc53277a9"]
            }
        }
    }'
```

## Response Example

`201 Created`

```json
{
    "data": {
        "attributes": {
            "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
            "created_at": "2021-04-12T16:39:27.635Z",
            "customer_ids": [
                "fcb065be-0af3-4bb1-94c2-a1ffc53277a9"
            ],
            "description": "Preferred customers",
            "name": "Preferred customers",
            "channels": ["in_store"],
            "schedules": [
                {
                    "valid_from": "2021-09-22T00:00:00.000+01:00",
                    "valid_to": "2021-12-21T00:00:00.000+01:00"
                }

            ],
            "updated_at": "2021-04-12T16:39:27.635Z"
        },
        "id": "a01fc6f9-70f9-4d08-af8f-4357e35febd4",
        "type": "catalog_rule"
    },
    "links": {
        "self": "/pcm/catalogs/rules/a01fc6f9-70f9-4d08-af8f-4357e35febd4"
    }
}
```

## Related Resources

### Concepts

- [Account Management](../../../../concepts/account_management.md)
- [Catalogs](../../../../concepts/catalogs.md)
- [Catalog Rules](../../../../concepts/catalog-rules.md)


### API

- [Catalogs](../../../../api/pcm/catalogs/releases/index.md)
