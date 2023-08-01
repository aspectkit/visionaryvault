const {Customer} = require('../models')

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
                const customer = await customer.create(req.body);
                res.json(customer);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async updateCustomer(req, res) {
            try {
                const customer = await customer.findByIdAndUpdate(
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
                const customer = await customer.findByIdAndDelete(req.params.customerId);
                if (!customer) {
                    return res.status(404).json({message: 'No Customer with this id!'});
                }
                res.json({message: 'Customer deleted!'});
            } catch (err) {
                res.status(500).json(err);
            }
        }};