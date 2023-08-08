const router = require('express').Router();
const {
    getCustomer,
    getSingleCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    login,
    saveArtwork,
    deleteArtwork,

} = require('../../controllers/customerController');
const { authMiddleware } = require('../../utils/auth');


router.route('/').get(getCustomer).post(createCustomer).put(authMiddleware, saveArtwork);
router.route('/:customerId').get(getSingleCustomer).put(updateCustomer).delete(deleteCustomer);
router.route('/login').post(login);
router.route('/artwork/:artworkId').put(saveArtwork).delete(deleteArtwork);
router.route('/me').get(authMiddleware, getSingleCustomer);


module.exports = router;