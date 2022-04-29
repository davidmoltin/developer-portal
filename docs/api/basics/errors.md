---
id: errors
title: Status and Error Code Responses
sidebar_label: Status and Error Codes
---

Any request that returns an error follows a standard format. Commerce Cloud returns an array of `errors` that contains objects containing `status`, `title`, and `details`.
You’ll most likely receive an error if validation fails, something doesn’t exist or something went wrong on our end. We return errors inline with the [JSON API specification](http://jsonapi.org/format/#error-objects).

Elastic Path Commerce Cloud uses standard [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to determine the response status. The following table lists the generic rules:

| Code | Response |
| :--- | :--- |
| `2xx` | The request completed successfully. |
| `4xx` | The request failed due to a problem with the request.  |
| `5xx` | The request failed due to a problem with Elastic Path Commerce Cloud. |

For more information, see the documentation for individual calls. Additionally, the `429` error code indicates that the request exceeds the allowed [rate limits](rate-limits.md) in Elastic Path Commerce Cloud.

## Example errors

This section contains some example error responses from the API.

### Bad Request

A `400: Bad Request` response is returned for all other errors, such as validation failures or invalid JSON in the request body.

```json
{
  "errors": [
    {
      "status": 400,
      "source": "enabled",
      "title": "required",
      "detail": "enabled is required"
    }
  ]
}
```

### Unauthorized

A `401: Unauthorized` response is returned when you provide an invalid [authentication](authentication/index.md) token.

```json
{
  "errors": [
    {
      "status": 401,
      "title": "Unable to validate access token"
    }
  ]
}
```

### Forbidden

A `403: Forbidden` response is returned when you [authenticate](authentication/index.md) with invalid credentials.

```json
{
  "errors": [
    {
      "status": 403,
      "title": "Forbidden"
    }
  ]
}
```

### Not Found

When a resource is not found you get a `404: Not Found` response.

```json
{
  "errors": [
    {
      "status": 404,
      "detail": "The requested category could not be found",
      "title": "Category not found"
    }
  ]
}
```

### Rate Limited

A `429: Too Many Requests` response is returned when you make too many requests.

```json
{
  "errors": [
    {
      "status": 429,
      "title": "..."
    }
  ]
}
```

### Internal Server Error

A `500: Internal Server Error` response is returned for any back-end errors in Elastic Path Commerce Cloud. An automatic notification is sent to Elastic Path team to resolve the issues as quickly as possible.

```json
{
  "errors": [
    {
      "status": 500,
      "title": "Internal Server Error",
      "title": "There was an internal server error, you can report with your request id.",
      "request_id": "XXXX"
    }
  ]
}
```
