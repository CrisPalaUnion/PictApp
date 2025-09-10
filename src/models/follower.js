const { DataTypes, Model } = require('sequelize')
const db = require('../config/database')

class Follower extends Model {
    static id
}

Follower.init({}, {
    sequelize: db,
    modelName: 'Follower',
    tableName: 'follower',
    timestamps: true
})

Follower.associate = (models) => {
    Follower.belongsTo(models.User, { foreignKey: 'followerId', as: 'follower' })
    Follower.belongsTo(models.User, { foreignKey: 'followedId', as: 'followed' })
}

Follower.prototype.toJSON = function () {
    const values = this.get();
    return values;
}

module.exports = Follower;