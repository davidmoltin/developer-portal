---
id: get-a-job
title: Get A Job
sidebar_label: Get A Job
---

:::note
Currently, the `jobs` endpoint supports viewing the status of the `https://api.moltin.com/pcm/products/:productId/build` request and the errors in the build only.
:::

## `GET` Get A Job

```http
https://api.moltin.com/pcm/jobs/:jobId
```
<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/pcm/job/2950cae3-1050-4c43-9fbd-2aa60dc5c249 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```
<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `jobId` | Required | `string` | The ID of the job that you want to retrieve.|

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!-- Response -->

`200 OK`

```json
{
    "data": {
      "type": "pim-job",
      "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249",
        "attributes": {
            "created_at": "2021-10-04 18:29:42.164 +0000 UTC",
            "status": "success",
            "type": "child-products",
            "updated_at": "2021-10-04 18:29:42.164 +0000 UTC"
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
