const { Sequelize, DataTypes  } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});

const Domain = sequelize.define("Domain", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    domain: DataTypes.TEXT,
    expiration_date: DataTypes.DATE,
    is_valid: DataTypes.BOOLEAN
}, {
    tableName: "domains",
    timestamps: true
})

module.exports = {Domain}