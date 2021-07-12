'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Subscriptions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            planId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            coupon: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cardNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            holderName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            expirationDate: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cvv: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Subscriptions');
    }
};
