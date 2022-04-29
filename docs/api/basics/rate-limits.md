---
id: rate-limits
title: Rate Limits
sidebar_label: Rate Limits
---

Elastic Path Commerce Cloud rate limiter limits the number of requests received by the Elastic Path Commerce Cloud from a web browser or client. Each Elastic Path Commerce Cloud store has its own rate limit. The purpose of a rate limit is to ensure consistent performance and stability of the Elastic Path Commerce Cloud platform, and a quality experience for all of our customers.

By default, Elastic Path Commerce Cloud API enforces a rate limit of 100 requests per second for a production store and 25 requests per second for development stores. Higher rate limits may apply depending on your current plan. Stores that exceed the rate limits get error responses with a status code `429`. For more information about error responses, see the [Errors](errors.md) section.

The rate limit for your store depends on your current plan. In case of sudden rise in the number of rate-limited requests or to request to change the limit, contact [Elastic Path Support](https://support.elasticpath.com/hc/en-us). Elastic Path may reduce the limit to prevent abuse or increase the limit to enable high-traffic applications.

:::note
When the store receives an error response with a status code `429`, the web browser automatically retries the request after some time if you use JS-SDK. If you do not use JS-SDK, you might have to manually retry the request.
:::

:::important
To increase the limit, you must contact [Elastic Path Support](https://support.elasticpath.com/hc/en-us) a minimum of four weeks in advance before you need the changes to apply.
:::
