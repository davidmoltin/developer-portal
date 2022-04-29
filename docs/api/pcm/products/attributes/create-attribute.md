---
id: create-attribute
title: Create an Attribute
sidebar_label: Create an Attribute
---

## `POST` Create an Attribute

```http
https://api.moltin.com/v2/fields
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

**Body**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Specifies the type of the resource. You must use `field`.|
| `name` | Required | `string` | Specifies the name of the attribute. |
| `slug` | Required | `string` | Specifies a unique slug identifier for the attribute. |
| `field_type` | Required | `string` | Specifies the type of field. The options are `string`, `integer`, `boolean`, `float`, or `date`. You cannot update the `field_type` after creating an attribute.|
| `description` | Required | `string` | Provides a description for the attribute. |
| `required` | Required | `boolean` | Specifies whether an input is required for this attribute when you create an entry fo r the attribute. Set `true` if input is required. Set `false` if no input is required for the attribute entries.|
| `default` | Optional | `string` | Specifies an optional value to use if the attribute is required and no value is provided. |
| `enabled` | Required | `boolean` | Specifies whether the attribute is enabled. Set `true` to enable using the attribute in a template, other wise use `false`.|
| `validation_rules` | Optional | `array[object]` | Specifies the validation rules to use for attribute. |
| `order` | Optional | `integer` | Specifies the order in which the attribute is returned relative to the rest of the flow fields. |
| `omit_null` | Optional | `boolean` | Specifies whether the attribute is omitted from responses. Set `true` to omit the attribute from response. Set `true` to include the attribute in responses. |
| `relationships` | Required | `object` | Specifies the relationship object to link this attribute to a template by providing the ID of the template. **Note**: You can link an attribute to only one template.|


<!-- Response -->

`201 Created`


```json
{
    "data":
      [
        {
        "id": "102b2087-d56a-45e7-bf1c-e9517716abb3",
        "type": "field",
        "name": "SkinType",
        "slug": "SkinType",
        "field_type": "string",
        "description": "PIM Product Custom Flow Field",
        "required": false,
        "omit_null": false,
        "default": 0,
        "enabled": true,
        "order": 1,
        "relationships": {
            "flow": {
                "data": {
                    "type": "flow",
                    "id": "7782671c-f793-4687-86f2-34473698ac44"
                  }
            }
        }
      },
      {
        "type": "field",
        "name": "ml",
        "slug": "ml",
        "field_type": "string",
        "description": "PIM Product Custom Flow Field",
        "required": false,
        "omit_null": false,
        "default": 0,
        "enabled": true,
        "order": 1,
        "relationships": {
            "flow": {
                "data": {
                    "type": "flow",
                    "id": "7782671c-f793-4687-86f2-34473698ac44"
        }
      }
    }
  }
    ]
  }
        "meta": {
            "timestamps": {
                "created_at": "2018-05-10T18:19:11.559Z",
                "updated_at": "2018-05-10T18:19:11.559Z"
            }
          }'
```

<!--END_DOCUSAURUS_CODE_TABS-->


:::warning
You cannot update the `field_type` after creating an attribute.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST "https://api.moltin.com/v2/fields" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
      "data":
        [
        {
        "type": "field",
        "name": "SkinType",
        "slug": "SkinType",
        "field_type": "string",
        "description": "Pim Product Custom Flow Field",
        "required": false,
        "omit_null": false,
        "default": 0,
        "enabled": true,
        "order": 1,
        "relationships": {
            "flow": {
                "data": {
                    "type": "flow",
                    "id": "7782671c-f793-4687-86f2-34473698ac44"
                }
            }
          }
        },
        {
          "type": "field",
          "name": "ml",
          "slug": "ml",
          "field_type": "string",
          "description": "Pim Product Custom Flow Field",
          "required": false,
          "omit_null": false,
          "default": 0,
          "enabled": true,
          "order": 1,
          "relationships": {
              "flow": {
                  "data": {
                      "type": "flow",
                      "id": "7782671c-f793-4687-86f2-34473698ac44"
                }
            }
        }
      }
    ]
  }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
