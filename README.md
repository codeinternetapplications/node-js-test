# CODE.nl - Assignment NodeJS

## Introduction
CODE.nl is a Shopify Plus partner. We build lots of Shopify storefronts but also Shopify apps. Consider apps as plugins for Shopify. It adds extra functionality to Shopify.

Therefore we work with both the REST API and GraphQL API of Shopify. Shopify also provides webhooks, you will have to subscribe yourself to a webhook before you can obtain them. A webhook is an event trigger. So every time a certain event occurs in a shop, Shopify will trigger the webhook and your app immediately can execute some code.

## The Assignment
This assignment contains 2 sub assignments. Please make a fork of the project and commit all your work in your fork.
1. Create a webhook receiver in the NodeJS Express environment for the topic `inventory_levels/update`. You don’t have to subscribe onto the webhook itself. You can mimic this with Postman. There is a collection available in the project with some predefined calls to do so.
2. Based on the value that is received in the webhook a tag needs to be set on the product. When there are no items available anymore the tag ‘sold’ needs to be set on the product


## Requirements
In general:
* Make sure you structurize your code in a logical manner
* Make sure that your code can run in Node6.
* Make sure that you implement proper error handling
* Make sure your settings are nicely into env variables

For sub assignment 1:
* Make sure you verify the request by matching the HMAC signature. You can find information on this here: https://help.shopify.com/en/api/getting-started/webhooks#verifying-webhooks
* Try to use existing packages. For instance with using the Rest API of Shopify, you can use this module: https://www.npmjs.com/package/shopify-api-node 
* Only handle the webhook `inventory_levels/update`, other webhooks should result in an error

For sub assignment 2:
* Fetch the products through the Rest API and get the product that contains the corresponding `inventory_item_id`
* Update the product with the tag `sold` when there is no stock available anymore. Do not override existing tags.
* If you want you can also implement the other way around. So when the product gets above 0, remove the tag `sold` (not required)

## Tips
* You can use the Postman collection in this repository.
* In order to get the product based on the Inventory Level Item ID you will have to get all products (3 in total) and fetch the corresponding product
* You can find documentation how to authenticate a request with Shopify on https://help.shopify.com/en/api/getting-started/authentication/private-authentication#make-authenticated-requests
* Shopify webhook documentation can be found on: https://help.shopify.com/en/api/reference/events/webhook 
* For documentation how to verify a webhook, please refer to: https://help.shopify.com/en/api/getting-started/webhooks#verifying-webhooks 
* When using the `npm run watch` command you can use hot reloading on each save. Make sure you install the nodemon package globally

## Support / Questions
Please refer to [Patrick Watzeels](mailto:patrick@code.nl) if you have questions on the assignment.