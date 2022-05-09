const Sequelize = require('sequelize')
const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host,
    port,
    timezone: '+08:00',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
        underscored: true, 
        timestamps: false,
        // paranoid: false,
        // createdAt: 'ctime',
        // updatedAt: 'mtime',
        // deletedAt: 'dtime',
    },
    dialectOptions: {
        // dateStrings is used to force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather than inflated into JavaScript Date objects. 
        dateStrings: true,
        typeCast: function (field, next) {
            if (field.type === 'DATETIME') {
                return field.string()
            }
            return next()
        },
    }
})

sequelize.sync({
    force: false
})
module.exports = {
    db: sequelize
}