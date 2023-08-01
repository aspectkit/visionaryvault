const router = require('express').Router();
const users = require('./userRoutes');

router.use('/users', users);

module.exports = router;