---
id: build-child-products
title: Build Child Products
sidebar_label: Build Child Products
---

## `POST` Build Child Products

```http
https://api.moltin.com/pcm/products/:productId/build
```

## Parameters

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `productId` | Required | `string` | The ID of the base product to build the child products for. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X POST https://api.moltin.com/pcm/products/:productId/build \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

This request builds child products for each combination of variation and options in the base product.

### Response

`201 Created`
