---
id: brand-the-storefront
title: Brand the storefront
sidebar_label: Brand the storefront
---

You can configure your store using the settings in the `config.ts` file, and by modifying text, translated text, icons, other images, and buttons.

## Set the language and locale

1. In the `config.ts` file, set the default language using `defaultLanguage`.

    In the storefront, this is `en` (English) by default. This information is sent in a header with every HTTPS request.

1. Add to or modify the following `json` block under `supportedLocales` to change or add languages:

    ```json
    [
    {
        "key": "en",
        "name": "english"
    },
    {
        "key": "fr",
        "name": "french"
    }
    ]
    ```

## Set the default currency

* In the `config.ts` file, modify the value of `defaultCurrency`.

    In the storefront, this is set to `USD`. Some other possible values are `EUR` for the Euro and `GBP` for the pound (United Kingdom).

## Modify text

You can update any strings in the default language (English).

1. Modify strings in the default `src/locale/en.json` file. All strings have been externalized.

1. Save the file to see your changes.

    If you have changed the default language, use that language’s `json` file instead.

## Add translated text

You can also add translated strings to your storefront.

1. Make a copy of the `src/locale/fr.json` file.

    This file has been pseudo-translated to indicate it is a different language, and lists all the strings that need to be translated.

1. Rename the copied file using the [two-digit ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) codes for the language and locale.

1. Have the file translated and replace the untranslated file with the translated one.

1. Update the list of supported locales to include the new locale as in the previous section.

## Add your branding assets

In addition to [modifying site text](#modify-text), you can replace, update, and change branding assets, including:

* Icons
* Side images
* Page styling for each page or for the entire site
* Home page structure and content
* Adding button styles for single sign-on providers

The following table describes the actions you can perform and the location of the asset:

 | Action | Location |
 | :------------- | :------------- |
 | Replace the icons that are used across the site. | `src/images/icons`  |
 | Replace site images, such as hero images, marketing banners, and logos. | `src/images/site-images` |
 | Update the common CSS with your brand colors and theme elements, such as fonts, background colors, and highlights. | `src/theme/common.scss` |
 | Update the homepage layout and images. | `src/HomeB2c.tsx` `src/HomeB2c.scss` |
 | Update progressive web application (PWA) icons that are used for adding PWA to your home page. | `public/icons` |
 | Update the values in the `manifest.json` with your brand for adding PWA to your home page. | `public/manifest.json`|
 | Add custom favicon for your branded store. The favicon appears in the browser tab. | `public/favicon.ico` |

## Customize single sign-on buttons

If you enabled single sign-on in your store for any of the following pre-defined authentication providers, your customer log-in page displays styled buttons for each of the enabled providers. You can edit the styling of these buttons.

Pre-defined providers:

* Apple
* Google
* Okta
* Auth0
* Salesforce
* Microsoft

If you defined an authentication provider that is not on this list, you can add a customized button to your log-in page.

### Adding a new provider

Your single sign-on provider must be in Commerce Manager list of single sign-on providers. For more information, see [Authentication Management](../../../dashboard/settings/authentication.md).

* In the `src/LoginDialog/OidcLoginButtons.tsx` file, add a new provider URL and provider friendly name to the list of providers.

    The `key` in this dictionary must match the prefix of the provider’s `.meta.issuer`, while the `value` is the friendly name of the provider. You use the friendly name in the `.scss` file.

    ```react
    'https://auth0.auth0.com': 'auth0',
    'https://login.microsoftonline.com': 'microsoft',
    'https://elasticpath.okta.com': 'okta',
    'https://accounts.google.com': 'google',
    'https://appleid.apple.com': 'apple',
    'https://login.salesforce.com': 'salesforce',

    # add your provider here
    ```

### Customizing the log-in button styling

1. In the `src/LoginDialog/OidcLoginButtons.scss` file, locate the style blocks for the single sign-on buttons and add a new block using the following format:

    ```css
    &--auth0 {
      background-color: #dc5e37;
      color: #fff;

      .oidcloginbuttons__buttoncontent {
        &:before {
          display: inline-block;
          width: 50px;
          background-image: url('./../images/oidc-provider-logos/auth0.svg');
        }
      }
    }
    ```

    :::important
    The name of this style block must match the provider friendly name in the `src/LoginDialog/OidcLoginButtons.tsx` file.
    :::

1. Replace the background color and color styles with your own values.

1. Add a URL to an image of the new provider’s logo in the `images/oidc-provider-logos/` directory.
