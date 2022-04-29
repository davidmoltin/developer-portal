---
id: index
title: Gateways
sidebar_label: Gateways
---

You can configure payment gateways using the Gateways endpoint. You can `enable` and `disable` built-in payment gateways.

:::warning
Elastic Path provides a [Manual Gateway](../paying-for-an-order/manual-payments.md) that allows you to use another payment gateway.
:::

## The gateways object

<!--DOCUSAURUS_CODE_TABS-->

<!--Attributes-->

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | The name of the payment gateway. |
| `slug` | `string` | The slug of the payment gateway. |
| `type` | `string` | The type represents the object being returned. |
| `enabled` | `boolean` | `true` or `false` depending on the enabled status. |

<!--Sample Response-->

```json
{
  "data": {
    "enabled": false,
    "name": "Manual",
    "slug": "manual",
    "type": "gateway"
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
