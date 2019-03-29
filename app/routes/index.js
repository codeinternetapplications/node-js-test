'use strict';

/**
 * Routes for CODE Assignments
 */

const router = require('express').Router();

router.use('/samples', require('../samples'));
router.use('/webhook', require('../webhooks'));

module.exports = router;
