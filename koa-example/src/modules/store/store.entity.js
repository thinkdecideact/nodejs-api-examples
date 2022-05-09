const { Sequelize, DataTypes, Model } = require('sequelize')
const { db } = require('../../utils/db_util')

class Store extends Model {}
Store.init({
    // attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    priority: {
        type: DataTypes.INTEGER,
        defaultValue: 100
    },
    isActive: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    isDel: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    ctime: {
        type: DataTypes.DATE,
        allowNull: true
    },
    mtime: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    modelName: 'tdar_store',
    tableName: 'tdar_store'
});

module.exports = Store;