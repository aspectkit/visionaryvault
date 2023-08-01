const {User} = require('../models')

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findById(req.params.userId)
            .select('-__v');
            if (!user) {
                return res.status(404).json({message: 'No user with this id!'});}
                res.json(user);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async createUser(req, res) {
            try {
                const user = await User.create(req.body);
                res.json(user);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async updateUser(req, res) {
            try {
                const user = await User.findByIdAndUpdate(
                    {_id: req.params.userId},
                    {$set: req.body},
                    {new: true, runValidators: true});
                    if (!user) {
                        return res.status(404).json({message: 'No user with this id!'});
                    }
                    res.json(user);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async deleteUser(req, res) {
            try {
                const user = await User.findByIdAndDelete(req.params.userId);
                if (!user) {
                    return res.status(404).json({message: 'No user with this id!'});
                }
                res.json({message: 'User deleted!'});
            } catch (err) {
                res.status(500).json(err);
            }
        }};
        

