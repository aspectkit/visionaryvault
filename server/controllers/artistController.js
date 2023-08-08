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
        },
        async login({body}, res) {
            const artist = await Artist.findOne({ $or: [{ username: body.username }, { email: body.email }] });
            if (!artist) {
                return res.status(400).json({ message: "Can't find this artist" });
            }
            const correctPw = await artist.isCorrectPassword(body.password);
            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }
            const token = signToken(artist);
            res.json({ token, artist });
        },
        async addArtwork({ params, body }, res) {
            console.log(body);
            const artist = await Artist.findOneAndUpdate(
                { _id: params.artistId },
                { $addToSet: { artworks: body } },
                { new: true, runValidators: true }
            );
            if (!artist) {
                return res.status(404).json({ message: "Couldn't find artist with this id!" });
            }
            return res.json(artist);
        },
        async removeArtwork({ params }, res) {
            const artist = await Artist.findOneAndUpdate(
                { _id: params.artistId },
                { $pull: { artworks: { artworkId: params.artworkId } } },
                { new: true }
            );
            if (!artist) {
                return res.status(404).json({ message: "Couldn't find artist with this id!" });
            }
            return res.json(artist);
        }
            
    
    };
        

