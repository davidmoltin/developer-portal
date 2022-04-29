---
id: get-all-user-authentication-info
title: Get all User Authentication Info
sidebar_label: Get all User Authentication Info
---


## `GET` Get a list of User Authentication Info

```http
https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info
```

<!--DOCUSAURUS_CODE_TABS-->

<!-- Request -->

**Path Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `realm-id` | Required | `string` | The ID for the authentication-realm containing the `user-authentication-info` object. |

**Headers**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API.

|**Query Parameters**:

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `filter` | Optional | `string` | Specifies the filter attributes. For more information, see the [Filtering accounts](index.md#filtering) section. |

:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md).
:::

<!-- Response -->

`200 OK`


```json
{
  "meta": {
    "page": {
      "limit": 10,
      "offset": 0,
      "current": 1,
      "total": 1
    },
    "results": {
      "total": 2
    }
  },
  "data": [
    {
      "links": {
        "self": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/9738663b-2f64-47e0-b70f-eecd9fb28f53"
      },
      "id": "9738663b-2f64-47e0-b70f-eecd9fb28f53",
      "name": "John Doe",
      "email": "john.doe@banks.com",
      "meta": {
        "created_at": "2021-06-07T18:24:48.149Z",
        "updated_at": "2021-06-07T18:24:48.149Z",
        "creation_status": "COMPLETE"
      },
      "type": "user_authentication_info"
    },
    {
      "links": {
        "self": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info/787af9a4-83e1-4216-bc60-df076daef0c5"
      },
      "id": "787af9a4-83e1-4216-bc60-df076daef0c5",
      "name": "Jane Doe",
      "email": "jane.doe@banks.com",
      "meta": {
        "created_at": "2021-06-02T18:44:07.617Z",
        "updated_at": "2021-06-02T18:44:07.617Z",
        "creation_status": "COMPLETE"
      },
      "type": "user_authentication_info"
    }
  ],
  "links": {
    "next": null,
    "current": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info?page%5Blimit%5D=10&page%5Boffset%5D=0",
    "last": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info?page%5Blimit%5D=10&page%5Boffset%5D=0",
    "prev": null,
    "first": "https://api.moltin.com/v2/authentication-realms/b6cf44b5-5d52-46b8-ae6f-7f28847fb269/user-authentication-info?page%5Blimit%5D=10&page%5Boffset%5D=0"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->


:::note
You can use pagination with this resource. For more information, see [pagination](../../basics/pagination.md) section.
:::

<!--DOCUSAURUS_CODE_TABS-->

<!--cURL-->

```bash
curl -X GET https://api.moltin.com/v2/authentication-realms/:realm-id/user-authentication-info/ \
     -H "Authorization: Bearer XXXX"
```

<!--JavaScript SDK-->

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
  client_id: 'X'
})
const realmId = 'XXXX'
Moltin.UserAuthenticationInfo.All(realmId, null)
```

<!--END_DOCUSAURUS_CODE_TABS-->
