---
id: roles
title: Roles
sidebar_label: Roles
---

Companies typically have multiple personas who have different responsibilities. These personas, which are called roles, need different functional and feature access to Elastic Path Commerce Cloud depending on their responsibilities.

Elastic Path Commerce Cloud supports the following roles and permissions:

- Basic: User does not have any permission assigned.
- Seller admin: User has permissions to modify every aspect of the store.
- Marketing/Sales: User has permissions to modify catalog and flows, but cannot change the store settings or customers.
- Support: User has permission to modify customers and orders only.
- IT Developer: User can only modify store settings.

The following table shows the access permissions associated with each role:

| Area    | Basic | Seller Admin | Marketing/Sales | Support | IT/Developer |
| ------------- | ------------- |------------- |------------- |------------- |------------- |
| Catalog              | No  | Yes | Yes | No  | No  |
| Orders               | No  | Yes | No  | Yes | No  |
| Customers            | No  | Yes | No  | Yes | No  |
| Files                | No  | Yes | Yes | No  | No  |
| Flows                | No  | Yes | Yes | No  | Yes |
| Promotions           | No  | Yes | Yes | No  | No  |
| Settings             | No  | Yes | No  | No  | Yes |
| Billing              | No  | Yes | No  | No  | No  |
| Accounts             | No  | Yes | No  | Yes | No  |

:::note
A role assigned to a user in a store is restricted to that store. The same user can have different roles in different stores.
:::

:::important
For any Elastic Path Commerce Cloud store that is created before the release of roles service, all users in the store is set with the `Seller Admin` role.

For a production or enterprise Elastic Path Commerce Cloud store, please ensure that more than one user with a `Seller Admin` or `IT/Developer` role are invited and added to the store.
:::

## Commerce Manager procedures

- [Adding team members](../dashboard/settings/team-management.md#adding-team-members)
- [Changing team members roles](../dashboard/settings/team-management.md#changing-team-members-roles)

## Related Resources

- [Roles and Permissions - Demo](https://share.vidyard.com/watch/W1XX3wq6CduEkHwtTVtPw9)
