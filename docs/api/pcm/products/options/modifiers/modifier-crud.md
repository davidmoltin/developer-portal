---
id: modifier-crud
title: Modifier API Requests and Responses
sidebar_label: Modifier API
---

## `POST` Create a Modifier

```http
https://api.moltin.com/pcm/variations/:variationId/options/:optionId/modifiers
```

:::important

- Ensure that an option ID is provided in the request to create modifier for the option.
- Modifier values can only contain A-Z, a-z, 0 to 9, -, and _. No spaces or special characters are allowed.

:::

Use one of the following for modifier types and corresponding values:

- `commodity_type` : Provide `physical` or `digital`
- `status`: Provide `live` or `draft`.
- `description_append` : Provide a value to append with the description.
- `description_prepend`:  Provide a value to prepend with the description.
- `description_equals` : Provide a value for the description.
- `name_append`: Provide a value to append with the name.
- `name_prepend`: Provide a value to prepend with the name.
- `name_equals` : Provide a value for the name.
- `sku_append`: Provide a value to append with the SKU.
- `sku_prepend`: Provide a value to prepend with the SKU.
- `sku_equals` : Provide a value for the SKU.
- `slug_append`: Provide a value to append with the slug.
- `slug_prepend`: Provide a value to prepend with the slug.
- `slug_equals` : Provide a value for the slug.

You need not provide values for `slug_builder` and `sku_builder`. These modifier use `seek` and `set`. The string provided for `set` replaces all the strings that match the value provided in `seek`. For example, if you set `"seek":"{color}"` and `"set":"red"`, all strings that match `"{color}"` are replaced with `red`. For more information, see the [Modifiers](modifiers.md) section.

### Parameters

#### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `optionId` | Required | `string` | The ID of the option for which you want to provide a modifier. |

#### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of resource object. You must use `product-variation-modifier`.|
| `attributes.type` | Required | `string` | The type of the modifier.|
| `attributes.value` | Required for non-builder modifiers | `string` | The value of the modifier type. |
| `seek` | Required for builder modifiers | `string` | The sub-string to find and replace enclosed in curly brackets for  `slug_builder` and `sku_builder`.|
| `set` | Required for builder modifiers | `string` | The value to replace matches the `seek` string for `slug_builder` and `sku_builder`.|

### Request Example - Curl

```bash
curl -X POST https://api.moltin.com/pcm/variations/:variationId/options/:optionId/modifiers
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "product-variation-modifier",
          "attributes": {
              "seek": "{color}",
              "set": "red",
              "type": "slug_builder"
            }
        }
    }'
```

This request creates a product variation modifier with the attributes that are defined in the body as in the following response:

#### Response

`201 Created`

```json
{
    "data": {
        "type": "product-variation-modifier",
        "id": "310e10f1-9bb9-4bdd-99ec-b9b0e4d54d5d",
        "attributes": {
            "seek": "{color}",
            "set": "red",
            "type": "slug_builder"
        }
    }
}
```

## `GET` Get a Modifier

```http
https://api.moltin.com/pcm/variations/:variationId/options/:optionId/modifiers/:modifierId
```

### Parameters

#### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `optionId` | Required | `string` | The ID of the option which is modified. |
| `modifierId` | Required | `string` | The ID of the modifier to get. |

#### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request Example - Curl

```bash
curl -X GET https://api.moltin.com/pcm/variations/:variationId/options/:optionId/modifiers/:modifierId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

#### Response

`200 OK`

```json
{
        "data": {
            "type": "product-variation-modifier",
            "id": "0e681196-f238-46b3-934d-1782a3e2a5e8",
            "attributes": {
                "type": "commodity_type",
                "value": "digital"
        }
    }
}
```

## `GET` Get all Modifiers

```http
https://api.moltin.com/pcm/variations/:variationId/options/:optionId/modifiers
```

### Parameters

#### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `optionId` | Required | `string` | The ID of the option for which you want to retrieve modifiers. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request Example - Curl

```bash
curl -X GET https://api.moltin.com/pcm/variations/:variationId/options/:optionId/modifiers \
     -H "Authorization: Bearer XXXX"
     -H "Content-Type: application/json" \
```

#### Response

`200 OK`

```json
{
    "data": [
        {
            "type": "product-variation-modifier",
            "id": "310e10f1-9bb9-4bdd-99ec-b9b0e4d54d5d",
            "attributes": {
                "seek": "{color}",
                "set": "red",
                "type": "slug_builder"
            }
        },
        {
            "type": "product-variation-modifier",
            "id": "941fb129-ad57-4d50-a7c4-68cf88f6bb9e",
            "attributes": {
                "type": "commodity_type",
                "value": "digital"
            }
        }
    ]
}
```

## `PUT` Update a Modifier

```http
https://api.moltin.com/pcm/variations/:variationId/options/:optionId/modifiers/:modifierId
```

### Parameters

#### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `optionId` | Required | `string` | The ID of the option that consists of the modifier. |
| `modifierId` | Required | `string` | The ID of the modifier that you want to update.|

#### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | The type of resource object. You must use `product-variation-modifier`.|
| `id` | Required | `string` | The ID of the modifier.|
| `attributes.type` | Required | `string` | The modifier type.|
| `attributes.value` | Required | `string` | The value of the modifier type. |
| `attributes.seek` | Required for builder modifiers | `string` | The sub-string to match for find and replace. |
| `attributes.set` | Required for builder modifiers| `string` | The value to replace the string in `seek`.|

### Request Example - Curl

```bash
curl -X PUT https://api.moltin.com/pcm/variations/:variationId/options/:optionId/modifiers/:modifierId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
    "data": {
        "type": "product-variation-modifier",
        "id": "0e681196-f238-46b3-934d-1782a3e2a5e8",
        "attributes": {
            "type": "commodity_type",
            "value": "digital"
        }
    }
}'
```

#### Response

`200 Created`

```json
{
    "data": {
        "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249",
        "type": "product-variation-modifier",
        "attributes": {
            "type": "commodity_type",
            "value": "digital"
        }
    }
}
```

## `DELETE` Delete a Modifier

```http
https://api.moltin.com/pcm//variations/:variationId/options/:optionId/modifiers/:modifierId
```

:::note
Deleting a modifier in use returns a `422 Failed Validation` error message.
:::

### Parameters

#### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `optionId` | Required | `string` | The ID of the option. |
| `modifierId` | Required | `string` | The ID of the modifier in the option. |

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request Example - Curl

```bash
curl -X DELETE https://api.moltin.com/pcm/variations/684bceee-0ee3-4f43-ac32-50bb44c1eee5/options/39148bc3-3028-4196-9350-1b4ac927c9d6/modifiers/0e681196-f238-46b3-934d-1782a3e2a5e8  \
     -H "Authorization: Bearer XXXX"
```

#### Response

`204 No Content`

```json

```
