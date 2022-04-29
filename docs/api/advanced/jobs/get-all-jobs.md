---
id: get-all-jobs
title: Get all Jobs
sidebar_label: Get all Jobs
---

## `GET` Get all Jobs

```http
https://api.moltin.com/v2/jobs
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


<!-- Response -->

`200 OK`


```json
{
    "data": [
        {
            "id": "974c9db4-38da-4dbf-90c2-33eed5f3e77c",
            "type": "job",
            "job_type": "order_export",
            "status": "failed",
            "error": "No results matched the supplied filter",
            "link": {
                "href": ""
            },
            "links": {
                "self": "https://api.moltin.com/v2/jobs/974c9db4-38da-4dbf-90c2-33eed5f3e77c"
            },
            "timestamps": {
                "created_at": "2018-10-04T11:08:49.156490335Z",
                "updated_at": "2018-10-04T11:08:49.162867081Z"
            }
        }
    ]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/jobs \
     -H "Authorization: Bearer XXXX"
```

<!--END_DOCUSAURUS_CODE_TABS-->
