const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
router.route((req,res) =>
 res.status(404).send('404 nerd')); 
  
module.exports = router;