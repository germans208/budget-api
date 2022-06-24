module.exports = (sequelize, dataTypes) => {

    const alias = 'Transaction'

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        concept: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        type: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        amount: {
            type: dataTypes.DECIMAL(25, 2),
            allowNull: false
        },
    }

    const config = {
        tableName: 'transactions',
        timestamps: false
    }

    const Transaction = sequelize.define(alias, cols, config);

    return Transaction;
}