---
id: deploy-S3
title: Deploy to an Amazon S3 Bucket
sidebar_label: Deploy to AWS3
---

The React PWA Reference Storefront is pre-configured to deploy on Amazon Web Service S3 (AWS S3).

## Prerequisites

Before you deploy on AWS S3, you need the following tools and accounts:

* An AWS account to deploy the website on the AWS S3 bucket. Ensure that you can use the AWS S3 bucket for hosting your storefront.

* An AWS Identity and Access Management (IAM) profile.

* The AWS CLI tool.

    For more information about platform specific procedures, see the [Amazon documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

* Your AWS credentials are set up on CLI.

    Open a new terminal, and type  `aws configure`.

## React PWA Reference Storefront on Amazon S3 Bucket Example

1. Create an Amazon S3 bucket.

    1. Log in to the AWS account.

    1. Follow the [guidelines for using the available access policy options](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-alternatives-guidelines.html) and generate a policy with the following settings:

        * **Effect**: `Allow`
        * **Principal**: `*`
        * **Service**: `Amazon S3`
        * **Actions**: `GetObject`

    1. Ensure that your bucket policy sets the bucket and all objects in the bucket to public.

    For the ARN (Amazon Resource Names), use the name of your bucket with `/*` at the end to provide everyone access to all files.

1. Set up the bucket as static hosting.

    1. In the bucket’s console, navigate to **Properties > Static Website Hosting**.

    1. Select **Use this bucket to host a website**.

    1. Fill the form and click **Save**.

1. Update the [CORS (Cross-Origin Resource Sharing)](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) configuration.

    1. Copy the following XML:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>HEAD</AllowedMethod>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>DELETE</AllowedMethod>
        <ExposeHeader>ETag</ExposeHeader>
        <ExposeHeader>x-amz-meta-custom-header</ExposeHeader>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
    </CORSConfiguration>
    ```

    1. Navigate to **Permissions > CORS configuration**.

    1. Paste the XML snippet, and modify the settings as required.

    With this configuration, the storefront can perform cross-origin requests to any origin.

    1. Click **Save**:

## Deploy your application

1. Update the bucket name in the `deploy` command in `package.json`:

    `"deploy": "aws s3 sync build/ s3://bucket-name"`

1. Run the `yarn run build` command.

1. Run the `yarn run deploy` command.

1. Configure the Amazon CloudFront following the instructions at [Getting Started with CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html).

After completing the set up, you can access your website at the domain name.
