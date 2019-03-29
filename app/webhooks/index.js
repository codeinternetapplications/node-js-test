'use strict';

const router = require('express').Router();

/**
 * Router /webhook
 * 
 * @param {object} req Request object
 * @param {object} res Response object
 */
router.post('/', function (req, res) {
  return res.status(200).send('ok').end();
});

module.exports = router;
