---
id: delete-all-published-catalog-releases
title: Delete all Published Catalog Releases
sidebar_label: Delete all Published Catalog Releases
---

## `DELETE` Delete all Published Catalog Releases

```text
https://api.moltin.com/pcm/catalogs/:catalog_id/releases
```

<!--Another endpoint exists: https://api.moltin.com/pcm/catalogs/:catalog_id/releases/:releaseId It is functionally the same as the preceding endpoint, but no point exposing it until releases are done.-->
Deletes a published catalog and all its releases.

:::note
Currently, published catalogs are limited to the current release and two releases prior to the current release.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request - PCM -->

**Headers**:

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Note that this must be a client credentials token. |

<!-- Response -->

`204 No Content`

```json

```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X DELETE https://api.moltin.com/pcm/catalogs/6dbd8b80-1176-4f62-b3c0-b543bc5a5f6a/releases \
     -H "Authorization: Bearer XXXX" \
```

<!--END_DOCUSAURUS_CODE_TABS-->
