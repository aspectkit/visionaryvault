const router = require('express').Router();
const {
    getArtist,
    getSingleArtist,
    createArtist,
    updateArtist,
    deleteArtist,
    login,
    addArtwork,
    removeArtwork,
} = require('../../controllers/artistController');
const { authMiddleware } = require('../../utils/auth');

router.route('/').get(getArtist).post(createArtist).put(authMiddleware, addArtwork);
router.route('/:artistId').get(getSingleArtist).put(updateArtist).delete(deleteArtist);
router.route('/login').post(login);
router.route('/artwork/:artworkId').put(addArtwork).delete(removeArtwork);
router.route('/me').get(authMiddleware, getSingleArtist);

module.exports = router;