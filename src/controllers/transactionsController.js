const db = require('../database/models');

const transactionsController = {
    all: async (req, res) => {
        try {
            let transactions = await db.Transaction.findAll();
            return res.send(transactions);
        } catch (error) {
            res.send(error)
        }
    },
    create: () => {

    },
    delete: () => {

    },
    edit: () => {

    },
}


module.exports = transactionsController;