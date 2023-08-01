const {Artist} = require('../models')

module.exports = {
    async getArtist(req, res) {
        try {
            const artist = await Artist.find();
            res.json(artist);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleArtist(req, res) {
        try {
            const artist = await Artist.findById(req.params.ArtistId)
            .select('-__v');
            if (!artist) {
                return res.status(404).json({message: 'No Artist with this id!'});}
                res.json(artist);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async createArtist(req, res) {
            try {
                const artist = await artist.create(req.body);
                res.json(artist);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async updateArtist(req, res) {
            try {
                const artist = await artist.findByIdAndUpdate(
                    {_id: req.params.artistId},
                    {$set: req.body},
                    {new: true, runValidators: true});
                    if (!artist) {
                        return res.status(404).json({message: 'No Artist with this id!'});
                    }
                    res.json(artist);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async deleteArtist(req, res) {
            try {
                const artist = await Artist.findByIdAndDelete(req.params.artistId);
                if (!artist) {
                    return res.status(404).json({message: 'No Artist with this id!'});
                }
                res.json({message: 'Artist deleted!'});
            } catch (err) {
                res.status(500).json(err);
            }
        }};
        

