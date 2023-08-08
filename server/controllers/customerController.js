const {Customer} = require('../models')
const { signToken } = require('../utils/auth');
module.exports = {
    async getCustomer(req, res) {
        try {
            const customer = await customer.find();
            res.json(customer);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleCustomer(req, res) {
        try {
            const customer = await Customer.findById(req.params.customerId)
            .select('-__v');
            if (!customer) {
                return res.status(404).json({message: 'No Customer with this id!'});}
                res.json(customer);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async createCustomer(req, res) {
            try {
                const customer = await Customer.create(req.body);
                res.json(customer);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async updateCustomer(req, res) {
            try {
                const customer = await Customer.findByIdAndUpdate(
                    {_id: req.params.customerId},
                    {$set: req.body},
                    {new: true, runValidators: true});
                    if (!customer) {
                        return res.status(404).json({message: 'No Customer with this id!'});
                    }
                    res.json(customer);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async deleteCustomer(req, res) {
            try {
                const customer = await Customer.findByIdAndDelete(req.params.customerId);
                if (!customer) {
                    return res.status(404).json({message: 'No Customer with this id!'});
                }
                res.json({message: 'Customer deleted!'});
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async login({body}, res) {
            const customer = await Customer.findOne({ $or: [{ username: body.username }, { email: body.email }] });
            if (!customer) {
                return res.status(400).json({ message: "Can't find this user" });
            }
            const correctPw = await customer.isCorrectPassword(body.password);
            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password!' });
            }
            const token = signToken(customer);
            res.json({ token, customer });
        },

      async saveArtwork({ customer, body }, res) {
                try {
                    const updatedCustomer = await Customer.findOneAndUpdate(
                        { _id: customer._id },
                        { $addToSet: { savedArtworks: body } },
                        { new: true, runValidators: true }
                    );
                    return res.json(updatedCustomer);
                } catch (err) {
                    console.log(err);
                    return res.status(400).json(err);
                }
            },
            async deleteArtwork({ customer, params }, res) {
                const updatedCustomer = await Customer.findOneAndUpdate(
                    { _id: customer._id },
                    { $pull: { savedArtworks: { artworkId: params.artworkId } } },
                    { new: true }
                );
                if (!updatedCustomer) {
                    return res.status(404).json({ message: "Couldn't find user with this id!" });
                }
                return res.json(updatedCustomer);
            }
    
    };