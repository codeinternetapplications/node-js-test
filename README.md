# CODE.nl - Assignment NodeJS

## Introduction
CODE.nl is a Shopify Plus partner. We build lots of Shopify storefronts but also Shopify apps. Consider apps as plugins for Shopify. It simply adds extra functionality to Shopify.

Therefore we work with both the REST API and GraphQL API of Shopify. Shopify also provides webhooks, you will have to subscribe yourself to a webhook before you can obtain them. So every time a certain event occurs in a shop, Shopify will trigger the webhook and your app immediately can execute some code.

## The Assignment
This assignment contains 2 sub assignments. You can make a fork of the project and commit all your work there.
1. Create a webhook receiver in the NodeJS Express environment for the topic ‘inventory_levels/update’. You don’t have to subscribe onto the webhook itself. You can simply mimic it with a tool like ‘Postman’.
2. Based on the value that is received in the webhook a tag needs to be set on the product. When there are no items available anymore the tag ‘sold’ needs to be set on the product

## Requirements
In general:
* Make sure you structurize your code in a logical manner
* Make sure that your code can run in a Node6 environment
* Make sure that you implement proper error handling

For sub assignment 1:
* Make sure you verify the request by matching the HMAC signature. You can find information on this here: https://help.shopify.com/en/api/getting-started/webhooks#verifying-webhooks
* Try to use existing packages. For instance with using the Rest API of Shopify, you can use this module: https://www.npmjs.com/package/shopify-api-node 

For sub assignment 2:
* Fetch the products and get the product with corresponding `inventory_item_id`
* Update the product with the tag `sold` when there is no stock available anymore
* When the product becomes available again. Remove the tag from the product.

## Tips
* You can use the Postman collection in this repository.
* In order to get the product based on the Inventory Level Item ID you will have to get all products (3 in total) and fetch the corresponding product
* You can find documentation how to authenticate a request with Shopify on https://help.shopify.com/en/api/getting-started/authentication/private-authentication#make-authenticated-requests
* Shopify webhook documentation can be found on: https://help.shopify.com/en/api/reference/events/webhook 
* For documentation how to verify a webhook, please refer to: https://help.shopify.com/en/api/getting-started/webhooks#verifying-webhooks 

## Credentials
```
Shop:           code-job-assignments.myshopify.com
API Key:        806171caf4b46e8b0ca40b593c988fad
Password:       fc6965281ea40fee68d78daffa0af648
Shared secret:  2967e226d75be2864ea3a2ed9605b75f
```