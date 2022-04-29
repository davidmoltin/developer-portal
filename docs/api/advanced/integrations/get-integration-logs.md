---
id: get-integration-logs
title: Get Integration Logs
sidebar_label: Get Integration Logs
---

As integrations can fail over time, Elastic Path Commerce Cloud provides the ability to browse all logs for your integrations. The API provides various endpoints to get all logs and jobs.

## `GET` Get all logs

```http
https://api.moltin.com/v2/integrations/logs
```

## Parameters for Get All Logs

### Query Parameters

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `page[limit]` | Optional | `integer` | The number of items to return per page. |
 | `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example for Get All Logs

### Curl

```bash
curl GET https://api.moltin.com/v2/integrations/logs \
     -H "Authorization: Bearer XXXX"
```

## Response Example for Get All Logs

`200 OK`

```json
{
  "data": [
    {
      "id": "11de4222-fbda-498c-9ecb-cd46d598712f",
      "type": "integration-log",
      "succeeded": false,
      "attempt": 1,
      "processing_time": 0.2529,
      "body": "Not found",
      "status_code": 404,
      "error_detail":
        "Received a status code outside of 2xx range - treating webhook as a fail",
      "relationships": {
        "integration": {
          "data": {
            "type": "integration",
            "id": "8edd44ef-1856-4456-90ec-d9fab8a25049"
          }
        },
        "job": {
          "data": {
            "type": "integration-job",
            "id": "3b69a7e2-78ad-4ee6-8a81-c9b1b8a9cd26"
          }
        }
      },
      "meta": {
        "timestamps": {
          "created_at": "2017-10-30T18:15:40.087650928Z"
        }
      }
    }
  ],
  "meta": {
    "limit": 100,
    "offset": 0,
    "current": 1,
    "total": 1
  },
  "results": {
    "total": 1
  }
}
```

## `GET` Get Logs for an Integration

```http
https://api.moltin.com/v2/integrations/:id/logs
```

## Parameters For Get Logs for an Integration

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the integration. |

### Query Parameters

 | Name | Required | Type | Description |
 | --- | --- | --- | --- |
 | `page[limit]` | Optional | `integer` | The number of items to return per page. |
 | `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example for Logs for an Integration

### Curl

```bash
curl GET https://api.moltin.com/v2/integrations/:id/logs \
     -H "Authorization: Bearer XXXX"
```

## Response Example for Logs for an Integration

`200 OK`

```json
{
  "data": [
    {
      "id": "11de4222-fbda-498c-9ecb-cd46d598712f",
      "type": "integration-log",
      "succeeded": false,
      "attempt": 1,
      "processing_time": 0.2529,
      "body": "Not found",
      "status_code": 404,
      "error_detail":
        "Received a status code outside of 2xx range - treating webhook as a fail",
      "relationships": {
        "integration": {
          "data": {
            "type": "integration",
            "id": "8edd44ef-1856-4456-90ec-d9fab8a25049"
          }
        },
        "job": {
          "data": {
            "type": "integration-job",
            "id": "3b69a7e2-78ad-4ee6-8a81-c9b1b8a9cd26"
          }
        }
      },
      "meta": {
        "timestamps": {
          "created_at": "2017-10-30T18:15:40.087650928Z"
        }
      }
    }
  ],
  "meta": {
    "limit": 100,
    "offset": 0,
    "current": 1,
    "total": 1
  },
  "results": {
    "total": 1
  }
}
```

## `GET` Get jobs for an Integration

```http
https://api.moltin.com/v2/integrations/:id/jobs
```

## Parameters for Get Jobs for an Integration

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the integration. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example For All Jobs

### Curl

```bash
curl GET https://api.moltin.com/v2/integrations/:id/jobs \
     -H "Authorization: Bearer XXXX"
```

## Response Example For All Jobs

`200 OK`

```json
{
  "data": [
    {
      "id": "6560f600-b610-4c02-88ac-0d120e3d5071",
      "type": "integration-job"
    },
    {
      "id": "353c015a-92ab-4c06-ab8a-bef8a451b9be",
      "type": "integration-job"
    },
    {
      "id": "4af82fba-8f0a-41b1-add6-0fa16fe3579e",
      "type": "integration-job"
    }
  ]
}
```

## `GET` Get all logs for a job

```http
https://api.moltin.com/v2/integrations/:event_id/jobs/:id/logs
```

## Parameters for Get all Logs for a Job

### Path Parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | `string` | The ID for the job. |
| `event_id` | Required | `string` | The ID for the event. |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example For a Job For an Integration

### Curl

```bash
curl GET https://api.moltin.com/v2/integrations/:event_id/jobs/:id/logs \
     -H "Authorization: Bearer XXXX"
```

## Related Resources

### Concepts

- [Integrations](../../../concepts/integrations.md)

### APIs

- [Integrations API](index.md)
- [Observable Events](observable-events.md)

### How-to guides

- [Integration Examples](../../../developer/get-started/integrations.md)
