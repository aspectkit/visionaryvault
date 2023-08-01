const router = require('express').Router();
const {
    getCustomer,
    getSingleCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
} = require('../../controllers/customerController');

router.route('/').get(getCustomer).post(createCustomer);
router.route('/:customerId').get(getSingleCustomer).put(updateCustomer).delete(deleteCustomer);

module.exports = router;