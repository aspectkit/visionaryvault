const router = require('express').Router();
const {
    getArtist,
    getSingleArtist,
    createArtist,
    updateArtist,
    deleteArtist
} = require('../../controllers/artistController');

router.route('/').get(getArtist).post(createArtist);
router.route('/:artistId').get(getSingleArtist).put(updateArtist).delete(deleteArtist);

module.exports = router;