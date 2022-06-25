const db = require('../database/models');

const transactionsController = {
    all: async (req, res) => {
        try {
            let transactions = await db.Transaction.findAll();
            return res.send(transactions);
        } catch (error) {
            res.send(error);
        }
    },
    create: (req, res) => {
        try {
            db.Transaction.create({
                concept: req.body.concept,
                date: req.body.date,
                type: req.body.type,
                amount: req.body.amount
            }).then((result) => {
                return res.status(201).json(result);
            }).catch((error) => {
                res.json(error)
            })
        } catch (error) {
            res.send(error);
        }
    },
    delete: () => {
        

    },
    edit: () => {

    },
}

module.exports = transactionsController;