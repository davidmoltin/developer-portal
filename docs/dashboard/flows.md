---
id: flows
title: Flows
sidebar_label: Flows
---

With flows, you can extend an existing resource or create a new resource. You can also use to create simple custom fields for existing resources or complex collections of fields and data. You can create useful resources for your customers, such as a want list, or blogs for your store.

For more information about using flows in commerce cloud, see the [Custom Data (Flows)](../concepts/custom-data-flows.md) section.

:::important
Do not create PCM flows in **Store > Flows**. Use [**Product Content Management > Configurations > Templates**](configuration/templates.md) page to create PCM flow. However, all flows in the store are displayed in the **Store > Flows** page where the template flows are labelled with a prefix `PCM`. We recommend not to update template flows in this page.
:::

## Creating Flows

1. Go to **Store > Flows**.

    All flows available in the store are displayed, if any.
1. Click **New flow**.

    The **Create New Flow** window is displayed.
1. In the **Name** field, enter a name for the flow.
1. In the **Slug** field, enter a slug.

    By default, the name is used as the slug.
1. In the **Description** field, enter a description for the flow.
1. To enable the flow, select **Enabled**.
1. Click **Save**.

    The new flow is added to the list of flows available in the store. All flows are displayed under the **FLOWS** header in the sidebar. You can also click **Store > Flows** in the sidebar and view all flows.

### Adding fields to a flow

1. To add field to a flow, in the **Flows** page, select the flow.

    A window with the details of the flow is displayed.
1. Click **+New Field**.
1. In **Field Type**, select one of the following:

    - **Boolean**
    - **Float**
    - **Integer**
    - **String**
    - **Date**
    - **Relationship**
    A relationship type specifies the relationship between the flow and a Commerce Cloud resource, such as products. You can have several relationships in a flow.

1. Enter the following common settings:

    - **Name**: Specifies the name of the field.
    - **Slug**: Specifies a unique slug identifier for the field.
    - **Description**: Specifies a description for this field.
    - **Required Field**: Specifies whether the field is required. Choose **Yes** or **No**. Select **No** if the **Field Type** is **Relationship**.
    - **Default Value**: Specifies a default value for the field if no value is provided and the field is required.
    - **Order**: Specifies the order in which this field is returned relative to the rest of the flow fields. Use a number.

1. In the **Validation** field, enter the valid input options for the field:

    | Field type | Validation description |
    | :------------- | :------------- |
    | **Boolean** | No validation required. |
    | **Float**,  | Enter a range of valid values. Optionally, you can add a list of valid values. |
    | **Integer** | Enter a range of valid integer values. Optionally, you can add a list of valid values. |
    | **String** | Select a valid value for the field, such as **email**, **slug**, or **uuid**, or enter a list of valid string options. |
    | **Date** | Enter a date that matches the standard date format described previously. You can also list valid dates. |
    | **Relationship** | Select **One to One** as the relationship type, and select the **Resource**. The **Resource** can be one of **Products**, **Brands**, **Collections**, **Categories**, **Customers**, **Orders**, or **Promotions** resources. |

1. Click **Save**.

You can delete a field by clicking the delete icon in the field listing.

### Adding values for fields

1. In the sidebar menu, go to **FLOWS** and click the flow name.

All field names in the flow are displayed.

1. Click **New Entry** and enter values for the fields as required.

:::important
You cannot add attributes for PCM template flows in this page. Use the [**Product Content Management > Configurations > Attributes**](configuration/templates.md#attributes) page to add attributes in a PCM template.
:::

## Updating Flow Settings

1. Go to **Store > Flows**.
1. To edit a flow, click the flow.
1. In the **Fields** window, click **Flow Settings**.
1. In the **Flow Settings** window, update the settings as required.
1. Click **Save**.

## Deleting Flows

1. Go to **Store > Flows**.
1. To delete a flow, click the flow.
1. In the **Fields** window, click **Delete Flow**.
1. When prompted to confirm the delete action, click **Delete**.

## Sorting and Filtering Flows

You can sort the flow list by **Name**, **Slug**, **Description** or **Status**.

You can filter the list to show only **Enabled** or **Disabled** flows.

## Related resources

### Concepts

- [Custom data (Flows)](../concepts/custom-data-flows.md)
- [Template flows - Product Content Management](configuration/templates.md)

### APIs

- [Custom Data (Flows) API](../api/advanced/custom-data/index.md)
- [Create Fields](../api/advanced/custom-data/fields/create-a-field.md)
- [Create Entries](../api/advanced/custom-data/entries/create-an-entry.md)
