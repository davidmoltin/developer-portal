---
id: index
title: OpenID Connect Profiles
sidebar_label: OpenID Connect Profiles
---

An OpenID Connect Profile resource represents a specific configuration of an OpenID Connect Provider.

## The OpenID Connect Profile object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `client_id` | `string` | The client id to be used with the external authentication provider |
| `discovery_url` | `string` | The url of the OpenID Connect discovery document. |
| `id` | `string` | The unique identifier for this OpenID Connect profile. |
| `meta` | [`object`](#the-meta-object) | Additional information for this realm. Also see: **The meta object** below. |
| `name` | `string` | The `name` of the OpenID Connect profile. |
| `type` | `string` | The type represents the object being returned. |
| `links` | [`object`](#the-links-object) | Related links. Also see: **The links object** below. |

<!--Sample Response-->

```json
{
    "data": {
        "client_id": "openid-client",
        "discovery_url": "https://auth.ssoprovider.com/.well-known/openid-configuration",
        "id": "ed83913b-d6dc-4472-9328-bb486443de9c",
        "meta": {
            "issuer": "https://auth.ssoprovider.com",
            "created_at": "2020-11-04T21:59:58.611Z",
            "updated_at": "2020-11-04T21:59:58.611Z"
        },
        "name": "SSO Provider",
        "type": "oidc-profile"
    },
    "links": {
        "authorization-endpoint": "https://api.moltin.com/oidc-idp/login/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb?elasticpath_commerce_cloud_profile_id=ed83913b-d6dc-4472-9328-bb486443de9c",
        "callback-endpoint": "https://api.moltin.com/oidc-idp/callback/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c",
        "client-discovery-url": "https://api.moltin.com/oidc-idp/stores/88888888-4444-4333-8333-111111111111/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/.well-known/openid-configuration",
        "self": "https://api.moltin.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb/oidc-profiles/ed83913b-d6dc-4472-9328-bb486443de9c"
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## The `meta` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.issuer` | `string` | The issuer from the discovery document of this OpenID Connect profile. |
| `meta.created_at` | `string` | The creation date of this OpenID Connect profile. |
| `meta.updated_at` | `string` | The last updated date of this OpenID Connect profile. |

## The `links` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `links.authorization-endpoint` | `string` | This link represents the endpoint that front end applications should use to authenticate with this OpenID Connect profile. The front end application is responsible for appending all of the [required parameters](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) to this request. |
| `links.callback-endpoint` | `string` | This link is the endpoint that should be supplied as the callback url to the upstream authentication provider. |
| `links.client-discovery-url` | `string` | A link to the [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) document for this provider. |
