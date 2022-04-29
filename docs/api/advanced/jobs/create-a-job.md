---
id: create-a-job
title: Create a Job
sidebar_label: Create a Job
---

Currently, you can invoke the jobs service to [export orders](../../carts-and-orders/orders/export-orders.md)

:::note
Jobs automatically expire one week after creation. You must fetch the exported data before the jobs expire.
:::

## `POST` Create a Job

```http
https://api.moltin.com/v2/jobs
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
 | `filter` | Required | `string` | The same filter that you use when getting all orders. For more information, see the [Filtering orders](../../carts-and-orders/orders/index.md#filtering) section. |
 | `job_type` | Required | `string` | The type of task you want to run, e.g., `order_export`. |
 | `type` | Optional | `string` | Must be set to `job`. |


<!-- Response -->

`201 Created`


```json
{
    "data": {
        "type": "job",
        "id": "v4154f5b-df0c-4781-be28-c2d5669b29f9",
        "job_type": "order_export",
        "link": {
            "href": ""
        },
        "links": {
            "self": "http://exporter.dev.molt.in/v2/jobs/v4154f5b-df0c-4781-be28-c2d5669b29f9"
        },
        "status": "pending",
        "timestamps": {
            "created_at": "2018-08-20T15:01:13.0194505Z",
            "updated_at": "0001-01-01T00:00:00Z"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X POST https://api.moltin.com/v2/jobs \
     -H "Authorization: Bearer XXXX"
     -d $'{
       "data": {
         "filter": "gt(created_at,2018-09-01):lt(created_at,2018-10-01):eq(payment,refunded)",
         "job_type": "order_export"
       }
     }'
```

<!--END_DOCUSAURUS_CODE_TABS-->
