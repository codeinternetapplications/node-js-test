'use strict';

const router = require('express').Router();
const Shopify = require('shopify-api-node');

/**
 * Router /samples/products
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 */
router.get('/products', function (req, res) {
  // Init API
  const shopify = new Shopify({
    shopName: process.env.SHOPIFY_DOMAIN,
    apiKey: process.env.SHOPIFY_API_USERNAME,
    password: process.env.SHOPIFY_API_PASSWORD
  });

  // sample request to use the Shopify API
  shopify.product.list()
    .then(products => {
      return res.status(200).send(products).end();
    })
    .catch(error => {
      return res.status(500).send(`An error has occured: ${error.message}`).end();
    });
});

module.exports = router;
