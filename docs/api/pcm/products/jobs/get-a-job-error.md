---
id: get-a-job-error
title: Get Job Errors
sidebar_label: Get Job Errors
---

:::note
Currently, the `jobs` endpoint supports viewing the status of the `https://api.moltin.com/pcm/products/:productId/build` request and the errors in the build only.
:::


## `GET` Get a Job’s Error(s)

```http
https://api.moltin.com/pcm/jobs/:jobId/errors
```
<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/job/:jobId/errors \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `jobId` | Required | `string` | The ID of the job to retrieve errors for.|

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |
<!--END_DOCUSAURUS_CODE_TABS-->


<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`200 OK`

```json
{
  "data": [
    {
      "type": "pim-job-error",
      "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249",
      "attributes": {
          "message": "data.attributes.sku: Must be unique amongst products."
    }
  }
]
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
