const { Model } = require('sequelize')
const DataTypes = require('sequelize/lib/data-types');
const sequelize = require('../data/database')

class User extends Model {}


User.init({
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User