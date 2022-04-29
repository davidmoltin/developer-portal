---
id: generate-cybersource-keys-tokens
title: Generate CyberSource keys and tokens
sidebar_label: Generate CyberSource keys and tokens
---

This walkthrough shows you how to generate CyberSource keys and tokens.

1. Generate CyberSource keys.

    1. Set up access

2. Generate CyberSource tokens.

    1. Set up access
    1. Generate tokens

## Prerequisites

If you want to follow along, you need the following items:

- A browser other than Chrome.

    :::note
    Currently, the account login does not work in Chrome.
    :::

- A test account on the [CyberSource sandbox](https://ebc2test.cybersource.com/ebc2/).

- CyberSource Token Management Service is enabled. To enable the service, contact CyberSource support.

  :::important
  If you have not enabled the Token Management Service, all payment transactions are blocked. For more information about the service not being enabled, see the [Visa Developer Community](https://community.developer.visa.com/t5/Sandbox-Test-Data/Recurring-Billing-or-Secure-Storage-service-is-not-enabled-for/m-p/6415).
  :::

## Generating CyberSource keys

Follow the step-by-step walkthrough to set up the CyberSource payment gateway on the Commerce Manager.

### Set up access

1. Go to `Payment Configuration` → `Key Management` and click `Generate Key`.

2. Select `Transaction Processing` and click `Next`.

3. Select `SOAP` and click `Submit`.

4. Copy the `Soap toolkit key` value.

5. Go to Commerce Manager `Settings` → `Payment Gateways` and enable the CyberSource configuration.

6. Enter your `Merchant ID` as the username and your `Soap toolkit key` as the password.

7. Select the `Test mode` check box and click `Save`.

## Generating Tokens

This walkthrough shows you how to generate CyberSource tokens from credit card numbers.

### Set up access

1. Go to `Payment Configuration` → `Key Management`. Click `Generate Key`.

2. Select `API Cert / Secret`. Click `Next`.

3. Select `Shared Secret`. Click `Submit`.

4. Take note of the following items:

    - Shared secret
    - Key id

        :::note
        The key id is visible on the key list page.
        :::

    - Organization id

        :::note
        This is also known as the merchant id.
        :::

### Generate tokens

1. Generate a single use key.

    To generate a key, see [CyberSource Key Generation](https://developer.cybersource.com/api-reference-assets/index.html#flex_key-generation).

2. Select the `Authentication` tab in the `Request` area.

3. Enter `Merchant Id`, `Key`, and `Shared Secret Key` values.

4. Click `Update Credentials`.

5. Click `Send`.

6. Note the `keyId` value from the response.

7. Tokenize the card information.

    To tokenize the card information, see [CyberSource Tokenization](https://developer.cybersource.com/api-reference-assets/index.html#flex_tokenization).

8. In the request, update `keyId` value. Optionally, update the card information values.

9. Press `Send`.

10. Copy the token value and prefix it with six `(;)` semicolons. For example,  `;;;;;;11234FS5353FGFRSS2562`.

    CyberSource has sample credit card numbers for testing purposes. For more information, see the [CyberSource Testing Guide](https://developer.cybersource.com/hello-world/testing-guide.html).

    For examples about how to integrate Flex API and Microform on the frontend, use the [Secure Acceptance Flexible Token SDK](https://developer.cybersource.com/api/developer-guides/dita-flex/SAFlexibleToken/FlexAPI/sa_flexible_token_SDK.html).
